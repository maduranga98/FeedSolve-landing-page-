import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLdScript } from "@/components/JsonLd";
import blogData from "@/data/blog.json";
import { founderPersonJsonLd } from "@/lib/blog/authors";
import { breadcrumbJsonLd, SITE_URL } from "@/lib/seo";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { ArrowRight, ChevronRight, ClipboardList, ShieldCheck } from "lucide-react";

export const metadata = generatePageMetadata({
  title: "Maduranga, Founder of FeedSolve",
  description:
    "Maduranga is the founder of FeedSolve and writes practical guides on feedback management, complaint tracking and QR feedback for SMBs.",
  path: "/authors/maduranga/",
});

const RECENT_COUNT = 12;

// Every post in blog.json is credited to the founder, so the list is derived
// from the data rather than maintained by hand. Newest first. meta.slug already
// carries the "/blog/" prefix.
const founderPosts = [...blogData]
  .sort((a, b) => b.meta.date_published.localeCompare(a.meta.date_published))
  .map((post) => ({
    slug: post.meta.slug,
    title: post.meta.title,
    description: post.meta.meta_description,
  }));

export default function MadurangaAuthorPage() {
  return (
    <>
      <JsonLdScript
        data={[
          { ...founderPersonJsonLd({ standalone: true }), knowsAbout: ["feedback management software", "complaint tracking", "QR code feedback", "SMB operations"] },
          breadcrumbJsonLd([
            { name: "Home", url: `${SITE_URL}/` },
            { name: "Blog", url: `${SITE_URL}/blog/` },
            { name: "Maduranga", url: `${SITE_URL}/authors/maduranga/` },
          ]),
        ]}
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
              <span>Maduranga</span>
            </div>
            <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ width: 96, height: 96, borderRadius: "50%", background: "var(--teal-btn)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 800 }}>
                M
              </div>
              <div>
                <div className="section-label" style={{ color: "var(--teal-text)", borderColor: "rgba(255,255,255,0.14)" }}>
                  <ClipboardList size={13} /> Author profile
                </div>
                <h1 style={{ color: "white", marginTop: 14 }}>Maduranga</h1>
                <p style={{ color: "rgba(255,255,255,0.72)", fontSize: 18, lineHeight: 1.65, maxWidth: 720, marginTop: 12 }}>
                  Founder of FeedSolve. Writes about practical feedback management, complaint resolution and accountability workflows for small and mid-sized businesses.
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
                Maduranga builds FeedSolve and writes about SMB feedback and complaint resolution: no-login feedback intake, branded QR code collection, complaint ownership, tracking codes and resolution rate.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 26 }}>
                {[
                  "Feedback management software",
                  "Complaint tracking workflows",
                  "QR code feedback systems",
                  "SMB operations and accountability",
                ].map((topic) => (
                  <div key={topic} style={{ display: "flex", gap: 10, alignItems: "center", color: "var(--text-mid)" }}>
                    <ShieldCheck size={16} style={{ color: "var(--teal-text)" }} />
                    {topic}
                  </div>
                ))}
              </div>
              <h2 className="author-posts-heading">Latest articles by Maduranga</h2>
              <p className="author-posts-intro">
                {founderPosts.length} practical guides on feedback collection, complaint resolution and QR
                feedback for small and mid-sized businesses. The most recent are below.
              </p>
              <ul className="author-posts">
                {founderPosts.slice(0, RECENT_COUNT).map((post) => (
                  <li key={post.slug}>
                    <Link href={`${post.slug}/`}>{post.title}</Link>
                    <p>{post.description}</p>
                  </li>
                ))}
              </ul>
              <Link href="/blog/" className="btn-primary teal" style={{ display: "inline-flex", marginTop: 30 }}>
                Read all {founderPosts.length} FeedSolve articles <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="blog" />
    </>
  );
}
