"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Is FeedSolve complaint management software UK GDPR compliant?",
    a: "Yes. FeedSolve is designed with UK GDPR data minimisation principles in mind. Contact fields are optional — submitters can remain anonymous. No special categories of personal data are collected. Data is stored securely and configurable retention settings are available on Growth and Pro plans. FeedSolve does not sell or share submitter data with third parties.",
  },
  {
    q: "Does FeedSolve replace a dedicated UK complaint management system?",
    a: "For UK SMBs needing structured complaint intake, Kanban resolution, tracking codes, and a resolution rate metric, FeedSolve replaces informal WhatsApp and email complaint processes. It is not a regulated complaints system for FCA-authorised firms, which require specific regulatory reporting. For general SMB complaint management — hospitality, manufacturing, logistics, retail, and property — FeedSolve covers every requirement.",
  },
  {
    q: "How does FeedSolve pricing compare to Freshdesk or Zoho Desk for UK businesses?",
    a: "FeedSolve charges per feedback board, not per agent. The Starter plan is $19/month (approx. £15/month) for 3 boards. Freshdesk charges £12–£49 per agent per month — a 5-person team costs £60–£245/month minimum. For most UK SMBs, FeedSolve is significantly more cost-effective with no per-seat penalties.",
  },
  {
    q: "Can UK customers submit complaints without creating an account?",
    a: "Yes. FeedSolve's zero-login submission model means any UK customer, supplier, or partner can submit a complaint via a QR code or web link without registering. They receive a unique tracking code and can check resolution progress on any browser — consistent with ICO guidance that complaint channels should be accessible without unnecessary barriers.",
  },
  {
    q: "Do I need a complaint management system to comply with UK consumer law?",
    a: "UK consumer protection regulations, including the Consumer Rights Act 2015 and the Consumer Contracts Regulations, don't mandate a specific complaint management system. However, the ICO and Trading Standards expect businesses to have accessible, documented complaint processes. FeedSolve provides a structured intake channel, full audit trail, and resolution confirmation — meeting the spirit of these requirements.",
  },
];

export default function UKComplaintFAQ() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <section style={{ background: "var(--bg-warm)", padding: "80px 32px" }}>
      <div className="container" style={{ maxWidth: 700 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            className="section-label"
            style={{ display: "inline-flex", marginBottom: 16 }}
          >
            <HelpCircle size={13} /> UK-specific questions
          </div>
          <h2 style={{ color: "var(--navy)" }}>
            Complaint management software UK — FAQ
          </h2>
        </div>
        <div className="faq-wrap">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item${i === openFaq ? " open" : ""}`}
            >
              <div
                className="faq-q"
                onClick={() => setOpenFaq(i === openFaq ? -1 : i)}
                role="button"
                tabIndex={0}
                aria-expanded={i === openFaq}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenFaq(i === openFaq ? -1 : i);
                  }
                }}
              >
                {faq.q}
                <div className="faq-arrow">
                  <ChevronDown size={13} />
                </div>
              </div>
              <div className="faq-a">
                <div className="faq-a-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
