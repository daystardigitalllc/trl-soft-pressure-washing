// Forwards a lead to DayStar CRM. Best-effort: never throws, so a CRM
// outage can't break the visitor's form submission or the owner email.
// Token lives in the DAYSTAR_CRM_TOKEN Cloudflare Pages secret (server-side only).

const CRM_URL = "https://crm.daystardigital.co/api/v1/leads";

export async function sendLeadToCrm(env, { name, email, phone, service, message, source }) {
  if (!env.DAYSTAR_CRM_TOKEN) {
    console.error("CRM: DAYSTAR_CRM_TOKEN not configured, skipping lead forward.");
    return { ok: false, skipped: true };
  }

  const parts = String(name || "").trim().split(/\s+/);
  const first_name = parts.shift() || "";
  const last_name = parts.join(" ");

  try {
    const res = await fetch(CRM_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.DAYSTAR_CRM_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        email: email || undefined,
        phone: phone || undefined,
        service: service || undefined,
        message: message || undefined,
        source: source || "Website Contact Form",
      }),
    });
    if (!res.ok) {
      console.error("CRM error:", res.status, await res.text());
    }
    return { ok: res.ok, status: res.status };
  } catch (err) {
    console.error("CRM request failed:", err);
    return { ok: false };
  }
}
