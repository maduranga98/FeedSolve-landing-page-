// Target keyword: "GDPR compliant feedback management software"
// Market: EU + UK

import type { Metadata } from "next";
import GDPRPageClient from "./GDPRPageClient";
import { landingBreadcrumb } from "@/lib/seo";

const URL = "https://feedsolve.com/eu/gdpr-feedback-management/";

export const metadata: Metadata = {
  title: "GDPR-Compliant Feedback Management Software",
  description:
    "FeedSolve is feedback management and complaint tracking software designed with GDPR data minimisation principles. Anonymous mode, optional contact fields, and secure audit trail. Free to start.",
  openGraph: {
    title: "GDPR-Compliant Feedback Management Software | FeedSolve",
    description:
      "Collect and resolve customer complaints in a GDPR-aligned way. Zero-login QR submission, anonymous mode, and configurable data retention. Free plan available.",
    url: "https://feedsolve.com/eu/gdpr-feedback-management/",
    type: "website",
  },
  alternates: {
    canonical: "https://feedsolve.com/eu/gdpr-feedback-management/",
    languages: {
      "en-GB": "https://feedsolve.com/eu/gdpr-feedback-management/",
      "x-default": "https://feedsolve.com/eu/gdpr-feedback-management/",
    },
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "GDPR-Compliant Feedback Management Software",
  description:
    "FeedSolve is feedback management and complaint tracking software designed with GDPR data minimisation principles - anonymous mode, optional contact fields, and a secure audit trail.",
  url: URL,
  inLanguage: "en",
};

export default function EUGDPRFeedbackPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            landingBreadcrumb("GDPR Feedback Management", URL)
          ),
        }}
      />
      <GDPRPageClient />
    </>
  );
}
