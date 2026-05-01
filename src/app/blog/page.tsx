"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight, BookOpen, Star, Search, ChevronLeft, ChevronRight,
  MessageCircle, ArrowDown, XCircle, CheckCircle2,
} from "lucide-react";
import blogData from "@/data/blog.json";

const categories = [
  { id: "all", label: "All Posts" },
  { id: "operations", label: "Operations" },
  { id: "qr", label: "QR Codes" },
  { id: "guides", label: "Guides" },
  { id: "product", label: "Product" },
  { id: "comparison", label: "Comparison" },
];

const excerpts: Record<number, string> = {
  1: "The percentage of complaints your team actually resolves — and why tracking it matters more than NPS.",
  2: "Collect feedback via QR code without requiring login. Here's how to set one up in minutes.",
  3: "Replace WhatsApp threads with a structured supplier feedback tool — with QR boards and resolution tracking.",
  4: "Give guests a QR code to report issues instantly, and resolve them before they become public reviews.",
  5: "Replace the physical suggestion box with a digital version that includes tracking codes and a resolution workflow.",
  6: "Give residents a QR code to submit maintenance requests — and track every issue to resolution.",
  7: "Requiring registration before submission reduces response rates by 40–70%. Here's what to use instead.",
  8: "A 5-stage Kanban model that moves complaints from received to resolved with full accountability.",
  9: "One is a survey builder, the other is a feedback resolution platform. See which fits your use case.",
  10: "Close channel blind spots with structured distributor feedback — tracking codes and resolution workflow built in.",
};

