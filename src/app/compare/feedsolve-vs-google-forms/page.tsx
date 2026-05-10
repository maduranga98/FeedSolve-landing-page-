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
  title: "FeedSolve vs Google Forms: What Happens After Someone Submits?",
  description:
    "Google Forms collects responses. FeedSolve resolves them. Compare tracking codes, Kanban workflows, resolution rate, and pricing for SMB complaint management.",
  openGraph: {
    title: "FeedSolve vs Google Forms: What Happens After Someone Submits?",
    description:
      "Google Forms collects responses. FeedSolve resolves them. See the full comparison for SMB complaint and feedback management.",
    url: "https://feedsolve.com/compare/feedsolve-vs-google-forms/",
    type: "website",
  },
  alternates: {
    canonical: "https://feedsolve.com/compare/feedsolve-vs-google-forms/",
    languages: {
      "en-GB": "https://feedsolve.com/compare/feedsolve-vs-google-forms/",
      "en-AU": "https://feedsolve.com/compare/feedsolve-vs-google-forms/",
      "en-US": "https://feedsolve.com/compare/feedsolve-vs-google-forms/",
      en: "https://feedsolve.com/compare/feedsolve-vs-google-forms/",
      "x-default": "https://feedsolve.com/compare/feedsolve-vs-google-forms/",
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
    feature: "QR code per feedback board",
    feedsolve: true,
    competitor: false,
    note: "Google Forms has no board concept",
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
    note: "Growth & Pro plans",
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
    competitor: "partial",
    note: "Google Forms has no board-level control",
  },
  {
    feature: "Multi-language submission forms",
    feedsolve: true,
    competitor: false,
    note: "",
  },
  {
    feature: "Branded QR codes with logo",
    feedsolve: true,
    competitor: false,
    note: "Growth & Pro plans",
  },
  {
    feature: "Email notifications on new submission",
    feedsolve: true,
    competitor: true,
    note: "Google Forms via script/addon",
  },
  {
    feature: "Mobile-optimised form",
    feedsolve: true,
    competitor: true,
    note: "",
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
    note: "FeedSolve: board-based flat pricing · Google Forms: free (Google Workspace)",
  },
];

