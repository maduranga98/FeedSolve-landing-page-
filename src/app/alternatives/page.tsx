import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { alternatives, categoryLabels } from "@/data/alternatives";
import { ArrowRight, ChevronRight, Search } from "lucide-react";

const SITE_URL = "https://feedsolve.com";

export const metadata: Metadata = {
  title: "Alternatives Hub — FeedSolve vs Feedback & Complaint Tools",
  description:
    "Looking for an alternative to Medallia, Qualtrics, Zonka, Typeform, Canny, Zendesk, or other feedback tools? Honest guides on where FeedSolve wins - and where each tool still fits.",
  openGraph: {
    title: "Alternatives Hub — FeedSolve vs Feedback & Complaint Tools",
    description:
      "Honest alternative guides for enterprise CX suites, survey platforms, form builders, feature boards, helpdesks, QR tools, and review platforms.",
    url: `${SITE_URL}/alternatives/`,
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/alternatives/`,
    languages: {
      "en-GB": `${SITE_URL}/alternatives/`,
      "en-AU": `${SITE_URL}/alternatives/`,
      "en-US": `${SITE_URL}/alternatives/`,
      en: `${SITE_URL}/alternatives/`,
      "x-default": `${SITE_URL}/alternatives/`,
    },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Alternatives",
      item: `${SITE_URL}/alternatives/`,
    },
  ],
};

export default function AlternativesHub() {
  const categories = Object.keys(categoryLabels).filter((c) =>
    alternatives.some((a) => a.category === c)
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar variant="blog" />
      <main>
        <section
          style={{ background: "var(--navy)", padding: "92px 32px 64px" }}
        >
          <div className="container">
            <div
              className="article-breadcrumb"
              style={{ color: "rgba(255,255,255,0.7)", marginBottom: 18 }}
            >
              <Link href="/" style={{ color: "rgba(255,255,255,0.8)" }}>
                Home
              </Link>
              <ChevronRight size={13} />
              <span>Alternatives</span>
            </div>
            <div
              className="section-label"
              style={{
                color: "var(--teal)",
                borderColor: "rgba(255,255,255,0.14)",
              }}
            >
              <Search size={13} /> Alternatives hub
            </div>
            <h1 style={{ color: "white", maxWidth: 780, marginTop: 16 }}>
              Alternatives to Popular Feedback &amp; Complaint Tools
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: 18,
                lineHeight: 1.65,
                maxWidth: 760,
                marginTop: 16,
              }}
            >
              Honest, category-by-category guides for teams outgrowing - or
              priced out of - their current feedback tool. Where FeedSolve wins
              for SMB complaint resolution, where each tool still fits, and
              what to check before you switch.
            </p>
          </div>
        </section>

        <section style={{ padding: "70px 32px", background: "var(--bg)" }}>
          <div className="container">
            {categories.map((cat) => (
              <div key={cat} style={{ marginBottom: 48 }}>
                <h2
                  style={{
                    color: "var(--navy)",
                    fontSize: 22,
                    marginBottom: 18,
                  }}
                >
                  {categoryLabels[cat]}
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: 18,
                  }}
                >
                  {alternatives
                    .filter((a) => a.category === cat)
                    .map((a) => (
                      <Link
                        key={a.slug}
                        href={`/alternatives/${a.slug}/`}
                        style={{
                          background: "white",
                          border: "1px solid var(--border)",
                          borderRadius: 16,
                          padding: 22,
                          textDecoration: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: 10,
                          boxShadow: "0 10px 28px rgba(30, 53, 87, 0.06)",
                        }}
                      >
                        <h3
                          style={{
                            color: "var(--navy)",
                            fontSize: 18,
                            margin: 0,
                          }}
                        >
                          Best {a.name} Alternative
                        </h3>
                        <p
                          style={{
                            color: "var(--text-mid)",
                            fontSize: 14,
                            lineHeight: 1.6,
                            margin: 0,
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                          }}
                        >
                          {a.metaDescription}
                        </p>
                        <span
                          style={{
                            color: "var(--teal)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            fontWeight: 700,
                            fontSize: 14,
                            marginTop: "auto",
                          }}
                        >
                          Read the guide <ArrowRight size={14} />
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}

            <div
              style={{
                background: "white",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "24px 28px",
                marginTop: 8,
              }}
            >
              <p
                style={{
                  color: "var(--text-mid)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Prefer head-to-head feature tables? See our{" "}
                <Link
                  href="/compare/"
                  style={{ color: "var(--teal)", fontWeight: 700 }}
                >
                  detailed comparison pages
                </Link>{" "}
                for FeedSolve vs Google Forms, Typeform, Zonka Feedback, and
                JotForm.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="blog" />
    </>
  );
}