const postVisuals: Record<number, {
  cat: string;
  imgBg: string;
  img: React.ReactNode;
  tagLabel: string;
  tagStyle: { background: string; color: string };
  avatarBg: string;
  avatarInitials: string;
  author: string;
  date: string;
  readTime: string;
}> = {
  1: {
    cat: "operations",
    imgBg: "linear-gradient(135deg,#E8F4F8 0%,#C8E6C9 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="12" y="20" width="56" height="40" rx="6" fill="white" opacity="0.9" />
        <rect x="20" y="30" width="16" height="4" rx="2" fill="#3A8FA5" />
        <rect x="20" y="38" width="24" height="3" rx="1.5" fill="#7A94AD" />
        <rect x="20" y="44" width="20" height="3" rx="1.5" fill="#7A94AD" />
        <rect x="50" y="28" width="10" height="10" rx="3" fill="#3A8FA5" />
        <path d="M52 33l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tagLabel: "Operations",
    tagStyle: { background: "var(--teal-pale)", color: "var(--teal)" },
    avatarBg: "var(--navy)",
    avatarInitials: "FS",
    author: "FeedSolve Team",
    date: "Apr 25, 2026",
    readTime: "5 min",
  },
  2: {
    cat: "qr",
    imgBg: "linear-gradient(135deg,#EEF2FF 0%,#E8F4F8 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="14" y="14" width="22" height="22" rx="3" fill="#1E3557" opacity="0.8" />
        <rect x="18" y="18" width="14" height="14" rx="2" fill="white" />
        <rect x="21" y="21" width="8" height="8" rx="1" fill="#3A8FA5" />
        <rect x="44" y="14" width="22" height="22" rx="3" fill="#1E3557" opacity="0.8" />
        <rect x="48" y="18" width="14" height="14" rx="2" fill="white" />
        <rect x="51" y="21" width="8" height="8" rx="1" fill="#3A8FA5" />
        <rect x="14" y="44" width="22" height="22" rx="3" fill="#1E3557" opacity="0.8" />
        <rect x="18" y="48" width="14" height="14" rx="2" fill="white" />
        <rect x="21" y="51" width="8" height="8" rx="1" fill="#3A8FA5" />
        <rect x="44" y="44" width="6" height="6" rx="1" fill="#3A8FA5" opacity="0.7" />
        <rect x="54" y="44" width="6" height="6" rx="1" fill="#1E3557" opacity="0.7" />
        <rect x="44" y="54" width="6" height="6" rx="1" fill="#1E3557" opacity="0.7" />
        <rect x="54" y="54" width="6" height="6" rx="1" fill="#3A8FA5" opacity="0.7" />
      </svg>
    ),
    tagLabel: "QR Codes",
    tagStyle: { background: "#EEF2FF", color: "#3730A3" },
    avatarBg: "var(--teal)",
    avatarInitials: "FS",
    author: "FeedSolve Team",
    date: "Apr 22, 2026",
    readTime: "4 min",
  },
  3: {
    cat: "operations",
    imgBg: "linear-gradient(135deg,#E8F4F8 0%,#E0F2F1 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="20" y="15" width="40" height="50" rx="5" fill="white" opacity="0.9" />
        <rect x="30" y="10" width="20" height="8" rx="3" fill="#1E3557" opacity="0.6" />
        <rect x="28" y="28" width="24" height="3" rx="1.5" fill="#3A8FA5" />
        <rect x="28" y="35" width="18" height="3" rx="1.5" fill="#7A94AD" />
        <rect x="28" y="42" width="20" height="3" rx="1.5" fill="#7A94AD" />
        <circle cx="50" cy="52" r="8" fill="#3A8FA5" />
        <path d="M46 52l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tagLabel: "Operations",
    tagStyle: { background: "var(--teal-pale)", color: "var(--teal)" },
    avatarBg: "var(--navy)",
    avatarInitials: "FS",
    author: "FeedSolve Team",
    date: "Apr 18, 2026",
    readTime: "4 min",
  },
  4: {
    cat: "qr",
    imgBg: "linear-gradient(135deg,#FFF8E1 0%,#FFE0B2 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="22" fill="white" opacity="0.9" />
        <circle cx="40" cy="40" r="16" fill="none" stroke="#E65100" strokeWidth="1.5" opacity="0.4" />
        <rect x="25" y="34" width="3" height="14" rx="1.5" fill="#E65100" opacity="0.7" />
        <rect x="52" y="34" width="3" height="14" rx="1.5" fill="#E65100" opacity="0.7" />
        <circle cx="40" cy="42" r="3" fill="#E65100" opacity="0.4" />
      </svg>
    ),
    tagLabel: "QR Codes",
    tagStyle: { background: "#FFF8E1", color: "#E65100" },
    avatarBg: "#E65100",
    avatarInitials: "FS",
    author: "FeedSolve Team",
    date: "Apr 15, 2026",
    readTime: "4 min",
  },
  5: {
    cat: "guides",
    imgBg: "linear-gradient(135deg,#FFF8E1 0%,#FFECB3 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="15" y="25" width="50" height="35" rx="5" fill="white" opacity="0.9" />
        <rect x="15" y="25" width="50" height="10" rx="5" fill="#F57F17" opacity="0.2" />
        <rect x="25" y="40" width="20" height="3" rx="1.5" fill="#7A94AD" />
        <rect x="25" y="46" width="15" height="3" rx="1.5" fill="#7A94AD" />
        <path d="M55 35L55 50" stroke="#F57F17" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 40L55 35L60 40" stroke="#F57F17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tagLabel: "Guides",
    tagStyle: { background: "#FFF8E1", color: "#E65100" },
    avatarBg: "#E65100",
    avatarInitials: "FS",
    author: "FeedSolve Team",
    date: "Apr 11, 2026",
    readTime: "4 min",
  },
  6: {
    cat: "operations",
    imgBg: "linear-gradient(135deg,#E8EAF6 0%,#E8F4F8 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="20" y="20" width="40" height="45" rx="4" fill="white" opacity="0.9" />
        <rect x="26" y="26" width="8" height="8" rx="1" fill="#1E3557" opacity="0.4" />
        <rect x="38" y="26" width="8" height="8" rx="1" fill="#1E3557" opacity="0.4" />
        <rect x="26" y="38" width="8" height="8" rx="1" fill="#1E3557" opacity="0.4" />
        <rect x="38" y="38" width="8" height="8" rx="1" fill="#1E3557" opacity="0.4" />
        <rect x="32" y="52" width="16" height="13" rx="2" fill="#3A8FA5" opacity="0.5" />
      </svg>
    ),
    tagLabel: "Operations",
    tagStyle: { background: "var(--teal-pale)", color: "var(--teal)" },
    avatarBg: "var(--navy)",
    avatarInitials: "FS",
    author: "FeedSolve Team",
    date: "Apr 8, 2026",
    readTime: "3 min",
  },
  7: {
    cat: "product",
    imgBg: "linear-gradient(135deg,#F3E5F5 0%,#E8EAF6 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="18" y="15" width="44" height="50" rx="5" fill="white" opacity="0.9" />
        <rect x="26" y="25" width="28" height="3" rx="1.5" fill="#7B1FA2" opacity="0.5" />
        <rect x="26" y="32" width="20" height="3" rx="1.5" fill="#7A94AD" />
        <rect x="26" y="39" width="24" height="3" rx="1.5" fill="#7A94AD" />
        <rect x="26" y="46" width="16" height="3" rx="1.5" fill="#7A94AD" />
        <circle cx="52" cy="54" r="8" fill="#7B1FA2" opacity="0.3" />
        <path d="M49 54h6M52 51v6" stroke="#7B1FA2" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    tagLabel: "Product",
    tagStyle: { background: "#F3E5F5", color: "#7B1FA2" },
    avatarBg: "#7B1FA2",
    avatarInitials: "FS",
    author: "FeedSolve Team",
    date: "Apr 4, 2026",
    readTime: "4 min",
  },
  8: {
    cat: "guides",
    imgBg: "linear-gradient(135deg,#E8F4F8 0%,#C8E6C9 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="10" y="18" width="18" height="44" rx="4" fill="white" opacity="0.9" />
        <rect x="14" y="24" width="10" height="3" rx="1.5" fill="#E65100" opacity="0.6" />
        <rect x="14" y="30" width="10" height="6" rx="2" fill="#E65100" opacity="0.2" />
        <rect x="14" y="39" width="10" height="6" rx="2" fill="#E65100" opacity="0.2" />
        <rect x="31" y="18" width="18" height="44" rx="4" fill="white" opacity="0.9" />
        <rect x="35" y="24" width="10" height="3" rx="1.5" fill="#3A8FA5" opacity="0.6" />
        <rect x="35" y="30" width="10" height="6" rx="2" fill="#3A8FA5" opacity="0.2" />
        <rect x="52" y="18" width="18" height="44" rx="4" fill="white" opacity="0.9" />
        <rect x="56" y="24" width="10" height="3" rx="1.5" fill="#2E7D32" opacity="0.6" />
        <rect x="56" y="30" width="10" height="6" rx="2" fill="#2E7D32" opacity="0.2" />
        <rect x="56" y="39" width="10" height="6" rx="2" fill="#2E7D32" opacity="0.2" />
      </svg>
    ),
    tagLabel: "Guides",
    tagStyle: { background: "#FFF8E1", color: "#E65100" },
    avatarBg: "#E65100",
    avatarInitials: "FS",
    author: "FeedSolve Team",
    date: "Apr 1, 2026",
    readTime: "5 min",
  },
  9: {
    cat: "comparison",
    imgBg: "linear-gradient(135deg,#F3E5F5 0%,#E8EAF6 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="10" y="28" width="24" height="24" rx="4" fill="white" opacity="0.9" />
        <rect x="14" y="34" width="16" height="3" rx="1.5" fill="#7B1FA2" opacity="0.5" />
        <rect x="14" y="40" width="12" height="3" rx="1.5" fill="#7A94AD" />
        <rect x="46" y="28" width="24" height="24" rx="4" fill="white" opacity="0.9" />
        <rect x="50" y="34" width="16" height="3" rx="1.5" fill="#3A8FA5" />
        <rect x="50" y="40" width="12" height="3" rx="1.5" fill="#3A8FA5" opacity="0.5" />
        <path d="M30 52L40 60L50 52" stroke="#3A8FA5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tagLabel: "Comparison",
    tagStyle: { background: "#F3E5F5", color: "#7B1FA2" },
    avatarBg: "#7B1FA2",
    avatarInitials: "FS",
    author: "FeedSolve Team",
    date: "Mar 28, 2026",
    readTime: "3 min",
  },
  10: {
    cat: "operations",
    imgBg: "linear-gradient(135deg,#E8F4F8 0%,#E0F7FA 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="10" y="30" width="38" height="24" rx="4" fill="white" opacity="0.9" />
        <rect x="48" y="36" width="22" height="18" rx="3" fill="white" opacity="0.9" />
        <rect x="14" y="35" width="30" height="3" rx="1.5" fill="#3A8FA5" opacity="0.5" />
        <rect x="14" y="42" width="20" height="3" rx="1.5" fill="#7A94AD" />
        <circle cx="22" cy="58" r="5" fill="#1E3557" opacity="0.6" />
        <circle cx="58" cy="58" r="5" fill="#1E3557" opacity="0.6" />
      </svg>
    ),
    tagLabel: "Operations",
    tagStyle: { background: "var(--teal-pale)", color: "var(--teal)" },
    avatarBg: "var(--navy)",
    avatarInitials: "FS",
    author: "FeedSolve Team",
    date: "Mar 25, 2026",
    readTime: "4 min",
  },
};

