// Pricing as it appears in structured data. The source of truth is
// src/components/home/PricingSection.tsx (7-day free trial, then Starter $19,
// Growth $49 and Business $79 per month) - keep the two in step. Every Offer
// emitted anywhere on the site is built from this list so tier names and
// prices cannot drift between nodes.

import { SITE_URL } from "./site";

export const TRIAL_DAYS = 7;

export const PRICING_TIERS = [
  { name: "Starter", price: "19" },
  { name: "Growth", price: "49" },
  { name: "Business", price: "79" },
] as const;

/** Offer list for SoftwareApplication: the free trial, then one monthly Offer per paid tier. */
export function pricingOffers() {
  const common = {
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#pricing`,
  };
  return [
    { "@type": "Offer", name: `Free ${TRIAL_DAYS}-day trial`, price: "0", ...common },
    ...PRICING_TIERS.map((tier) => ({
      "@type": "Offer",
      name: tier.name,
      price: tier.price,
      ...common,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: tier.price,
        priceCurrency: "USD",
        billingDuration: "P1M",
      },
    })),
  ];
}
