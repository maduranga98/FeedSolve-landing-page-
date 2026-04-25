"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BookOpen, Star, Search, ChevronLeft, ChevronRight,
  MessageCircle, ArrowDown, XCircle,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="scrolled">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <Image src="/feedsolve.png" alt="FeedSolve" width={34} height={34} />
            <span className="nav-logo-text">FeedSolve</span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/#solution">Product</Link></li>
            <li><Link href="/#pricing">Pricing</Link></li>
            <li><Link href="/#demo">Demo</Link></li>
            <li><Link href="/blog" style={{ color: "var(--navy)", fontWeight: 600 }}>Blog</Link></li>
          </ul>
          <div className="nav-actions">
            <a href="#" className="btn-ghost">Login</a>
            <a href="#" className="btn-primary teal">Try Now</a>
            <button
              className={`nav-hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <Link href="/#solution" onClick={() => setMenuOpen(false)}>Product</Link>
        <Link href="/#pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
        <Link href="/#demo" onClick={() => setMenuOpen(false)}>Demo</Link>
        <Link href="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
        <a href="#">Login</a>
        <a href="#" className="mobile-cta">Try Now It&apos;s Free</a>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <Image src="/feedsolve.png" alt="FeedSolve" width={28} height={28} />
          <span className="footer-logo-text">FeedSolve</span>
        </div>
        <div className="footer-links">
          <Link href="/#solution">Product</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-copy">
        © 2026 FeedSolve. All rights reserved. &nbsp;·&nbsp; A product of{" "}
        <strong style={{ color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>Lumora Ventures Pvt. Ltd.</strong>
      </div>
    </footer>
  );
}

const categories = [
  { id: "all", label: "All Posts" },
  { id: "operations", label: "Operations" },
  { id: "qr", label: "QR Codes" },
  { id: "product", label: "Product" },
  { id: "guides", label: "Guides" },
  { id: "casestudy", label: "Case Studies" },
];

const posts = [
  {
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
    avatarInitials: "SR",
    title: "How to build a zero-leakage complaint resolution process",
    excerpt: "A step-by-step guide to making sure every single complaint your business receives is logged, assigned, and closed.",
    author: "Shreya Rao",
    date: "Apr 12, 2026",
    readTime: "4 min",
    href: "/blog/blog-post",
  },
  {
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
    avatarInitials: "MJ",
    title: "5 places to put your feedback QR code that actually get scanned",
    excerpt: "Most QR codes never get scanned. These placement strategies change that and drive real, actionable feedback.",
    author: "Mehul Joshi",
    date: "Apr 7, 2026",
    readTime: "3 min",
    href: "/blog/blog-post",
  },
  {
    cat: "guides",
    imgBg: "linear-gradient(135deg,#FFF8E1 0%,#FFE0B2 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="18" y="15" width="44" height="50" rx="5" fill="white" opacity="0.9" />
        <rect x="26" y="25" width="28" height="3" rx="1.5" fill="#E65100" opacity="0.7" />
        <rect x="26" y="32" width="20" height="2.5" rx="1.25" fill="#7A94AD" />
        <rect x="26" y="38" width="24" height="2.5" rx="1.25" fill="#7A94AD" />
        <rect x="26" y="44" width="16" height="2.5" rx="1.25" fill="#7A94AD" />
        <circle cx="52" cy="52" r="10" fill="#F57F17" />
        <path d="M48 52l3 3 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    tagLabel: "Guides",
    tagStyle: { background: "#FFF8E1", color: "#E65100" },
    avatarBg: "#E65100",
    avatarInitials: "NK",
    title: "The complete guide to complaint management for small businesses",
    excerpt: "From first contact to resolution, here is everything you need to handle customer complaints professionally and efficiently.",
    author: "Nisha Kumar",
    date: "Apr 3, 2026",
    readTime: "7 min",
    href: "/blog/blog-post",
  },
  {
    cat: "product",
    imgBg: "linear-gradient(135deg,#F3E5F5 0%,#E8EAF6 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="12" y="18" width="56" height="36" rx="6" fill="white" opacity="0.9" />
        <rect x="20" y="28" width="12" height="3" rx="1.5" fill="#7B1FA2" opacity="0.6" />
        <rect x="36" y="28" width="12" height="3" rx="1.5" fill="#3730A3" opacity="0.6" />
        <rect x="52" y="28" width="8" height="3" rx="1.5" fill="#3A8FA5" opacity="0.6" />
        <rect x="20" y="35" width="8" height="8" rx="2" fill="#7B1FA2" opacity="0.3" />
        <rect x="32" y="35" width="8" height="8" rx="2" fill="#3730A3" opacity="0.3" />
        <rect x="44" y="35" width="8" height="8" rx="2" fill="#3A8FA5" opacity="0.5" />
        <rect x="56" y="35" width="4" height="8" rx="1" fill="#3A8FA5" opacity="0.8" />
        <rect x="28" y="58" width="24" height="4" rx="2" fill="white" opacity="0.6" />
      </svg>
    ),
    tagLabel: "Product",
    tagStyle: { background: "#F3E5F5", color: "#7B1FA2" },
    avatarBg: "#7B1FA2",
    avatarInitials: "PS",
    title: "New in FeedSolve: Custom fields, bulk actions, and more",
    excerpt: "April 2026 product update. Here is everything we shipped this month and what it means for your feedback workflow.",
    author: "Priya Shah",
    date: "Apr 1, 2026",
    readTime: "2 min",
    href: "/blog/blog-post",
  },
  {
    cat: "casestudy",
    imgBg: "linear-gradient(135deg,#E8F5E9 0%,#E8F4F8 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="16" y="24" width="48" height="32" rx="5" fill="white" opacity="0.9" />
        <path d="M24 44 L32 36 L40 41 L50 32 L56 38" stroke="#3A8FA5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="32" cy="36" r="3" fill="#3A8FA5" />
        <circle cx="40" cy="41" r="3" fill="#3A8FA5" />
        <circle cx="50" cy="32" r="3" fill="#2E7D32" />
        <circle cx="24" cy="44" r="3" fill="#7A94AD" />
      </svg>
    ),
    tagLabel: "Case Study",
    tagStyle: { background: "#E8F5E9", color: "#2E7D32" },
    avatarBg: "#2E7D32",
    avatarInitials: "TR",
    title: "How Zest Foods reduced customer complaints by 68% in 90 days",
    excerpt: "A real story from a food manufacturing company that switched from WhatsApp to FeedSolve and transformed their quality control.",
    author: "Team FeedSolve",
    date: "Mar 28, 2026",
    readTime: "6 min",
    href: "/blog/blog-post",
  },
  {
    cat: "operations",
    imgBg: "linear-gradient(135deg,#FCE4EC 0%,#FFF3E0 100%)",
    img: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="22" fill="white" opacity="0.8" />
        <path d="M40 25 L40 40 L50 47" stroke="#C62828" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="40" r="3" fill="#C62828" />
      </svg>
    ),
    tagLabel: "Operations",
    tagStyle: { background: "#FCE4EC", color: "#C62828" },
    avatarBg: "#C62828",
    avatarInitials: "DR",
    title: "Response time benchmarks: How fast should you resolve a complaint?",
    excerpt: "Data from 10,000 complaints shows what resolution timelines look like across industries and what customers expect.",
    author: "Dev Rathi",
    date: "Mar 22, 2026",
    readTime: "5 min",
    href: "/blog/blog-post",
  },
];

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState("all");

  const visiblePosts = activeCat === "all" ? posts : posts.filter((p) => p.cat === activeCat);

  return (
    <>
      <Navbar />

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
          <input type="text" placeholder="Search articles..." />
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
        {activeCat === "all" && (
          <div className="listing-featured">
            <div>
              <div className="listing-fp-tag">
                <Star size={11} /> Featured
              </div>
              <h2>Why WhatsApp is killing your customer feedback loop</h2>
              <p className="listing-featured-desc">
                Most businesses run their entire complaints process through a WhatsApp group. Here is why that breaks down at scale and what to do instead.
              </p>
              <div className="listing-post-meta">
                <div className="listing-author-avatar" style={{ background: "var(--teal)" }}>AK</div>
                <div className="listing-post-meta-text">
                  <div className="meta-name">Aryan Kumar</div>
                  <div className="meta-date">Apr 18, 2026 · 5 min read</div>
                </div>
              </div>
              <Link href="/blog/blog-post" className="btn-primary teal">
                Read full post <ArrowRight size={15} />
              </Link>
            </div>
            <div className="listing-fp-visual">
              <div className="listing-fp-stat-row">
                <div className="listing-fp-stat">
                  <div className="listing-fp-stat-n">73%</div>
                  <div className="listing-fp-stat-l">Complaints lost in chat apps</div>
                </div>
                <div className="listing-fp-stat">
                  <div className="listing-fp-stat-n">4x</div>
                  <div className="listing-fp-stat-l">Faster resolution with tracking</div>
                </div>
                <div className="listing-fp-stat">
                  <div className="listing-fp-stat-n">91%</div>
                  <div className="listing-fp-stat-l">Customers want a follow-up</div>
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
                  Typical complaint journey
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                    <MessageCircle size={12} style={{ color: "#25D366" }} /> Customer sends WhatsApp message
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                    <ArrowDown size={12} style={{ color: "rgba(255,255,255,0.3)" }} /> Gets buried under 47 other messages
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
                    <XCircle size={12} style={{ color: "#FF6B6B" }} /> Forgotten. Never resolved.
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

        {/* PAGINATION */}
        <div className="pagination">
          <button className="page-btn"><ChevronLeft size={14} /></button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn"><ChevronRight size={14} /></button>
        </div>

        {/* NEWSLETTER */}
        <div className="newsletter-bar">
          <div>
            <h3>Get new posts in your inbox</h3>
            <p className="newsletter-bar-desc">
              No spam, no noise. Just one useful article every week on feedback, operations, and product updates.
            </p>
          </div>
          <div>
            <div className="newsletter-form">
              <input type="email" placeholder="you@company.com" />
              <button>Subscribe</button>
            </div>
            <div className="newsletter-note">Join 1,200+ operators. Unsubscribe anytime.</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
