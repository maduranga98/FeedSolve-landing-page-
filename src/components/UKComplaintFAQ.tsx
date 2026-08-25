"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ukComplaintFaqs } from "@/data/ukComplaintFaqs";

export default function UKComplaintFAQ() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const faqs = ukComplaintFaqs;

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
