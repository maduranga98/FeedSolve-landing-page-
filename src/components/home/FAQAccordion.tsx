import { ChevronDown } from "lucide-react";
import { homeFaqs } from "@/data/homeFaqs";

// Server component using native <details>/<summary>: no client JS, keyboard and
// screen-reader behaviour come from the browser. The first answer starts open;
// the shared `name` makes the group exclusive (one open at a time) in browsers
// that support it, and it degrades to independent toggles elsewhere.
export default function FAQAccordion() {
 return (
  <div className="faq-wrap">
   {homeFaqs.map((faq, i) => (
    <details key={i} className="faq-item" name="home-faq" open={i === 0}>
     <summary className="faq-q">
      {faq.q}
      <span className="faq-arrow">
       <ChevronDown size={13} />
      </span>
     </summary>
     <div className="faq-a">
      <div className="faq-a-inner">{faq.a}</div>
     </div>
    </details>
   ))}
  </div>
 );
}
