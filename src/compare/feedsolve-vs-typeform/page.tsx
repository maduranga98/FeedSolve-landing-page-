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
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "FeedSolve vs Typeform: Survey Builder vs Complaint Resolution Platform",
  description:
    "Typeform builds beautiful surveys. FeedSolve resolves complaints. Compare tracking codes, Kanban workflows, multi-language forms, and pricing for SMB feedback management.",
  openGraph: {
    title:
      "FeedSolve vs Typeform: Survey Builder vs Complaint Resolution Platform",
    description:
      "Typeform builds beautiful surveys. FeedSolve resolves complaints. See the full comparison for SMB feedback management.",
    url: "https://feedsolve.com/compare/feedsolve-vs-typeform/",
    type: "website",
  },
  alternates: {
    canonical: "https://feedsolve.com/compare/feedsolve-vs-typeform/",
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
    feature: "QR code per feedback board",
    feedsolve: true,
    competitor: "partial",
    note: "Typeform has QR for forms, not boards",
  },
  {
    feature: "Unique tracking code per submission",
    feedsolve: true,
    competitor: false,
    note: "",
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
    note: "",
  },
  {
    feature: "Assign submission to team member",
    feedsolve: true,
    competitor: false,
    note: "",
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
    feature: "Resolution rate dashboard",
    feedsolve: true,
    competitor: false,
    note: "",
  },
  {
    feature: "Multiple boards per stakeholder type",
    feedsolve: true,
    competitor: false,
    note: "",
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
    note: "Typeform via Logic & translation layers",
  },
  {
    feature: "Branded QR codes with logo",
    feedsolve: true,
    competitor: false,
    note: "FeedSolve Growth & Pro plans",
  },
  {
    feature: "Conversational one-question form",
    feedsolve: false,
    competitor: true,
    note: "",
  },
  {
    feature: "Conditional logic / branching",
    feedsolve: false,
    competitor: true,
    note: "",
  },
  {
    feature: "Built-in NPS / CSAT templates",
    feedsolve: false,
    competitor: true,
    note: "",
  },
  {
    feature: "Free plan available",
    feedsolve: true,
    competitor: true,
    note: "Typeform free: 10 responses/month",
  },
  {
    feature: "Pricing model",
    feedsolve: false,
    competitor: false,
    note: "FeedSolve: board-based from $19/mo · Typeform: from $29/mo per responses",
  },
];

