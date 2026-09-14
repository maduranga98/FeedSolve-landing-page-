// Structured-data (JSON-LD) generators shared across landing and vertical pages.

import { SITE_URL } from "./site";

export type FAQItem = { question: string; answer: string };

/** Builds FAQPage JSON-LD from the FAQ content already rendered on the page. */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * SoftwareApplication + Offer schema. Belongs on every money page, not just the
 * homepage - each vertical page is an independent entry point from search.
 */
export function generateSoftwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FeedSolve",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${SITE_URL}/`,
    description:
      "FeedSolve helps SMBs collect customer feedback via QR code, then assign, track, and resolve every complaint from one dashboard.",
    offers: [
      { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
      {
        "@type": "Offer",
        name: "Starter",
        price: "19",
        priceCurrency: "USD",
        billingIncrement: "Monthly",
      },
      {
        "@type": "Offer",
        name: "Growth",
        price: "49",
        priceCurrency: "USD",
        billingIncrement: "Monthly",
      },
      {
        "@type": "Offer",
        name: "Business",
        price: "79",
        priceCurrency: "USD",
        billingIncrement: "Monthly",
      },
    ],
    // Add aggregateRating once real G2/Capterra reviews exist - never fabricate one.
  };
}

/** BreadcrumbList schema - cheap internal-linking signal on vertical pages. */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
