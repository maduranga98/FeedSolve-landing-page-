"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
 ArrowRight, ChevronRight, Calendar, Clock,
 Check, X, Link as LinkIcon, Share2, ExternalLink,
 QrCode, Hash, TrendingUp, ClipboardList,
} from "lucide-react";

type BlogFaq = {
 question: string;
 answer: string;
};

type BlogSection = {
 heading: string;
 key_points?: string[];
 body?: string[];
 examples?: string[];
 checklist?: string[];
 table?: { headers: string[]; rows: string[][] };
 comparison_table?: { columns: string[]; rows: string[][] };
 faqs?: BlogFaq[];
};

type InternalLink = {
 anchor: string;
 url: string;
};

type BlogPost = {
 id: number;
 meta: {
  title: string;
  slug: string;
  primary_keyword: string;
  secondary_keywords: string[];
  meta_description: string;
  target_word_count: string;
 };
 content: {
  quick_answer_box: string;
  h1: string;
  key_takeaways?: string[];
  sections: BlogSection[];
  internal_links?: InternalLink[];
 };
};

const categoryIcons: Record<string, { icon: React.ReactNode; bg: string }> = {
 "Operations": { icon: <ClipboardList size={22} style={{ color: "var(--teal)" }} />, bg: "var(--teal-pale)" },
 "QR Codes": { icon: <QrCode size={22} style={{ color: "#3730A3" }} />, bg: "#EEF2FF" },
 "Guides": { icon: <Hash size={22} style={{ color: "#E65100" }} />, bg: "#FFF8E1" },
 "Product": { icon: <TrendingUp size={22} style={{ color: "#7B1FA2" }} />, bg: "#F3E5F5" },
 "Comparison": { icon: <Check size={22} style={{ color: "#7B1FA2" }} />, bg: "#F3E5F5" },
 "Case Study": { icon: <TrendingUp size={22} style={{ color: "#2E7D32" }} />, bg: "#E8F5E9" },
};

const tagMap: Record<string, { label: string; color: string }> = {
 operations: { label: "Operations", color: "var(--teal)" },
 qr: { label: "QR Codes", color: "#3730A3" },
 guides: { label: "Guides", color: "#E65100" },
 product: { label: "Product", color: "#7B1FA2" },
 comparison: { label: "Comparison", color: "#7B1FA2" },
 casestudy: { label: "Case Study", color: "#2E7D32" },
};

function getCategoryForBlog(blog: BlogPost): string {
 const kw = blog.meta.primary_keyword.toLowerCase();
 if (kw.includes("qr") || kw.includes("restaurant")) return "qr";
 if (kw.includes("workflow") || kw.includes("resolution rate") || kw.includes("supplier") || kw.includes("tenant") || kw.includes("distributor") || kw.includes("suggestion")) return "operations";
 if (kw.includes("no-login") || kw.includes("feedback form")) return "product";
 if (kw.includes("vs") || kw.includes("typeform")) return "comparison";
 return "guides";
}

function normalizeInternalLink(url: string): string {
 if (url === "/pricing") return "/#pricing";
 return url.endsWith("/") || url.includes("#") ? url : `${url}/`;
}

function formatPublishedMonth(blog: BlogPost): string {
 const date = new Date(Date.UTC(2025, 10 + Math.floor((blog.id - 1) / 4), ((blog.id - 1) % 4) * 6 + 3));
 return new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(date);
}

function getReadTime(blog: BlogPost): string {
 const wc = blog.meta.target_word_count;
 const avg = parseInt(wc.replace(/[^0-9]/g, "").slice(0, 4));
 return `${Math.max(3, Math.round(avg / 300))} min`;
}

