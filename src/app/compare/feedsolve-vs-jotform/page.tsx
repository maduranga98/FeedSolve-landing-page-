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
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "FeedSolve vs JotForm: QR Feedback That Resolves, Not Just Collects",
  description:
    "JotForm builds the form. FeedSolve resolves the feedback. Compare QR code feedback, submitter tracking codes, resolution workflow, and pricing for SMBs.",
  openGraph: {
    title: "FeedSolve vs JotForm: QR Feedback That Resolves, Not Just Collects",
    description:
      "JotForm builds the form. FeedSolve resolves the feedback. See which is right for QR code feedback and complaint resolution.",
    url: "https://feedsolve.com/compare/feedsolve-vs-jotform/",
    type: "website",
  },
  alternates: {
    canonical: "https://feedsolve.com/compare/feedsolve-vs-jotform/",
    languages: {
      "en-GB": "https://feedsolve.com/compare/feedsolve-vs-jotform/",
      "en-AU": "https://feedsolve.com/compare/feedsolve-vs-jotform/",
      "en-US": "https://feedsolve.com/compare/feedsolve-vs-jotform/",
      en: "https://feedsolve.com/compare/feedsolve-vs-jotform/",
      "x-default": "https://feedsolve.com/compare/feedsolve-vs-jotform/",
    },
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
    feature: "Drag-and-drop form builder + templates",
    feedsolve: "partial",
    competitor: true,
    note: "JotForm has 10,000+ form templates",
  },
  {
    feature: "Unique tracking code per submission",
    feedsolve: true,
    competitor: false,
    note: "JotForm gives no submitter tracking code",
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
    note: "JotForm Tables show form data, not a resolution board",
  },
  {
    feature: "Assign submission to team member",
    feedsolve: true,
    competitor: "partial",
    note: "JotForm has approval flows, not complaint ownership",
  },
  {
    feature: "Internal notes (hidden from submitter)",
    feedsolve: true,
    competitor: false,
    note: "",
  },
  {
    feature: "Public reply to submitter",
    feedsolve: true,
    competitor: false,
    note: "FeedSolve Growth & Pro plans",
  },
  {
    feature: "Resolution rate as primary metric",
    feedsolve: true,
    competitor: false,
    note: "JotForm reports submission counts, not resolution",
  },
  {
    feature: "Branded QR codes with logo",
    feedsolve: true,
    competitor: "partial",
    note: "JotForm recolours QR codes but not full brand boards",
  },
  {
    feature: "Multi-language submission forms",
    feedsolve: true,
    competitor: true,
    note: "",
  },
  {
    feature: "Payment collection on forms",
    feedsolve: false,
    competitor: true,
    note: "",
  },
  {
    feature: "100+ third-party integrations",
    feedsolve: false,
    competitor: true,
    note: "JotForm integrates broadly across SaaS tools",
  },
  {
    feature: "Free plan available",
    feedsolve: true,
    competitor: true,
    note: "",
  },
  {
    feature: "Pricing model",
    feedsolve: false,
    competitor: false,
    note: "FeedSolve: from $19/mo board-based · JotForm: from $34/mo submission-based",
  },
];

