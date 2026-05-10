import type { Metadata } from "next";
import MarketLandingPage from "@/components/MarketLandingPage";

const url = "https://feedsolve.com/eu/gdpr-feedback-management/";

export const metadata: Metadata = {
  title: "GDPR-Compliant Feedback Management Software for EU Teams",
  description: "FeedSolve supports GDPR-aware feedback management with anonymous mode, optional contact fields, tracking codes, and complaint resolution workflows.",
  alternates: { canonical: url, languages: { en: url, "x-default": url } },
};

export default function EUGDPRFeedbackPage() {
  return (
    <MarketLandingPage
      eyebrow="EU GDPR feedback management"
      h1="GDPR-Aware Feedback Management Software for EU Teams"
      intro="FeedSolve helps EU businesses collect feedback with less friction and more accountability: no-login submission, optional contact details, anonymous mode, tracking codes, and a structured resolution workflow."
      regulationTitle="Data minimisation by design"
      regulationBody="GDPR-aware feedback collection starts with asking only for what you need. FeedSolve supports anonymous mode and optional contact fields, helping teams collect complaint context while reducing unnecessary personal data in the intake flow."
      competitorTitle="Resolution instead of survey storage"
      competitorBody="Survey tools store responses. FeedSolve helps teams act on them by routing each complaint into a board, assigning ownership, tracking status, and maintaining a resolution trail that operations teams can review."
      price="€19/month equivalent on the Starter plan"
      industries={["EU retail teams", "Hospitality operators", "Supplier quality teams", "Tenant and property teams"]}
    />
  );
}
