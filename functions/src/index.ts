import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as nodemailer from "nodemailer";
import { createHash } from "crypto";

const smtpUser = defineSecret("SMTP_USER");
const smtpPass = defineSecret("SMTP_PASS");

export const sendContactEmail = onRequest(
  {
    cors: ["https://feedsolve.com", "https://www.feedsolve.com", "https://feedsolve-e9483.web.app"],
    secrets: [smtpUser, smtpPass],
  },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const { name, email, company, message } = req.body as {
      name?: string;
      email?: string;
      company?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      res.status(400).json({ error: "Missing required fields." });
      return;
    }

    try {
      const transporter = nodemailer.createTransport({
        host: "mail.spacemail.com",
        port: 465,
        secure: true,
        auth: {
          user: smtpUser.value(),
          pass: smtpPass.value(),
        },
      });

      await transporter.sendMail({
        from: `"FeedSolve Contact" <${smtpUser.value()}>`,
        to: "hello@feedsolve.com",
        replyTo: email,
        subject: `New contact from ${name}${company ? ` (${company})` : ""}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\n${message}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        `,
      });

      res.status(200).json({ success: true });
    } catch (err) {
      console.error("SMTP error:", err);
      res.status(500).json({ error: "Failed to send message." });
    }
  }
);

// ---------------------------------------------------------------------------
// Reddit Conversions API (server-side twin of the browser pixel).
// The browser sends the same conversionId it passed to rdt('track', ...), so
// Reddit can deduplicate the pixel and API events.
// Set the token with: firebase functions:secrets:set REDDIT_CAPI_TOKEN
// ---------------------------------------------------------------------------
const redditToken = defineSecret("REDDIT_CAPI_TOKEN");
const REDDIT_PIXEL_ID = "a2_k0igb2vwa0k3";
const ALLOWED_EVENTS = new Set(["Lead", "SignUp", "PageVisit", "ViewContent", "AddToCart", "Purchase"]);

const sha256 = (v: string) => createHash("sha256").update(v.trim().toLowerCase()).digest("hex");

export const redditConversion = onRequest(
  {
    cors: ["https://feedsolve.com", "https://www.feedsolve.com", "https://feedsolve-e9483.web.app"],
    secrets: [redditToken],
    maxInstances: 5,
  },
  async (req, res) => {
    if (req.method !== "POST") {
      res.status(405).send("Method Not Allowed");
      return;
    }

    const { eventName, conversionId, email, clickId } = req.body as {
      eventName?: string;
      conversionId?: string;
      email?: string;
      clickId?: string;
    };

    if (!eventName || !ALLOWED_EVENTS.has(eventName) || !conversionId) {
      res.status(400).json({ error: "Invalid event." });
      return;
    }

    const ip = (req.headers["x-forwarded-for"] as string | undefined)?.split(",")[0]?.trim() || req.ip;

    const event = {
      event_at: Date.now(),
      action_source: "WEBSITE",
      type: { tracking_type: eventName },
      ...(clickId ? { click_id: clickId } : {}),
      user: {
        ip_address: ip,
        user_agent: req.headers["user-agent"],
        ...(email ? { email: sha256(email) } : {}),
      },
      metadata: { conversion_id: conversionId },
    };

    try {
      const r = await fetch(`https://ads-api.reddit.com/api/v3/pixels/${REDDIT_PIXEL_ID}/conversion_events`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${redditToken.value()}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { events: [event] } }),
      });
      if (!r.ok) console.error("Reddit CAPI error:", r.status, await r.text());
      res.status(r.ok ? 200 : 502).json({ success: r.ok });
    } catch (err) {
      console.error("Reddit CAPI request failed:", err);
      res.status(502).json({ success: false });
    }
  }
);