const faqs = [
  {
    q: "What is the core difference between FeedSolve and JotForm?",
    a: "JotForm is a form builder - it is excellent at creating forms and QR codes that collect responses into a table. FeedSolve is a complaint resolution platform - it takes the feedback a QR code collects and assigns, tracks, and resolves it. JotForm answers 'did they fill out the form?' FeedSolve answers 'was the issue resolved?' If you only need to capture responses, JotForm is great; if you need to act on them and close the loop, FeedSolve is purpose-built for it.",
  },
  {
    q: "Does JotForm have a complaint resolution workflow?",
    a: "Not really. JotForm offers Tables (a spreadsheet-style view of submissions) and Approvals (a yes/no routing flow), but neither is a complaint resolution board. There is no unique submitter-facing tracking code, no Kanban status flow from Received to Resolved, no public reply to the submitter, and no resolution rate metric. FeedSolve is built around exactly those things.",
  },
  {
    q: "Can JotForm give submitters a tracking code to follow their complaint?",
    a: "No. JotForm assigns internal submission IDs, but there is no submitter-facing tracking page where a customer can enter a code and see live status. FeedSolve issues a unique #FSV-XXXX code on every submission, and the submitter can check progress anytime with no account and no login - like tracking a parcel.",
  },
  {
    q: "Should I use JotForm or FeedSolve for QR code feedback?",
    a: "Use JotForm if you want a versatile QR form for one-off data capture - event sign-ups, payments, surveys - with thousands of templates. Use FeedSolve if the QR code is collecting feedback or complaints that someone needs to own and resolve. FeedSolve adds the tracking code, the resolution board, the public reply, and the resolution rate that turn collected feedback into closed issues.",
  },
  {
    q: "Is FeedSolve cheaper than JotForm?",
    a: "For complaint resolution, yes. Both have a free plan. FeedSolve's paid plans start at $19/month with flat, board-based pricing. JotForm's paid plans start around $34/month and scale by monthly submission limits. If your goal is resolving feedback rather than collecting high volumes of form data, FeedSolve delivers the resolution workflow at a lower entry price.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "FeedSolve vs JotForm",
  description:
    "Comparison of FeedSolve and JotForm for QR code feedback collection and complaint resolution.",
  url: "https://feedsolve.com/compare/feedsolve-vs-jotform/",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
};

export default function VsJotForm() {
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
              FeedSolve vs JotForm
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
            FeedSolve vs JotForm
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
            JotForm builds the form. FeedSolve resolves the feedback. Both make
            QR codes - only one assigns, tracks, and closes the issue with a
            submitter tracking code.
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
              <strong style={{ color: "white" }}>Choose JotForm</strong> if you
              need a versatile form and QR builder with thousands of templates,
              payments, and broad integrations for general data capture.{" "}
              <strong style={{ color: "white" }}>Choose FeedSolve</strong> if the
              QR code is collecting feedback or complaints that someone must own
              and resolve - with tracking codes, a resolution board, and a public
              reply to the submitter.
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
              href="/compare/feedsolve-vs-zonka/"
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
              Two different jobs. Two different tools.
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
                  background: "#FFF3E0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}
              >
                <FileText size={24} style={{ color: "#E65100" }} />
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
                JotForm does
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
                &ldquo;Build the form.&rdquo;
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-mid)",
                  lineHeight: 1.65,
                }}
              >
                Drag-and-drop forms, QR codes, 10,000+ templates, payments, and
                integrations. Collects responses into a table. Great for general
                data capture.
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
                FeedSolve does
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
                &ldquo;Resolve the feedback.&rdquo;
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.65,
                }}
              >
                Tracking codes, assignment, Kanban resolution, public replies,
                and resolution rate. Turns collected feedback into closed issues.
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
                JotForm
              </div>
              <div
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: 12,
                }}
              >
                Form-first builder
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {[
                  "QR code + link forms",
                  "10,000+ form templates",
                  "Payment collection",
                  "100+ integrations",
                  "Multi-language forms",
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
                  "No public reply to submitters",
                  "No resolution rate metric",
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
                <strong>Pricing:</strong> Free plan · Paid from ~$34/month ·
                Submission-based scaling
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
                  "Public tracking page for submitters",
                  "Kanban workflow with assignment",
                  "Public reply to submitters",
                  "Resolution rate as primary metric",
                  "Branded QR with logo (Growth+)",
                  "Multi-language forms",
                  "Free to start - from $19/mo",
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
                    JotForm
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
                      ) : row.feedsolve === "partial" ? (
                        <span
                          style={{
                            fontSize: 12,
                            color: "#E65100",
                            fontWeight: 600,
                          }}
                        >
                          Partial
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
            <h2 style={{ color: "var(--navy)" }}>FeedSolve vs JotForm - FAQ</h2>
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
            Collect feedback - then actually resolve it.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 18,
              marginBottom: 36,
            }}
          >
            Tracking codes and a resolution board, not just a form. Free to start.
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
              href="/qr-code-feedback/"
              className="btn-outline"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "white",
                fontSize: 17,
                padding: "14px 28px",
              }}
            >
              See QR code feedback
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
                href: "/compare/feedsolve-vs-zonka/",
                label: "FeedSolve vs Zonka Feedback",
                sub: "Survey scores vs resolution rate",
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
