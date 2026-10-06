import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqList from "@/components/FaqList";
import { JsonLdScript } from "@/components/JsonLd";
import { ArrowRight, CheckCircle2, ShieldCheck, QrCode, ClipboardList } from "lucide-react";
import { landingBreadcrumb, generateFAQSchema, type FAQItem } from "@/lib/seo";
import { SITE_URL } from "@/lib/seo/site";

export type MarketStep = { title: string; body: string };
export type MarketIndustry = { name: string; useCase: string; scenario: string; href?: string; linkLabel?: string };
export type MarketPlanRow = { plan: string; price: string; boards: string; submissions: string; team: string; adds: string };
export type MarketProse = { heading: string; paragraphs: string[] };
export type MarketLinkGroup = { heading: string; intro?: string; links: { href: string; label: string }[] };

type MarketLandingPageProps = {
  eyebrow: string;
  h1: string;
  intro: string;
  regulationTitle: string;
  regulationBody: string;
  competitorTitle: string;
  competitorBody: string;
  price: string;
  industries: string[];
  breadcrumbLabel: string;
  breadcrumbUrl: string;
  /** Optional depth. Omit all of these and the page renders as the original short layout. */
  schema?: { name: string; description: string; inLanguage?: string };
  steps?: { heading: string; intro?: string; items: MarketStep[] };
  industryDetails?: { heading: string; intro?: string; items: MarketIndustry[] };
  pricing?: { heading: string; intro: string; rows: MarketPlanRow[]; note?: string };
  prose?: MarketProse[];
  related?: MarketLinkGroup;
  faqs?: { heading: string; items: FAQItem[] };
};

