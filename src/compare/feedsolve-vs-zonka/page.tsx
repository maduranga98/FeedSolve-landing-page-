import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Check,
  X,
  ArrowRight,
  ChevronRight,
  Lock,
  HelpCircle,
  ChevronDown,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FeedSolve vs Zonka Feedback: Resolution Rate vs Survey Scores",
  description:
    "Zonka measures satisfaction scores. FeedSolve measures resolution rate — did you actually fix it? Compare features, pricing, and use cases for SMB complaint management.",
  openGraph: {
    title: "FeedSolve vs Zonka Feedback: Resolution Rate vs Survey Scores",
    description:
      "Zonka measures satisfaction scores. FeedSolve measures resolution rate. See which is right for SMB complaint and feedback management.",
    url: "https://feedsolve.com/compare/feedsolve-vs-zonka/",
    type: "website",
  },
  alternates: {
    canonical: "https://feedsolve.com/compare/feedsolve-vs-zonka/",
  },
};

const comparisonRows = [
  {
    feature: "Zero-login public submission",
    feedsolve: true,
    competitor: true,
    note: "",
  },
  {
    feature: "QR code for feedback collection",
    feedsolve: true,
    competitor: true,
    note: "",
  },
  {
    feature: "Unique tracking code per submission",
    feedsolve: true,
    competitor: false,
    note: "Zonka has no submitter tracking code",
  },
  {
    feature: "Public tracking page for submitters",
    feedsolve: true,
    competitor: false,
    note: "",
  },
  {
    feature: "Kanban resolution workflow",
    feedsolve: true,
    competitor: false,
    note: "Zonka is survey-first, not resolution-first",
  },
  {
    feature: "Assign submission to team member",
    feedsolve: true,
    competitor: "partial",
    note: "Zonka has ticket-like assignment in Enterprise",
  },
  {
    feature: "Internal notes (hidden from submitter)",
    feedsolve: true,
    competitor: "partial",
    note: "Zonka Enterprise only",
  },
  {
    feature: "Public reply to submitter",
    feedsolve: true,
    competitor: false,
    note: "FeedSolve Growth & Pro plans",
  },
  {
    feature: "Resolution rate as primary dashboard metric",
    feedsolve: true,
    competitor: false,
    note: "Zonka focuses on NPS/CSAT/CES scores",
  },
  {
    feature: "Multiple boards per stakeholder type",
    feedsolve: true,
    competitor: "partial",
    note: "Zonka has surveys per channel, not boards",
  },
  {
    feature: "Anonymous mode per board",
    feedsolve: true,
    competitor: false,
    note: "",
  },
  {
    feature: "Multi-language submission forms",
    feedsolve: true,
    competitor: true,
    note: "",
  },
  {
    feature: "Branded QR codes with logo",
    feedsolve: true,
    competitor: false,
    note: "FeedSolve Growth & Pro plans",
  },
  {
    feature: "NPS / CSAT / CES survey templates",
    feedsolve: false,
    competitor: true,
    note: "",
  },
  {
    feature: "Advanced survey analytics and scoring",
    feedsolve: false,
    competitor: true,
    note: "",
  },
  {
    feature: "CRM and helpdesk integrations",
    feedsolve: false,
    competitor: true,
    note: "Zonka integrates with Salesforce, HubSpot, Zendesk",
  },
  {
    feature: "Free plan available",
    feedsolve: true,
    competitor: false,
    note: "Zonka starts at $49/month",
  },
  {
    feature: "Pricing model",
    feedsolve: false,
    competitor: false,
    note: "FeedSolve: from $19/mo board-based · Zonka: from $49/mo response-based",
  },
];