const defaultVisual = {
  cat: "guides",
  imgBg: "linear-gradient(135deg,#E8F4F8 0%,#E0F7FA 100%)",
  img: (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <rect x="20" y="20" width="40" height="40" rx="8" fill="white" opacity="0.9" />
      <rect x="30" y="35" width="20" height="3" rx="1.5" fill="#3A8FA5" />
      <rect x="30" y="42" width="14" height="3" rx="1.5" fill="#7A94AD" />
    </svg>
  ),
  tagLabel: "Article",
  tagStyle: { background: "var(--teal-pale)", color: "var(--teal)" },
  avatarBg: "var(--navy)",
  avatarInitials: "FS",
  author: "FeedSolve Team",
  date: "Mar 2026",
  readTime: "4 min",
};

const posts = blogData.map((blog) => {
  const v = postVisuals[blog.id] ?? defaultVisual;
  return {
    cat: v.cat,
    imgBg: v.imgBg,
    img: v.img,
    tagLabel: v.tagLabel,
    tagStyle: v.tagStyle,
    avatarBg: v.avatarBg,
    avatarInitials: v.avatarInitials,
    title: blog.meta.title,
    excerpt: excerpts[blog.id] ?? blog.meta.meta_description,
    author: v.author,
    date: v.date,
    readTime: v.readTime,
    href: blog.meta.slug,
  };
});

