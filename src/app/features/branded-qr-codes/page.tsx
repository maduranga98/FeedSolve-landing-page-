"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Check,
  Lock,
  ChevronRight,
  Palette,
  QrCode,
  Building2,
  Utensils,
  Truck,
  Factory,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Which plans include branded QR codes?",
    a: "Branded QR codes - including logo embedding and colour customisation - are available on the Growth ($49/month) and Pro ($79/month) plans. The Free and Starter plans generate standard QR codes without logo or colour customisation.",
  },
  {
    q: "Can I use my own colours and not just a logo?",
    a: "Yes. FeedSolve's QR code customisation includes both logo embedding and brand colour matching for the QR code foreground and background. You can match your exact brand hex values.",
  },
  {
    q: "Do branded QR codes still scan reliably?",
    a: "Yes. FeedSolve uses QR code generation with high error correction levels so that logo embedding and colour customisation do not affect scannability on any standard smartphone camera.",
  },
  {
    q: "What file formats are supported for the logo?",
    a: "PNG and SVG are recommended for logo upload. PNG with a transparent background produces the cleanest result when the logo is embedded in the centre of the QR code.",
  },
  {
    q: "Can I generate different branded QR codes for different boards?",
    a: "Yes. Each feedback board generates its own QR code and can have its own logo and colour customisation. This is useful for multi-brand businesses or companies with different branding per location.",
  },
];

const planRows = [
  { feature: "QR code per board", vals: [true, true, true, true] },
  { feature: "Logo embedding", vals: [false, false, true, true] },
  { feature: "Brand colour matching", vals: [false, false, true, true] },
  { feature: "Per-board customisation", vals: [false, false, true, true] },
  {
    feature: "Custom branding on submission form",
    vals: [false, false, true, true],
  },
];

const placements = [
  {
    icon: <Utensils size={20} />,
    industry: "Restaurants & Hotels",
    items: [
      "Table tents and menu inserts",
      "Receipts and order confirmations",
      "Counter cards and waiting area notices",
    ],
  },
  {
    icon: <Factory size={20} />,
    industry: "Manufacturing",
    items: [
      "Delivery notes and packing slips",
      "Goods-in bay notice boards",
      "Supplier briefing room posters",
    ],
  },
  {
    icon: <Truck size={20} />,
    industry: "Logistics",
    items: [
      "Delivery manifests and dispatch slips",
      "Vehicle cab stickers",
      "Warehouse gate notice boards",
    ],
  },
  {
    icon: <Building2 size={20} />,
    industry: "Real Estate",
    items: [
      "Lobby and entrance notice boards",
      "Welcome packs and tenancy agreements",
      "Lift and common area signage",
    ],
  },
];

