// src/app/uk/complaint-management-software/page.tsx
// Target keyword: "complaint management software UK"
// Market: United Kingdom

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
  QrCode,
  Hash,
  UserCheck,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Complaint Management Software for UK Small Business | FeedSolve",
  description:
    "Track and resolve every customer complaint with FeedSolve — the complaint management software built for UK SMBs. No login needed for submitters. Free to start.",
  openGraph: {
    title: "Complaint Management Software for UK Small Business | FeedSolve",
    description:
      "QR-code complaint intake, Kanban resolution workflow, tracking codes, and resolution rate dashboard. Built for UK SMBs. Free plan available.",
    url: "https://feedsolve.com/uk/complaint-management-software/",
    type: "website",
  },
  alternates: {
    canonical: "https://feedsolve.com/uk/complaint-management-software/",
    languages: {
      "en-GB": "https://feedsolve.com/uk/complaint-management-software/",
      "x-default": "https://feedsolve.com/",
    },
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Complaint Management Software for UK Small Business",
  description:
    "FeedSolve complaint management software for UK SMBs — QR intake, Kanban workflow, tracking codes, and resolution rate dashboard.",
  url: "https://feedsolve.com/uk/complaint-management-software/",
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is FeedSolve complaint management software UK GDPR compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. FeedSolve is designed with UK GDPR data minimisation principles in mind. Contact fields are optional — submitters can remain anonymous. No special categories of personal data are collected. Data is stored securely and configurable retention settings are available on Growth and Pro plans. FeedSolve does not sell or share submitter data with third parties.",
        },
      },
      {
        "@type": "Question",
        name: "Does FeedSolve replace a dedicated UK complaint management system?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For UK SMBs needing structured complaint intake, Kanban resolution, tracking codes, and resolution rate metrics, FeedSolve replaces informal WhatsApp and email complaint processes. It is not a regulated complaints management system for FCA-authorised firms, which require specific regulatory reporting. For general SMB complaint management — hospitality, manufacturing, logistics, retail, and property — FeedSolve covers every requirement.",
        },
      },
      {
        "@type": "Question",
        name: "How does FeedSolve pricing compare to Freshdesk or Zoho Desk for UK businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FeedSolve charges per feedback board, not per agent. The Starter plan is $19/month (approx. £15/month) for 3 boards with unlimited team members on that board. Freshdesk charges £12–£49 per agent per month, meaning a 5-person team costs £60–£245/month. For most UK SMBs, FeedSolve is significantly more cost-effective.",
        },
      },
      {
        "@type": "Question",
        name: "Can UK customers submit complaints without creating an account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. FeedSolve's zero-login submission model means any UK customer, supplier, or partner can submit a complaint via a QR code or web link without registering. They receive a unique tracking code and can check resolution progress on any browser — aligned with ICO guidance that complaint channels should be accessible and not create unnecessary barriers.",
        },
      },
    ],
  },
};

const comparisonRows = [
  {
    feature: "Zero-login submission (no account required)",
    feedsolve: true,
    freshdesk: false,
    note: "Freshdesk requires email or login",
  },
  {
    feature: "QR code per complaint board",
    feedsolve: true,
    freshdesk: false,
    note: "",
  },
  {
    feature: "Unique tracking code per complaint",
    feedsolve: true,
    freshdesk: false,
    note: "",
  },
  {
    feature: "Public tracking page for submitters",
    feedsolve: true,
    freshdesk: false,
    note: "",
  },
  {
    feature: "Kanban resolution workflow",
    feedsolve: true,
    freshdesk: true,
    note: "",
  },
  {
    feature: "Resolution rate dashboard",
    feedsolve: true,
    freshdesk: false,
    note: "Freshdesk uses CSAT scores",
  },
  {
    feature: "Anonymous submissions",
    feedsolve: true,
    freshdesk: false,
    note: "",
  },
  {
    feature: "Multi-language forms",
    feedsolve: true,
    freshdesk: true,
    note: "",
  },
  {
    feature: "Board-based flat pricing (no per-agent fees)",
    feedsolve: true,
    freshdesk: false,
    note: "Freshdesk: £12–£49/agent/month",
  },
  {
    feature: "Setup in under 2 minutes",
    feedsolve: true,
    freshdesk: false,
    note: "Freshdesk requires configuration",
  },
  {
    feature: "Free plan available",
    feedsolve: true,
    freshdesk: true,
    note: "Freshdesk free: 10 agents, limited features",
  },
];

