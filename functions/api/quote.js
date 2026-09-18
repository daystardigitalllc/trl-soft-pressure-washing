// Cloudflare Pages Function: POST /api/quote
// Sends free-tier email via Resend's shared onboarding@resend.dev sender
// (no verified domain required) and sets reply-to the visitor's email so
// the business owner can just hit "Reply" in their inbox.

const TO_EMAIL = "trlsoftpressurewashing@gmail.com";
const FROM_EMAIL = "TRL Website <onboarding@resend.dev>";

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
    return Response.json({ ok: true });
  }

  const name = (data.name || "").trim();
  const email = (data.email || "").trim();
  const phone = (data.phone || "").trim();
  const service = (data.service || "").trim();
  const city = (data.city || "").trim();
  const message = (data.message || "").trim();

  if (!name || (!email && !phone)) {
    return Response.json(
      { error: "Please provide your name and either an email or phone number." },
      { status: 400 }
    );
  }

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (!env.RESEND_API_KEY) {
    return Response.json({ error: "Email service is not configured." }, { status: 500 });
  }

  const html = `
    <h2>New quote request from trl-spw.com</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    ${email ? `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` : ""}
    ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)}</p>` : ""}
    ${city ? `<p><strong>City:</strong> ${escapeHtml(city)}</p>` : ""}
    ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ""}
    ${message ? `<p><strong>Message:</strong><br>${escapeHtml(message).replace(/\n/g, "<br>")}</p>` : ""}
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
      subject: `New quote request from ${name}`,
      html,
    }),
  });

  if (!resendResponse.ok) {
    const errBody = await resendResponse.text();
    console.error("Resend error:", errBody);
    return Response.json({ error: "Failed to send. Please call or text us instead." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
