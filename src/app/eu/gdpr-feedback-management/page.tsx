// Target keyword: "GDPR compliant feedback management software"
// Market: EU + UK

import { generatePageMetadata } from "@/lib/seo/metadata";
import GDPRPageClient from "./GDPRPageClient";
import { landingBreadcrumb } from "@/lib/seo";

const URL = "https://feedsolve.com/eu/gdpr-feedback-management/";

export const metadata = generatePageMetadata({
  title: "GDPR-Compliant Feedback Management Software",
  description:
    "Feedback management and complaint tracking built around GDPR data minimisation: anonymous mode, optional contact fields and a secure audit trail.",
  path: "/eu/gdpr-feedback-management/",
});

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
