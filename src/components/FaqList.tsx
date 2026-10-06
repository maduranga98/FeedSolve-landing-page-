import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/lib/seo";

/**
 * Server-rendered FAQ accordion (native <details>) using the shared faq-* classes.
 * Render the same `faqs` array through generateFAQSchema so the markup and the
 * visible text cannot drift apart.
 */
export default function FaqList({ faqs }: { faqs: FAQItem[] }) {
  return (
    <div className="faq-wrap">
      {faqs.map((faq) => (
        <details key={faq.question} className="faq-item">
          <summary className="faq-q">
            {faq.question}
            <div className="faq-arrow">
              <ChevronDown />
            </div>
          </summary>
          <div className="faq-a">
            <div className="faq-a-inner">{faq.answer}</div>
          </div>
        </details>
      ))}
    </div>
  );
}