const faqs = [
  {
    q: "What is the main difference between FeedSolve and Typeform?",
    a: "Typeform is a form and survey builder optimised for beautiful, high-completion data collection. FeedSolve is a complaint resolution platform — the form is just the intake channel. After submission, FeedSolve adds team assignment, status tracking, tracking codes for submitters, and a resolution rate dashboard. Typeform ends at the Submit button. FeedSolve starts there.",
  },
  {
    q: "Can Typeform do what FeedSolve does if I build the workflow manually?",
    a: "Partially. You could export Typeform responses to a spreadsheet and manually track resolution in Trello or Asana. But you would not have automatic tracking codes, a public tracking page for submitters, a built-in resolution rate metric, or a purpose-built Kanban dashboard. The overhead of manual workflow management typically negates the simplicity of the form tool.",
  },
  {
    q: "Is FeedSolve cheaper than Typeform?",
    a: "FeedSolve's Starter plan is $19/month with flat board-based pricing. Typeform's equivalent tier starts at $29/month and is response-based, meaning costs scale with volume. For SMBs handling 500+ complaint submissions per month, FeedSolve's flat pricing is significantly more economical.",
  },
  {
    q: "Can I use both FeedSolve and Typeform for different purposes?",
    a: "Yes, and many teams do. Typeform is well-suited for periodic satisfaction surveys, lead generation forms, and branded questionnaires. FeedSolve is purpose-built for ongoing operational complaint management — customers, suppliers, and distributors submitting issues that must be assigned, tracked, and resolved. They are complementary, not mutually exclusive.",
  },
  {
    q: "Does FeedSolve have multi-language forms like Typeform?",
    a: "Yes. FeedSolve supports multi-language submission forms — critical for businesses operating across South Asia, the Middle East, and East Africa. Submitters see the form in their preferred language. Request a language and it will be added. All submissions arrive in one unified dashboard for the management team regardless of submission language.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "FeedSolve vs Typeform",
  description:
    "Comparison of FeedSolve and Typeform for SMB feedback management and complaint resolution.",
  url: "https://feedsolve.com/compare/feedsolve-vs-typeform/",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
};

export default function VsTypeform() {
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
              FeedSolve vs Typeform
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
            FeedSolve vs Typeform
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
            Typeform is built for surveys. FeedSolve is built for
            accountability. Every submitter gets a tracking code. Your team gets
            a Kanban board.
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
              <strong style={{ color: "white" }}>Choose Typeform</strong> for
              branded surveys, NPS measurement, lead-gen funnels, and
              conversational forms.{" "}
              <strong style={{ color: "white" }}>Choose FeedSolve</strong> for
              operational complaints from customers, suppliers, and distributors
              that need to be assigned, tracked, resolved, and communicated back
              to the submitter.
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
              Read full comparison guide
            </Link>
          </div>
        </div>
      </section>

      {/* VS CARDS */}
      <section style={{ background: "var(--bg-warm)", padding: "64px 32px" }}>
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
            {/* Typeform card */}
            <div
              style={{
                background: "white",
                border: "1.5px solid var(--border)",
                borderRadius: 16,
                padding: "32px 28px",
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
                Typeform
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                Beautiful surveys
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-mid)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                A conversational form builder with high completion rates and
                branded aesthetics. Excellent for market research, NPS, lead
                generation, and event registrations.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[
                  "Conversational one-question forms",
                  "Conditional logic and branching",
                  "NPS / CSAT / CES templates",
                  "High visual customisation",
                  "Zero-login submission",
                ].map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      fontSize: 14,
                      color: "var(--text)",
                    }}
                  >
                    <Check
                      size={14}
                      style={{ color: "#16A34A", flexShrink: 0 }}
                    />{" "}
                    {f}
                  </div>
                ))}
                {[
                  "No tracking codes for submitters",
                  "No resolution workflow",
                  "No team assignment",
                  "No resolution rate metric",
                ].map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      fontSize: 14,
                      color: "var(--text-light)",
                    }}
                  >
                    <X size={14} style={{ color: "#DC2626", flexShrink: 0 }} />{" "}
                    {f}
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 24,
                  padding: "14px 16px",
                  background: "var(--bg)",
                  borderRadius: 10,
                  fontSize: 13,
                  color: "var(--text-mid)",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "var(--navy)" }}>Best for:</strong>{" "}
                Surveys, NPS, lead generation, branded questionnaires
              </div>
            </div>

            {/* FeedSolve card */}
            <div
              style={{
                background: "var(--navy)",
                border: "1.5px solid rgba(58,143,165,0.4)",
                borderRadius: 16,
                padding: "32px 28px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  left: 28,
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
                Built for resolution
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
                  fontSize: 22,
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 16,
                  letterSpacing: "-0.02em",
                }}
              >
                Complaints resolved
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                A complaint resolution platform built around QR-code intake,
                zero-login submission, Kanban workflow, tracking codes, and
                resolution rate — for physical-world SMBs.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[
                  "Zero-login submission",
                  "QR code per board (with branding)",
                  "Unique #FSV-XXXX tracking code",
                  "Kanban resolution workflow",
                  "Team assignment + priority",
                  "Public reply to submitter",
                  "Resolution rate dashboard",
                  "Multi-language forms",
                  "Employee problem reporting",
                ].map((f) => (
                  <div
                    key={f}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      fontSize: 14,
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    <Check
                      size={14}
                      style={{ color: "var(--teal-light)", flexShrink: 0 }}
                    />{" "}
                    {f}
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 24,
                  padding: "14px 16px",
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 10,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                }}
              >
                <strong style={{ color: "white" }}>Best for:</strong>{" "}
                Operational complaints from customers, suppliers, distributors,
                and staff
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ background: "white", padding: "80px 32px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              className="section-label"
              style={{ display: "inline-flex", marginBottom: 16 }}
            >
              Full feature comparison
            </div>
            <h2 style={{ color: "var(--navy)" }}>Everything side by side</h2>
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
                      width: "22%",
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
                      width: "22%",
                    }}
                  >
                    Typeform
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
          <p
            style={{
              textAlign: "center",
              fontSize: 13,
              color: "var(--text-light)",
              marginTop: 20,
            }}
          >
            Both tools coexist naturally — Typeform for periodic satisfaction
            surveys, FeedSolve for ongoing operational complaint resolution.
          </p>
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
              FeedSolve vs Typeform — FAQ
            </h2>
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
            Ready to close every feedback loop?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 18,
              marginBottom: 36,
            }}
          >
            Set up your first complaint board in under 2 minutes. Free to start,
            no credit card.
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
              href="/compare/feedsolve-vs-google-forms/"
              className="btn-outline"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "white",
                fontSize: 17,
                padding: "14px 28px",
              }}
            >
              Compare vs Google Forms
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
