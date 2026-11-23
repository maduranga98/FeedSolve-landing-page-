// Single source of truth for plan names, prices, limits and features. Rendered
// by the pricing cards (PricingSection) and the /pricing/ page table, and kept
// in step with src/lib/seo/pricing.ts for structured data. Lives outside the
// "use client" component so server components can read it as plain data.

export type Plan = {
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

export const pricingPlans: Plan[] = [
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
