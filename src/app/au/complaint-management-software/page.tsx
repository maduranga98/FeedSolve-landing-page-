import type { Metadata } from "next";
import MarketLandingPage from "@/components/MarketLandingPage";

const url = "https://feedsolve.com/au/complaint-management-software/";

export const metadata: Metadata = {
  title: "Complaint Management Software Australia for SMEs",
  description: "Collect and resolve complaints in Australia with FeedSolve: branded QR intake, tracking codes, team assignment, and flat board-based pricing.",
  alternates: { canonical: url, languages: { "en-AU": url, "x-default": url } },
};

export default function AUComplaintManagementPage() {
  return (
    <MarketLandingPage
      eyebrow="Australia complaint management software"
      h1="Complaint Management Software for Australian SMEs"
      intro="FeedSolve gives Australian SMEs a simple way to collect customer feedback, supplier issues, and service complaints without logins — then track every issue until it is resolved."
      regulationTitle="Accessible complaint handling"
      regulationBody="Australian Consumer Law expectations make accessible complaint processes important for businesses of all sizes. FeedSolve provides QR and link-based submission, optional anonymity, and status tracking so teams can document how complaints move from intake to resolution."
      competitorTitle="Flat pricing for Australian teams"
      competitorBody="Australian businesses comparing form tools or agent-priced help desks can use FeedSolve as a lighter complaint workflow: no-login intake for submitters, tracking codes for follow-up, and board-based pricing for teams."
      price="A$29/month equivalent on the Starter plan"
      industries={["Cafes and restaurants", "Retail locations", "Delivery teams", "Property managers"]}
    />
  );
}
