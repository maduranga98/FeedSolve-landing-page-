"use client";

import { useState } from "react";

// The site is statically exported (output: "export"), so there is no server
// API route. Subscriptions are POSTed directly to an external endpoint
// (Formspree, Buttondown, a Firebase Function, etc.) configured at build time.
const ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT;

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
 const [email, setEmail] = useState("");
 const [status, setStatus] = useState<Status>("idle");

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!ENDPOINT) {
   setStatus("error");
   return;
  }
  setStatus("loading");
  try {
   const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ email }),
   });
   if (!res.ok) throw new Error(`Subscription failed: ${res.status}`);
   setStatus("success");
   setEmail("");
  } catch {
   setStatus("error");
  }
 };

 if (status === "success") {
  return (
   <div role="status" className="newsletter-note" style={{ fontSize: 14, fontWeight: 600 }}>
    ✓ You&apos;re subscribed. Check your inbox to confirm.
   </div>
  );
 }

 return (
  <>
   <form className="newsletter-form" onSubmit={handleSubmit} aria-label="Newsletter subscription">
    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
    <input
     id="newsletter-email"
     type="email"
     name="email"
     placeholder="you@company.com"
     autoComplete="email"
     required
     aria-required="true"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     disabled={status === "loading"}
    />
    <button type="submit" disabled={status === "loading"}>
     {status === "loading" ? "Subscribing..." : "Subscribe"}
    </button>
   </form>
   <div className="newsletter-note" role={status === "error" ? "alert" : undefined}>
    {status === "error"
     ? "Something went wrong. Please try again, or email us at hello@feedsolve.com."
     : "No spam. Unsubscribe anytime."}
   </div>
  </>
 );
}
