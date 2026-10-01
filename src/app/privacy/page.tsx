import { JsonLdScript as BreadcrumbScript } from "@/components/JsonLd";
import { breadcrumbJsonLd as breadcrumbLd } from "@/lib/seo";
import { generatePageMetadata } from "@/lib/seo/metadata";
import LegalPage from "@/components/legal/LegalPage";
import { privacyPolicyMarkdown } from "@/data/legal";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "How FeedSolve collects, uses, shares and protects personal information for company users, feedback submitters and website visitors, and your privacy rights.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbScript data={breadcrumbLd([{ name: "Home", url: "https://feedsolve.com/" }, { name: "Privacy Policy", url: "https://feedsolve.com/privacy/" }])} />
      <LegalPage
        title="Privacy Policy"
        description="How FeedSolve handles company, submitter, and website visitor data."
        markdown={privacyPolicyMarkdown}
      />
    </>
  );
}
