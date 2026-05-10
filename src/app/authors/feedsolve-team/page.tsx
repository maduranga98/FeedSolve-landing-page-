import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight, ClipboardList, ShieldCheck } from "lucide-react";

const SITE_URL = "https://feedsolve.com";

export const metadata: Metadata = {
  title: "FeedSolve Team — Author Profile",
  description:
    "Meet the FeedSolve Team, writing practical guides on feedback management, complaint tracking, QR feedback, and operational resolution workflows for SMBs.",
  alternates: {
    canonical: `${SITE_URL}/authors/feedsolve-team/`,
    languages: {
      "en-GB": `${SITE_URL}/authors/feedsolve-team/`,
      "en-AU": `${SITE_URL}/authors/feedsolve-team/`,
      "en-US": `${SITE_URL}/authors/feedsolve-team/`,
      en: `${SITE_URL}/authors/feedsolve-team/`,
      "x-default": `${SITE_URL}/authors/feedsolve-team/`,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "FeedSolve Team",
  url: `${SITE_URL}/authors/feedsolve-team/`,
  worksFor: {
    "@type": "Organization",
    name: "FeedSolve",
    url: `${SITE_URL}/`,
  },
  knowsAbout: [
    "feedback management software",
    "complaint tracking",
    "QR code feedback",
    "SMB operations",
    "complaint resolution workflows",
  ],
};

export default function FeedSolveTeamAuthorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Navbar variant="blog" />
      <main>
        <section style={{ background: "var(--navy)", padding: "90px 32px 64px" }}>
          <div className="container">
            <div className="article-breadcrumb" style={{ color: "rgba(255,255,255,0.7)", marginBottom: 18 }}>
              <Link href="/" style={{ color: "rgba(255,255,255,0.8)" }}>Home</Link>
              <ChevronRight size={13} />
              <Link href="/blog/" style={{ color: "rgba(255,255,255,0.8)" }}>Blog</Link>
              <ChevronRight size={13} />
              <span>FeedSolve Team</span>
            </div>
            <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ width: 96, height: 96, borderRadius: "50%", background: "var(--teal)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 800 }}>
                FS
              </div>
              <div>
                <div className="section-label" style={{ color: "var(--teal)", borderColor: "rgba(255,255,255,0.14)" }}>
                  <ClipboardList size={13} /> Author profile
                </div>
                <h1 style={{ color: "white", marginTop: 14 }}>FeedSolve Team</h1>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 18, lineHeight: 1.65, maxWidth: 720, marginTop: 12 }}>
                  Operations and product specialists writing about practical feedback management, complaint resolution, QR feedback collection, and accountability workflows for small and mid-sized businesses.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "70px 32px", background: "var(--bg)" }}>
          <div className="container" style={{ maxWidth: 860 }}>
            <div style={{ background: "white", border: "1px solid var(--border)", borderRadius: 18, padding: 32 }}>
              <h2 style={{ color: "var(--navy)", marginBottom: 14 }}>About the author</h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.75 }}>
                The FeedSolve Team turns operational feedback patterns into practical guides for SMB teams. Our articles focus on no-login feedback intake, branded QR code collection, complaint ownership, tracking codes, resolution rate, and the day-to-day workflows teams need to close the loop with customers, tenants, suppliers, and partners.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 26 }}>
                {[
                  "Feedback management software",
                  "Complaint tracking workflows",
                  "QR code feedback systems",
                  "SMB operations and accountability",
                ].map((topic) => (
                  <div key={topic} style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--text-mid)" }}>
                    <ShieldCheck size={16} style={{ color: "var(--teal)" }} />
                    {topic}
                  </div>
                ))}
              </div>
              <Link href="/blog/" className="btn-primary teal" style={{ display: "inline-flex", marginTop: 30 }}>
                Read FeedSolve articles <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="blog" />
    </>
  );
}
