import type { Metadata } from "next";
import MarketLandingPage from "@/components/MarketLandingPage";

const url = "https://feedsolve.com/us/complaint-management-software/";

export const metadata: Metadata = {
  title: "Complaint Management Software for Small Business US",
  description: "FeedSolve is complaint tracking software for US small businesses: QR intake, tracking codes, assignment, resolution workflows, and flat pricing.",
  alternates: { canonical: url, languages: { "en-US": url, "x-default": url } },
};

export default function USComplaintManagementPage() {
  return (
    <MarketLandingPage
      eyebrow="US complaint management software"
      h1="Complaint Management Software for US Small Businesses"
      intro="FeedSolve helps US small businesses replace scattered emails, spreadsheets, and form responses with one workflow for collecting, assigning, tracking, and resolving complaints."
      regulationTitle="Documented resolution workflow"
      regulationBody="US SMBs may not share one federal complaint-management mandate, but documented intake and resolution helps teams respond consistently. FeedSolve keeps every complaint tied to an owner, status, tracking code, and resolution trail."
      competitorTitle="Beyond forms and spreadsheets"
      competitorBody="Google Forms and Typeform collect submissions; FeedSolve adds the workflow after submit. Teams can assign issues, add internal notes, update statuses, and let submitters follow progress without creating an account."
      price="$19/month on the Starter plan"
      industries={["Restaurants", "Manufacturing", "Retail", "Logistics"]}
    />
  );
}
