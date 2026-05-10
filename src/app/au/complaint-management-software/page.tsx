// src/app/au/complaint-management-software/page.tsx
// Target keyword: "complaint management software Australia"
// Market: Australia

import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  X,
  Lock,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";

export const metadata: Metadata = {
  title:
    "Complaint Management Software for Australian Small Business | FeedSolve",
  description:
    "FeedSolve is complaint management software built for Australian SMBs. QR intake, zero-login submission, Kanban resolution workflow, and audit trail aligned with Australian Consumer Law. Free to start.",
  openGraph: {
    title: "Complaint Management Software Australia | FeedSolve",
    description:
      "Track and resolve every customer complaint for your Australian SMB. Zero-login QR submission, tracking codes, resolution rate dashboard. From A$0/month.",
    url: "https://feedsolve.com/au/complaint-management-software/",
    type: "website",
  },
  alternates: {
    canonical: "https://feedsolve.com/au/complaint-management-software/",
    languages: {
      "en-AU": "https://feedsolve.com/au/complaint-management-software/",
      "x-default": "https://feedsolve.com/",
    },
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Complaint Management Software for Australian Small Business",
  description:
    "FeedSolve complaint management software for Australian SMBs — QR intake, Kanban workflow, tracking codes, and ACL-aligned audit trail.",
  url: "https://feedsolve.com/au/complaint-management-software/",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does FeedSolve help Australian businesses meet Australian Consumer Law (ACL) complaint requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010) requires that businesses handle consumer complaints in an accessible and timely manner. FeedSolve's zero-login complaint submission via QR code or web link meets the accessibility requirement. The full audit trail — including timestamps, assignee history, and resolution confirmation — provides documented evidence of complaint handling consistent with ACL expectations.",
        },
      },
      {
        "@type": "Question",
        name: "Is FeedSolve cheaper than Freshdesk for Australian small businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FeedSolve charges per feedback board, not per agent. The Starter plan is $19 USD/month (approximately A$29/month) with unlimited team members on the board. Freshdesk charges A$22–A$79 per agent per month — a 5-person Australian SMB team pays A$110–A$395/month. For most Australian SMBs, FeedSolve is significantly more cost-effective.",
        },
      },
      {
        "@type": "Question",
        name: "Can Australian customers submit complaints anonymously?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. FeedSolve's anonymous mode lets Australian customers, suppliers, and staff submit complaints without providing contact information. Under the Privacy Act 1988 (Australia), individuals have a right to deal anonymously with organisations where reasonably practicable. FeedSolve's anonymous submission mode directly supports this right.",
        },
      },
    ],
  },
};

const faqs = [
  {
    q: "Does FeedSolve help Australian businesses meet Australian Consumer Law (ACL) complaint requirements?",
    a: "Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010) requires that businesses handle consumer complaints accessibly and in a timely manner. FeedSolve's zero-login QR submission meets the accessibility standard. The full audit trail — timestamps, assignee history, and resolution confirmation — provides documented evidence of complaint handling consistent with ACL expectations and ACCC enforcement guidelines.",
  },
  {
    q: "Is FeedSolve cheaper than Freshdesk for Australian small businesses?",
    a: "FeedSolve charges per feedback board, not per agent. The Starter plan is $19 USD/month (approx. A$29/month) with unlimited team members on that board. Freshdesk charges A$22–A$79 per agent per month — a 5-person team costs A$110–A$395/month. For most Australian SMBs, FeedSolve is significantly more cost-effective with no per-seat penalty as your team grows.",
  },
  {
    q: "Can Australian customers submit complaints anonymously?",
    a: "Yes. FeedSolve's anonymous mode lets Australian customers, suppliers, and staff submit complaints without providing contact information. Under the Privacy Act 1988 (Cth), individuals have a right to interact anonymously where reasonably practicable. FeedSolve's anonymous submission mode directly supports this right — submitters still receive a tracking code to check resolution progress.",
  },
  {
    q: "Does FeedSolve work for Australian hospitality businesses under ASIC or ACCC guidelines?",
    a: "FeedSolve is general-purpose complaint management software for Australian SMBs — hospitality, manufacturing, logistics, retail, and property management. It is not a specialised compliance tool for ASIC-regulated financial services firms. For hospitality, retail, and operations businesses, FeedSolve provides the structured intake and documented resolution process that ACCC-aligned complaint handling requires.",
  },
  {
    q: "Can I run separate complaint boards for different Australian locations or states?",
    a: "Yes. Create a separate feedback board for each location, branch, or state. Each board has its own QR code, category set, and team routing. All submissions appear in one dashboard filtered by board, status, or date — ideal for Australian businesses operating across multiple states or territories.",
  },
];

