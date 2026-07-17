import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  alternatives,
  getAlternative,
  FEEDSOLVE_HIGHLIGHTS,
} from "@/data/alternatives";
import {
  Check,
  X,
  ArrowRight,
  ChevronRight,
  ChevronDown,
  Lock,
  HelpCircle,
  AlertTriangle,
  Scale,
} from "lucide-react";

const SITE_URL = "https://feedsolve.com";

export function generateStaticParams() {
  return alternatives.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const alt = getAlternative(slug);
  if (!alt) return {};
  const url = `${SITE_URL}/alternatives/${alt.slug}/`;
  return {
    title: alt.metaTitle,
    description: alt.metaDescription,
    openGraph: {
      title: alt.metaTitle,
      description: alt.metaDescription,
      url,
      type: "website",
    },
    alternates: {
      canonical: url,
      languages: {
        "en-GB": url,
        "en-AU": url,
        "en-US": url,
        en: url,
        "x-default": url,
      },
    },
  };
}

export default async function AlternativePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const alt = getAlternative(slug);
  if (!alt) notFound();

  const url = `${SITE_URL}/alternatives/${alt.slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: alt.metaTitle,
    description: alt.metaDescription,
    url,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        {
          "@type": "ListItem",
          position: 2,
          name: "Alternatives",
          item: `${SITE_URL}/alternatives/`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `${alt.name} Alternative`,
          item: url,
        },
      ],
    },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: alt.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  };

  const related = alternatives
    .filter((a) => a.slug !== alt.slug)
    .filter((a) => a.category === alt.category)
    .concat(alternatives.filter((a) => a.slug !== alt.slug && a.category !== alt.category))
    .slice(0, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar variant="blog" />

      {/* HERO */}
      <section
        style={{
          background: "var(--navy)",
          padding: "96px 32px 72px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 700,
            height: 500,
            background:
              "radial-gradient(ellipse, rgba(58,143,165,0.18) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 13,
              color: "rgba(255,255,255,0.45)",
              marginBottom: 32,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/"
              style={{ color: "var(--teal-light)", textDecoration: "none" }}
            >
              Home
            </Link>
            <ChevronRight size={13} />
            <Link
              href="/alternatives/"
              style={{ color: "var(--teal-light)", textDecoration: "none" }}
            >
              Alternatives
            </Link>
            <ChevronRight size={13} />
            <span style={{ color: "rgba(255,255,255,0.65)" }}>
              {alt.name} Alternative
            </span>
          </div>

          <div
            className="section-label"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.75)",
              marginBottom: 24,
            }}
          >
            {alt.categoryLabel} alternative
          </div>

          <h1
            style={{
              color: "white",
              fontSize: "clamp(34px, 4.5vw, 54px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 20,
              maxWidth: 800,
            }}
          >
            The Best {alt.name} Alternative for Small Business
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 19,
              lineHeight: 1.65,
              maxWidth: 680,
              marginBottom: 40,
            }}
          >
            {alt.heroSubtitle}
          </p>

          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "24px 28px",
              maxWidth: 700,
              marginBottom: 40,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--teal-light)",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                marginBottom: 10,
              }}
            >
              Quick answer
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: 15,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <strong style={{ color: "white" }}>Choose {alt.name}</strong>{" "}
              {alt.quickAnswer.chooseCompetitor}{" "}
              <strong style={{ color: "white" }}>Choose FeedSolve</strong>{" "}
              {alt.quickAnswer.chooseFeedsolve}
            </p>
          </div>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="https://app.feedsolve.com/signup"
              className="btn-primary teal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try FeedSolve Free <ArrowRight size={16} />
            </a>
            {alt.compareHref && (
              <Link
                href={alt.compareHref}
                className="btn-outline"
                style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}
              >
                Full FeedSolve vs {alt.name} comparison
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* WHY PEOPLE SWITCH */}
      <section style={{ background: "var(--bg-warm)", padding: "72px 32px" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              className="section-label"
              style={{ display: "inline-flex", marginBottom: 16 }}
            >
              <AlertTriangle size={13} /> Why teams look elsewhere
            </div>
            <h2 style={{ color: "var(--navy)" }}>
              Why businesses seek a {alt.name} alternative
            </h2>
          </div>
          <div style={{ display: "grid", gap: 20 }}>
            {alt.whySwitch.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  border: "1.5px solid var(--border)",
                  borderRadius: 16,
                  padding: "26px 28px",
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "var(--teal-pale)",
                    color: "var(--teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 800,
                    fontSize: 15,
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: 8,
                    }}
                  >
                    {p.title}
                  </div>
                  <p
                    style={{
                      fontSize: 15,
                      color: "var(--text-mid)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIDE BY SIDE CARDS */}
      <section style={{ background: "white", padding: "72px 32px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              className="section-label"
              style={{ display: "inline-flex", marginBottom: 16 }}
            >
              <Scale size={13} /> Side by side
            </div>
            <h2 style={{ color: "var(--navy)" }}>
              {alt.name} vs FeedSolve at a glance
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
              maxWidth: 860,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                background: "var(--bg)",
                border: "1.5px solid var(--border)",
                borderRadius: 16,
                padding: "28px 24px",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--text-light)",
                  textTransform: "uppercase",
                  letterSpacing: "0.09em",
                  marginBottom: 12,
                }}
              >
                {alt.name}
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: 12,
                }}
              >
                {alt.categoryLabel}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {alt.competitorStrengths.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      fontSize: 13,
                      color: "var(--text)",
                    }}
                  >
                    <Check
                      size={13}
                      style={{ color: "#16A34A", flexShrink: 0 }}
                    />{" "}
                    {f}
                  </div>
                ))}
                {alt.competitorGaps.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      fontSize: 13,
                      color: "var(--text-light)",
                    }}
                  >
                    <X size={13} style={{ color: "#DC2626", flexShrink: 0 }} />{" "}
                    {f}
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 20,
                  padding: "12px 14px",
                  background: "white",
                  borderRadius: 10,
                  fontSize: 12,
                  color: "var(--text-mid)",
                  lineHeight: 1.6,
                  border: "1px solid var(--border)",
                }}
              >
                <strong>Pricing:</strong> {alt.competitorPricing}
              </div>
            </div>

            <div
              style={{
                background: "var(--navy)",
                border: "1.5px solid rgba(58,143,165,0.4)",
                borderRadius: 16,
                padding: "28px 24px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  left: 24,
                  background: "var(--teal)",
                  color: "white",
                  fontSize: 10,
                  fontWeight: 800,
                  padding: "4px 14px",
                  borderRadius: 100,
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                }}
              >
                Resolution-first
              </div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.09em",
                  marginBottom: 12,
                }}
              >
                FeedSolve
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 12,
                }}
              >
                Feedback resolution platform
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {FEEDSOLVE_HIGHLIGHTS.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      fontSize: 13,
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    <Check
                      size={13}
                      style={{ color: "var(--teal-light)", flexShrink: 0 }}
                    />{" "}
                    {f}
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 20,
                  padding: "12px 14px",
                  background: "rgba(255,255,255,0.07)",
                  borderRadius: 10,
                  fontSize: 12,
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "white" }}>Pricing:</strong> Free plan ·
                $19–79/month flat · No per-seat or per-response charges
              </div>
            </div>
          </div>

          {/* WHERE COMPETITOR STILL WINS */}
          <div
            style={{
              maxWidth: 860,
              margin: "24px auto 0",
              background: "var(--bg-warm)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "22px 26px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--text-light)",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              To be fair: where {alt.name} still wins
            </div>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-mid)",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {alt.whereCompetitorWins}
            </p>
          </div>
        </div>
      </section>

      {/* OTHER ALTERNATIVES */}
      <section style={{ background: "var(--bg)", padding: "72px 32px" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ color: "var(--navy)" }}>
              Other {alt.name} alternatives worth knowing
            </h2>
            <p
              style={{
                color: "var(--text-mid)",
                fontSize: 16,
                lineHeight: 1.65,
                maxWidth: 620,
                margin: "12px auto 0",
              }}
            >
              FeedSolve is the strongest choice when resolution is the goal,
              but depending on your exact job these tools may also fit.
            </p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {alt.otherAlternatives.map((o) =>
              o.slug ? (
                <Link
                  key={o.name}
                  href={`/alternatives/${o.slug}/`}
                  style={{
                    background: "white",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "18px 22px",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: "var(--navy)",
                        marginBottom: 4,
                      }}
                    >
                      {o.name}
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text-light)" }}>
                      {o.blurb}
                    </div>
                  </div>
                  <ArrowRight
                    size={16}
                    style={{ color: "var(--teal)", flexShrink: 0 }}
                  />
                </Link>
              ) : (
                <div
                  key={o.name}
                  style={{
                    background: "white",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "18px 22px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: 4,
                    }}
                  >
                    {o.name}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-light)" }}>
                    {o.blurb}
                  </div>
                </div>
              )
            )}
          </div>
          {alt.roundupHref && (
            <div style={{ textAlign: "center", marginTop: 22 }}>
              <Link
                href={alt.roundupHref}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 15,
                  fontWeight: 700,
                  color: "var(--teal)",
                  textDecoration: "none",
                }}
              >
                {alt.roundupLabel ?? `See all ${alt.name} alternatives compared`}
                <ArrowRight size={16} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--bg-warm)", padding: "80px 32px" }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              className="section-label"
              style={{ display: "inline-flex", marginBottom: 16 }}
            >
              <HelpCircle size={13} /> Common questions
            </div>
            <h2 style={{ color: "var(--navy)" }}>
              {alt.name} alternative - FAQ
            </h2>
          </div>
          <div className="faq-wrap">
            {alt.faqs.map((faq, i) => (
              <details
                key={i}
                className="faq-item"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <summary
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "22px 0",
                    cursor: "pointer",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--navy)",
                    listStyle: "none",
                    gap: 16,
                  }}
                >
                  {faq.q}
                  <div
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: "50%",
                      background: "var(--teal-pale)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--teal)",
                    }}
                  >
                    <ChevronDown size={13} />
                  </div>
                </summary>
                <div
                  style={{
                    paddingBottom: 20,
                    fontSize: 15,
                    color: "var(--text-mid)",
                    lineHeight: 1.72,
                  }}
                >
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background:
            "linear-gradient(140deg, var(--navy-deep) 0%, var(--navy) 55%, #1a4a6b 100%)",
          padding: "80px 32px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ color: "white", marginBottom: 16 }}>
            Ready for feedback that actually gets resolved?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 18,
              marginBottom: 36,
            }}
          >
            QR-first intake, tracking codes, and a resolution workflow. Free to
            start - no sales call.
          </p>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://app.feedsolve.com/signup"
              className="btn-primary teal"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 17, padding: "15px 36px" }}
            >
              Try FeedSolve Free <ArrowRight size={17} />
            </a>
            <Link
              href="/alternatives/"
              className="btn-outline"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "white",
                fontSize: 17,
                padding: "14px 28px",
              }}
            >
              See all alternatives
            </Link>
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
            }}
          >
            <Lock size={13} /> No credit card required
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section style={{ background: "var(--bg)", padding: "48px 32px" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              color: "var(--text-light)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 20,
            }}
          >
            More alternative guides
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 14,
            }}
          >
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/alternatives/${r.slug}/`}
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "18px 20px",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--navy)",
                    marginBottom: 4,
                  }}
                >
                  Best {r.name} Alternative
                </div>
                <div style={{ fontSize: 13, color: "var(--text-light)" }}>
                  {r.categoryLabel}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer variant="blog" />
    </>
  );
}
