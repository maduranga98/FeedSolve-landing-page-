import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle2, ShieldCheck, QrCode, ClipboardList } from "lucide-react";
import { landingBreadcrumb } from "@/lib/seo";

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
}: MarketLandingPageProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(landingBreadcrumb(breadcrumbLabel, breadcrumbUrl)),
        }}
      />
      <Navbar variant="blog" />
      <main>
        <section style={{ background: "var(--navy)", padding: "92px 32px 68px" }}>
          <div className="container">
            <div className="section-label" style={{ color: "var(--teal)", borderColor: "rgba(255,255,255,0.14)" }}>
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
              <ShieldCheck size={28} style={{ color: "var(--teal)", marginBottom: 16 }} />
              <h2 style={{ fontSize: 24, color: "var(--navy)", marginBottom: 12 }}>{regulationTitle}</h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.7 }}>{regulationBody}</p>
            </div>
            <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 18, padding: 28 }}>
              <ClipboardList size={28} style={{ color: "var(--teal)", marginBottom: 16 }} />
              <h2 style={{ fontSize: 24, color: "var(--navy)", marginBottom: 12 }}>{competitorTitle}</h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.7 }}>{competitorBody}</p>
            </div>
            <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 18, padding: 28 }}>
              <QrCode size={28} style={{ color: "var(--teal)", marginBottom: 16 }} />
              <h2 style={{ fontSize: 24, color: "var(--navy)", marginBottom: 12 }}>Local SMB pricing</h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.7 }}>
                Start free, then upgrade from {price}. FeedSolve is priced by feedback boards instead of per-agent seats, so operations teams can invite the people needed to resolve issues without a per-user penalty.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: "70px 32px", background: "white" }}>
          <div className="container">
            <h2>Built for practical complaint workflows</h2>
            <p style={{ color: "var(--text-mid)", maxWidth: 720, lineHeight: 1.7, marginTop: 12 }}>
              Share a branded QR code or link, collect no-login submissions, assign each issue, update statuses, and give every submitter a tracking code.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginTop: 28 }}>
              {industries.map((industry) => (
                <div key={industry} style={{ display: "flex", gap: 10, alignItems: "center", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 12, padding: "14px 16px" }}>
                  <CheckCircle2 size={16} style={{ color: "var(--teal)" }} />
                  <span style={{ color: "var(--text-mid)", fontWeight: 600 }}>{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer variant="blog" />
    </>
  );
}