const POSTS_PER_PAGE = 5;

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = posts.filter((p) => {
    const matchesCat = activeCat === "all" || p.cat === activeCat;
    if (!searchQuery.trim()) return matchesCat;
    const q = searchQuery.toLowerCase();
    const matchesSearch = p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const visiblePosts = filteredPosts.slice(start, start + POSTS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCat, searchQuery]);

  return (
    <>
      <Navbar variant="blog" />

      {/* HERO */}
      <div className="blog-page-hero">
        <div className="blog-page-hero-glow" />
        <div
          className="section-label"
          style={{
            background: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.75)",
            marginBottom: 20,
            display: "inline-flex",
          }}
        >
          <BookOpen size={12} /> The FeedSolve Blog
        </div>
        <h1>
          Insights on feedback,<br />operations, and growth
        </h1>
        <p>Practical guides, case studies, and ideas for teams who take customer feedback seriously.</p>
        <div className="blog-hero-search">
          <Search size={16} />
          <label htmlFor="blog-search" className="sr-only">Search articles</label>
          <input
            id="blog-search"
            type="search"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoComplete="off"
            aria-label="Search articles"
          />
        </div>
      </div>

      {/* CATEGORY BAR */}
      <div className="cat-bar">
        <div className="cat-inner">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`cat-btn${activeCat === cat.id ? " active" : ""}`}
              onClick={() => setActiveCat(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN */}
      <div className="blog-main">

        {/* FEATURED POST — only when showing all */}
        {activeCat === "all" && !searchQuery.trim() && (
          <div className="listing-featured">
            <div>
              <div className="listing-fp-tag">
                <Star size={11} /> Featured
              </div>
              <h2>{blogData[0].meta.title}</h2>
              <p className="listing-featured-desc">
                Feedback resolution rate measures how many complaints your team actually resolves. Learn why it matters more than NPS for SMBs — and how to improve it fast.
              </p>
              <div className="listing-post-meta">
                <div className="listing-author-avatar" style={{ background: "var(--teal)" }}>FS</div>
                <div className="listing-post-meta-text">
                  <div className="meta-name">FeedSolve Team</div>
                  <div className="meta-date">Apr 25, 2026 · 5 min read</div>
                </div>
              </div>
              <Link href={blogData[0].meta.slug} className="btn-primary teal">
                Read full post <ArrowRight size={15} />
              </Link>
            </div>
            <div className="listing-fp-visual">
              <div className="listing-fp-stat-row">
                <div className="listing-fp-stat">
                  <div className="listing-fp-stat-n">80%</div>
                  <div className="listing-fp-stat-l">Healthy resolution rate</div>
                </div>
                <div className="listing-fp-stat">
                  <div className="listing-fp-stat-n">95%</div>
                  <div className="listing-fp-stat-l">Companies collect feedback</div>
                </div>
                <div className="listing-fp-stat">
                  <div className="listing-fp-stat-n">5%</div>
                  <div className="listing-fp-stat-l">Track resolution</div>
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: 10,
                  padding: 16,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.35)",
                    textTransform: "uppercase",
                    letterSpacing: "0.07em",
                    marginBottom: 10,
                  }}
                >
                  The resolution gap
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                    <MessageCircle size={12} style={{ color: "#3A8FA5" }} /> Feedback submitted
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                    <ArrowDown size={12} style={{ color: "rgba(255,255,255,0.3)" }} /> No tracking or ownership
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                    <XCircle size={12} style={{ color: "#FF6B6B" }} /> Issue never resolved
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* POSTS GRID */}
        <div className="posts-grid">
          {visiblePosts.map((post, i) => (
            <Link key={i} href={post.href} className="post-card">
              <div className="post-card-img" style={{ background: post.imgBg }}>
                {post.img}
              </div>
              <div className="post-card-body">
                <div className="post-tag" style={post.tagStyle}>{post.tagLabel}</div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="post-card-footer">
                  <div className="pc-avatar" style={{ background: post.avatarBg }}>{post.avatarInitials}</div>
                  <div className="post-card-meta">{post.author} · {post.date} · {post.readTime}</div>
                  <span className="post-card-read">Read <ArrowRight size={13} /></span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {visiblePosts.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: "var(--text-mid)" }}>
            <p style={{ fontSize: 16 }}>No posts found.</p>
          </div>
        )}

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="pagination">
            <button
              className="page-btn"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              style={{ opacity: currentPage === 1 ? 0.4 : 1 }}
            >
              <ChevronLeft size={14} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`page-btn${currentPage === page ? " active" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button
              className="page-btn"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              style={{ opacity: currentPage === totalPages ? 0.4 : 1 }}
            >
              <ChevronRight size={14} />
            </button>
          </div>
        )}

        {/* NEWSLETTER */}
        <div className="newsletter-bar">
          <div>
            <h3>Get new posts in your inbox</h3>
            <p className="newsletter-bar-desc">
              No spam, no noise. Just one useful article every week on feedback, operations, and product updates.
            </p>
          </div>
          <div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()} aria-label="Newsletter subscription">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="you@company.com"
                autoComplete="email"
                required
                aria-required="true"
              />
              <button type="submit">Subscribe</button>
            </form>
            <div className="newsletter-note">Join 1,200+ operators. Unsubscribe anytime.</div>
          </div>
        </div>
      </div>

      <Footer variant="blog" />
    </>
  );
}