const faqs = [
  {
    q: "Can Google Forms track whether a complaint was resolved?",
    a: "No. Google Forms produces a spreadsheet row on submission. There is no built-in status tracking, team assignment, or way for the submitter to check whether their complaint was acted on. You would need to manually update a separate system and contact the submitter independently.",
  },
  {
    q: "Is FeedSolve free like Google Forms?",
    a: "FeedSolve has a free plan that includes 2 feedback boards and unlimited submissions. Paid plans start at $19/month with flat board-based pricing - no per-seat fees. Google Forms is free with Google Workspace but has no resolution workflow at any price.",
  },
  {
    q: "Can I import my existing Google Forms responses into FeedSolve?",
    a: "Yes. FeedSolve supports CSV import, so you can export your Google Sheets data and import historical submissions into a resolution workflow without losing your existing records.",
  },
  {
    q: "Do my submitters need to do anything differently if I switch from Google Forms?",
    a: "No. From the submitter's perspective, both tools present a simple web form on their phone. The difference is entirely on your side - FeedSolve adds assignment, tracking codes, status updates, and a resolution rate dashboard that Google Forms does not provide.",
  },
  {
    q: "Which is better for supplier feedback - Google Forms or FeedSolve?",
    a: "FeedSolve is built for this use case. Suppliers scan a QR code on a delivery note, submit a quality complaint, and receive a tracking code to follow progress. Your quality team sees it in a Kanban dashboard, assigns it to the right person, and resolves it with a documented response. Google Forms produces a spreadsheet row with no workflow, no tracking, and no resolution confirmation.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "FeedSolve vs Google Forms",
  description:
    "Comparison of FeedSolve and Google Forms for SMB feedback management and complaint tracking.",
  url: "https://feedsolve.com/compare/feedsolve-vs-google-forms/",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
};

export default function VsGoogleForms() {
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
          {/* Breadcrumb */}
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
            <span style={{ color: "rgba(255,255,255,0.45)" }}>Compare</span>
            <ChevronRight size={13} />
            <span style={{ color: "rgba(255,255,255,0.65)" }}>
              FeedSolve vs Google Forms
            </span>
          </div>

          {/* Badge */}
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
            FeedSolve vs Google Forms
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
            Google Forms collects responses. FeedSolve resolves them.
            Here&apos;s what happens after someone hits Submit.
          </p>

          {/* Quick answer */}
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
              When comparing FeedSolve vs Google Forms for complaint tracking, <strong style={{ color: "white" }}>choose Google Forms</strong> if
              you need a free survey tool for internal data collection or
              one-off registrations.{" "}
              <strong style={{ color: "white" }}>Choose FeedSolve</strong> if
              you need external stakeholders - customers, suppliers,
              distributors - to submit complaints that your team then assigns,
              tracks, and resolves with full accountability.
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
              href="/blog/google-forms-alternative-complaint-tracking/"
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
            {/* Google Forms card */}
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
                Google Forms
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
                Collect responses
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-mid)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                A free, flexible form builder that produces a spreadsheet of
                responses. Excellent for surveys, registrations, and internal
                data collection. The process ends at the Submit button.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[
                  "Free with Google Workspace",
                  "Zero-login submission",
                  "Mobile-friendly forms",
                  "Email notification (via addon)",
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
                  "No tracking codes",
                  "No Kanban workflow",
                  "No resolution rate",
                  "No public reply to submitter",
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
                Internal surveys, event registrations, one-time data collection
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
                Collect + resolve
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                A feedback management platform that adds a full resolution
                workflow after collection - tracking codes, team assignment,
                Kanban board, public replies, and resolution rate metric.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                {[
                  "Zero-login submission",
                  "QR code per board",
                  "Unique #FSV-XXXX tracking code",
                  "Kanban resolution workflow",
                  "Team assignment + priority",
                  "Public reply to submitter",
                  "Resolution rate dashboard",
                  "Multi-language forms",
                  "Branded QR codes",
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
                <strong style={{ color: "white" }}>Best for:</strong> External
                stakeholder complaints - customers, suppliers, distributors,
                tenants
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
                    Google Forms
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
                      {row.note && (
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
                      ) : row.feedsolve === false &&
                        row.note?.includes("FeedSolve:") ? (
                        <span
                          style={{ fontSize: 12, color: "var(--text-mid)" }}
                        >
                          {row.note.split("·")[0].replace("FeedSolve: ", "")}
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

      {/* THE REAL DIFFERENCE */}
      <section style={{ background: "var(--bg-warm)", padding: "80px 32px" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              className="section-label"
              style={{ display: "inline-flex", marginBottom: 16 }}
            >
              The real difference
            </div>
            <h2 style={{ color: "var(--navy)" }}>
              Same form. Completely different outcome.
            </h2>
            <p
              style={{
                color: "var(--text-mid)",
                fontSize: 18,
                marginTop: 16,
                lineHeight: 1.65,
              }}
            >
              A supplier reports a quality defect. Here&apos;s what happens in
              each system.
            </p>
          </div>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}
          >
            {/* Google Forms scenario */}
            <div
              style={{
                background: "#FFF5F5",
                border: "1.5px solid #FECACA",
                borderRadius: 16,
                padding: 28,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#DC2626",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <X size={14} /> Via Google Forms
              </div>
              {[
                "Supplier fills in the Google Form",
                "Response appears in row 47 of a spreadsheet",
                "Quality manager may or may not check the sheet",
                "No one is assigned ownership",
                "Supplier follows up by WhatsApp 3 days later",
                "Team searches the spreadsheet to find the row",
                "Issue resolved informally - no record",
                "Supplier never learns it was fixed",
              ].map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#FECACA",
                      color: "#DC2626",
                      fontSize: 11,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    {i + 1}
                  </div>
                  <span
                    style={{ fontSize: 14, color: "#7F1D1D", lineHeight: 1.5 }}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>

            {/* FeedSolve scenario */}
            <div
              style={{
                background: "#F0FDF4",
                border: "1.5px solid #BBF7D0",
                borderRadius: 16,
                padding: 28,
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "#16A34A",
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Check size={14} /> Via FeedSolve
              </div>
              {[
                "Supplier scans QR on delivery note - submits defect report",
                "Receives tracking code #FSV-1089 on thank-you screen",
                "Quality manager gets email notification instantly",
                "Assigned to quality officer, priority set to High",
                "Status changes to In Progress - visible to supplier",
                "CAPA documented in internal notes",
                "Issue resolved - public reply sent to supplier",
                "Supplier checks tracking code: 'Resolved - replacement dispatched'",
              ].map((step, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: 12,
                    marginBottom: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      background: "#BBF7D0",
                      color: "#16A34A",
                      fontSize: 11,
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: 1,
                    }}
                  >
                    {i + 1}
                  </div>
                  <span
                    style={{ fontSize: 14, color: "#14532D", lineHeight: 1.5 }}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "white", padding: "80px 32px" }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              className="section-label"
              style={{ display: "inline-flex", marginBottom: 16 }}
            >
              <HelpCircle size={13} /> Common questions
            </div>
            <h2 style={{ color: "var(--navy)" }}>
              FeedSolve vs Google Forms - FAQ
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
            Ready to go beyond the spreadsheet?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 18,
              marginBottom: 36,
            }}
          >
            Set up your first feedback board in under 2 minutes. Free to start.
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

      {/* Other comparisons */}
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
                href: "/compare/feedsolve-vs-typeform/",
                label: "FeedSolve vs Typeform",
                sub: "Survey builder vs resolution platform",
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
                  transition: "border-color 0.2s",
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