const faqs = [
  {
    q: "Is FeedSolve complaint management software UK GDPR compliant?",
    a: "Yes. FeedSolve is designed with UK GDPR data minimisation principles in mind. Contact fields are optional — submitters can remain anonymous. No special categories of personal data are collected. Data is stored securely and configurable retention settings are available on Growth and Pro plans. FeedSolve does not sell or share submitter data with third parties.",
  },
  {
    q: "Does FeedSolve replace a dedicated UK complaint management system?",
    a: "For UK SMBs needing structured complaint intake, Kanban resolution, tracking codes, and a resolution rate metric, FeedSolve replaces informal WhatsApp and email complaint processes. It is not a regulated complaints system for FCA-authorised firms, which require specific regulatory reporting. For general SMB complaint management — hospitality, manufacturing, logistics, retail, and property — FeedSolve covers every requirement.",
  },
  {
    q: "How does FeedSolve pricing compare to Freshdesk or Zoho Desk for UK businesses?",
    a: "FeedSolve charges per feedback board, not per agent. The Starter plan is $19/month (approx. £15/month) for 3 boards. Freshdesk charges £12–£49 per agent per month — a 5-person team costs £60–£245/month minimum. For most UK SMBs, FeedSolve is significantly more cost-effective with no per-seat penalties.",
  },
  {
    q: "Can UK customers submit complaints without creating an account?",
    a: "Yes. FeedSolve's zero-login submission model means any UK customer, supplier, or partner can submit a complaint via a QR code or web link without registering. They receive a unique tracking code and can check resolution progress on any browser — consistent with ICO guidance that complaint channels should be accessible without unnecessary barriers.",
  },
  {
    q: "Do I need a complaint management system to comply with UK consumer law?",
    a: "UK consumer protection regulations, including the Consumer Rights Act 2015 and the Consumer Contracts Regulations, don't mandate a specific complaint management system. However, the ICO and Trading Standards expect businesses to have accessible, documented complaint processes. FeedSolve provides a structured intake channel, full audit trail, and resolution confirmation — meeting the spirit of these requirements.",
  },
];

// Client component wrapper for interactive FAQ

