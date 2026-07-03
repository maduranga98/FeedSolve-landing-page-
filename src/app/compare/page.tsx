import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

const SITE_URL = "https://feedsolve.com";

export const metadata: Metadata = {
  title: "FeedSolve vs Other Tools — Comparison Hub",
  description:
    "Compare FeedSolve with Google Forms, Typeform, Zonka Feedback, and other feedback or complaint management tools for SMBs.",
  openGraph: {
    title: "FeedSolve vs Other Tools — Comparison Hub",
    description:
      "See how FeedSolve compares with survey tools, form builders, and feedback platforms when your goal is complaint resolution.",
    url: `${SITE_URL}/compare/`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/compare/`,
    languages: {
      "en-GB": `${SITE_URL}/compare/`,
      "en-AU": `${SITE_URL}/compare/`,
      "en-US": `${SITE_URL}/compare/`,
      en: `${SITE_URL}/compare/`,
      "x-default": `${SITE_URL}/compare/`,
    },
  },
};

const comparisons = [
  {
    href: "/compare/feedsolve-vs-google-forms/",
    label: "FeedSolve vs Google Forms",
    sub: "For teams that need more than a response spreadsheet.",
    bestFor: "Complaint tracking, ownership, and resolution workflows",
  },
  {
    href: "/compare/feedsolve-vs-typeform/",
    label: "FeedSolve vs Typeform",
    sub: "For SMBs choosing between polished surveys and operational accountability.",
    bestFor: "Tracking codes, Kanban resolution, and no-login feedback",
  },
  {
    href: "/compare/feedsolve-vs-zonka/",
    label: "FeedSolve vs Zonka Feedback",
    sub: "For teams that care whether every complaint was actually fixed.",
    bestFor: "Resolution rate, flat pricing, and simple setup",
  },
  {
    href: "/compare/feedsolve-vs-jotform/",
    label: "FeedSolve vs JotForm",
    sub: "For teams whose QR forms collect feedback but never resolve it.",
    bestFor: "QR code feedback, tracking codes, and resolution workflows",
  },
];

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE_URL}/compare/` },
  ],
};

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar variant="blog" />
      <main>
        <section style={{ background: "var(--navy)", padding: "92px 32px 64px" }}>
          <div className="container">
            <div className="article-breadcrumb" style={{ color: "rgba(255,255,255,0.7)", marginBottom: 18 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.8)" }}>Home</Link>
              <ChevronRight size={13} />
              <span>Compare</span>
            </div>
            <div className="section-label" style={{ color: "var(--teal)", borderColor: "rgba(255,255,255,0.14)" }}>
              <CheckCircle2 size={13} /> Comparison hub
            </div>
            <h1 style={{ color: "white", maxWidth: 760, marginTop: 16 }}>
              FeedSolve vs the Alternatives
            </h1>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 18, lineHeight: 1.65, maxWidth: 760, marginTop: 16 }}>
              Compare FeedSolve with form builders, survey tools, and customer feedback platforms. See where each tool fits — and where FeedSolve is stronger for complaint management, tracking codes, and resolution workflows.
            </p>
          </div>
        </section>

        <section style={{ padding: "70px 32px", background: "var(--bg)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {comparisons.map((comparison) => (
                <Link
                  key={comparison.href}
                  href={comparison.href}
                  style={{ background: "white", border: "1px solid var(--border)", borderRadius: 18, padding: 26, textDecoration: "none", display: "flex", flexDirection: "column", gap: 12, boxShadow: "0 10px 28px rgba(30, 53, 87, 0.06)" }}
                >
                  <h2 style={{ color: "var(--navy)", fontSize: 24, margin: 0 }}>{comparison.label}</h2>
                  <p style={{ color: "var(--text-mid)", lineHeight: 1.6, margin: 0 }}>{comparison.sub}</p>
                  <div style={{ color: "var(--text-light)", fontSize: 14, lineHeight: 1.5 }}>
                    Best for: {comparison.bestFor}
                  </div>
                  <span style={{ color: "var(--teal)", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
                    Read the comparison <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
            <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 16, padding: "24px 28px", marginTop: 28 }}>
              <p style={{ color: "var(--text-mid)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                Switching away from a specific tool? Browse our{" "}
                <Link href="/alternatives/" style={{ color: "var(--teal)", fontWeight: 700 }}>
                  alternatives guides
                </Link>{" "}
                covering Medallia, Qualtrics, Zendesk, Canny, SurveyMonkey, and more.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="blog" />
    </>
  );
}
