// Country complaint-management landing page for English-speaking markets.
// Shared shell around MarketLandingPage: the four-step workflow and the USD
// pricing table are identical everywhere, everything else (law, channels,
// industries, FAQs, prose) comes from the per-country entry in
// src/data/countryMarkets.ts so no two pages are copies with the name swapped.

import type { Metadata } from "next";
import MarketLandingPage from "@/components/MarketLandingPage";
import { COUNTRY_MARKETS, type CountryCode } from "@/data/countryMarkets";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { clusterAlternates } from "@/lib/seo/hreflang";
import { PRICING_TIERS } from "@/lib/seo/pricing";
import { SITE_URL } from "@/lib/seo/site";

export const countryPath = (code: CountryCode) => `/${code}/complaint-management-software/`;

export function countryMetadata(code: CountryCode): Metadata {
  const market = COUNTRY_MARKETS[code];
  const path = countryPath(code);
  return generatePageMetadata({
    title: market.seoTitle,
    description: market.seoDescription,
    path,
    locale: market.ogLocale,
    alternates: clusterAlternates("complaintManagement", path),
  });
}

const price = (name: (typeof PRICING_TIERS)[number]["name"]) =>
  `$${PRICING_TIERS.find((tier) => tier.name === name)?.price} / month`;

export default function CountryComplaintPage({ code }: { code: CountryCode }) {
  const m = COUNTRY_MARKETS[code];
  const label = m.shortName ?? m.name;
  const url = `${SITE_URL}${countryPath(code)}`;

  const otherMarkets = (Object.keys(COUNTRY_MARKETS) as CountryCode[])
    .filter((c) => c !== code && COUNTRY_MARKETS[c].region === m.region)
    .map((c) => ({ href: countryPath(c), label: `Complaint management software in ${COUNTRY_MARKETS[c].name}` }));

  return (
    <MarketLandingPage
      eyebrow={`${label} complaint management software`}
      h1={m.h1}
      intro={m.intro}
      regulationTitle={m.regulationTitle}
      regulationBody={m.regulationBody}
      competitorTitle={m.channelTitle}
      competitorBody={m.channelBody}
      price="$19/month on the Starter plan"
      industries={m.industries.map((i) => i.name)}
      breadcrumbLabel={`${label} Complaint Management Software`}
      breadcrumbUrl={url}
      schema={{ name: m.seoTitle, description: m.seoDescription, inLanguage: m.hreflang }}
      steps={{
        heading: "How complaint management works in FeedSolve",
        intro: m.stepsIntro,
        items: [
          {
            title: "Share a QR code or link",
            body: m.stepShare,
          },
          {
            title: "Every submission gets a tracking code",
            body: "The person who reports an issue receives a unique code and checks progress on a public tracking page, with no account. They can submit anonymously if they prefer.",
          },
          {
            title: "Assign an owner and move it through a board",
            body: "Your team assigns each complaint, adds internal notes, attaches photos or files, and moves it from received to in progress to resolved on a Kanban board.",
          },
          {
            title: "Close the loop and watch resolution rate",
            body: "Reply to the submitter, mark the issue resolved, and track resolution rate: the share of complaints that were actually fixed, not just how many came in.",
          },
        ],
      }}
      industryDetails={{
        heading: m.industriesHeading,
        intro: "The same workflow fits very different businesses. These are illustrative examples, not customer case studies.",
        items: m.industries,
      }}
      pricing={{
        heading: `Pricing for ${m.name}: billed in US dollars`,
        intro: m.pricingIntro,
        rows: [
          { plan: "Starter", price: price("Starter"), boards: "3", submissions: "1,500 / month", team: "3 members", adds: "Status tracking, assignment, public replies, internal notes, email notifications, file attachments" },
          { plan: "Growth", price: price("Growth"), boards: "10", submissions: "5,000 / month", team: "10 members", adds: "Custom branding, location-based QR codes, escalation rules, advanced analytics and CSV export" },
          { plan: "Business", price: price("Business"), boards: "20", submissions: "15,000 / month", team: "Unlimited", adds: "Custom roles and permissions, audit logs, priority support" },
        ],
        note: "Growth includes everything in Starter, and Business includes everything in Growth. The 7-day trial gives full access to 2 boards for 1 team member. Annual billing saves about 20%; full details are on the pricing page.",
      }}
      prose={m.prose}
      faqs={{ heading: `Complaint management software in ${m.name}: common questions`, items: m.faqs }}
      related={{
        heading: "Related guides and markets",
        intro: "See how the workflow applies to your industry, compare the options, or read how nearby markets use it.",
        links: [
          { href: "/complaint-management-software/", label: "Complaint management software overview" },
          { href: "/pricing/", label: "FeedSolve pricing and plan limits" },
          { href: "/blog/complaint-management-software-smb/", label: "Complaint management software for small business" },
          { href: "/blog/customer-complaint-handling-process/", label: "How to handle customer complaints: 7 steps" },
          { href: "/compare/feedsolve-vs-google-forms/", label: "FeedSolve vs Google Forms for complaints" },
          { href: "/alternatives/freshdesk/", label: "Freshdesk alternative with no per-agent fees" },
          ...otherMarkets,
        ],
      }}
    />
  );
}