export default function MarketLandingPage({
  eyebrow,
  h1,
  intro,
  regulationTitle,
  regulationBody,
  competitorTitle,
  competitorBody,
  price,
  industries,
  breadcrumbLabel,
  breadcrumbUrl,
  schema,
  steps,
  industryDetails,
  pricing,
  prose,
  related,
  faqs,
}: MarketLandingPageProps) {
  const jsonLd: object[] = [landingBreadcrumb(breadcrumbLabel, breadcrumbUrl)];
  if (schema) {
    jsonLd.unshift({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: schema.name,
      description: schema.description,
      url: breadcrumbUrl,
      inLanguage: schema.inLanguage ?? "en",
      isPartOf: { "@type": "WebSite", name: "FeedSolve", url: `${SITE_URL}/` },
      about: { "@type": "Thing", name: "FeedSolve", url: `${SITE_URL}/` },
    });
  }
  if (faqs) jsonLd.push(generateFAQSchema(faqs.items));

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <Navbar variant="blog" />
      <main>
        <section style={{ background: "var(--navy)", padding: "92px 32px 68px" }}>
          <div className="container">
            <div className="section-label" style={{ color: "var(--teal-text)", borderColor: "rgba(255,255,255,0.14)" }}>
              <ShieldCheck size={13} /> {eyebrow}
            </div>
            <h1 style={{ color: "white", marginTop: 16, maxWidth: 820 }}>{h1}</h1>
            <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 18, lineHeight: 1.65, maxWidth: 760, marginTop: 16 }}>
              {intro}
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 30 }}>
              <a href="https://app.feedsolve.com/signup" className="btn-primary teal" target="_blank" rel="noopener noreferrer">
                Start free <ArrowRight size={15} />
              </a>
              <Link href="/#pricing" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.28)" }}>
                View pricing
              </Link>
            </div>
          </div>
        </section>

        <section style={{ padding: "70px 32px", background: "var(--bg)" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 18, padding: 28 }}>
              <ShieldCheck size={28} style={{ color: "var(--teal-text)", marginBottom: 16 }} />
              <h2 style={{ fontSize: 24, color: "var(--navy)", marginBottom: 12 }}>{regulationTitle}</h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.7 }}>{regulationBody}</p>
            </div>
            <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 18, padding: 28 }}>
              <ClipboardList size={28} style={{ color: "var(--teal-text)", marginBottom: 16 }} />
              <h2 style={{ fontSize: 24, color: "var(--navy)", marginBottom: 12 }}>{competitorTitle}</h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.7 }}>{competitorBody}</p>
            </div>
            <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 18, padding: 28 }}>
              <QrCode size={28} style={{ color: "var(--teal-text)", marginBottom: 16 }} />
              <h2 style={{ fontSize: 24, color: "var(--navy)", marginBottom: 12 }}>Local SMB pricing</h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.7 }}>
                Start with a free 7-day trial, then upgrade from {price}. FeedSolve is priced by plan rather than per-agent seat, and every paid plan includes status tracking and assignment so your team can work each issue to a documented close.
              </p>
            </div>
          </div>
        </section>

        {steps && (
          <section className="mkt-section">
            <div className="container mkt-narrow">
              <h2>{steps.heading}</h2>
              {steps.intro && <p className="mkt-lead">{steps.intro}</p>}
              <ol className="mkt-steps">
                {steps.items.map((step) => (
                  <li key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        <section style={{ padding: "70px 32px", background: steps ? "var(--bg)" : "white" }}>
          <div className="container">
            <h2>{industryDetails ? industryDetails.heading : "Built for practical complaint workflows"}</h2>
            <p style={{ color: "var(--text-mid)", maxWidth: 720, lineHeight: 1.7, marginTop: 12 }}>
              {industryDetails?.intro ??
                "Share a branded QR code or link, collect no-login submissions, assign each issue, update statuses, and give every submitter a tracking code."}
            </p>
            {industryDetails ? (
              <div className="mkt-industries">
                {industryDetails.items.map((item) => (
                  <article key={item.name} className="mkt-card">
                    <h3>{item.name}</h3>
                    <p>{item.useCase}</p>
                    <p className="mkt-scenario">{item.scenario}</p>
                    {item.href && (
                      <Link href={item.href}>
                        {item.linkLabel ?? `FeedSolve for ${item.name.toLowerCase()}`} <ArrowRight size={14} />
                      </Link>
                    )}
                  </article>
                ))}
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 28 }}>
                {industries.map((industry) => (
                  <div key={industry} style={{ display: "flex", gap: 10, alignItems: "center", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 12, padding: "14px 16px" }}>
                    <CheckCircle2 size={16} style={{ color: "var(--teal-text)" }} />
                    <span style={{ color: "var(--text-mid)", fontWeight: 600 }}>{industry}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {pricing && (
          <section className="mkt-section">
            <div className="container">
              <div className="mkt-narrow">
                <h2>{pricing.heading}</h2>
                <p className="mkt-lead">{pricing.intro}</p>
              </div>
              <div className="cmp-table-wrap mkt-table">
                <table className="cmp-table">
                  <caption className="sr-only">{pricing.heading}</caption>
                  <thead>
                    <tr>
                      <th scope="col">Plan</th>
                      <th scope="col">Price (USD)</th>
                      <th scope="col">Boards</th>
                      <th scope="col">Submissions</th>
                      <th scope="col">Team</th>
                      <th scope="col">What it adds</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricing.rows.map((row) => (
                      <tr key={row.plan}>
                        <th scope="row">{row.plan}</th>
                        <td>{row.price}</td>
                        <td>{row.boards}</td>
                        <td>{row.submissions}</td>
                        <td>{row.team}</td>
                        <td>{row.adds}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {pricing.note && <p className="mkt-note">{pricing.note}</p>}
            </div>
          </section>
        )}

        {prose?.map((section, i) => (
          <section key={section.heading} className="mkt-section" style={i % 2 === 0 ? { background: "var(--bg)" } : undefined}>
            <div className="container mkt-narrow">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mkt-body">{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        {faqs && (
          <section className="mkt-section">
            <div className="container">
              <h2 style={{ textAlign: "center" }}>{faqs.heading}</h2>
              <FaqList faqs={faqs.items} />
            </div>
          </section>
        )}

        {related && (
          <section className="mkt-section" style={{ background: "var(--bg)" }}>
            <div className="container mkt-narrow">
              <h2>{related.heading}</h2>
              {related.intro && <p className="mkt-lead">{related.intro}</p>}
              <ul className="mkt-links">
                {related.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer variant="blog" />
    </>
  );
}
