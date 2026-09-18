// Cloudflare Pages Function: POST /api/estimate
// Computes a low/high price range server-side so the per-sqft rate never
// ships to the browser, emails the lead (with the computed range) via
// Resend, and returns only the range.
//
// FROM_EMAIL must be an address on a domain verified in Resend -- the
// shared onboarding@resend.dev sender can only deliver to the email
// address on the Resend account itself, never to TO_EMAIL below. See
// https://resend.com/domains to verify trl-spw.com.

const TO_EMAIL = "trlsoftpressurewashing@gmail.com";
const FROM_EMAIL = "TRL Website <quotes@trl-spw.com>";

// Per-sqft rate ranges. Kept server-side only — never sent to the client.
const RATES = {
  vinyl: { label: "Vinyl House Wash", low: 0.2, high: 0.25 },
  brick: { label: "Brick House Wash", low: 0.25, high: 0.35 },
  roof: { label: "Roof Cleaning (Metal or Shingle)", low: 0.35, high: 0.5 },
  concrete: { label: "Concrete / Driveway / Sidewalks", low: 0.25, high: 0.35 },
  wood: { label: "Wood Deck / Fence", low: 1.0, high: 1.5 },
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot -- bots fill every field, real visitors never see or fill this one.
  if (data.company) {
    return Response.json({ ok: true, low: 0, high: 0 });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const phone = (data.phone || "").trim();
  const notes = (data.notes || "").trim();
  const serviceKey = (data.service || "").trim();
  const sqft = Number(data.sqft);

  if (!name || (!email && !phone)) {
    return Response.json(
      { error: "Please provide your name and either an email or phone number." },
      { status: 400 }
    );
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const rate = RATES[serviceKey];
  if (!rate) {
    return Response.json({ error: "Please select what needs to be washed." }, { status: 400 });
  }

  if (!Number.isFinite(sqft) || sqft <= 0) {
    return Response.json({ error: "Please enter a valid square footage." }, { status: 400 });
  }

  const low = Math.round(sqft * rate.low);
  const high = Math.round(sqft * rate.high);

  if (env.RESEND_API_KEY) {
    const html = `
      <h2>New instant-estimate lead from trl-spw.com</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      ${email ? `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` : ""}
      ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
      <p><strong>Service:</strong> ${escapeHtml(rate.label)}</p>
      <p><strong>Square footage:</strong> ${escapeHtml(String(sqft))}</p>
      <p><strong>Quoted range shown to customer:</strong> $${low} – $${high}</p>
      ${notes ? `<p><strong>Notes:</strong><br>${escapeHtml(notes).replace(/\n/g, "<br>")}</p>` : ""}
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        reply_to: email || undefined,
        subject: `New instant estimate lead: ${name}`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errBody = await resendResponse.text();
      console.error("Resend error:", errBody);
      // Still return the estimate to the customer even if the notification email fails.
    }
  }

  return Response.json({ ok: true, low, high });
}
