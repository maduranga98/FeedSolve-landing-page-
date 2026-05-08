"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
 ArrowRight, ChevronRight, Flame, Calendar, Clock, Eye,
 Check, X, MessageCircle, Mail, ClipboardList,
 Link as LinkIcon, Share2, ExternalLink,
} from "lucide-react";

const tocSections = [
 { id: "sec-1", label: "The WhatsApp trap" },
 { id: "sec-2", label: "Why this matters at scale" },
 { id: "sec-3", label: "Anatomy of a good complaint system" },
 { id: "sec-4", label: "What to do right now" },
];

export default function BlogPost() {
 const [progress, setProgress] = useState(0);
 const [activeToc, setActiveToc] = useState("sec-1");

 useEffect(() => {
  const onScroll = () => {
   const body = document.body;
   const html = document.documentElement;
   const scrollTop = window.scrollY;
   const docHeight = Math.max(body.scrollHeight, html.scrollHeight) - window.innerHeight;
   setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);

   let active = tocSections[0].id;
   tocSections.forEach(({ id }) => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top < 120) active = id;
   });
   setActiveToc(active);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
 }, []);

 const copyLink = () => {
  if (typeof window !== "undefined") {
   navigator.clipboard.writeText(window.location.href).catch(() => {});
  }
 };

 return (
  <>
   {/* READING PROGRESS */}
   <div className="reading-progress">
    <div className="reading-progress-fill" style={{ width: `${progress}%` }} />
   </div>

   <Navbar variant="blog" />

   {/* ARTICLE LAYOUT */}
   <div className="article-wrap">

    {/* HERO - full width */}
    <div className="article-hero-area">
     <div className="article-breadcrumb">
      <Link href="/">Home</Link>
      <ChevronRight size={13} />
      <Link href="/blog/">Blog</Link>
      <ChevronRight size={13} />
      <span>WhatsApp and Feedback</span>
     </div>
     <div className="article-tag-badge">
      <Flame size={11} /> Operations
     </div>
     <h1 className="article-title">
      Why WhatsApp is killing your<br />customer feedback loop
     </h1>
     <p className="article-subtitle">
      Most businesses run their entire complaints process through a WhatsApp group. Here is why that breaks down at scale and what to do instead.
     </p>
     <div className="article-meta">
      <div className="author-wrap">
       <div className="author-avatar-lg" style={{ background: "var(--teal)" }}>AK</div>
       <div>
        <div className="author-name-text">Aryan Kumar</div>
        <div className="author-role-text">Head of Operations, FeedSolve</div>
       </div>
      </div>
      <div className="article-stats">
       <div className="article-stat"><Calendar size={14} /> Apr 18, 2026</div>
       <div className="article-stat"><Clock size={14} /> 5 min read</div>
       <div className="article-stat"><Eye size={14} /> 2,341 views</div>
      </div>
     </div>
    </div>

    {/* MAIN CONTENT */}
    <div className="article-content">

     {/* Hero illustration */}
     <div className="article-hero-img">
      <div className="ahi-left">
       <h3>The numbers behind the problem</h3>
       <div className="ahi-stat">
        <div className="ahi-stat-n">73%</div>
        <div className="ahi-stat-l">of complaints sent via chat apps are never formally resolved</div>
       </div>
       <div className="ahi-stat">
        <div className="ahi-stat-n">4x</div>
        <div className="ahi-stat-l">faster resolution with a structured tracking system</div>
       </div>
       <div className="ahi-stat">
        <div className="ahi-stat-n">91%</div>
        <div className="ahi-stat-l">of customers expect a follow-up after raising a complaint</div>
       </div>
      </div>
      <div className="ahi-right">
       <div className="ahi-right-label">Where complaints go today</div>
       <div className="ahi-channel" style={{ background: "rgba(37,211,102,0.1)" }}>
        <div className="ahi-channel-icon" style={{ background: "#25D366" }}><MessageCircle size={15} /></div>
        <div className="ahi-channel-text">
         <strong>WhatsApp</strong>
         <span>Casual, untracked, forgotten</span>
        </div>
        <div className="ahi-pct" style={{ background: "#FF3B3B22", color: "#FF6B6B" }}>56%</div>
       </div>
       <div className="ahi-channel" style={{ background: "rgba(99,102,241,0.08)" }}>
        <div className="ahi-channel-icon" style={{ background: "#6366F1" }}><Mail size={15} /></div>
        <div className="ahi-channel-text">
         <strong>Email</strong>
         <span>Buried, slow to respond</span>
        </div>
        <div className="ahi-pct" style={{ background: "#FF3B3B22", color: "#FF6B6B" }}>28%</div>
       </div>
       <div className="ahi-channel" style={{ background: "rgba(58,143,165,0.1)" }}>
        <div className="ahi-channel-icon" style={{ background: "var(--teal)" }}><ClipboardList size={15} /></div>
        <div className="ahi-channel-text">
         <strong>Structured system</strong>
         <span>Tracked, assigned, resolved</span>
        </div>
        <div className="ahi-pct" style={{ background: "rgba(46,125,50,0.25)", color: "#81C784" }}>16%</div>
       </div>
      </div>
     </div>

     {/* PROSE */}
     <div className="prose">
      <p>It starts innocuously enough. A customer messages your team on WhatsApp to complain about a delayed delivery. Someone reads it, makes a mental note, and moves on. Two days later, the customer messages again. No one remembers the first message. Nothing was done.</p>

      <p>This is not a people problem. This is a systems problem. And it is costing businesses far more than they realize.</p>

      <h2 id="sec-1">The WhatsApp trap</h2>

      <p>WhatsApp is brilliant for communication. It is fast, familiar, and frictionless. That is precisely why it became the default channel for customer feedback in markets across Asia, Africa, and the Middle East. But familiarity has a price.</p>
     </div>

     <div className="callout">
      <p><strong>The core issue:</strong> WhatsApp is a messaging tool, not a case management system. When you use it as one, complaints become conversations, and conversations get buried.</p>
     </div>

     <div className="prose">
      <p>Here is what typically happens in a WhatsApp-based complaint process:</p>
     </div>

     <div className="numbered-list">
      {[
       { n: 1, h: "Customer sends a complaint", p: "It arrives in your group or personal chat. There is no ticket number, no timestamp in a system, no record other than a chat message." },
       { n: 2, h: "Someone sees it and intends to act", p: "Maybe they reply with \"noted.\" Maybe they forward it to someone else. There is no formal assignment, no deadline, no accountability." },
       { n: 3, h: "47 other messages arrive", p: "The complaint gets pushed up and out of sight. The group moves on. The customer waits." },
       { n: 4, h: "The customer follows up", p: "Now they are frustrated. And you have no record of the original complaint to even refer to coherently." },
       { n: 5, h: "The issue is eventually closed or forgotten", p: "Either it gets resolved informally with no documentation, or it simply gets lost. Either way, you have learned nothing from it." },
      ].map(({ n, h, p }) => (
       <div key={n} className="nl-item">
        <div className="nl-num">{n}</div>
        <div className="nl-body">
         <h4>{h}</h4>
         <p>{p}</p>
        </div>
       </div>
      ))}
     </div>

     <div className="prose">
      <h2 id="sec-2">Why this matters at scale</h2>
      <p>When you are handling five complaints a week, informal systems can work. When that number climbs to fifty, a hundred, or five hundred, the cracks become craters.</p>
     </div>

     <div className="stat-highlight">
      <div>
       <div className="sh-n">3.2x</div>
       <div className="sh-l">increase in repeat complaints when follow-up is not sent</div>
      </div>
      <div>
       <div className="sh-n">68%</div>
       <div className="sh-l">of customers share a bad service experience with others</div>
      </div>
      <div>
       <div className="sh-n">$0</div>
       <div className="sh-l">incremental cost per complaint in a structured system</div>
      </div>
     </div>

     <div className="prose">
      <p>Beyond the customer experience, there is the internal cost. Your team spends time hunting through chat histories trying to find context. Managers cannot see which issues are recurring. There is no audit trail for regulated industries. And when something goes seriously wrong, there is no documentation to understand what happened.</p>
     </div>

     <div className="pull-quote">
      <p>&ldquo;We were resolving complaints. We just had no idea which ones, how fast, or whether the same problems kept coming back.&rdquo;</p>
      <cite>Operations Manager, food manufacturing company · 200 employees</cite>
     </div>

     <div className="prose">
      <h2 id="sec-3">The anatomy of a good complaint system</h2>
      <p>A structured complaint management system does not need to be complex. It needs to do a few things consistently:</p>
     </div>

     <div className="comp-table">
      <table>
       <thead>
        <tr>
         <th>Requirement</th>
         <th>WhatsApp</th>
         <th>FeedSolve</th>
        </tr>
       </thead>
       <tbody>
        {[
         ["Unique tracking code per complaint", false, "Yes, automatic"],
         ["Assignable to a team member", false, "Yes"],
         ["Status visible to submitter", false, "Yes, via tracking link"],
         ["Searchable and filterable", false, "Fully"],
         ["Audit trail and history", false, "Complete"],
         ["Works without submitter login", true, "Yes"],
        ].map(([req, wa, fs], i) => (
         <tr key={i}>
          <td>{req as string}</td>
          <td className={wa ? "ct-good" : "ct-bad"}>
           <div className="comp-tick">
            {wa ? <Check size={14} /> : <X size={14} />}
            {wa ? "Yes" : "No"}
           </div>
          </td>
          <td className="ct-good">
           <div className="comp-tick"><Check size={14} /> {fs as string}</div>
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>

     <div className="prose">
      <h2 id="sec-4">What to do right now</h2>
      <p>You do not need to overhaul everything overnight. Start here:</p>
     </div>

     <div className="numbered-list">
      {[
       { n: 1, h: "Stop accepting complaints over WhatsApp DMs", p: "Redirect customers to a dedicated feedback link or QR code. This alone eliminates the biggest source of leakage." },
       { n: 2, h: "Give every complaint a number", p: "Even a spreadsheet with sequential IDs is better than nothing. Ideally, use a system that generates these automatically." },
       { n: 3, h: "Assign every complaint to a person", p: "Shared responsibility means no responsibility. One name. One owner. One deadline." },
       { n: 4, h: "Close the loop with the customer", p: "Send an update when the issue is resolved. This single action has the highest impact on customer satisfaction of anything on this list." },
      ].map(({ n, h, p }) => (
       <div key={n} className="nl-item">
        <div className="nl-num">{n}</div>
        <div className="nl-body">
         <h4>{h}</h4>
         <p>{p}</p>
        </div>
       </div>
      ))}
     </div>

     <div className="prose">
      <p>If you want a system that handles all of this without any setup complexity, FeedSolve does exactly that. One link, one QR code, and every complaint is automatically tracked, assigned, and communicated back.</p>
     </div>

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
       {["Operations", "Complaints", "WhatsApp", "Customer Experience", "Feedback"].map((tag) => (
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
      <div className="author-bio-avatar" style={{ background: "var(--teal)" }}>AK</div>
      <div>
       <div className="author-bio-name">Aryan Kumar</div>
       <div className="author-bio-role">Head of Operations, FeedSolve</div>
       <div className="author-bio-bio">
        Aryan has spent 8 years helping operations teams at manufacturing and logistics companies build structured processes. At FeedSolve, he writes about complaint management, operational efficiency, and building systems that scale.
       </div>
      </div>
     </div>
    </div>

    {/* SIDEBAR */}
    <aside className="article-sidebar">
     <div className="sidebar-card">
      <div className="sidebar-card-title">In this article</div>
      {tocSections.map(({ id, label }, i) => (
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
      {[
       {
        href: "/blog/blog-post/",
        iconBg: "var(--teal-pale)",
        icon: <ClipboardList size={22} style={{ color: "var(--teal)" }} />,
        title: "Zero-leakage complaint resolution process",
        meta: "4 min read",
       },
       {
        href: "/blog/blog-post/",
        iconBg: "#EEF2FF",
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3730A3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 17h3M17 14v6M20 17h-3"/></svg>,
        title: "5 places to put your feedback QR code",
        meta: "3 min read",
       },
       {
        href: "/blog/blog-post/",
        iconBg: "#E8F5E9",
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>,
        title: "Zest Foods case study: 68% reduction in complaints",
        meta: "6 min read",
       },
      ].map(({ href, iconBg, icon, title, meta }, i) => (
       <Link key={i} href={href} className="related-post">
        <div className="rp-img" style={{ background: iconBg }}>{icon}</div>
        <div className="rp-body">
         <h4>{title}</h4>
         <span>{meta}</span>
        </div>
       </Link>
      ))}
     </div>
    </aside>
   </div>

   {/* MORE POSTS */}
   <div className="more-posts-section">
    <h2>More from the blog</h2>
    <div className="more-grid">
     {[
      { tag: "Operations", tagColor: "var(--teal)", title: "Zero-leakage complaint resolution: a step-by-step guide", desc: "Make sure every single complaint is logged, assigned, and resolved.", meta: "Shreya Rao · Apr 12, 2026" },
      { tag: "QR Codes", tagColor: "#3730A3", title: "5 places to put your feedback QR code that actually get scanned", desc: "Placement strategies that drive real, actionable feedback.", meta: "Mehul Joshi · Apr 7, 2026" },
      { tag: "Case Study", tagColor: "#2E7D32", title: "How Zest Foods reduced customer complaints by 68% in 90 days", desc: "A real story from food manufacturing to quality control transformation.", meta: "Team FeedSolve · Mar 28, 2026" },
     ].map(({ tag, tagColor, title, desc, meta }, i) => (
      <Link key={i} href="/blog/blog-post/" className="more-card">
       <div className="more-tag" style={{ color: tagColor }}>{tag}</div>
       <h3>{title}</h3>
       <p>{desc}</p>
       <div className="more-card-meta">{meta}</div>
      </Link>
     ))}
    </div>
   </div>

   <Footer variant="blog" />
  </>
 );
}