const faqs = [
  {
    q: "What is the core difference between FeedSolve and Zonka Feedback?",
    a: "Zonka Feedback is a survey platform — it measures how customers feel using NPS, CSAT, and CES scores. FeedSolve is a complaint resolution platform — it measures what your team did using resolution rate. Zonka asks 'how satisfied are you?' FeedSolve asks 'was your complaint resolved?' and then ensures the answer is yes.",
  },
  {
    q: "Does Zonka Feedback have a resolution workflow?",
    a: "Zonka has some ticketing-like features in its Enterprise tier — basic assignment and internal notes. However, its core product is survey collection and analytics, not resolution management. There is no Kanban-style status workflow, no unique tracking code for submitters to check progress, and no resolution rate metric visible on the primary dashboard.",
  },
  {
    q: "Is FeedSolve cheaper than Zonka Feedback?",
    a: "Significantly cheaper for most SMBs. FeedSolve has a free plan and a Starter plan at $19/month with flat board-based pricing. Zonka Feedback starts at $49/month and scales by response volume. For a small manufacturer or restaurant chain, FeedSolve delivers complaint resolution capability at less than half the price of Zonka's entry tier.",
  },
  {
    q: "Can I use both FeedSolve and Zonka for different purposes?",
    a: "Yes. Zonka is well-suited for periodic NPS measurement and satisfaction benchmarking across your customer base. FeedSolve is purpose-built for ongoing operational complaint management — complaints from customers, suppliers, distributors, and staff that must be assigned, tracked, and resolved. Many SMBs run Zonka for quarterly satisfaction surveys and FeedSolve for daily complaint resolution.",
  },
  {
    q: "Which is better for supplier feedback management?",
    a: "FeedSolve is specifically built for this use case. Suppliers scan a QR code on a delivery note, submit a complaint, and receive a tracking code. Your quality team manages it through a Kanban board and sends a documented resolution response. Zonka is not designed for external supplier feedback management — its survey model assumes a customer satisfaction context, not an operational complaint context.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "FeedSolve vs Zonka Feedback",
  description:
    "Comparison of FeedSolve and Zonka Feedback for SMB complaint management and resolution tracking.",
  url: "https://feedsolve.com/compare/feedsolve-vs-zonka/",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
};

export default function VsZonka() {
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
            }}
          >
            <Link
              href="/"
              style={{ color: "var(--teal-light)", textDecoration: "none" }}
            >
              Home
            </Link>
            <ChevronRight size={13} />
            <span>Compare</span>
            <ChevronRight size={13} />
            <span style={{ color: "rgba(255,255,255,0.65)" }}>
              FeedSolve vs Zonka Feedback
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
            Side-by-side comparison
          </div>

          <h1
            style={{
              color: "white",
              fontSize: "clamp(34px, 4.5vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 20,
              maxWidth: 760,
            }}
          >
            FeedSolve vs Zonka Feedback
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 20,
              lineHeight: 1.65,
              maxWidth: 620,
              marginBottom: 40,
            }}
          >
            Zonka measures satisfaction scores. FeedSolve measures resolution
            rate — did you actually fix it? Built for SMBs who need to close
            issues, not just measure them.
          </p>

          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "24px 28px",
              maxWidth: 680,
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
              <strong style={{ color: "white" }}>Choose Zonka Feedback</strong>{" "}
              if your primary goal is measuring NPS, CSAT, and CES scores with
              advanced survey analytics and CRM integrations.{" "}
              <strong style={{ color: "white" }}>Choose FeedSolve</strong> if
              your goal is resolving complaints from customers, suppliers, and
              staff with full tracking, assignment, and documented resolution —
              at a fraction of the price.
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
            <Link
              href="/blog/feedsolve-vs-typeform/"
              className="btn-outline"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}
            >
              Read more comparisons
            </Link>
          </div>
        </div>
      </section>

      {/* THE CORE DISTINCTION */}
      <section style={{ background: "var(--bg-warm)", padding: "64px 32px" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              className="section-label"
              style={{ display: "inline-flex", marginBottom: 16 }}
            >
              The core distinction
            </div>
            <h2 style={{ color: "var(--navy)" }}>
              Two different questions. Two different tools.
            </h2>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            <div
              style={{
                background: "white",
                border: "1.5px solid var(--border)",
                borderRadius: 16,
                padding: "32px 28px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: "#F3E5F5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <TrendingUp size={24} style={{ color: "#7B1FA2" }} />
              </div>
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
                Zonka Feedback asks
              </div>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: "var(--navy)",
                  marginBottom: 12,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                &ldquo;How satisfied are you?&rdquo;
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-mid)",
                  lineHeight: 1.65,
                }}
              >
                NPS, CSAT, CES scores. Customer sentiment measurement. Survey
                analytics dashboards. Useful for benchmarking and trend
                analysis.
              </p>
            </div>
            <div
              style={{
                background: "var(--navy)",
                border: "1.5px solid rgba(58,143,165,0.4)",
                borderRadius: 16,
                padding: "32px 28px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: "rgba(58,143,165,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <Check size={24} style={{ color: "var(--teal-light)" }} />
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
                FeedSolve asks
              </div>
              <div
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: "white",
                  marginBottom: 12,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                &ldquo;Was it resolved?&rdquo;
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.65,
                }}
              >
                Resolution rate, assignment, tracking codes, documented fixes.
                Operational accountability. Makes &ldquo;did you fix it?&rdquo;
                the north star.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VS PRODUCT CARDS */}
      <section style={{ background: "white", padding: "48px 32px 32px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
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
                Zonka Feedback
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: 12,
                }}
              >
                Survey-first platform
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {[
                  "QR code distribution",
                  "NPS / CSAT / CES templates",
                  "Multi-language surveys",
                  "CRM integrations (Enterprise)",
                  "Advanced analytics",
                ].map((f) => (
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
                {[
                  "No submitter tracking codes",
                  "No Kanban resolution workflow",
                  "No resolution rate metric",
                  "No free plan — from $49/mo",
                ].map((f) => (
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
                <strong>Pricing:</strong> From $49/month · Response-based
                scaling
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
                Complaint resolution platform
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {[
                  "Zero-login QR + link submission",
                  "Unique #FSV-XXXX tracking codes",
                  "Kanban workflow with assignment",
                  "Public reply to submitters",
                  "Resolution rate as primary metric",
                  "Branded QR with logo (Growth+)",
                  "Multi-language forms",
                  "Employee problem reporting",
                  "Free to start — from $19/mo",
                ].map((f) => (
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
                Starter $19/mo · Board-based flat pricing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ background: "white", padding: "48px 32px 80px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ color: "var(--navy)" }}>Full feature comparison</h2>
          </div>
          <div
            style={{
              maxWidth: 860,
              margin: "0 auto",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid var(--border)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th
                    style={{
                      background: "var(--navy)",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      padding: "16px 24px",
                      textAlign: "left",
                      width: "45%",
                    }}
                  >
                    Feature
                  </th>
                  <th
                    style={{
                      background: "var(--navy)",
                      color: "var(--teal-light)",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      padding: "16px 24px",
                      textAlign: "center",
                    }}
                  >
                    FeedSolve
                  </th>
                  <th
                    style={{
                      background: "var(--navy)",
                      color: "rgba(255,255,255,0.5)",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.07em",
                      textTransform: "uppercase",
                      padding: "16px 24px",
                      textAlign: "center",
                    }}
                  >
                    Zonka
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      borderBottom: "1px solid var(--border)",
                      background: i % 2 === 0 ? "white" : "var(--bg)",
                    }}
                  >
                    <td
                      style={{
                        padding: "14px 24px",
                        fontSize: 14,
                        color: "var(--text)",
                        fontWeight: 500,
                      }}
                    >
                      {row.feature}
                      {row.note && !row.note.includes("·") && (
                        <div
                          style={{
                            fontSize: 11,
                            color: "var(--text-light)",
                            marginTop: 3,
                          }}
                        >
                          {row.note}
                        </div>
                      )}
                    </td>
                    <td style={{ padding: "14px 24px", textAlign: "center" }}>
                      {row.feedsolve === true ? (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            color: "#16A34A",
                            fontWeight: 600,
                            fontSize: 13,
                          }}
                        >
                          <Check size={14} /> Yes
                        </span>
                      ) : row.note?.includes("FeedSolve") &&
                        row.note?.includes("·") ? (
                        <span
                          style={{ fontSize: 12, color: "var(--text-mid)" }}
                        >
                          {row.note
                            .split("·")[0]
                            .replace("FeedSolve: ", "")
                            .trim()}
                        </span>
                      ) : (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            color: "#DC2626",
                            fontWeight: 600,
                            fontSize: 13,
                          }}
                        >
                          <X size={14} /> No
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "14px 24px", textAlign: "center" }}>
                      {row.competitor === true ? (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            color: "#16A34A",
                            fontWeight: 600,
                            fontSize: 13,
                          }}
                        >
                          <Check size={14} /> Yes
                        </span>
                      ) : row.competitor === "partial" ? (
                        <span
                          style={{
                            fontSize: 12,
                            color: "#E65100",
                            fontWeight: 600,
                          }}
                        >
                          Partial
                        </span>
                      ) : row.note?.includes("·") ? (
                        <span
                          style={{ fontSize: 12, color: "var(--text-mid)" }}
                        >
                          {row.note.split("·")[1]?.trim()}
                        </span>
                      ) : (
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 4,
                            color: "#DC2626",
                            fontWeight: 600,
                            fontSize: 13,
                          }}
                        >
                          <X size={14} /> No
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            <h2 style={{ color: "var(--navy)" }}>FeedSolve vs Zonka — FAQ</h2>
          </div>
          <div className="faq-wrap">
            {faqs.map((faq, i) => (
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
            Start measuring what actually matters.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 18,
              marginBottom: 36,
            }}
          >
            Resolution rate. Not just satisfaction scores. Free to start.
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
              href="/compare/feedsolve-vs-typeform/"
              className="btn-outline"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "white",
                fontSize: 17,
                padding: "14px 28px",
              }}
            >
              Compare vs Typeform
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
            More comparisons
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 14,
            }}
          >
            {[
              {
                href: "/compare/feedsolve-vs-google-forms/",
                label: "FeedSolve vs Google Forms",
                sub: "Spreadsheet vs resolution workflow",
              },
              {
                href: "/compare/feedsolve-vs-typeform/",
                label: "FeedSolve vs Typeform",
                sub: "Survey builder vs resolution platform",
              },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
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
                  {c.label}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-light)" }}>
                  {c.sub}
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
