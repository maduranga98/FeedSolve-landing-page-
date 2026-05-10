// Target keyword: "GDPR compliant feedback management software"
// Market: EU + UK

"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  Lock,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Scale,
  FileText,
  Eye,
} from "lucide-react";
import { useState } from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "GDPR-Compliant Feedback Management Software",
  description:
    "FeedSolve feedback management software designed with GDPR data minimisation in mind — anonymous mode, optional contact fields, and secure audit trail.",
  url: "https://feedsolve.com/eu/gdpr-feedback-management/",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is FeedSolve GDPR compliant feedback management software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FeedSolve is designed with GDPR data minimisation principles (Article 5(1)(c)) in mind. Contact fields on submission forms are genuinely optional — not hidden-required. Anonymous mode allows submitters to provide no personal data at all. FeedSolve does not share submission data with advertising networks or third-party data brokers. Data is processed for the legitimate interest of resolving the complaint. Configurable retention settings are available on Growth and Pro plans.",
        },
      },
      {
        "@type": "Question",
        name: "What lawful basis does FeedSolve use for processing complaint submission data under GDPR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Complaint submission data is processed under legitimate interests (Article 6(1)(f) GDPR) — the legitimate interest being the resolution of the submitted complaint. Where the submitter provides contact information voluntarily for follow-up, this may additionally rely on consent. FeedSolve's anonymous mode means many submissions involve no personal data at all, removing the need to establish a lawful basis.",
        },
      },
      {
        "@type": "Question",
        name: "How does FeedSolve help EU businesses comply with consumer complaint requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "EU Directive 2013/11/EU on consumer ADR and the Consumer Rights Directive require accessible complaint handling. FeedSolve's zero-login QR code submission removes every barrier to complaint submission — no account, no app, no password. The full audit trail provides documented evidence of complaint receipt and resolution consistent with EU consumer protection expectations.",
        },
      },
    ],
  },
};

const gdprPrinciples = [
  {
    icon: <FileText size={22} />,
    gdprRef: "Art. 5(1)(c)",
    title: "Data Minimisation",
    body: "Contact fields on FeedSolve submission forms are optional by design — not hidden-required. Submitters who choose anonymous mode provide zero personal data. FeedSolve collects only what the submitter voluntarily provides.",
  },
  {
    icon: <Scale size={22} />,
    gdprRef: "Art. 6(1)(f)",
    title: "Lawful Basis — Legitimate Interests",
    body: "Complaint submission data is processed under legitimate interests — the resolution of the submitted complaint. Where contact information is provided voluntarily for follow-up, consent may additionally apply.",
  },
  {
    icon: <Eye size={22} />,
    gdprRef: "Art. 13/14",
    title: "Transparency",
    body: "FeedSolve's submission form makes clear what data is collected and for what purpose. No hidden fields, no background data collection beyond what is submitted. Privacy policy links are configurable per board.",
  },
  {
    icon: <ShieldCheck size={22} />,
    gdprRef: "Art. 5(1)(e)",
    title: "Storage Limitation",
    body: "Growth and Pro plans include configurable data retention settings. Define how long submission data is stored in line with your GDPR retention policy — and delete submissions on request in compliance with Art. 17 right to erasure.",
  },
  {
    icon: <Lock size={22} />,
    gdprRef: "Art. 32",
    title: "Security of Processing",
    body: "FeedSolve uses HTTPS across all endpoints, with security headers including HSTS, X-Content-Type-Options, and X-Frame-Options. Data is not transmitted to third-party advertising networks.",
  },
  {
    icon: <Check size={22} />,
    gdprRef: "Art. 77",
    title: "EU Consumer Complaint Rights",
    body: "GDPR Article 77 gives EU data subjects the right to lodge complaints with a supervisory authority. FeedSolve's zero-friction complaint channel — QR code or web link, no login — meets the accessibility standard that consumer rights regulators expect.",
  },
];

