"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight, Play, ShieldCheck, BellRing, UserPlus,
  LayoutDashboard, Share2, Zap, Flame, MessageCircle,
  Mail, Shuffle, BellOff, Inbox, Table, Mic, XCircle,
  Settings2, QrCode, Hash, UserCheck, CheckCircle2,
  Check, TrendingUp, Smile, PlayCircle, Search,
  MousePointerClick, Target, Factory, Utensils, Truck,
  Building2, Gem, ClipboardList, RefreshCw, Eye, EyeOff,
  HelpCircle, Clock, MessageSquare, Tag, Info, Lock,
  BookOpen, Star, Link as LinkIcon, Ticket, Users,
  BarChart2, X, ChevronDown,
} from "lucide-react";

function useScrollNavbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

function useCounter(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const start = performance.now();
    const update = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(update);
    };
    const timer = setTimeout(() => requestAnimationFrame(update), 600);
    return () => clearTimeout(timer);
  }, [target, duration]);
  return value;
}

function Navbar() {
  const scrolled = useScrollNavbar();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMobileMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => closeMobileMenu();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav id="navbar" className={scrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            <Image src="/feedsolve.png" alt="FeedSolve" width={34} height={34} />
            <span className="nav-logo-text">FeedSolve</span>
          </a>
          <ul className="nav-links">
            <li><a href="#solution">Product</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#demo">Demo</a></li>
            <li><a href="/blog">Blog</a></li>
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
        <a href="#solution" onClick={closeMobileMenu}>Product</a>
        <a href="#pricing" onClick={closeMobileMenu}>Pricing</a>
        <a href="#demo" onClick={closeMobileMenu}>Demo</a>
        <a href="/blog" onClick={closeMobileMenu}>Blog</a>
        <a href="#" onClick={closeMobileMenu}>Login</a>
        <a href="#" className="mobile-cta" onClick={closeMobileMenu}>Try Now It&apos;s Free</a>
      </div>
    </>
  );
}

