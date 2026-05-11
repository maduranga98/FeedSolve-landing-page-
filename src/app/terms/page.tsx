import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { termsOfServiceMarkdown } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "FeedSolve Terms of Service for company users, team members, and feedback submitters.",
  alternates: { canonical: "https://feedsolve.com/terms/" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms that govern your access to and use of FeedSolve."
      markdown={termsOfServiceMarkdown}
    />
  );
}