const faqs = [
  {
    q: "Is FeedSolve GDPR compliant feedback management software?",
    a: "FeedSolve is designed with GDPR data minimisation principles (Article 5(1)(c)) in mind. Contact fields on submission forms are genuinely optional. Anonymous mode allows submitters to provide no personal data at all. FeedSolve does not share submission data with advertising networks. Configurable retention settings are available on Growth and Pro plans to support your data retention policy.",
  },
  {
    q: "What lawful basis does FeedSolve use for processing complaint data under GDPR?",
    a: "Complaint submission data is processed under legitimate interests (Article 6(1)(f) GDPR) — the legitimate interest being resolution of the submitted complaint. Where submitters provide contact information voluntarily for follow-up, consent may additionally apply. FeedSolve's anonymous mode means many submissions involve no personal data at all — removing the need to establish a lawful basis for that data.",
  },
  {
    q: "How does FeedSolve help EU businesses meet consumer complaint requirements?",
    a: "EU Directive 2013/11/EU on consumer ADR and the Consumer Rights Directive (2011/83/EU) require accessible, transparent complaint handling. FeedSolve's zero-login QR submission removes every barrier — no account, no app, no password. The full audit trail provides documented evidence of complaint receipt and resolution consistent with EU consumer protection regulatory expectations.",
  },
  {
    q: "Can EU customers exercise their right of erasure (Art. 17) on FeedSolve submissions?",
    a: "Yes. On Growth and Pro plans, submission data can be manually deleted from the dashboard to fulfill Art. 17 erasure requests. If a submitter chooses anonymous mode, their submission contains no personal data, making erasure requests inapplicable. On all plans, FeedSolve does not retain payment card data or special category personal data.",
  },
  {
    q: "Is FeedSolve suitable for German (DSGVO), French (RGPD), or Dutch businesses?",
    a: "Yes. FeedSolve's GDPR-aligned design applies across all EU member states — Germany (DSGVO), France (RGPD), Netherlands, Italy, Spain, and others share the same GDPR framework. The anonymous mode, optional contact fields, and configurable retention settings apply equally across all EU jurisdictions. Multi-language submission forms are available for non-English speaking EU markets.",
  },
];

