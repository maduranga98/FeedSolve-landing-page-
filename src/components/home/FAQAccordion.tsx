"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { homeFaqs } from "@/data/homeFaqs";

export default function FAQAccordion() {
 const [openIdx, setOpenIdx] = useState(0);

 return (
  <div className="faq-wrap">
   {homeFaqs.map((faq, i) => (
    <div key={i} className={`faq-item${i === openIdx ? " open" : ""}`}>
     <div
      className="faq-q"
      onClick={() => setOpenIdx(i === openIdx ? -1 : i)}
      role="button"
      aria-expanded={i === openIdx}
      tabIndex={0}
      onKeyDown={(e) => {
       if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpenIdx(i === openIdx ? -1 : i);
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
 );
}
