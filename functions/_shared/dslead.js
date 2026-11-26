// DayStar Digital: tells the SEO dashboard that a form was received, so lead counts are real.
// Best effort: it never blocks, delays or changes what the visitor sees, and every error is swallowed.
// It does nothing until the DS_LEAD_SECRET variable is set on the Cloudflare Pages project.
// It sends no name, phone number or email: only the form name, the page, the time, a label such as "J. ***0123", and a one-way hash used to spot repeats.
const ENDPOINT = "https://daystardigital.co/wp-json/dsat/v1/lead";

const hex = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
const enc = (s) => new TextEncoder().encode(s);

export function pageOf(request) {
  try { return new URL(request.headers.get("referer") || "").pathname; } catch { return ""; }
}

export async function reportLead(env, clientId, form, page, { name, phone, email } = {}) {
  try {
    if (!env || !env.DS_LEAD_SECRET) return;
    const digits = String(phone || "").replace(/\D/g, "");
    const initial = String(name || "").trim().charAt(0).toUpperCase();
    const label = `${initial ? initial + "." : ""} ${digits ? "***" + digits.slice(-4) : ""}`.trim() || "form";
    const who = digits || String(email || "").trim().toLowerCase() || String(name || "").trim();
    const h = hex(await crypto.subtle.digest("SHA-256", enc(`${env.DS_LEAD_SECRET}|${who}`)));
    const body = JSON.stringify({ c: clientId, t: Math.floor(Date.now() / 1000), f: String(form), p: String(page || ""), l: label, h });
    const key = await crypto.subtle.importKey("raw", enc(env.DS_LEAD_SECRET), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
    const sig = hex(await crypto.subtle.sign("HMAC", key, enc(body)));
    await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", "X-DS-Sig": sig }, body });
  } catch {
    /* never affects the visitor */
  }
}
