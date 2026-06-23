import { onRequest } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as nodemailer from "nodemailer";

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
