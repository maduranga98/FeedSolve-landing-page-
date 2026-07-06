"use client";

import { useState } from "react";
import { Tag, Check, Info } from "lucide-react";

type Plan = {
 tier: string;
 subtitle: string;
 monthlyPrice: number | null;
 // Per-month price when billed annually (rounded), and the annual total.
 annualMonthlyPrice: number | null;
 annualTotal: number | null;
 freeLabel?: string;
 freePeriod?: string;
 popular: boolean;
 features: string[];
 cta: string;
 ctaClass: string;
};

const pricingPlans: Plan[] = [
 {
  tier: "Free",
  subtitle: "Trial",
  monthlyPrice: null,
  annualMonthlyPrice: null,
  annualTotal: null,
  freeLabel: "$0",
  freePeriod: "7 days, full access",
  popular: false,
  features: [
   "2 feedback boards, 1 team member",
   "QR codes & shareable links",
   "Anonymous submissions",
   "Multi-language forms",
   "Tracking codes for submitters",
  ],
  cta: "Try Now",
  ctaClass: "pc-free-btn",
 },
 {
  tier: "Starter",
  subtitle: "Core workflow",
  monthlyPrice: 19,
  annualMonthlyPrice: 15,
  annualTotal: 182,
  popular: false,
  features: [
   "3 boards · 1,500 submissions/month · 3 team members",
   "Status tracking & assignment",
   "Public replies to submitters",
   "Internal notes & comments",
   "Email notifications",
   "File attachments",
   "3 reply templates",
   "Basic analytics dashboard",
  ],
  cta: "Try Now",
  ctaClass: "btn-primary",
 },
 {
  tier: "Growth",
  subtitle: "Automation & branding",
  monthlyPrice: 49,
  annualMonthlyPrice: 39,
  annualTotal: 470,
  popular: true,
  features: [
   "10 boards · 5,000 submissions/month · 10 team members",
   "Everything in Starter, plus:",
   "Custom branding (logo & colors)",
   "Location-based QR codes",
   "Recurring cycle resets",
   "Escalation rules",
   "Advanced analytics & CSV export",
   "Advanced filtering & bulk actions",
   "10 reply & board templates",
   "Public resolution feed",
  ],
  cta: "Try Now",
  ctaClass: "btn-primary teal",
 },
 {
  tier: "Business",
  subtitle: "Enterprise controls",
  monthlyPrice: 79,
  annualMonthlyPrice: 63,
  annualTotal: 758,
  popular: false,
  features: [
   "20 boards · 15,000 submissions/month · Unlimited team members",
   "Everything in Growth, plus:",
   "Custom roles & permissions",
   "Audit logs",
   "Unlimited templates",
   "Priority support",
  ],
  cta: "Try Now",
  ctaClass: "btn-primary",
 },
];

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
         <div style={{ fontSize: 12, fontWeight: 600, color: "var(--teal)", letterSpacing: "0.05em", marginTop: 4 }}>
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