export default function UKComplaintManagementPage() {
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
            <span>United Kingdom</span>
            <ChevronRight size={13} />
            <span style={{ color: "rgba(255,255,255,0.65)" }}>
              Complaint Management Software
            </span>
          </div>

          {/* UK badge */}
          <div
            className="section-label"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.75)",
              marginBottom: 24,
            }}
          >
            🇬🇧 Built for UK Small Business
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
            Complaint Management Software for UK Small Business
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
            Stop losing customer complaints in WhatsApp threads and email
            inboxes. FeedSolve gives UK SMBs a structured complaint intake,
            Kanban resolution workflow, and a resolution rate dashboard — with
            full UK GDPR alignment.
          </p>

          {/* Quick answer box */}
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
              What FeedSolve does for UK SMBs
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: 15,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              FeedSolve is complaint management software built for UK small and
              mid-sized businesses. Customers, suppliers, and tenants submit
              complaints via a branded QR code or shareable link — no login
              required. Your team manages every complaint through a Kanban
              dashboard, assigns to the right person, and resolves with a
              documented audit trail. Every submitter gets a tracking code. You
              get a resolution rate metric. Pricing starts free, with paid plans
              from approximately £15/month — no per-agent fees.
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
              View pricing in GBP
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
                label: "Setup time for your first UK complaint board",
              },
              {
                value: "Zero",
                label: "Login required for UK customers and suppliers",
              },
              {
                value: "£15/mo",
                label: "Approx. starting price — no per-agent fees",
              },
              {
                value: "100%",
                label: "UK GDPR-aligned data minimisation design",
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

      {/* UK GDPR COMPLIANCE SECTION */}
      <section style={{ background: "var(--bg-warm)", padding: "80px 32px" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="section-label" style={{ marginBottom: 20 }}>
            <ShieldCheck size={13} /> UK GDPR & Data Compliance
          </div>
          <h2 style={{ color: "var(--navy)", marginBottom: 20 }}>
            Built with UK GDPR in mind from day one
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
            Under UK GDPR and the Data Protection Act 2018, any complaint form
            that collects personal data must do so lawfully, fairly, and
            transparently. FeedSolve&apos;s design reflects these requirements
            across every touchpoint.
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
                title: "Data Minimisation",
                body: "Contact fields are genuinely optional — not hidden-required. Submitters who choose anonymous mode provide zero personal data. FeedSolve collects only what the submitter voluntarily provides.",
              },
              {
                title: "Lawful Basis",
                body: "Complaint submissions are processed on the basis of legitimate interests (resolving the complaint) or consent. The submission form makes the purpose clear before any data is entered.",
              },
              {
                title: "No Third-Party Sharing",
                body: "FeedSolve does not sell or share submitter data with advertising networks or third-party data brokers. Submission data is used solely for complaint resolution within your organisation.",
              },
              {
                title: "Retention Controls",
                body: "Growth and Pro plans include configurable data retention settings — allowing your team to define how long submission data is stored, in line with your UK GDPR retention policy.",
              },
              {
                title: "ICO-Aligned Access",
                body: "The ICO expects complaint channels to be easy to access without unnecessary barriers. FeedSolve's zero-login model meets this expectation — no account creation required.",
              },
              {
                title: "Audit Trail",
                body: "Every submission is timestamped with its full resolution history. This provides documented evidence of complaint handling — relevant for ICO investigations or Trading Standards queries.",
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
          <div
            style={{
              background: "var(--navy)",
              borderRadius: 14,
              padding: "24px 28px",
              marginTop: 24,
            }}
          >
            <p
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: 15,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <strong style={{ color: "white" }}>
                Important note for FCA-regulated UK firms:
              </strong>{" "}
              FeedSolve is general-purpose complaint management software for UK
              SMBs. It is not an FCA-compliant complaints management system for
              financial services firms regulated under DISP (Dispute Resolution:
              Complaints). If you operate a regulated financial services
              business, you will need a system that meets FCA DISP reporting
              requirements in addition to FeedSolve&apos;s general complaint
              resolution workflow.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "var(--navy)", padding: "80px 32px" }}>
        <div className="container">
          <div
            className="section-label"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.75)",
              marginBottom: 20,
            }}
          >
            How it works
          </div>
          <h2 style={{ color: "white", marginBottom: 48 }}>
            From UK customer complaint to documented resolution — in four steps
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 28px 1fr 28px 1fr 28px 1fr",
              alignItems: "start",
              gap: 0,
            }}
          >
            {[
              {
                icon: <QrCode size={22} />,
                num: "01",
                title: "Collect",
                body: "UK customers, suppliers, or tenants scan your QR code or click your link. They submit a complaint in under 60 seconds — no login, no account, no app.",
              },
              {
                icon: <Hash size={22} />,
                num: "02",
                title: "Track",
                body: "Every submission gets a unique #FSV-XXXX tracking code. UK submitters check progress on any browser — no follow-up call to your team needed.",
              },
              {
                icon: <UserCheck size={22} />,
                num: "03",
                title: "Assign",
                body: "Your team sees the complaint in the Kanban dashboard. Assign to the right person, set priority, add internal notes. One owner. One deadline.",
              },
              {
                icon: <CheckCircle2 size={22} />,
                num: "04",
                title: "Resolve",
                body: "Fix the issue, send a public reply, and mark resolved. The submitter sees 'Resolved' on their tracking page. Your resolution rate updates automatically.",
              },
            ].map((step, i) => (
              <>
                <div
                  key={`step-${i}`}
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 20,
                    padding: "28px 22px",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: "rgba(58,143,165,0.15)",
                      border: "1px solid rgba(58,143,165,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                      color: "var(--teal-light)",
                    }}
                  >
                    {step.icon}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      color: "var(--teal-light)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: 10,
                    }}
                  >
                    Step {step.num}
                  </div>
                  <h3
                    style={{ color: "white", fontSize: 19, marginBottom: 10 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.55)",
                      fontSize: 14,
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
                {i < 3 && (
                  <div
                    key={`arrow-${i}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: 36,
                      color: "rgba(58,143,165,0.5)",
                    }}
                  >
                    <ArrowRight size={20} />
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      {/* UK INDUSTRY USE CASES */}
      <section style={{ background: "white", padding: "80px 32px" }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: 20 }}>
            UK industry use cases
          </div>
          <h2 style={{ color: "var(--navy)", marginBottom: 48 }}>
            How UK businesses use FeedSolve across every sector
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
                sector: "UK Restaurants & Pubs",
                body: "Place a branded QR code on every table. UK diners submit complaints about food, service, or cleanliness before leaving — giving your team a chance to resolve the issue before a TripAdvisor or Google review is posted.",
                link: "/uk/restaurants/qr-feedback/",
                linkText: "Restaurant feedback for UK F&B →",
              },
              {
                sector: "UK Manufacturing & Engineering",
                body: "Replace WhatsApp supplier complaint threads with a structured QR board. Every supplier defect report gets a tracking code, a CAPA note, and a documented resolution — fully audit-ready for ISO 9001 and IATF 16949.",
                link: "/uk/manufacturing/supplier-feedback/",
                linkText: "Supplier feedback for UK manufacturers →",
              },
              {
                sector: "UK Property Management",
                body: "Give tenants a QR code in the lobby or welcome pack. Maintenance requests and complaints are tracked to resolution — with a full audit trail for tenancy dispute resolution under the Housing Act.",
                link: "/uk/real-estate/tenant-feedback/",
                linkText: "Tenant feedback for UK landlords →",
              },
              {
                sector: "UK Logistics & Couriers",
                body: "Drivers and recipients report delivery issues by scanning a QR code on the consignment note. Every complaint is assigned, tracked, and resolved — with documentation for UK Road Haulage Association (RHA) compliance.",
                link: "/uk/logistics/delivery-feedback/",
                linkText: "Delivery feedback for UK logistics →",
              },
              {
                sector: "UK Retail & E-commerce",
                body: "Collect in-store and post-purchase complaints via QR codes at point of sale. Track every issue to resolution with a documented response — meeting the Consumer Rights Act 2015 expectation of accessible complaint handling.",
                link: "/",
                linkText: "Retail complaint tracking →",
              },
              {
                sector: "UK Private Clinics & Healthcare",
                body: "Provide patients with a zero-login complaint channel in your waiting room. Every submission is anonymous-capable, tracked, and resolved with a full history — aligned with CQC complaints handling requirements for independent healthcare providers.",
                link: "/blog/healthcare-patient-feedback-system/",
                linkText: "Patient feedback for UK clinics →",
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

      {/* COMPARISON TABLE vs Freshdesk */}
      <section style={{ background: "var(--bg-warm)", padding: "80px 32px" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              className="section-label"
              style={{ display: "inline-flex", marginBottom: 16 }}
            >
              How FeedSolve compares
            </div>
            <h2 style={{ color: "var(--navy)" }}>
              FeedSolve vs Freshdesk for UK SMBs
            </h2>
            <p
              style={{ color: "var(--text-mid)", fontSize: 16, marginTop: 12 }}
            >
              Freshdesk is the most-searched complaint management tool in the
              UK. Here&apos;s how the two compare for SMB complaint resolution.
            </p>
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
                      width: "50%",
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
                    <td style={{ padding: "14px 24px", textAlign: "center" }}>
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
            Freshdesk is excellent for IT help desks and agent-heavy support
            teams. FeedSolve is purpose-built for external stakeholder
            complaints — no per-agent cost, no login barrier for your customers.
          </p>
        </div>
      </section>

      {/* PRICING IN GBP */}
      <section style={{ background: "white", padding: "64px 32px" }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <h2
            style={{
              color: "var(--navy)",
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            Transparent pricing for UK businesses
          </h2>
          <p
            style={{
              color: "var(--text-mid)",
              textAlign: "center",
              marginBottom: 40,
              fontSize: 16,
            }}
          >
            Board-based pricing — not per agent. No hidden fees. All prices
            shown in approximate GBP.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
          >
            {[
              {
                tier: "Free",
                price: "£0",
                period: "7-day trial",
                features: [
                  "2 boards",
                  "Unlimited submissions",
                  "QR codes & links",
                  "Tracking codes",
                  "Multi-language forms",
                ],
              },
              {
                tier: "Starter",
                price: "~£15",
                period: "/month",
                features: [
                  "3 boards",
                  "1,500 submissions/mo",
                  "3 team members",
                  "Kanban workflow",
                  "Public replies",
                  "Email notifications",
                ],
              },
              {
                tier: "Growth",
                price: "~£39",
                period: "/month",
                popular: true,
                features: [
                  "10 boards",
                  "5,000 submissions/mo",
                  "10 team members",
                  "Branded QR codes",
                  "Escalation rules",
                  "Advanced analytics",
                ],
              },
              {
                tier: "Business",
                price: "~£63",
                period: "/month",
                features: [
                  "20 boards",
                  "15,000 submissions/mo",
                  "Unlimited team",
                  "Custom roles",
                  "Audit logs",
                  "Priority support",
                ],
              },
            ].map((plan, i) => (
              <div
                key={i}
                style={{
                  background: plan.popular ? "var(--navy)" : "var(--bg)",
                  border: `1.5px solid ${plan.popular ? "var(--teal)" : "var(--border)"}`,
                  borderRadius: 16,
                  padding: "24px 20px",
                  position: "relative",
                }}
              >
                {plan.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: -12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--teal)",
                      color: "white",
                      fontSize: 10,
                      fontWeight: 800,
                      padding: "4px 14px",
                      borderRadius: 100,
                      whiteSpace: "nowrap",
                    }}
                  >
                    ⭐ Most popular
                  </div>
                )}
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: plan.popular
                      ? "rgba(255,255,255,0.5)"
                      : "var(--text-light)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 8,
                  }}
                >
                  {plan.tier}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    fontWeight: 800,
                    color: plan.popular ? "white" : "var(--navy)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: plan.popular
                      ? "rgba(255,255,255,0.45)"
                      : "var(--text-light)",
                    marginBottom: 20,
                    marginTop: 4,
                  }}
                >
                  {plan.period}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    marginBottom: 20,
                  }}
                >
                  {plan.features.map((f, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "center",
                        fontSize: 13,
                        color: plan.popular
                          ? "rgba(255,255,255,0.75)"
                          : "var(--text)",
                      }}
                    >
                      <Check
                        size={12}
                        style={{
                          color: plan.popular
                            ? "var(--teal-light)"
                            : "var(--teal)",
                          flexShrink: 0,
                        }}
                      />
                      {f}
                    </div>
                  ))}
                </div>
                <a
                  href="https://app.feedsolve.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={plan.popular ? "btn-primary teal" : "btn-primary"}
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    fontSize: 14,
                    padding: "11px",
                  }}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "var(--text-light)",
              marginTop: 16,
            }}
          >
            GBP prices are approximate conversions (1 USD ≈ 0.79 GBP). Billed in
            USD. No per-agent fees. Cancel anytime.
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
              <HelpCircle size={13} /> UK-specific questions
            </div>
            <h2 style={{ color: "var(--navy)" }}>
              Complaint management software UK — FAQ
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
            The complaint management software UK SMBs have been waiting for.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 18,
              marginBottom: 36,
            }}
          >
            Set up your first UK complaint board in under 2 minutes. Free to
            start — no credit card required.
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
            <Lock size={13} /> No credit card · Setup under 2 minutes · UK GDPR
            aligned
          </div>
        </div>
      </section>

      {/* RELATED UK PAGES */}
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
            More UK solutions
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
                href: "/uk/manufacturing/supplier-feedback/",
                label: "UK Manufacturing",
                sub: "Supplier quality complaints",
              },
              {
                href: "/uk/restaurants/qr-feedback/",
                label: "UK Restaurants & Pubs",
                sub: "Table-side QR feedback",
              },
              {
                href: "/uk/real-estate/tenant-feedback/",
                label: "UK Property Management",
                sub: "Tenant maintenance requests",
              },
              {
                href: "/uk/logistics/delivery-feedback/",
                label: "UK Logistics",
                sub: "Delivery complaint tracking",
              },
              {
                href: "/blog/complaint-management-software-smb/",
                label: "Read the guide",
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
