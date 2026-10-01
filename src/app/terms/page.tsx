import { JsonLdScript as BreadcrumbScript } from "@/components/JsonLd";
import { breadcrumbJsonLd as breadcrumbLd } from "@/lib/seo";
import { generatePageMetadata } from "@/lib/seo/metadata";
import LegalPage from "@/components/legal/LegalPage";
import { termsOfServiceMarkdown } from "@/data/legal";

export const metadata = generatePageMetadata({
  title: "Terms of Service",
  description:
    "FeedSolve Terms of Service: the rules for company users, team members and feedback submitters, including subscriptions, billing and acceptable use.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <BreadcrumbScript data={breadcrumbLd([{ name: "Home", url: "https://feedsolve.com/" }, { name: "Terms of Service", url: "https://feedsolve.com/terms/" }])} />
      <LegalPage
        title="Terms of Service"
        description="The terms that govern your access to and use of FeedSolve."
        markdown={termsOfServiceMarkdown}
      />
    </>
  );
}
