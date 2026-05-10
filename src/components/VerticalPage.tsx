"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ChevronRight,
  Check,
  Lock,
  ChevronDown,
  QrCode,
  Hash,
  UserCheck,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

export interface VerticalFaq {
  q: string;
  a: string;
}

export interface VerticalFeature {
  icon: React.ReactNode;
  title: string;
  body: string;
}

export interface VerticalProps {
  // Meta
  badge: string;
  h1: string;
  subheading: string;
  quickAnswer: string;

  // Hero visual stats
  stats: { value: string; label: string }[];

  // Problem section
  problemHeading: string;
  problemPoints: string[];

  // How it works - uses default 4-step flow with optional custom labels
  collectLabel?: string;
  trackLabel?: string;
  assignLabel?: string;
  resolveLabel?: string;

  // Features section
  featuresHeading: string;
  features: VerticalFeature[];

  // Industry example
  exampleHeading: string;
  exampleScenario: { step: string; detail: string }[];

  // FAQ
  faqs: VerticalFaq[];

  // CTA
  ctaHeading: string;
  ctaSub: string;

  // Related links
  relatedLinks: { href: string; label: string; sub: string }[];

  // Breadcrumb label
  breadcrumbLabel: string;
}

export default function VerticalPage(props: VerticalProps) {
  const {
    badge,
    h1,
    subheading,
    quickAnswer,
    stats,
    problemHeading,
    problemPoints,
    collectLabel,
    trackLabel,
    assignLabel,
    resolveLabel,
    featuresHeading,
    features,
    exampleHeading,
    exampleScenario,
    faqs,
    ctaHeading,
    ctaSub,
    relatedLinks,
    breadcrumbLabel,
  } = props;

  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <>
      <Navbar variant="blog" />

      {/* ── HERO ─────────────────────────────────────────── */}
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
            top: -140,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 600,
            background:
              "radial-gradient(ellipse, rgba(58,143,165,0.16) 0%, transparent 65%)",
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
              color: "rgba(255,255,255,0.4)",
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
            <span style={{ color: "rgba(255,255,255,0.4)" }}>Solutions</span>
            <ChevronRight size={13} />
            <span style={{ color: "rgba(255,255,255,0.65)" }}>
              {breadcrumbLabel}
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
            {badge}
          </div>

          <h1
            style={{
              color: "white",
              fontSize: "clamp(34px,4.5vw,56px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 20,
              maxWidth: 780,
            }}
          >
            {h1}
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
            {subheading}
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
              How FeedSolve helps
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: 15,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {quickAnswer}
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
              See pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section style={{ background: "var(--teal)", padding: "40px 32px" }}>
        <div className="container">
          <div
            className="vertical-stats"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
              gap: 20,
            }}
          >
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(28px,3.5vw,44px)",
                    fontWeight: 800,
                    color: "white",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontSize: 13,
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

      {/* ── PROBLEM ──────────────────────────────────────── */}
      <section style={{ background: "var(--bg-warm)", padding: "80px 32px" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-label" style={{ marginBottom: 20 }}>
            The problem
          </div>
          <h2 style={{ color: "var(--navy)", marginBottom: 36 }}>
            {problemHeading}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {problemPoints.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "18px 20px",
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    background: "#FFF0F0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ fontSize: 16 }}>⚠️</span>
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--text)",
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.6,
                  }}
                >
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
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
            From submission to resolution - automatically
          </h2>
          <div
            className="vertical-how-it-works"
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
                body:
                  collectLabel ??
                  "Share a QR code or link. Anyone submits feedback in seconds with no login or account required.",
              },
              {
                icon: <Hash size={22} />,
                num: "02",
                title: "Track",
                body:
                  trackLabel ??
                  "Every submission gets a unique #FSV-XXXX tracking code so submitters can check progress anytime.",
              },
              {
                icon: <UserCheck size={22} />,
                num: "03",
                title: "Assign",
                body:
                  assignLabel ??
                  "Route each issue to the right team member with a priority level. One owner. One deadline.",
              },
              {
                icon: <CheckCircle2 size={22} />,
                num: "04",
                title: "Resolve",
                body:
                  resolveLabel ??
                  "Update status, post a public reply, and close the loop. Resolution rate tracked automatically.",
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
                    transition: "background 0.2s",
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

      {/* ── FEATURES ─────────────────────────────────────── */}
      <section style={{ background: "white", padding: "80px 32px" }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: 20 }}>
            Key features
          </div>
          <h2 style={{ color: "var(--navy)", marginBottom: 48 }}>
            {featuresHeading}
          </h2>
          <div
            className="vertical-features"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
          >
            {features.map((f, i) => (
              <div
                key={i}
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: "28px 24px",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "var(--teal-pale)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                    color: "var(--teal)",
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    color: "var(--navy)",
                    fontSize: 17,
                    marginBottom: 10,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-mid)",
                    fontSize: 14,
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

      {/* ── REAL EXAMPLE ─────────────────────────────────── */}
      <section style={{ background: "var(--bg-warm)", padding: "80px 32px" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-label" style={{ marginBottom: 20 }}>
            Real example
          </div>
          <h2 style={{ color: "var(--navy)", marginBottom: 36 }}>
            {exampleHeading}
          </h2>
          <div
            style={{
              background: "var(--navy)",
              borderRadius: 20,
              padding: "32px 36px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "var(--teal-light)",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Resolution timeline
            </div>
            {exampleScenario.map((e, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 18,
                  marginBottom: i < exampleScenario.length - 1 ? 20 : 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: 20,
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background:
                        i === exampleScenario.length - 1
                          ? "white"
                          : "var(--teal-light)",
                      border: "2px solid var(--navy)",
                      marginTop: 5,
                      flexShrink: 0,
                    }}
                  />
                  {i < exampleScenario.length - 1 && (
                    <div
                      style={{
                        flex: 1,
                        width: 2,
                        background: "rgba(255,255,255,0.1)",
                        marginTop: 4,
                      }}
                    />
                  )}
                </div>
                <div
                  style={{
                    paddingBottom: i < exampleScenario.length - 1 ? 0 : 0,
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color:
                        i === exampleScenario.length - 1
                          ? "var(--teal-light)"
                          : "white",
                      marginBottom: 4,
                    }}
                  >
                    {e.step}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.55,
                    }}
                  >
                    {e.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CHECKLIST ────────────────────────────────────── */}
      <section style={{ background: "white", padding: "64px 32px" }}>
        <div className="container" style={{ maxWidth: 680 }}>
          <h2
            style={{
              color: "var(--navy)",
              marginBottom: 32,
              textAlign: "center",
            }}
          >
            Everything included out of the box
          </h2>
          <div
            className="vertical-checklist"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
          >
            {[
              "Zero-login submission for stakeholders",
              "Unique #FSV-XXXX tracking code per issue",
              "Kanban board - Received to Resolved",
              "Team assignment with priority levels",
              "Internal notes hidden from submitters",
              "Public reply visible on tracking page",
              "Resolution rate % on your dashboard",
              "Multi-language submission forms",
              "Branded QR codes with your logo",
              "Email notifications on new submissions",
              "Anonymous mode per board",
              "Free to start - no credit card",
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  fontSize: 14,
                  color: "var(--text)",
                  fontWeight: 500,
                }}
              >
                <div
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "var(--teal)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Check size={12} color="white" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section style={{ background: "var(--bg-warm)", padding: "80px 32px" }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              className="section-label"
              style={{ display: "inline-flex", marginBottom: 16 }}
            >
              FAQ
            </div>
            <h2 style={{ color: "var(--navy)" }}>Common questions</h2>
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

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        style={{
          background:
            "linear-gradient(140deg, var(--navy-deep) 0%, var(--navy) 55%, #1a4a6b 100%)",
          padding: "80px 32px",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ color: "white", marginBottom: 16 }}>{ctaHeading}</h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 18,
              marginBottom: 36,
            }}
          >
            {ctaSub}
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
              href="/#pricing"
              className="btn-outline"
              style={{
                borderColor: "rgba(255,255,255,0.3)",
                color: "white",
                fontSize: 16,
                padding: "14px 24px",
              }}
            >
              View pricing
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
            <Lock size={13} /> No credit card required · Setup in under 2
            minutes
          </div>
        </div>
      </section>

      {/* ── RELATED ──────────────────────────────────────── */}
      {relatedLinks.length > 0 && (
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
              More use cases
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 14,
              }}
            >
              {relatedLinks.map((r) => (
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
      )}

      <Footer variant="blog" />
    </>
  );
}
