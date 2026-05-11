import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { privacyPolicyMarkdown } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How FeedSolve collects, uses, discloses, and protects personal information.",
  alternates: { canonical: "https://feedsolve.com/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How FeedSolve handles company, submitter, and website visitor data."
      markdown={privacyPolicyMarkdown}
    />
  );
}
