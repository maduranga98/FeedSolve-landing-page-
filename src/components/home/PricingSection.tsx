"use client";

import { useState } from "react";
import { Tag, Check, Info } from "lucide-react";
import { pricingPlans } from "@/data/pricingPlans";

export default function PricingSection() {
 const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
 const isAnnual = billing === "annual";

 return (
  <section id="pricing">
   <div className="container">
    <div className="section-label">
     <Tag size={13} /> Pricing
    </div>
    <h2>
     Simple pricing.
     <br />
     No surprises.
    </h2>
    <p className="pricing-sub">Start free. Upgrade as you grow.</p>

    <div className="pricing-toggle" role="tablist" aria-label="Billing period">
     <button
      type="button"
      role="tab"
      aria-selected={!isAnnual}
      className={`pt-btn${!isAnnual ? " active" : ""}`}
      onClick={() => setBilling("monthly")}
     >
      Monthly
     </button>
     <button
      type="button"
      role="tab"
      aria-selected={isAnnual}
      className={`pt-btn${isAnnual ? " active" : ""}`}
      onClick={() => setBilling("annual")}
     >
      Annual
      <span className="pt-save">Save 20%</span>
     </button>
    </div>

    <div className="pricing-grid">
     {pricingPlans.map((plan) => {
      const isFree = plan.monthlyPrice === null;
      const displayPrice = isAnnual ? plan.annualMonthlyPrice : plan.monthlyPrice;
      return (
       <div
        key={plan.tier}
        className={`pc${plan.popular ? " popular" : ""}`}
       >
        {plan.popular && <div className="pop-badge">⭐ Recommended</div>}
        <div style={{ marginBottom: 8 }}>
         <div className="pc-tier">{plan.tier}</div>
         <div style={{ fontSize: 12, fontWeight: 600, color: "var(--teal-text)", letterSpacing: "0.05em", marginTop: 4 }}>
          {plan.subtitle}
         </div>
        </div>
        {isFree ? (
         <>
          <div className="pc-price">{plan.freeLabel?.replace("$", "")}</div>
          <div className="pc-period">{plan.freePeriod}</div>
         </>
        ) : (
         <>
          <div className="pc-price">
           <sup>$</sup>
           {displayPrice}
           <span>/mo</span>
          </div>
          <div className="pc-period">
           {isAnnual
            ? `$${plan.annualTotal}/year · Save 20%`
            : "billed monthly"}
          </div>
         </>
        )}
        <div className="pc-div"></div>
        <div className="pc-feats">
         {plan.features.map((f) => (
          <div key={f} className="pf">
           <div className="pf-check">
            <Check size={14} />
           </div>{" "}
           {f}
          </div>
         ))}
        </div>
        <a
         href="https://app.feedsolve.com/signup"
         className={plan.ctaClass}
         target="_blank"
         rel="noopener noreferrer"
        >
         {plan.cta}
        </a>
       </div>
      );
     })}
    </div>
    <div className="pricing-note">
     <Info size={14} /> Pricing is based on feedback boards, not per user ·
     No hidden fees. Cancel anytime.
    </div>
   </div>
  </section>
 );
}
