import { generatePageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { alternatives } from "@/data/alternatives";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

const SITE_URL = "https://feedsolve.com";

export const metadata = generatePageMetadata({
  title: "FeedSolve vs Other Tools — Comparison Hub",
  description:
    "Compare FeedSolve with Google Forms, Typeform, Zonka Feedback, and other feedback or complaint management tools for SMBs.",
  path: "/compare/",
});

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
            <div className="section-label" style={{ color: "var(--teal-text)", borderColor: "rgba(255,255,255,0.14)" }}>
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
                  <div style={{ color: "var(--slate-text)", fontSize: 14, lineHeight: 1.5 }}>
                    Best for: {comparison.bestFor}
                  </div>
                  <span style={{ color: "var(--teal-text)", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 700 }}>
                    Read the comparison <ArrowRight size={15} />
                  </span>
                </Link>
              ))}
            </div>
            <div className="alt-links">
              <h2>How to choose between these tools</h2>
              <p>
                Each comparison asks the same five questions, so you can read them side by side. How do people submit,
                and do they need an account? Does every complaint get a named owner and a visible status? Can the person
                who reported it check progress? Is there a measure of how many issues were actually fixed? And is the price
                published, and does it scale with agents or with your plan?
              </p>
              <p>
                If you already collect feedback with a form builder, start with the Google Forms, Typeform or JotForm
                comparison: they show what changes when each submission becomes an assigned, tracked item. If you are
                weighing a survey platform with case management, the Zonka Feedback comparison is closest. If you are
                leaving a larger or more specialised product, the alternatives guides below cover it.
              </p>
            </div>
            <div className="alt-links">
              <h2>Switching away from a specific tool?</h2>
              <p>
                The head-to-head pages above compare FeedSolve with the tools small teams most often shortlist.
                If you are leaving a particular product, each{" "}
                <Link href="/alternatives/">alternatives guide</Link> explains why teams look elsewhere, where
                that tool still wins, what it costs, and how FeedSolve differs. Pick the tool you are replacing:
              </p>
              <ul>
                {alternatives.map((a) => (
                  <li key={a.slug}>
                    <Link href={`/alternatives/${a.slug}/`}>{a.name} alternative</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="blog" />
    </>
  );
}