export default function EUGDPRFeedbackPage() {
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
            <span>EU / Europe</span>
            <ChevronRight size={13} />
            <span style={{ color: "rgba(255,255,255,0.65)" }}>
              GDPR Feedback Management
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
            🇪🇺 GDPR-Aligned Feedback Management
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
            GDPR-Compliant Feedback Management Software
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
            Collect and resolve customer complaints in a way that respects
            GDPR&apos;s data minimisation principles. Anonymous mode, optional
            contact fields, configurable retention, and a full audit trail —
            without enterprise complexity.
          </p>

          {/* Quick answer */}
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
              GDPR-aligned by design
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: 15,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              FeedSolve is feedback management and complaint tracking software
              designed with GDPR data minimisation principles (Article 5(1)(c))
              in mind. Contact fields are genuinely optional. Anonymous mode
              collects zero personal data. Processing is based on legitimate
              interests — the resolution of the complaint. Configurable
              retention settings support your data retention policy. Submission
              data is never shared with advertising networks or third-party data
              brokers.
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
              View pricing
            </Link>
          </div>
        </div>
      </section>

      {/* GDPR PRINCIPLES GRID */}
      <section style={{ background: "var(--bg-warm)", padding: "80px 32px" }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: 20 }}>
            <ShieldCheck size={13} /> GDPR alignment — article by article
          </div>
          <h2 style={{ color: "var(--navy)", marginBottom: 48 }}>
            How FeedSolve maps to GDPR requirements
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {gdprPrinciples.map((p, i) => (
              <div
                key={i}
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: "28px 24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 14,
                  }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "var(--teal-pale)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--teal)",
                      flexShrink: 0,
                    }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        color: "var(--teal)",
                        letterSpacing: "0.07em",
                        textTransform: "uppercase",
                      }}
                    >
                      {p.gdprRef}
                    </div>
                    <h3
                      style={{
                        fontSize: 16,
                        color: "var(--navy)",
                        margin: 0,
                        marginTop: 2,
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-mid)",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div
            style={{
              background: "var(--navy)",
              borderRadius: 14,
              padding: "24px 28px",
              marginTop: 32,
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: 14,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <strong style={{ color: "white" }}>Legal disclaimer:</strong> This
              page describes FeedSolve&apos;s design characteristics in relation to
              GDPR principles. It does not constitute legal advice. EU and UK
              businesses should conduct their own data protection impact
              assessment (DPIA) and consult a qualified data protection officer
              (DPO) or legal adviser for compliance confirmation specific to
              their processing activities.
            </p>
          </div>
        </div>
      </section>

      {/* EU-SPECIFIC USE CASES */}
      <section style={{ background: "white", padding: "80px 32px" }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: 20 }}>
            EU industry use cases
          </div>
          <h2 style={{ color: "var(--navy)", marginBottom: 48 }}>
            How EU businesses use FeedSolve
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
                sector: "EU Manufacturing & Industry",
                body: "Track supplier quality complaints with a documented CAPA workflow — consistent with ISO 9001 and EU product liability directive (85/374/EEC) requirements. Anonymous mode protects whistleblower suppliers reporting safety concerns.",
              },
              {
                sector: "EU Retail & E-commerce",
                body: "Consumer Rights Directive (2011/83/EU) requires accessible complaint handling. FeedSolve's zero-login QR code meets this. The audit trail provides documented evidence of complaint handling for EU consumer protection enforcement.",
              },
              {
                sector: "EU Hospitality & Tourism",
                body: "EU Package Travel Directive (2015/2302) requires tour operators to have complaint handling procedures. FeedSolve provides the structured intake and documented resolution trail that meets this regulatory expectation.",
              },
              {
                sector: "German (DSGVO) Businesses",
                body: "German DSGVO is the German implementation of GDPR. FeedSolve's data minimisation design, anonymous mode, and configurable retention settings apply equally under DSGVO as under EU GDPR.",
              },
              {
                sector: "French (RGPD) Businesses",
                body: "CNIL (France's DPA) guidelines on complaint handling align with FeedSolve's approach — data minimisation, clear purpose, and optional contact fields. Multi-language forms include French.",
              },
              {
                sector: "Dutch & Benelux Businesses",
                body: "The Dutch Autoriteit Persoonsgegevens (AP) expects data minimisation and transparent purpose. FeedSolve's design principles — optional fields, anonymous mode, no third-party advertising data — align with AP guidance.",
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
                    fontSize: 16,
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
                    margin: 0,
                  }}
                >
                  {u.body}
                </p>
              </div>
            ))}
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
              <HelpCircle size={13} /> GDPR-specific questions
            </div>
            <h2 style={{ color: "var(--navy)" }}>
              GDPR feedback management — FAQ
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
            GDPR-aligned complaint management. Free to start.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 18,
              marginBottom: 36,
            }}
          >
            Set up your first complaint board in under 2 minutes. Anonymous
            mode, optional contact fields, configurable retention.
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
                fontSize: 16,
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
            <Lock size={13} /> No credit card · Data minimisation by design ·
            GDPR-aligned
          </div>
        </div>
      </section>

      {/* RELATED */}
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
            Related resources
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 14,
            }}
          >
            {[
              {
                href: "/uk/complaint-management-software/",
                label: "UK Complaint Software",
                sub: "ICO & UK GDPR aligned",
              },
              {
                href: "/blog/no-login-feedback-form/",
                label: "No-Login Feedback Forms",
                sub: "Why zero friction matters",
              },
              {
                href: "/blog/feedback-form-without-registration/",
                label: "Feedback Without Registration",
                sub: "Privacy-first design",
              },
              {
                href: "/compare/feedsolve-vs-google-forms/",
                label: "vs Google Forms",
                sub: "GDPR data handling comparison",
              },
              {
                href: "/manufacturing/supplier-feedback/",
                label: "EU Manufacturing",
                sub: "ISO 9001 complaint tracking",
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
