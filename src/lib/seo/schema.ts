// Structured-data (JSON-LD) generators shared across landing and vertical pages.

import { pricingOffers } from "./pricing";
import { LOGO_URL, OG_IMAGE_URL, ORGANIZATION_SAME_AS, SITE_URL } from "./site";

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
 * SoftwareApplication + Offer schema. Emitted on the homepage only: the
 * product is one entity, and repeating it on every page ships competing
 * copies of it.
 */
export function generateSoftwareAppSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FeedSolve",
    alternateName: ["Feed Solve", "FeedSolve Feedback & Complaint Management"],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "CustomerFeedbackSoftware",
    operatingSystem: "Web",
    description:
      "FeedSolve is feedback management and complaint resolution software for SMBs. Collect feedback via branded QR codes or shareable links - no login needed for submitters. Assign issues to your team, resolve every submission, and let submitters track progress with a unique tracking code. Supports multi-language submission forms.",
    url: `${SITE_URL}/`,
    image: OG_IMAGE_URL,
    inLanguage: ["en", "en-GB", "en-AU", "en-US", "pt-BR"],
    keywords:
      "feedsolve, feed solve, feedback management software, complaint management software, QR code feedback, supplier feedback, tenant feedback, GDPR feedback management, customer complaint tracking, SMB feedback platform",
    featureList: [
      "Branded QR code feedback collection",
      "No-login submission for customers and suppliers",
      "Unique tracking code for every submission",
      "Kanban-style complaint resolution workflow",
      "Multi-language submission forms",
      "Team assignment and resolution audit trail",
      "GDPR-aware data handling for EU teams",
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType:
        "Small and mid-sized businesses in restaurants, manufacturing, logistics, real estate, and retail",
    },
    offers: pricingOffers(),
    provider: generateOrganizationSchema({ standalone: false }),
    // aggregateRating / review are intentionally absent. Google's SoftwareApplication
    // rich result needs one of them, so Semrush reports this node as "invalid" until
    // real G2/Capterra reviews exist. Add them from real data only - a fabricated or
    // self-written rating is a Google structured-data policy violation.
  };
}

/**
 * The FeedSolve Organization node, including the `sameAs` entity links.
 *
 * `standalone: false` drops `@context` so the object can be nested inside
 * another schema (as `provider`, `publisher`, `worksFor`, ...) without emitting
 * a second context in the middle of a graph.
 */
export function generateOrganizationSchema({ standalone = true } = {}) {
  return {
    ...(standalone ? { "@context": "https://schema.org" } : {}),
    "@type": "Organization",
    name: "FeedSolve",
    alternateName: ["Feed Solve"],
    url: `${SITE_URL}/`,
    logo: { "@type": "ImageObject", url: LOGO_URL, width: 512, height: 512 },
    sameAs: [...ORGANIZATION_SAME_AS],
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
