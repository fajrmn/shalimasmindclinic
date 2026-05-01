const DEFAULT_WHATSAPP = "919400778065";

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });

export async function onRequestPost(context) {
  try {
    const contentType = context.request.headers.get("content-type") || "";
    const payload = contentType.includes("application/json")
      ? await context.request.json()
      : Object.fromEntries((await context.request.formData()).entries());

    const phone = String(payload.phone || "").trim();
    const message = String(payload.message || "").trim();

    if (!phone || !message) {
      return json({ ok: false, error: "Phone and message are required." }, 400);
    }

    const redirect = `https://wa.me/${DEFAULT_WHATSAPP}`;

    const webhook = context.env.LEAD_WEBHOOK_URL;
    if (webhook) {
      await fetch(webhook, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({
          clinic: "Shalima's Mind Clinic",
          phone,
          message,
          source: payload.source || "landing-page",
          submittedAt: new Date().toISOString()
        })
      });
    }

    return json({ ok: true, redirect });
  } catch (_error) {
    return json({ ok: false, error: "Unable to process request" }, 500);
  }
}