const comparisonRows = [
  {
    feature: "Zero-login submission (no customer account)",
    feedsolve: true,
    freshdesk: false,
  },
  { feature: "QR code per complaint board", feedsolve: true, freshdesk: false },
  {
    feature: "Unique tracking code per complaint",
    feedsolve: true,
    freshdesk: false,
  },
  {
    feature: "Resolution rate dashboard (not just CSAT)",
    feedsolve: true,
    freshdesk: false,
  },
  {
    feature: "Anonymous mode for sensitive complaints",
    feedsolve: true,
    freshdesk: false,
  },
  {
    feature: "Board-based flat pricing (no per-agent fee)",
    feedsolve: true,
    freshdesk: false,
  },
  { feature: "Setup under 2 minutes", feedsolve: true, freshdesk: false },
  { feature: "Kanban resolution workflow", feedsolve: true, freshdesk: true },
  { feature: "Email notifications", feedsolve: true, freshdesk: true },
  { feature: "Free plan available", feedsolve: true, freshdesk: true },
];

export default function AUComplaintManagementPage() {
  const [openFaq, setOpenFaq] = useState<number>(0);

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
            <span>Australia</span>
            <ChevronRight size={13} />
            <span style={{ color: "rgba(255,255,255,0.65)" }}>
              Complaint Management Software
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
            🇦🇺 Built for Australian Small Business
          </div>

          <h1
            style={{
              color: "white",
              fontSize: "clamp(34px, 4.5vw, 56px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 20,
              maxWidth: 780,
            }}
          >
            Complaint Management Software for Australian Small Business
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 19,
              lineHeight: 1.65,
              maxWidth: 600,
              marginBottom: 40,
            }}
          >
            Australian Consumer Law expects businesses to handle complaints
            accessibly and with documented resolution. FeedSolve gives
            Australian SMBs a zero-login QR complaint intake, Kanban workflow,
            and full audit trail — from A$0/month, no per-agent fees.
          </p>

          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "22px 26px",
              maxWidth: 660,
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
              How FeedSolve helps Australian businesses
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: 15,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              FeedSolve is complaint management software built for Australian
              SMBs. Customers, suppliers, and staff submit complaints via a
              branded QR code or web link — no login, no app, no account
              required. Your team manages every complaint through a Kanban
              dashboard, assigns to the right person, and resolves with a
              documented audit trail consistent with Australian Consumer Law and
              Privacy Act 1988 requirements. Pricing starts free, with paid
              plans from approximately A$29/month — no per-seat fees.
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
              href="/#pricing"
              className="btn-outline"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}
            >
              View pricing in AUD
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: "var(--teal)", padding: "36px 32px" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 20,
            }}
          >
            {[
              {
                value: "< 2 min",
                label: "Setup for your first Australian complaint board",
              },
              {
                value: "Zero",
                label: "Friction — no login required for AU customers",
              },
              {
                value: "~A$29",
                label: "Starting price per month — no per-agent fees",
              },
              {
                value: "100%",
                label: "Audit trail for ACL complaint documentation",
              },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(24px, 3vw, 40px)",
                    fontWeight: 800,
                    color: "white",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.7)",
                    marginTop: 6,
                    lineHeight: 1.4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACL COMPLIANCE SECTION */}
      <section style={{ background: "var(--bg-warm)", padding: "80px 32px" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="section-label" style={{ marginBottom: 20 }}>
            <ShieldCheck size={13} /> Australian Consumer Law & Privacy Act
          </div>
          <h2 style={{ color: "var(--navy)", marginBottom: 20 }}>
            Complaint handling aligned with Australian law
          </h2>
          <p
            style={{
              color: "var(--text-mid)",
              fontSize: 17,
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 680,
            }}
          >
            Australian Consumer Law (ACL) and the Privacy Act 1988 (Cth) set
            expectations for how businesses handle customer complaints and
            personal data. FeedSolve is designed to meet these expectations
            without requiring a compliance team to implement.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {[
              {
                title: "ACL Accessible Complaints",
                body: "ACL expects complaint processes to be accessible without unnecessary barriers. FeedSolve's zero-login QR code submission means any Australian customer can submit a complaint from their phone in under 60 seconds — no account, no app, no password.",
              },
              {
                title: "Privacy Act — Anonymous Access",
                body: "Under the Privacy Act 1988, individuals have a right to interact anonymously where reasonably practicable. FeedSolve's anonymous mode lets submitters report concerns without providing personal information — they still receive a tracking code.",
              },
              {
                title: "ACCC Enforcement Documentation",
                body: "ACCC enforcement actions often examine whether businesses have documented complaint processes. FeedSolve's timestamped audit trail — including assignment history, internal notes, and resolution confirmation — provides this documentation automatically.",
              },
              {
                title: "APPs Data Minimisation",
                body: "Australian Privacy Principles (APPs) require that personal data collected is limited to what's necessary. FeedSolve collects only what submitters voluntarily provide — contact fields are optional, not hidden-required.",
              },
              {
                title: "Multi-State Operations",
                body: "Run separate complaint boards for different Australian states, territories, or locations. Each board has its own QR code and settings. All submissions appear in one dashboard — ideal for businesses operating across NSW, VIC, QLD, WA, and SA.",
              },
              {
                title: "TGA / Industry-Specific Note",
                body: "FeedSolve is general SMB complaint management software. It is not a TGA-compliant adverse event reporting system or an AFCA-registered financial services complaints system. For regulated industry complaints, check your specific industry requirements.",
              },
            ].map((f, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "24px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <Check
                    size={16}
                    style={{ color: "var(--teal)", flexShrink: 0 }}
                  />
                  <h3 style={{ fontSize: 16, color: "var(--navy)", margin: 0 }}>
                    {f.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-mid)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUSTRALIAN INDUSTRY USE CASES */}
      <section style={{ background: "white", padding: "80px 32px" }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: 20 }}>
            Australian industry use cases
          </div>
          <h2 style={{ color: "var(--navy)", marginBottom: 48 }}>
            How Australian businesses use FeedSolve
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {[
              {
                sector: "Australian Restaurants & Cafes",
                body: "QR codes on tables give Australian diners a direct feedback channel — before they post to Google or TripAdvisor. Your floor team resolves the issue during service. Resolution rate tracks operational performance.",
                link: "/au/restaurants/qr-feedback/",
                linkText: "Restaurant feedback Australia →",
              },
              {
                sector: "Australian Manufacturing",
                body: "Give suppliers a QR code on delivery dockets to report quality issues. Every defect is tracked with a unique code, assigned to your quality team, and resolved with a documented CAPA note — audit-ready for AS/NZS ISO 9001.",
                link: "/au/manufacturing/supplier-feedback/",
                linkText: "Supplier feedback AU manufacturing →",
              },
              {
                sector: "Australian Property Management",
                body: "Tenants submit maintenance requests via QR code in the lobby or welcome letter. Every request is tracked to resolution — with full documentation for VCAT, QCAT, or NCAT tenancy disputes under Residential Tenancies Acts.",
                link: "/au/real-estate/tenant-feedback/",
                linkText: "Tenant feedback AU property →",
              },
              {
                sector: "Australian Logistics & Transport",
                body: "Recipients and drivers report delivery issues by scanning a code on the consignment note. Every complaint is tracked, assigned to the right operations team, and resolved with a documented response.",
                link: "/au/logistics/delivery-feedback/",
                linkText: "Delivery complaint tracking AU →",
              },
              {
                sector: "Australian Retail & FMCG",
                body: "Collect in-store and distributor complaints via QR codes at point of sale or on delivery notes. Track every issue to resolution — meeting ACL consumer rights expectations under the Australian Consumer Law.",
                link: "/",
                linkText: "Retail complaint management →",
              },
              {
                sector: "Australian Healthcare",
                body: "Private clinics and allied health practices use FeedSolve to collect patient feedback without an account. Anonymous mode supports Privacy Act requirements. Resolution rate tracks complaint handling performance.",
                link: "/blog/healthcare-patient-feedback-system/",
                linkText: "Patient feedback for AU clinics →",
              },
            ].map((u, i) => (
              <div
                key={i}
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: "28px 24px",
                }}
              >
                <h3
                  style={{
                    color: "var(--navy)",
                    fontSize: 17,
                    marginBottom: 10,
                  }}
                >
                  {u.sector}
                </h3>
                <p
                  style={{
                    color: "var(--text-mid)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}
                >
                  {u.body}
                </p>
                <Link
                  href={u.link}
                  style={{
                    fontSize: 14,
                    color: "var(--teal)",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {u.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ background: "var(--bg-warm)", padding: "80px 32px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ color: "var(--navy)" }}>
              FeedSolve vs Freshdesk for Australian SMBs
            </h2>
            <p
              style={{ color: "var(--text-mid)", fontSize: 16, marginTop: 12 }}
            >
              Freshdesk is the most-compared complaint tool in Australia.
              Here&apos;s the difference that matters for SMBs.
            </p>
          </div>
          <div
            style={{
              maxWidth: 720,
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
                      padding: "14px 20px",
                      textAlign: "left",
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
                      padding: "14px 20px",
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
                      padding: "14px 20px",
                      textAlign: "center",
                    }}
                  >
                    Freshdesk
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
                        padding: "13px 20px",
                        fontSize: 14,
                        color: "var(--text)",
                        fontWeight: 500,
                      }}
                    >
                      {row.feature}
                    </td>
                    <td style={{ padding: "13px 20px", textAlign: "center" }}>
                      {row.feedsolve ? (
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
                    <td style={{ padding: "13px 20px", textAlign: "center" }}>
                      {row.freshdesk ? (
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
            Freshdesk is built for IT helpdesks and agent-heavy support teams.
            FeedSolve is purpose-built for external stakeholder complaints — no
            per-agent cost, no login barrier for your Australian customers.
          </p>
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
              <HelpCircle size={13} /> Australia-specific questions
            </div>
            <h2 style={{ color: "var(--navy)" }}>
              Complaint management software Australia — FAQ
            </h2>
          </div>
          <div className="faq-wrap">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item${i === openFaq ? " open" : ""}`}
              >
                <div
                  className="faq-q"
                  onClick={() => setOpenFaq(i === openFaq ? -1 : i)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={i === openFaq}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenFaq(i === openFaq ? -1 : i);
                    }
                  }}
                >
                  {faq.q}
                  <div className="faq-arrow">
                    <ChevronDown size={13} />
                  </div>
                </div>
                <div className="faq-a">
                  <div className="faq-a-inner">{faq.a}</div>
                </div>
              </div>
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
            Complaint management software Australian SMBs can actually use.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 18,
              marginBottom: 36,
            }}
          >
            Set up in under 2 minutes. Free to start. No credit card required.
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
                fontSize: 16,
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
            <Lock size={13} /> No credit card · Setup under 2 minutes · ACL &
            Privacy Act aligned
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg)", padding: "48px 32px" }}>
        <div className="container" style={{ maxWidth: 820 }}>
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
            More Australia solutions
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: 14,
            }}
          >
            {[
              {
                href: "/au/manufacturing/supplier-feedback/",
                label: "AU Manufacturing",
                sub: "Supplier quality complaints",
              },
              {
                href: "/au/restaurants/qr-feedback/",
                label: "AU Restaurants & Cafes",
                sub: "Table-side QR feedback",
              },
              {
                href: "/au/real-estate/tenant-feedback/",
                label: "AU Property Management",
                sub: "Tenant maintenance",
              },
              {
                href: "/compare/feedsolve-vs-google-forms/",
                label: "vs Google Forms",
                sub: "Side-by-side comparison",
              },
              {
                href: "/blog/complaint-management-software-smb/",
                label: "Buyer's guide",
                sub: "Choosing complaint software",
              },
            ].map((r) => (
              <Link
                key={r.href}
                href={r.href}
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
                  {r.label}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-light)" }}>
                  {r.sub}
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