export default function BrandedQrCodes() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  return (
    <>
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
            <span>Features</span>
            <ChevronRight size={13} />
            <span style={{ color: "rgba(255,255,255,0.65)" }}>
              Branded QR Codes
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
            <Palette size={13} /> Feature · Growth &amp; Pro plans
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
            Your QR Code. Your Brand.
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
            Add your company logo and brand colours to every FeedSolve QR code.
            Print on table tents, delivery notes, walls, and receipts - looks
            professional, scans perfectly.
          </p>
          <div
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 16,
              padding: "22px 26px",
              maxWidth: 600,
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
              What this means
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: 15,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              A generic black-and-white QR code looks like a generic tool. A QR
              code with your logo and brand colours looks like your business.
              Branded QR codes increase scan rates, build submitter trust, and
              maintain your visual identity across every physical touchpoint.
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
              See Growth plan pricing
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ background: "var(--bg-warm)", padding: "80px 32px" }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: 20 }}>
            What&apos;s included
          </div>
          <h2 style={{ color: "var(--navy)", marginBottom: 48 }}>
            Everything you need to make the QR code yours
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
                icon: <Palette size={24} />,
                title: "Logo Embedding",
                body: "Upload your logo in PNG or SVG. FeedSolve embeds it in the centre of the QR code with high error correction so it scans reliably on any smartphone camera.",
              },
              {
                icon: <QrCode size={24} />,
                title: "Brand Colour Matching",
                body: "Set the QR code foreground colour to match your exact brand hex values. Background colour customisation also supported - match your style guide precisely.",
              },
              {
                icon: <Check size={24} />,
                title: "Per-Board Customisation",
                body: "Each feedback board generates its own QR code with its own logo and colour settings. Multi-brand businesses can customise independently per board.",
              },
            ].map((f, i) => (
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

      {/* WHERE TO PLACE */}
      <section style={{ background: "white", padding: "80px 32px" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="section-label" style={{ marginBottom: 20 }}>
            Where to place them
          </div>
          <h2 style={{ color: "var(--navy)", marginBottom: 36 }}>
            A branded QR code works anywhere your business operates
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 16,
            }}
          >
            {placements.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "24px 22px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: 16,
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 10,
                      background: "var(--teal-pale)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      color: "var(--teal)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div
                    style={{
                      fontSize: 15,
                      fontWeight: 700,
                      color: "var(--navy)",
                    }}
                  >
                    {item.industry}
                  </div>
                </div>
                {item.items.map((p, j) => (
                  <div
                    key={j}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      fontSize: 14,
                      color: "var(--text-mid)",
                      marginBottom: 8,
                    }}
                  >
                    <Check
                      size={13}
                      style={{ color: "var(--teal)", flexShrink: 0 }}
                    />{" "}
                    {p}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAN TABLE */}
      <section style={{ background: "var(--bg-warm)", padding: "64px 32px" }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <h2
            style={{
              color: "var(--navy)",
              marginBottom: 36,
              textAlign: "center",
            }}
          >
            Branded QR Codes are on Growth and Pro
          </h2>
          <div
            style={{
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
                  {["Free", "Starter $19", "Growth $49", "Pro $79"].map(
                    (plan) => (
                      <th
                        key={plan}
                        style={{
                          background: "var(--navy)",
                          color:
                            plan.includes("Growth") || plan.includes("Pro")
                              ? "var(--teal-light)"
                              : "rgba(255,255,255,0.45)",
                          fontSize: 12,
                          fontWeight: 700,
                          letterSpacing: "0.07em",
                          textTransform: "uppercase",
                          padding: "14px 16px",
                          textAlign: "center",
                        }}
                      >
                        {plan}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {planRows.map((row, i) => (
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
                    {row.vals.map((v, j) => (
                      <td
                        key={j}
                        style={{ padding: "13px 16px", textAlign: "center" }}
                      >
                        {v ? (
                          <Check size={15} style={{ color: "#16A34A" }} />
                        ) : (
                          <span
                            style={{ color: "var(--text-light)", fontSize: 18 }}
                          >
                            -
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <Link
              href="/#pricing"
              style={{
                color: "var(--teal)",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              See full pricing comparison{" "}
              <ArrowRight
                size={14}
                style={{ display: "inline", verticalAlign: "middle" }}
              />
            </Link>
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
              FAQ
            </div>
            <h2 style={{ color: "var(--navy)" }}>Branded QR code questions</h2>
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
            Make every QR code look like your business.
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: 18,
              marginBottom: 36,
            }}
          >
            Start free on any plan. Upgrade to Growth to unlock branded QR
            codes.
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
              View Growth plan
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
            <Lock size={13} /> No credit card required to start
          </div>
        </div>
      </section>

      {/* RELATED VERTICALS */}
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
            Industry use cases
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
                href: "/manufacturing/supplier-feedback/",
                label: "Manufacturing",
                sub: "Supplier quality complaints",
              },
              {
                href: "/restaurants/qr-feedback/",
                label: "Restaurants & Hotels",
                sub: "Table-side QR feedback",
              },
              {
                href: "/logistics/delivery-feedback/",
                label: "Logistics",
                sub: "Delivery complaint tracking",
              },
              {
                href: "/real-estate/tenant-feedback/",
                label: "Real Estate",
                sub: "Tenant maintenance requests",
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