function Hero() {
  const total = useCounter(48, 1000);
  const resolved = useCounter(41, 1100);
  const open = useCounter(7, 900);

  return (
    <section id="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-live-badge"><span className="pulse-dot"></span> Live tracking for every issue</div>
          <h1 className="hero-title">
            Stop losing<br /><span className="accent">complaints.</span><br />Start closing them.
          </h1>
          <p className="hero-sub">Collect feedback from customers, suppliers, and partners. Track every issue to resolution with a simple link and QR code.</p>
          <div className="hero-ctas">
            <a href="#" className="btn-primary teal">Try Now <ArrowRight size={16} /></a>
            <a href="#demo" className="btn-outline">See How It Works <Play size={16} /></a>
          </div>
          <div className="hero-trust"><ShieldCheck size={14} /> No credit card required · Setup in under 2 minutes</div>
        </div>
        <div className="hero-visual">
          <div className="float-card float-notif" id="float-notif">
            <div className="notif-icon"><BellRing size={15} /></div>
            <div className="notif-text">
              <div className="notif-title">Issue resolved</div>
              <div className="notif-sub">#FSV-1089 · 2 min ago</div>
            </div>
          </div>
          <div className="hero-board">
            <div className="board-topbar">
              <div className="board-dots"><span></span><span></span><span></span></div>
              <span className="board-topbar-title">Customer Feedback Board</span>
            </div>
            <div className="board-body">
              <div className="board-stats">
                <div className="bstat"><div className="bstat-n">{total}</div><div className="bstat-l">Total Issues</div></div>
                <div className="bstat"><div className="bstat-n" style={{ color: "var(--teal)" }}>{resolved}</div><div className="bstat-l">Resolved</div></div>
                <div className="bstat"><div className="bstat-n" style={{ color: "#E65100" }}>{open}</div><div className="bstat-l">Open</div></div>
              </div>
              <div className="board-issues">
                <div className="bi"><span className="bi-code">FSV-1089</span><span className="bi-title">Wrong item in order #4421</span><span className="bi-badge r">Resolved</span></div>
                <div className="bi"><span className="bi-code">FSV-1090</span><span className="bi-title">Delivery delayed: 3 days</span><span className="bi-badge p">In Progress</span></div>
                <div className="bi"><span className="bi-code">FSV-1091</span><span className="bi-title">Quality defect in batch B-22</span><span className="bi-badge o">Open</span></div>
                <div className="bi"><span className="bi-code">FSV-1092</span><span className="bi-title">Incorrect invoice amount</span><span className="bi-badge r">Resolved</span></div>
              </div>
            </div>
          </div>
          <div className="float-card float-qr" id="float-qr">
            <div className="float-qr-title">Share &amp; collect</div>
            <svg className="qr-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="80" height="80" rx="8" fill="#F8F7F4"></rect>
              <rect x="8" y="8" width="28" height="28" rx="3" fill="#1E3557"></rect>
              <rect x="12" y="12" width="20" height="20" rx="2" fill="#F8F7F4"></rect>
              <rect x="16" y="16" width="12" height="12" rx="1" fill="#1E3557"></rect>
              <rect x="44" y="8" width="28" height="28" rx="3" fill="#1E3557"></rect>
              <rect x="48" y="12" width="20" height="20" rx="2" fill="#F8F7F4"></rect>
              <rect x="52" y="16" width="12" height="12" rx="1" fill="#1E3557"></rect>
              <rect x="8" y="44" width="28" height="28" rx="3" fill="#1E3557"></rect>
              <rect x="12" y="48" width="20" height="20" rx="2" fill="#F8F7F4"></rect>
              <rect x="16" y="52" width="12" height="12" rx="1" fill="#1E3557"></rect>
              <rect x="44" y="44" width="7" height="7" rx="1" fill="#3A8FA5"></rect>
              <rect x="54" y="44" width="7" height="7" rx="1" fill="#1E3557"></rect>
              <rect x="64" y="44" width="7" height="7" rx="1" fill="#3A8FA5"></rect>
              <rect x="44" y="54" width="7" height="7" rx="1" fill="#1E3557"></rect>
              <rect x="54" y="54" width="7" height="7" rx="1" fill="#3A8FA5"></rect>
              <rect x="64" y="54" width="7" height="7" rx="1" fill="#1E3557"></rect>
              <rect x="44" y="64" width="7" height="7" rx="1" fill="#3A8FA5"></rect>
              <rect x="54" y="64" width="7" height="7" rx="1" fill="#1E3557"></rect>
              <rect x="64" y="64" width="7" height="7" rx="1" fill="#1E3557"></rect>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  return (
    <section id="steps">
      <div className="container">
        <div className="section-label steps-label"><Zap size={13} /> How it works</div>
        <h2 style={{ color: "white" }}>Go from zero to live<br />in minutes</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-icon-wrap"><UserPlus size={22} /></div>
            <div className="step-num">Step 01</div>
            <h3>Create your account</h3>
            <p>Sign up with email or Google. No credit card, no setup call. You&apos;re in immediately.</p>
          </div>
          <div className="step-card">
            <div className="step-icon-wrap"><LayoutDashboard size={22} /></div>
            <div className="step-num">Step 02</div>
            <h3>Create your first board</h3>
            <p>Name it &quot;Customer Feedback&quot; or anything you like. Your board is live in 30 seconds.</p>
          </div>
          <div className="step-card">
            <div className="step-icon-wrap"><Share2 size={22} /></div>
            <div className="step-num">Step 03</div>
            <h3>Share your link or QR</h3>
            <p>Anyone can submit feedback instantly no login required on their end ever.</p>
          </div>
        </div>
        <div className="steps-foot">You&apos;ll be collecting real feedback in <strong>under 2 minutes.</strong></div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="problem">
      <div className="container">
        <div className="problem-grid">
          <div>
            <div className="section-label"><Flame size={13} /> The problem</div>
            <h2>Feedback is everywhere.<br />Resolution is nowhere.</h2>
            <div className="problem-points">
              <div className="pp"><div className="pp-icon"><MessageCircle size={17} /></div><p>Complaints lost in WhatsApp chats</p></div>
              <div className="pp"><div className="pp-icon"><Mail size={17} /></div><p>Feedback buried in emails</p></div>
              <div className="pp"><div className="pp-icon"><Shuffle size={17} /></div><p>No tracking, no ownership</p></div>
              <div className="pp"><div className="pp-icon"><BellOff size={17} /></div><p>Customers never get updates</p></div>
            </div>
            <div className="punch">
              <p>You&apos;re collecting feedback. <strong>You&apos;re just not resolving it.</strong></p>
            </div>
          </div>
          <div className="problem-viz">
            <div className="pv-title">Where feedback goes today</div>
            <div className="chaos-row wa">
              <div className="chaos-row-icon"><MessageCircle size={15} /></div>
              <span className="chaos-row-text">WhatsApp group chat</span>
            </div>
            <div className="chaos-row em">
              <div className="chaos-row-icon"><Inbox size={15} /></div>
              <span className="chaos-row-text">Email inbox (buried under 200 others)</span>
            </div>
            <div className="chaos-row xl">
              <div className="chaos-row-icon"><Table size={15} /></div>
              <span className="chaos-row-text">Excel sheet (last updated 3 weeks ago)</span>
            </div>
            <div className="chaos-row vb">
              <div className="chaos-row-icon"><Mic size={15} /></div>
              <span className="chaos-row-text">Verbal complaint (already forgotten)</span>
            </div>
            <div className="chaos-verdict">
              <XCircle size={15} />
              No tracking. No resolution. No visibility.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="solution">
      <div className="container">
        <div className="section-label"><Settings2 size={13} /> The solution</div>
        <h2>A complete feedback loop.<br />No gaps.</h2>
        <p className="sol-sub">From the moment someone submits a complaint to the moment it is resolved, FeedSolve handles every step automatically.</p>
        <div className="sol-flow">
          <div className="sol-step">
            <div className="sol-step-num">Step 01</div>
            <div className="sol-step-icon"><QrCode size={22} /></div>
            <h3>Collect</h3>
            <p>Share a link or QR code. Anyone can submit feedback instantly with no login needed.</p>
            <div className="sol-step-tag"><LinkIcon size={11} /> One link or QR code</div>
          </div>
          <div className="sol-arrow"><ArrowRight size={20} /></div>
          <div className="sol-step">
            <div className="sol-step-num">Step 02</div>
            <div className="sol-step-icon"><Hash size={22} /></div>
            <h3>Track</h3>
            <p>Every submission gets a unique tracking code. Submitters can follow progress anytime.</p>
            <div className="sol-step-tag"><Ticket size={11} /> Auto-generated code</div>
          </div>
          <div className="sol-arrow"><ArrowRight size={20} /></div>
          <div className="sol-step">
            <div className="sol-step-num">Step 03</div>
            <div className="sol-step-icon"><UserCheck size={22} /></div>
            <h3>Assign</h3>
            <p>Route each issue to the right team member with a deadline. One owner. One responsibility.</p>
            <div className="sol-step-tag"><Users size={11} /> Clear ownership</div>
          </div>
          <div className="sol-arrow"><ArrowRight size={20} /></div>
          <div className="sol-step">
            <div className="sol-step-num">Step 04</div>
            <div className="sol-step-icon"><CheckCircle2 size={22} /></div>
            <h3>Resolve</h3>
            <p>Update status, post notes, and close the loop. The submitter is notified automatically.</p>
            <div className="sol-step-tag" style={{ background: "rgba(46,125,50,0.2)", borderColor: "rgba(46,125,50,0.3)", color: "#81C784" }}><Check size={11} /> Closed loop</div>
          </div>
        </div>
        <div className="sol-proof">
          <div className="sol-proof-item">
            <div className="sol-proof-icon"><Zap size={18} /></div>
            <div><div className="sol-proof-n">2 min</div><div className="sol-proof-l">Average setup time</div></div>
          </div>
          <div className="sol-proof-item">
            <div className="sol-proof-icon"><TrendingUp size={18} /></div>
            <div><div className="sol-proof-n">4x</div><div className="sol-proof-l">Faster resolution vs chat</div></div>
          </div>
          <div className="sol-proof-item">
            <div className="sol-proof-icon"><ShieldCheck size={18} /></div>
            <div><div className="sol-proof-n">100%</div><div className="sol-proof-l">Issues tracked, none lost</div></div>
          </div>
          <div className="sol-proof-item">
            <div className="sol-proof-icon"><Smile size={18} /></div>
            <div><div className="sol-proof-n">91%</div><div className="sol-proof-l">Customer satisfaction lift</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Demo() {
  const [trackerVisible, setTrackerVisible] = useState(false);

  return (
    <section id="demo">
      <div className="demo-inner">
        <div className="section-label demo-label"><PlayCircle size={13} /> Live demo</div>
        <h2>See how it works in seconds</h2>
        <p className="demo-sub">Track a real example and see how updates look from the submitter&apos;s side.</p>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Click below to try it live</span>
          <button
            className={`btn-primary teal demo-pulse${trackerVisible ? " active" : ""}`}
            style={{ fontSize: 16, padding: "14px 28px", margin: "0 auto" }}
            onClick={() => setTrackerVisible(!trackerVisible)}
          >
            <Search size={16} /> Track Demo Issue #FSV-1024
          </button>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", gap: 5 }}><MousePointerClick size={13} /> Interactive — see the full resolution timeline</span>
        </div>
        <div className={`demo-tracker${trackerVisible ? " visible" : ""}`}>
          <div className="dt-top">
            <div className="dt-label">Issue Tracker</div>
            <div className="dt-code">#FSV-1024 Damaged product in shipment</div>
          </div>
          <div className="demo-timeline">
            <div className="de">
              <div className="de-line"><div className="de-dot done"></div><div className="de-conn"></div></div>
              <div className="de-body"><div className="de-time">Apr 18, 2026 · 09:14</div><div className="de-title">Issue submitted</div><div className="de-detail">Submitted via QR code at warehouse gate</div></div>
            </div>
            <div className="de">
              <div className="de-line"><div className="de-dot done"></div><div className="de-conn"></div></div>
              <div className="de-body"><div className="de-time">Apr 18, 2026 · 10:32</div><div className="de-title">Assigned to Quality Team</div><div className="de-detail">Owner: Sarah K. · Priority: High</div></div>
            </div>
            <div className="de">
              <div className="de-line"><div className="de-dot done"></div><div className="de-conn"></div></div>
              <div className="de-body"><div className="de-time">Apr 19, 2026 · 14:05</div><div className="de-title">Update posted</div><div className="de-detail">&quot;Replacement shipment dispatched. ETA 2 days.&quot;</div></div>
            </div>
            <div className="de">
              <div className="de-line"><div className="de-dot active"></div></div>
              <div className="de-body"><div className="de-time">Apr 21, 2026 · 11:00</div><div className="de-title" style={{ color: "var(--teal-light)", fontWeight: 700 }}>Issue resolved</div><div className="de-detail">&quot;Replacement received and confirmed by customer.&quot;</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="usecases">
      <div className="container">
        <div className="section-label"><Target size={13} /> Use cases</div>
        <h2>Built for real-world<br />operations</h2>
        <div className="uc-grid">
          <div className="uc-card">
            <div className="uc-icon"><Factory size={24} /></div>
            <h3>Manufacturing</h3>
            <p>Track supplier quality issues, defects, and production problems in one place. Full audit trail included.</p>
          </div>
          <div className="uc-card">
            <div className="uc-icon"><Utensils size={24} /></div>
            <h3>Restaurants &amp; Hotels</h3>
            <p>Collect table feedback with QR codes and respond to customers quickly. Turn complaints into loyalty.</p>
          </div>
          <div className="uc-card">
            <div className="uc-icon"><Truck size={24} /></div>
            <h3>Logistics</h3>
            <p>Manage delivery complaints, delays, and driver issues with full visibility across every route.</p>
          </div>
          <div className="uc-card">
            <div className="uc-icon"><Building2 size={24} /></div>
            <h3>Real Estate</h3>
            <p>Handle tenant maintenance requests and track resolution progress. No more lost work orders.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Diff() {
  return (
    <section id="diff">
      <div className="container">
        <div className="diff-grid">
          <div className="diff-left">
            <div className="section-label"><Gem size={13} /> Why FeedSolve</div>
            <h2>Not another<br />form builder</h2>
            <p>Google Forms and Typeform help you collect feedback. <strong>FeedSolve makes sure it gets resolved.</strong></p>
            <div className="diff-list">
              <div className="di"><div className="di-check"><Check size={13} /></div> Track every issue from start to finish</div>
              <div className="di"><div className="di-check"><Check size={13} /></div> Assign responsibility to your team</div>
              <div className="di"><div className="di-check"><Check size={13} /></div> Update status and communicate back</div>
              <div className="di"><div className="di-check"><Check size={13} /></div> Let submitters follow progress in real time</div>
            </div>
          </div>
          <div className="diff-table">
            <div className="diff-cols">
              <div>
                <div className="dcol-title">Others</div>
                <div className="dtool them"><X size={13} /> Google Forms</div>
                <div className="dtool them"><X size={13} /> Typeform</div>
                <div className="dtool them"><X size={13} /> SurveyMonkey</div>
              </div>
              <div>
                <div className="dcol-title">FeedSolve</div>
                <div className="dtool us"><Check size={13} /> Collect + Resolve</div>
                <div className="dtool us"><Check size={13} /> Track + Assign</div>
                <div className="dtool us"><Check size={13} /> Communicate back</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section id="before-after">
      <div className="container">
        <div className="section-label" style={{ background: "var(--teal-pale)", color: "var(--teal)" }}><BarChart2 size={13} /> Results</div>
        <h2>From chaos to clarity</h2>
        <div className="ba-grid">
          <div className="ba-card before">
            <div className="ba-label"><XCircle size={15} /> Before FeedSolve</div>
            <div className="ba-item"><MessageSquare size={16} style={{ color: "#DC2626" }} /> Feedback scattered everywhere</div>
            <div className="ba-item"><HelpCircle size={16} style={{ color: "#DC2626" }} /> No accountability</div>
            <div className="ba-item"><Clock size={16} style={{ color: "#DC2626" }} /> Issues forgotten</div>
            <div className="ba-item"><EyeOff size={16} style={{ color: "#DC2626" }} /> No visibility for anyone</div>
          </div>
          <div className="ba-card after">
            <div className="ba-label"><CheckCircle2 size={15} /> After FeedSolve</div>
            <div className="ba-item"><ClipboardList size={16} style={{ color: "#16A34A" }} /> Every issue tracked in one place</div>
            <div className="ba-item"><UserCheck size={16} style={{ color: "#16A34A" }} /> Clear ownership on every issue</div>
            <div className="ba-item"><RefreshCw size={16} style={{ color: "#16A34A" }} /> Structured resolution flow</div>
            <div className="ba-item"><Eye size={16} style={{ color: "#16A34A" }} /> Full transparency end-to-end</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const pricingPlans = [
  {
    tier: "Free", price: "$0", period: "Forever free", popular: false,
    features: ["1 Feedback Board", "50 Submissions / month", "1 Team Member", "QR Code Access", "Tracking Codes"],
    cta: "Try Now", ctaClass: "pc-free-btn",
  },
  {
    tier: "Starter", price: "$19", period: "Billed monthly", popular: false,
    features: ["3 Feedback Boards", "500 Submissions / month", "3 Team Members", "Full Resolution Workflow", "Email Notifications"],
    cta: "Try Now", ctaClass: "btn-primary",
  },
  {
    tier: "Growth", price: "$49", period: "Billed monthly", popular: true,
    features: ["10 Feedback Boards", "5,000 Submissions / month", "10 Team Members", "Public Replies to Submitters", "Advanced Analytics", "Custom Branding"],
    cta: "Try Now", ctaClass: "btn-primary teal",
  },
  {
    tier: "Business", price: "$129", period: "Billed monthly", popular: false,
    features: ["Unlimited Boards", "Unlimited Submissions", "Unlimited Team Members", "API Access", "Integrations / Webhooks", "Priority Support"],
    cta: "Try Now", ctaClass: "btn-primary",
  },
];

function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-label"><Tag size={13} /> Pricing</div>
        <h2>Simple pricing.<br />No surprises.</h2>
        <p className="pricing-sub">Start free. Upgrade as you grow.</p>
        <div className="pricing-grid">
          {pricingPlans.map((plan) => (
            <div key={plan.tier} className={`pc${plan.popular ? " popular" : ""}`}>
              {plan.popular && <div className="pop-badge">Most Popular</div>}
              <div className="pc-tier">{plan.tier}</div>
              <div className="pc-price">
                {plan.price !== "$0" && <sup>$</sup>}{plan.price.replace("$", "")}
                <span> / mo</span>
              </div>
              <div className="pc-period">{plan.period}</div>
              <div className="pc-div"></div>
              <div className="pc-feats">
                {plan.features.map((f) => (
                  <div key={f} className="pf"><div className="pf-check"><Check size={14} /></div> {f}</div>
                ))}
              </div>
              {plan.tier === "Free" ? (
                <button className={plan.ctaClass}>{plan.cta}</button>
              ) : (
                <a href="#" className={plan.ctaClass}>{plan.cta}</a>
              )}
            </div>
          ))}
        </div>
        <div className="pricing-note"><Info size={14} /> Pricing is based on feedback boards, not per user · No hidden fees. Cancel anytime.</div>
      </div>
    </section>
  );
}

const faqs = [
  { q: "Do submitters need an account?", a: "No. Anyone can submit feedback without logging in. You share a link or QR code, they fill in the form — that's it. Zero friction for your customers." },
  { q: "Can feedback be anonymous?", a: "Yes. You can enable anonymous submissions per board. Submitters still get a unique tracking code even when submitting anonymously." },
  { q: "How long does setup take?", a: "Less than 2 minutes. Create an account, name your board, and share the link. No configuration required to get started collecting and tracking." },
  { q: "Do I need a demo or sales call?", a: "No. Just click \"Try Now\" and start immediately. We believe great software should sell itself — no gatekeeping, no onboarding calls required." },
  { q: "Can I upgrade later?", a: "Yes. Start on the free plan and upgrade anytime as your usage grows. No data lost, no migrations, no downtime." },
];

function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq">
      <div className="container">
        <div className="section-label" style={{ display: "block", textAlign: "center" }}><HelpCircle size={13} /> FAQ</div>
        <h2 style={{ textAlign: "center" }}>Common questions</h2>
        <div className="faq-wrap">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item${i === openIdx ? " open" : ""}`}>
              <div className="faq-q" onClick={() => setOpenIdx(i === openIdx ? -1 : i)}>
                {faq.q}
                <div className="faq-arrow"><ChevronDown size={13} /></div>
              </div>
              <div className="faq-a"><div className="faq-a-inner">{faq.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section id="blog">
      <div className="container">
        <div className="blog-header">
          <div>
            <div className="section-label"><BookOpen size={13} /> From the Blog</div>
            <h2 style={{ margin: 0 }}>Insights on feedback<br />and operations</h2>
          </div>
          <a href="/blog" className="btn-outline" style={{ flexShrink: 0 }}>View all posts <ArrowRight size={16} /></a>
        </div>

        <a href="/blog/blog-post" className="blog-featured">
          <div className="blog-featured-content">
            <div>
              <div className="blog-featured-tag"><Star size={11} /> Featured</div>
              <h3>Why WhatsApp is killing your<br />customer feedback loop</h3>
              <p className="blog-featured-desc">Most businesses run their entire complaints process through a WhatsApp group. Here is why that breaks down at scale — and what to do instead.</p>
            </div>
            <div className="blog-featured-footer">
              <div className="blog-author">
                <div className="blog-author-avatar">AK</div>
                <div>
                  <div className="blog-author-name">Aryan Kumar</div>
                  <div className="blog-author-meta">Apr 18, 2026 · 5 min read</div>
                </div>
              </div>
              <span className="blog-read-btn">Read post <ArrowRight size={14} /></span>
            </div>
          </div>
          <div className="blog-featured-visual">
            <div className="visual-panel-label">The difference</div>
            <div className="visual-panel-block">
              <div className="visual-panel-block-label">Without FeedSolve</div>
              <div className="visual-panel-row">
                <div className="visual-panel-icon" style={{ background: "#25D366" }}><MessageCircle size={13} color="white" /></div>
                <div className="visual-panel-row-text" style={{ color: "rgba(255,255,255,0.55)" }}>3 complaints via WhatsApp</div>
                <div className="visual-panel-badge" style={{ background: "rgba(220,38,38,0.25)", color: "#FCA5A5" }}>Lost</div>
              </div>
              <div className="visual-panel-row">
                <div className="visual-panel-icon" style={{ background: "#6366F1" }}><Mail size={13} color="white" /></div>
                <div className="visual-panel-row-text" style={{ color: "rgba(255,255,255,0.55)" }}>2 complaints via email</div>
                <div className="visual-panel-badge" style={{ background: "rgba(220,38,38,0.25)", color: "#FCA5A5" }}>Buried</div>
              </div>
            </div>
            <div className="visual-panel-block-solve">
              <div className="visual-panel-block-label" style={{ color: "var(--teal-light)" }}>With FeedSolve</div>
              <div className="visual-panel-row">
                <div className="visual-panel-icon" style={{ background: "var(--teal)" }}><Hash size={13} color="white" /></div>
                <div className="visual-panel-row-text" style={{ color: "rgba(255,255,255,0.7)" }}>5 complaints, all tracked</div>
                <div className="visual-panel-badge" style={{ background: "rgba(34,197,94,0.2)", color: "#86EFAC" }}>Resolved</div>
              </div>
              <div className="visual-panel-row">
                <div className="visual-panel-icon" style={{ background: "rgba(58,143,165,0.4)" }}><BellRing size={13} color="white" /></div>
                <div className="visual-panel-row-text" style={{ color: "rgba(255,255,255,0.7)" }}>Customers notified</div>
                <div className="visual-panel-badge" style={{ background: "rgba(34,197,94,0.2)", color: "#86EFAC" }}>Done</div>
              </div>
            </div>
          </div>
        </a>

        <div className="blog-cards">
          <a href="/blog" className="blog-card">
            <div className="blog-card-stripe" style={{ background: "var(--teal)" }}></div>
            <div className="blog-card-body">
              <div className="blog-card-tag" style={{ background: "var(--teal-pale)", color: "var(--teal)" }}>Operations</div>
              <h3>How to build a zero-leakage complaint resolution process</h3>
              <p>A step-by-step guide to making sure every complaint is logged, assigned, and closed.</p>
              <div className="blog-card-footer">
                <div className="blog-card-avatar" style={{ background: "var(--navy)" }}>SR</div>
                <div className="blog-card-author">Shreya Rao · 4 min</div>
                <span className="blog-card-read">Read <ArrowRight size={13} /></span>
              </div>
            </div>
          </a>
          <a href="/blog" className="blog-card">
            <div className="blog-card-stripe" style={{ background: "#6366F1" }}></div>
            <div className="blog-card-body">
              <div className="blog-card-tag" style={{ background: "#EEF2FF", color: "#3730A3" }}>QR Codes</div>
              <h3>5 places to put your feedback QR code that actually get scanned</h3>
              <p>Placement strategies that drive real, actionable feedback from your customers.</p>
              <div className="blog-card-footer">
                <div className="blog-card-avatar" style={{ background: "var(--teal)" }}>MJ</div>
                <div className="blog-card-author">Mehul Joshi · 3 min</div>
                <span className="blog-card-read">Read <ArrowRight size={13} /></span>
              </div>
            </div>
          </a>
          <a href="/blog" className="blog-card">
            <div className="blog-card-stripe" style={{ background: "#16A34A" }}></div>
            <div className="blog-card-body">
              <div className="blog-card-tag" style={{ background: "#F0FDF4", color: "#16A34A" }}>Case Study</div>
              <h3>How Zest Foods reduced customer complaints by 68% in 90 days</h3>
              <p>A real story from food manufacturing to quality control transformation.</p>
              <div className="blog-card-footer">
                <div className="blog-card-avatar" style={{ background: "#16A34A" }}>TR</div>
                <div className="blog-card-author">Team FeedSolve · 6 min</div>
                <span className="blog-card-read">Read <ArrowRight size={13} /></span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="cta-final">
      <div className="cta-glow"></div>
      <div className="container">
        <h2>Your first resolved issue<br />is 2 minutes away.</h2>
        <p>Start collecting and resolving feedback today.</p>
        <div className="cta-btns">
          <a href="#" className="btn-primary teal">Try Now It&apos;s Free <ArrowRight size={17} /></a>
        </div>
        <div className="cta-trust-line"><Lock size={13} /> No credit card required</div>
      </div>
    </section>
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
          <a href="#solution">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
      <div className="footer-copy">
        © 2026 FeedSolve. All rights reserved. &nbsp;·&nbsp; A product of <strong style={{ color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>Lumora Ventures Pvt. Ltd.</strong>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Steps />
      <Problem />
      <Solution />
      <Demo />
      <UseCases />
      <Diff />
      <BeforeAfter />
      <Pricing />
      <FAQ />
      <Blog />
      <FinalCTA />
      <Footer />
    </>
  );
}
