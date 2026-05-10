"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Does FeedSolve help Australian businesses meet Australian Consumer Law (ACL) complaint requirements?",
    a: "Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010) requires that businesses handle consumer complaints accessibly and in a timely manner. FeedSolve's zero-login QR submission meets the accessibility standard. The full audit trail — timestamps, assignee history, and resolution confirmation — provides documented evidence of complaint handling consistent with ACL expectations and ACCC enforcement guidelines.",
  },
  {
    q: "Is FeedSolve cheaper than Freshdesk for Australian small businesses?",
    a: "FeedSolve charges per feedback board, not per agent. The Starter plan is $19 USD/month (approx. A$29/month) with unlimited team members on that board. Freshdesk charges A$22–A$79 per agent per month — a 5-person team costs A$110–A$395/month. For most Australian SMBs, FeedSolve is significantly more cost-effective with no per-agent penalties as your team grows.",
  },
  {
    q: "Can Australian customers submit complaints anonymously?",
    a: "Yes. FeedSolve's anonymous mode lets Australian customers, suppliers, and staff submit complaints without providing contact information. Under the Privacy Act 1988 (Cth), individuals have a right to interact anonymously where reasonably practicable. FeedSolve's anonymous submission mode directly supports this right — submitters still receive a tracking code to check resolution progress.",
  },
  {
    q: "Does FeedSolve work for Australian hospitality businesses under ASIC or ACCC guidelines?",
    a: "FeedSolve is general-purpose complaint management software for Australian SMBs — hospitality, manufacturing, logistics, retail, and property management. It is not a specialised compliance tool for ASIC-regulated financial services firms. For hospitality, retail, and operations businesses, FeedSolve provides the structured intake and documented resolution process that ACCC-aligned complaint handling requires.",
  },
  {
    q: "Can I run separate complaint boards for different Australian locations or states?",
    a: "Yes. Create a separate feedback board for each location, branch, or state. Each board has its own QR code, category set, and team routing. All submissions appear in one dashboard filtered by board, status, or date — ideal for Australian businesses operating across multiple states or territories.",
  },
];

export default function AUComplaintFAQ() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <section style={{ background: "white", padding: "80px 32px" }}>
      <div className="container" style={{ maxWidth: 700 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div
            className="section-label"
            style={{ display: "inline-flex", marginBottom: 16 }}
          >
            <span style={{ marginRight: 8 }}>❓</span>Australia-specific questions
          </div>
          <h2 style={{ color: "var(--navy)" }}>
            Complaint management software Australia — FAQ
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
