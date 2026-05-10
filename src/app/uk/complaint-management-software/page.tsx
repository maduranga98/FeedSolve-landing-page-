import type { Metadata } from "next";
import MarketLandingPage from "@/components/MarketLandingPage";

const url = "https://feedsolve.com/uk/complaint-management-software/";

export const metadata: Metadata = {
  title: "Complaint Management Software UK for Small Business",
  description: "FeedSolve helps UK SMBs collect, assign, track, and resolve complaints with branded QR codes, tracking codes, and GDPR-aware workflows.",
  alternates: { canonical: url, languages: { "en-GB": url, "x-default": url } },
};

export default function UKComplaintManagementPage() {
  return (
    <MarketLandingPage
      eyebrow="UK complaint management software"
      h1="Complaint Management Software for UK Small Businesses"
      intro="FeedSolve helps UK operations teams collect customer, supplier, tenant, and guest complaints through no-login QR forms, then assign every issue to an owner and track it through to resolution."
      regulationTitle="UK GDPR and ICO-aware intake"
      regulationBody="FeedSolve supports privacy-conscious complaint intake with anonymous mode, optional contact fields, and a documented audit trail. UK teams can reduce unnecessary personal data collection while still proving that each complaint was received, owned, and resolved."
      competitorTitle="Predictable cost for UK SMBs"
      competitorBody="Unlike help desks priced per agent, FeedSolve uses board-based pricing for feedback workflows. That makes it easier for UK restaurants, manufacturers, landlords, and logistics teams to involve the people who actually fix problems."
      price="£15/month equivalent on the Starter plan"
      industries={["Restaurants and hospitality", "Manufacturing suppliers", "Property and tenant teams", "Logistics and delivery operations"]}
    />
  );
}