export default function BlogPostClient({ blog, otherPosts }: { blog: BlogPost; otherPosts: BlogPost[] }) {
 const [progress, setProgress] = useState(0);

 const cat = blog ? getCategoryForBlog(blog) : "operations";
 const catInfo = tagMap[cat] || tagMap.operations;

 const tocSections = useMemo(() => {
  if (!blog) return [];
  return blog.content.sections
   .filter((s: BlogSection) => !s.heading.startsWith("H2: FAQs"))
   .map((s: BlogSection, i: number) => ({
    id: `sec-${i}`,
    label: s.heading.replace("H2: ", ""),
   }));
 }, [blog]);

 const [activeToc, setActiveToc] = useState(tocSections[0]?.id || "");

 useEffect(() => {
  let ticking = false;
  const onScroll = () => {
   if (!ticking) {
    requestAnimationFrame(() => {
     const body = document.body;
     const html = document.documentElement;
     const scrollTop = window.scrollY;
     const docHeight = Math.max(body.scrollHeight, html.scrollHeight) - window.innerHeight;
     setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

     let active = tocSections[0]?.id || "";
     tocSections.forEach(({ id }: { id: string }) => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < 120) active = id;
     });
     setActiveToc(active);
     ticking = false;
    });
    ticking = true;
   }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
 }, [tocSections]);

 const copyLink = () => {
  if (typeof window !== "undefined") {
   navigator.clipboard.writeText(window.location.href).catch(() => {});
  }
 };

 if (!blog) {
  return (
   <>
    <Navbar variant="blog" />
    <div style={{ maxWidth: 700, margin: "120px auto", textAlign: "center", padding: 40 }}>
     <h1>Post not found</h1>
     <p>The blog post you&apos;re looking for doesn&apos;t exist.</p>
     <Link href="/blog/" className="btn-primary teal" style={{ display: "inline-flex", marginTop: 20 }}>
      Back to Blog <ArrowRight size={15} />
     </Link>
    </div>
    <Footer variant="blog" />
   </>
  );
 }

 return (
  <>
   <div className="reading-progress">
    <div className="reading-progress-fill" style={{ width: `${progress}%` }} />
   </div>

   <Navbar variant="blog" />

   <div className="article-wrap">
    {/* HERO */}
    <div className="article-hero-area">
     <div className="article-breadcrumb">
      <Link href="/">Home</Link>
      <ChevronRight size={13} />
      <Link href="/blog/">Blog</Link>
      <ChevronRight size={13} />
      <span>{blog.meta.title.split(" ").slice(0, 4).join(" ")}</span>
     </div>
     <div className="article-tag-badge" style={{ background: catInfo.color + "18", color: catInfo.color }}>
      {catInfo.label}
     </div>
     <h1 className="article-title">{blog.content.h1}</h1>
     <p className="article-subtitle">{blog.meta.meta_description}</p>
     <div className="article-meta">
      <div className="author-wrap">
       <div className="author-avatar-lg" style={{ background: "var(--teal)" }}>FS</div>
       <div>
        <Link href="/authors/feedsolve-team/" className="author-name-text">FeedSolve Team</Link>
        <div className="author-role-text">Operations &amp; Product</div>
       </div>
      </div>
      <div className="article-stats">
       <div className="article-stat"><Calendar size={14} /> {formatPublishedMonth(blog)}</div>
       <div className="article-stat"><Clock size={14} /> {getReadTime(blog)} read</div>
      </div>
     </div>
    </div>

    {/* MAIN CONTENT */}
    <div className="article-content">
     {/* Hero illustration */}
     <div className="article-hero-img" role="img" aria-label={`${blog.meta.primary_keyword} article summary and table of contents`}>
      <div className="ahi-left">
       <h2 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 12 }}>Key takeaways</h2>
       {blog.content.key_takeaways ? (
        <ul style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7, margin: 0, paddingLeft: 18, listStyle: "disc" }}>
         {blog.content.key_takeaways.map((point: string, i: number) => (
          <li key={i} style={{ marginBottom: 8 }}>{point}</li>
         ))}
        </ul>
       ) : (
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7 }}>
         {blog.content.quick_answer_box}
        </p>
       )}
      </div>
      <div className="ahi-right">
       <div className="ahi-right-label">In this article</div>
       {tocSections.slice(0, 4).map(({ label }: { label: string }, i: number) => (
        <div key={i} className="ahi-channel" style={{ background: "rgba(58,143,165,0.1)" }}>
         <div className="ahi-channel-icon" style={{ background: "var(--teal)", fontSize: 12, fontWeight: 700, width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center" }}>
          {i + 1}
         </div>
         <div className="ahi-channel-text">
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>{label}</span>
         </div>
        </div>
       ))}
      </div>
     </div>

     {/* PROSE - render sections */}
     <div className="prose">
      <p>{blog.content.quick_answer_box}</p>
     </div>

     {blog.content.sections.map((section: BlogSection, i: number) => {
      const isFaq = section.heading.startsWith("H2: FAQs");
      const headingText = section.heading.replace("H2: ", "");
      const sectionId = `sec-${i}`;

      return (
       <div key={i}>
        <div className="prose">
         <h2 id={sectionId}>{headingText}</h2>
         {section.key_points && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "20px 0" }}>
           {section.key_points.map((point: string, j: number) => (
            <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
             <div style={{
              minWidth: 24, height: 24, borderRadius: "50%",
              background: "var(--teal-pale)", color: "var(--teal)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 12, fontWeight: 700, flexShrink: 0,
             }}>
              {j + 1}
             </div>
             <p style={{ margin: 0, color: "var(--text-mid)", fontSize: 15, lineHeight: 1.6 }}>{point}</p>
            </div>
           ))}
          </div>
         )}

         {section.body && section.body.map((para: string, j: number) => (
          <p key={`body-${j}`}>{para}</p>
         ))}
         {section.examples && section.examples.length > 0 && (
          <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 12, padding: "18px 22px", margin: "20px 0" }}>
           <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>Examples</h3>
           <ul style={{ margin: 0, paddingLeft: 18 }}>
            {section.examples.map((example: string, j: number) => (
             <li key={j} style={{ marginBottom: 8 }}>{example}</li>
            ))}
           </ul>
          </div>
         )}
         {section.checklist && section.checklist.length > 0 && (
          <div style={{ background: "var(--teal-pale)", borderRadius: 12, padding: "18px 22px", margin: "20px 0" }}>
           <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>Checklist</h3>
           <ul style={{ margin: 0, paddingLeft: 18 }}>
            {section.checklist.map((item: string, j: number) => (
             <li key={j} style={{ marginBottom: 8 }}>{item}</li>
            ))}
           </ul>
          </div>
         )}
        </div>

        {section.comparison_table && (
         <div className="comp-table">
          <table>
           <thead>
            <tr>
             {section.comparison_table.columns.map((col: string) => (
              <th key={col}>{col}</th>
             ))}
            </tr>
           </thead>
           <tbody>
            {section.comparison_table.rows.map((row: string[], ri: number) => (
             <tr key={ri}>
              {row.map((cell: string, ci: number) => (
               <td key={ci} className={ci === 0 ? "" : cell.startsWith("✅") ? "ct-good" : cell.startsWith("❌") ? "ct-bad" : ""}>
                <div className="comp-tick">
                 {cell.startsWith("✅") && <Check size={14} />}
                 {cell.startsWith("❌") && <X size={14} />}
                 {" "}{cell.replace("✅ ", "").replace("❌ ", "")}
                </div>
               </td>
              ))}
             </tr>
            ))}
           </tbody>
          </table>
         </div>
        )}

        {isFaq && section.faqs && (
         <div style={{ display: "flex", flexDirection: "column", gap: 16, margin: "20px 0" }}>
          {section.faqs.map((faq: BlogFaq, fi: number) => (
           <div key={fi} style={{
            background: "var(--bg)",
            borderRadius: 12, padding: "20px 24px",
            border: "1px solid var(--border)",
           }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>{faq.question}</h3>
            <p style={{ margin: 0, color: "var(--text-mid)", fontSize: 14, lineHeight: 1.7 }}>{faq.answer}</p>
           </div>
          ))}
         </div>
        )}
       </div>
      );
     })}


     {blog.content.internal_links && blog.content.internal_links.length > 0 && (
      <div className="prose">
       <div className="related-links" style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 14, padding: "24px", margin: "32px 0" }}>
        <h3 style={{ marginTop: 0 }}>Further reading</h3>
        <ul style={{ marginBottom: 0 }}>
         {blog.content.internal_links.map((link: InternalLink, i: number) => (
          <li key={`${link.url}-${i}`}>
           <Link href={normalizeInternalLink(link.url)}>{link.anchor}</Link>
          </li>
         ))}
        </ul>
       </div>
      </div>
     )}

     {/* IN-ARTICLE CTA */}
     <div className="article-cta-box">
      <h3>Ready to fix your feedback loop?</h3>
      <p>Set up your first complaint board in under 2 minutes. No credit card required.</p>
      <Link href="/" className="btn-primary teal">
       Try FeedSolve Free <ArrowRight size={15} />
      </Link>
     </div>

     {/* ARTICLE FOOTER */}
     <div className="article-footer-section">
      <div className="article-tags-row">
       <span className="article-tags-label">Tags</span>
       {[catInfo.label, ...blog.meta.secondary_keywords.slice(0, 3)].map((tag) => (
        <Link key={tag} href="/blog/" className="article-tag-chip">{tag}</Link>
       ))}
      </div>
      <div className="share-row">
       <span className="share-label">Share</span>
       <button className="share-btn" title="Copy link" onClick={copyLink}>
        <LinkIcon size={15} />
       </button>
       <button className="share-btn" title="Share on LinkedIn">
        <ExternalLink size={15} />
       </button>
       <button className="share-btn" title="Share">
        <Share2 size={15} />
       </button>
      </div>
     </div>

     {/* AUTHOR BIO */}
     <div className="author-bio-card">
      <div className="author-bio-avatar" style={{ background: "var(--teal)" }}>FS</div>
      <div>
       <Link href="/authors/feedsolve-team/" className="author-bio-name">FeedSolve Team</Link>
       <div className="author-role-text">Operations &amp; Product</div>
       <div className="author-bio-bio">
        The FeedSolve team writes about feedback management, operational efficiency, and building systems that help SMBs track and resolve every complaint.
       </div>
      </div>
     </div>
    </div>

    {/* SIDEBAR */}
    <aside className="article-sidebar">
     <div className="sidebar-card">
      <div className="sidebar-card-title">In this article</div>
      {tocSections.map(({ id, label }: { id: string; label: string }, i: number) => (
       <a
        key={id}
        href={`#${id}`}
        className={`toc-item${activeToc === id ? " active" : ""}`}
       >
        <span className="toc-num">0{i + 1}</span>
        <span className="toc-text">{label}</span>
       </a>
      ))}
     </div>

     <div className="sidebar-cta-card">
      <h4>Start tracking complaints today</h4>
      <p>Setup takes under 2 minutes. Free plan available.</p>
      <Link href="/" className="btn-primary teal">
       Try FeedSolve <ArrowRight size={14} />
      </Link>
     </div>

     <div className="sidebar-card">
      <div className="sidebar-card-title">Related posts</div>
      {otherPosts.slice(0, 3).map((other: BlogPost) => {
       const otherCat = getCategoryForBlog(other);
       const otherCatInfo = tagMap[otherCat] || tagMap.operations;
       const catIcon = categoryIcons[otherCatInfo.label] || categoryIcons["Operations"];
       return (
        <Link key={other.id} href={`${other.meta.slug}/`} className="related-post">
         <div className="rp-img" style={{ background: catIcon.bg }}>{catIcon.icon}</div>
         <div className="rp-body">
          <h4>{other.meta.title.length > 45 ? other.meta.title.slice(0, 45) + "..." : other.meta.title}</h4>
          <span>{getReadTime(other)} read</span>
         </div>
        </Link>
       );
      })}
     </div>
    </aside>
   </div>

   {/* MORE POSTS */}
   <div className="more-posts-section">
    <h2>More from the blog</h2>
    <div className="more-grid">
     {otherPosts.slice(0, 3).map((other: BlogPost) => {
      const otherCat = getCategoryForBlog(other);
      const otherCatInfo = tagMap[otherCat] || tagMap.operations;
      return (
       <Link key={other.id} href={`${other.meta.slug}/`} className="more-card">
        <div className="more-tag" style={{ color: otherCatInfo.color }}>{otherCatInfo.label}</div>
        <h3>{other.meta.title}</h3>
        <p>{other.content.quick_answer_box.slice(0, 100)}...</p>
        <div className="more-card-meta">FeedSolve Team · {getReadTime(other)} read</div>
       </Link>
      );
     })}
    </div>
   </div>

   <Footer variant="blog" />
  </>
 );
}
