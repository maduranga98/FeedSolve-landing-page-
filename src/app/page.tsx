"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
 ArrowRight,
 Play,
 ShieldCheck,
 BellRing,
 UserPlus,
 LayoutDashboard,
 Share2,
 Zap,
 Flame,
 MessageCircle,
 Mail,
 Shuffle,
 BellOff,
 Inbox,
 Table,
 Mic,
 XCircle,
 Settings2,
 QrCode,
 Hash,
 UserCheck,
 CheckCircle2,
 Check,
 TrendingUp,
 Smile,
 PlayCircle,
 Search,
 MousePointerClick,
 Target,
 Factory,
 Utensils,
 Truck,
 Building2,
 Palette,
 Globe,
 Gem,
 ClipboardList,
 RefreshCw,
 Eye,
 EyeOff,
 HelpCircle,
 Clock,
 MessageSquare,
 Tag,
 Info,
 Lock,
 BookOpen,
 Star,
 Link as LinkIcon,
 Ticket,
 Users,
 BarChart2,
 X,
 ChevronDown,
} from "lucide-react";
import Link from "next/link";
import blogData from "@/data/blog.json";

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
     <div className="hero-live-badge">
      <span className="pulse-dot"></span> Live tracking for every issue
     </div>
     <h1 className="hero-title">
      Feedback Management &amp; Complaint Tracking Software for Small Business
     </h1>
     <p style={{ fontSize: "1.25rem", fontWeight: 500, color: "#444441", marginTop: "0.5rem" }}>
      Stop losing complaints. Start closing them.
     </p>
     <p className="hero-sub">
      Collect feedback from customers, suppliers, and partners with a QR code feedback board. Track
      every issue from complaint-to-resolution with a simple link, a resolution rate dashboard, and a public track your complaint page. It works as{" "}
      <Link href="/complaint-management-software/">complaint management software</Link>{" "}
      and a{" "}
      <Link href="/digital-suggestion-box-software/">digital suggestion box</Link>{" "}
      in one, used by operations teams across the{" "}
      <Link href="/uk/complaint-management-software/">UK</Link>,{" "}
      <Link href="/us/complaint-management-software/">US</Link>,{" "}
      <Link href="/au/complaint-management-software/">Australia</Link>, and beyond.
     </p>
     <div className="hero-ctas">
      <a href="https://app.feedsolve.com/signup" className="btn-primary teal" target="_blank" rel="noopener noreferrer">
       Try Now <ArrowRight size={16} />
      </a>
      <a href="#demo" className="btn-outline">
       See How It Works <Play size={16} />
      </a>
     </div>
     <p style={{ fontSize: "0.875rem", color: "#6B7B8D", maxWidth: "42rem", textAlign: "center", marginTop: "1rem", lineHeight: 1.625 }}>
      FeedSolve is feedback management and complaint resolution software for small and mid-sized businesses. Share a branded QR code or link - anyone submits feedback with no login and no sign-up - and your team resolves every issue through an issue resolution board. Available in multiple languages. Every submitter gets a tracking code.
     </p>
     <div className="hero-trust">
      <ShieldCheck size={14} /> No credit card required · No sign-up for submitters · Setup in under 2
      minutes
     </div>
    </div>
    <div className="hero-visual">
     <div className="float-card float-notif" id="float-notif">
      <div className="notif-icon">
       <BellRing size={15} />
      </div>
      <div className="notif-text">
       <div className="notif-title">Issue resolved</div>
       <div className="notif-sub">#FSV-1089 · 2 min ago</div>
      </div>
     </div>
     <div className="hero-board" role="img" aria-label="FeedSolve complaint tracking dashboard showing 48 total issues, 41 resolved issues, and 7 open issues">
      <div className="board-topbar">
       <div className="board-dots">
        <span></span>
        <span></span>
        <span></span>
       </div>
       <span className="board-topbar-title">
        Issue Resolution Board
       </span>
      </div>
      <div className="board-body">
       <div className="board-stats">
        <div className="bstat">
         <div className="bstat-n">{total}</div>
         <div className="bstat-l">Total Issues</div>
        </div>
        <div className="bstat">
         <div className="bstat-n" style={{ color: "var(--teal)" }}>
          {resolved}
         </div>
         <div className="bstat-l">Resolved</div>
        </div>
        <div className="bstat">
         <div className="bstat-n" style={{ color: "#E65100" }}>
          {open}
         </div>
         <div className="bstat-l">Open</div>
        </div>
       </div>
       <div className="board-issues">
        <div className="bi">
         <span className="bi-code">FSV-1089</span>
         <span className="bi-title">Wrong item in order #4421</span>
         <span className="bi-badge r">Resolved</span>
        </div>
        <div className="bi">
         <span className="bi-code">FSV-1090</span>
         <span className="bi-title">Delivery delayed: 3 days</span>
         <span className="bi-badge p">In Progress</span>
        </div>
        <div className="bi">
         <span className="bi-code">FSV-1091</span>
         <span className="bi-title">Quality defect in batch B-22</span>
         <span className="bi-badge o">Open</span>
        </div>
        <div className="bi">
         <span className="bi-code">FSV-1092</span>
         <span className="bi-title">Incorrect invoice amount</span>
         <span className="bi-badge r">Resolved</span>
        </div>
       </div>
      </div>
     </div>
     <div className="float-card float-qr" id="float-qr">
      <div className="float-qr-title">Share &amp; collect</div>
      <svg
       className="qr-svg"
       role="img"
       aria-label="FeedSolve QR code for zero-login feedback submission"
       viewBox="0 0 80 80"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <rect width="80" height="80" rx="8" fill="#F8F7F4"></rect>
       <rect
        x="8"
        y="8"
        width="28"
        height="28"
        rx="3"
        fill="#1E3557"
       ></rect>
       <rect
        x="12"
        y="12"
        width="20"
        height="20"
        rx="2"
        fill="#F8F7F4"
       ></rect>
       <rect
        x="16"
        y="16"
        width="12"
        height="12"
        rx="1"
        fill="#1E3557"
       ></rect>
       <rect
        x="44"
        y="8"
        width="28"
        height="28"
        rx="3"
        fill="#1E3557"
       ></rect>
       <rect
        x="48"
        y="12"
        width="20"
        height="20"
        rx="2"
        fill="#F8F7F4"
       ></rect>
       <rect
        x="52"
        y="16"
        width="12"
        height="12"
        rx="1"
        fill="#1E3557"
       ></rect>
       <rect
        x="8"
        y="44"
        width="28"
        height="28"
        rx="3"
        fill="#1E3557"
       ></rect>
       <rect
        x="12"
        y="48"
        width="20"
        height="20"
        rx="2"
        fill="#F8F7F4"
       ></rect>
       <rect
        x="16"
        y="52"
        width="12"
        height="12"
        rx="1"
        fill="#1E3557"
       ></rect>
       <rect
        x="44"
        y="44"
        width="7"
        height="7"
        rx="1"
        fill="#3A8FA5"
       ></rect>
       <rect
        x="54"
        y="44"
        width="7"
        height="7"
        rx="1"
        fill="#1E3557"
       ></rect>
       <rect
        x="64"
        y="44"
        width="7"
        height="7"
        rx="1"
        fill="#3A8FA5"
       ></rect>
       <rect
        x="44"
        y="54"
        width="7"
        height="7"
        rx="1"
        fill="#1E3557"
       ></rect>
       <rect
        x="54"
        y="54"
        width="7"
        height="7"
        rx="1"
        fill="#3A8FA5"
       ></rect>
       <rect
        x="64"
        y="54"
        width="7"
        height="7"
        rx="1"
        fill="#1E3557"
       ></rect>
       <rect
        x="44"
        y="64"
        width="7"
        height="7"
        rx="1"
        fill="#3A8FA5"
       ></rect>
       <rect
        x="54"
        y="64"
        width="7"
        height="7"
        rx="1"
        fill="#1E3557"
       ></rect>
       <rect
        x="64"
        y="64"
        width="7"
        height="7"
        rx="1"
        fill="#1E3557"
       ></rect>
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
    <div className="section-label steps-label">
     <Zap size={13} /> How it works
    </div>
    <h2 style={{ color: "white" }}>
     How Do You Collect Feedback Without Asking Anyone to Log In?
    </h2>
    <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: 640, marginTop: 16, lineHeight: 1.6 }}>
     FeedSolve is feedback management and complaint resolution software for small businesses. Set up your board, share your link, and start closing issues in minutes.
    </p>
    <div className="steps-grid">
     <div className="step-card">
      <div className="step-icon-wrap">
       <UserPlus size={22} />
      </div>
      <div className="step-num">Step 01</div>
      <h3>Create your account</h3>
      <p>
       Sign up with email or Google. No credit card, no setup call.
       You&apos;re in immediately.
      </p>
     </div>
     <div className="step-card">
      <div className="step-icon-wrap">
       <LayoutDashboard size={22} />
      </div>
      <div className="step-num">Step 02</div>
      <h3>Create your first board</h3>
      <p>
       Name it &quot;Customer Feedback&quot; or anything you like. Your
       board is live in 30 seconds.
      </p>
     </div>
     <div className="step-card">
      <div className="step-icon-wrap">
       <Share2 size={22} />
      </div>
      <div className="step-num">Step 03</div>
      <h3>Share your link or QR</h3>
      <p>
       Anyone can submit feedback instantly no login required on their
       end ever.
      </p>
     </div>
    </div>
    <div className="steps-foot">
     You&apos;ll be collecting real feedback in{" "}
     <strong>under 2 minutes.</strong>
    </div>
   </div>
  </section>
 );
}

function FeatureTeaser() {
 return (
  <section id="feature-teaser" style={{ padding: "60px 32px", background: "#F8FAFB" }}>
   <div className="container">
    <div className="ft-grid">
     <div className="ft-card">
      <div className="ft-icon"><Palette size={28} /></div>
      <h3>Branded QR Codes</h3>
      <p>
       Add your logo and brand colors to every QR code.
       Print on delivery notes, table tents, receipts, or walls - 
       your feedback board looks like it belongs to your business, not a generic tool.
      </p>
      <span className="ft-badge growth">
       Growth &amp; Pro plans
      </span>
     </div>
     <div className="ft-card">
      <div className="ft-icon"><Globe size={28} /></div>
      <h3>Multi-Language Submission Forms</h3>
      <p>
       Your customers and suppliers submit feedback in their own language.
       Request any language and we&apos;ll add it - 
       critical for businesses operating across South Asia, the Middle East, or East Africa.
      </p>
      <span className="ft-badge all">
       All plans
      </span>
     </div>
    </div>
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
      <div className="section-label">
       <Flame size={13} /> The problem
      </div>
      <h2>
       Feedback is everywhere.
       <br />
       Resolution is nowhere.
      </h2>
      <div className="problem-points">
       <div className="pp">
        <div className="pp-icon">
         <MessageCircle size={17} />
        </div>
        <p>Complaints lost in WhatsApp chats</p>
       </div>
       <div className="pp">
        <div className="pp-icon">
         <Mail size={17} />
        </div>
        <p>Feedback buried in emails</p>
       </div>
       <div className="pp">
        <div className="pp-icon">
         <Shuffle size={17} />
        </div>
        <p>No tracking, no ownership</p>
       </div>
       <div className="pp">
        <div className="pp-icon">
         <BellOff size={17} />
        </div>
        <p>Customers never get updates</p>
       </div>
      </div>
      <div className="punch">
       <p>
        You&apos;re collecting feedback.{" "}
        <strong>You&apos;re just not resolving it.</strong>
       </p>
      </div>
     </div>
     <div className="problem-viz">
      <div className="pv-title">Where feedback goes today</div>
      <div className="chaos-row wa">
       <div className="chaos-row-icon">
        <MessageCircle size={15} />
       </div>
       <span className="chaos-row-text">WhatsApp group chat</span>
      </div>
      <div className="chaos-row em">
       <div className="chaos-row-icon">
        <Inbox size={15} />
       </div>
       <span className="chaos-row-text">
        Email inbox (buried under 200 others)
       </span>
      </div>
      <div className="chaos-row xl">
       <div className="chaos-row-icon">
        <Table size={15} />
       </div>
       <span className="chaos-row-text">
        Excel sheet (last updated 3 weeks ago)
       </span>
      </div>
      <div className="chaos-row vb">
       <div className="chaos-row-icon">
        <Mic size={15} />
       </div>
       <span className="chaos-row-text">
        Verbal complaint (already forgotten)
       </span>
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
    <div className="section-label">
     <Settings2 size={13} /> The solution
    </div>
    <h2>
     Complaint resolution workflow
     <br />
     from intake to close.
    </h2>
    <p className="sol-sub">
     From the moment someone submits a complaint to the moment it is
     resolved, FeedSolve handles every complaint-to-resolution step automatically.
    </p>
    <div className="sol-flow">
     <div className="sol-step">
      <div className="sol-step-num">Step 01</div>
      <div className="sol-step-icon">
       <QrCode size={22} />
      </div>
      <h3>Collect</h3>
      <p>
       Share a link or QR code. Anyone can submit feedback instantly with
       no login needed.
      </p>
      <p style={{ fontSize: "0.875rem", color: "#2E86AB", marginTop: "0.5rem" }}>
       <Globe size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />Submission forms are available in multiple languages. Request your language and we&apos;ll add it.
      </p>
      <div className="sol-step-tag">
       <LinkIcon size={11} /> One link or QR code
      </div>
     </div>
     <div className="sol-arrow">
      <ArrowRight size={20} />
     </div>
     <div className="sol-step">
      <div className="sol-step-num">Step 02</div>
      <div className="sol-step-icon">
       <Hash size={22} />
      </div>
      <h3>Track</h3>
      <p>
       Every submission gets a unique tracking code. Submitters can
       follow progress anytime.
      </p>
      <div className="sol-step-tag">
       <Ticket size={11} /> Auto-generated code
      </div>
     </div>
     <div className="sol-arrow">
      <ArrowRight size={20} />
     </div>
     <div className="sol-step">
      <div className="sol-step-num">Step 03</div>
      <div className="sol-step-icon">
       <UserCheck size={22} />
      </div>
      <h3>Assign</h3>
      <p>
       Route each issue to the right team member with a deadline. One
       owner. One responsibility.
      </p>
      <div className="sol-step-tag">
       <Users size={11} /> Clear ownership
      </div>
     </div>
     <div className="sol-arrow">
      <ArrowRight size={20} />
     </div>
     <div className="sol-step">
      <div className="sol-step-num">Step 04</div>
      <div className="sol-step-icon">
       <CheckCircle2 size={22} />
      </div>
      <h3>Resolve</h3>
      <p>
       Update status, post notes, and close the loop. The submitter is
       notified automatically.
      </p>
      <div
       className="sol-step-tag"
       style={{
        background: "rgba(46,125,50,0.2)",
        borderColor: "rgba(46,125,50,0.3)",
        color: "#81C784",
       }}
      >
       <Check size={11} /> Closed loop
      </div>
     </div>
    </div>
    <div className="sol-proof">
     <div className="sol-proof-item">
      <div className="sol-proof-icon">
       <Zap size={18} />
      </div>
      <div>
       <div className="sol-proof-n">2 min</div>
       <div className="sol-proof-l">Average setup time to your first live feedback board</div>
      </div>
     </div>
     <div className="sol-proof-item">
      <div className="sol-proof-icon">
       <TrendingUp size={18} />
      </div>
      <div>
       <div className="sol-proof-n">Zero</div>
       <div className="sol-proof-l">Friction for submitters - no login, no sign-up, no app, no account</div>
      </div>
     </div>
     <div className="sol-proof-item">
      <div className="sol-proof-icon">
       <ShieldCheck size={18} />
      </div>
      <div>
       <div className="sol-proof-n">100%</div>
       <div className="sol-proof-l">Of submissions tracked with a unique #FSV-XXXX code</div>
      </div>
     </div>
     <div className="sol-proof-item">
      <div className="sol-proof-icon">
       <Smile size={18} />
      </div>
      <div>
       <div className="sol-proof-n">Free</div>
       <div className="sol-proof-l">To start - upgrade only when your usage grows</div>
      </div>
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
    <div className="section-label demo-label">
     <PlayCircle size={13} /> Live demo
    </div>
    <h2>See how it works in seconds</h2>
    <p className="demo-sub">
     Track a real example and see how updates look from the
     submitter&apos;s side.
    </p>
    <div
     style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
     }}
    >
     <span
      style={{
       fontSize: 12,
       fontWeight: 600,
       letterSpacing: "0.09em",
       textTransform: "uppercase",
       color: "rgba(255,255,255,0.4)",
      }}
     >
      Click below to try it live
     </span>
     <button
      className={`btn-primary teal demo-pulse${trackerVisible ? " active" : ""}`}
      style={{ fontSize: 16, padding: "14px 28px", margin: "0 auto" }}
      onClick={() => setTrackerVisible(!trackerVisible)}
     >
      <Search size={16} /> Track Demo Issue #FSV-1024
     </button>
     <span
      style={{
       fontSize: 13,
       color: "rgba(255,255,255,0.35)",
       display: "flex",
       alignItems: "center",
       gap: 5,
      }}
     >
      <MousePointerClick size={13} /> Interactive - see the full
      resolution timeline
     </span>
    </div>
    <div className={`demo-tracker${trackerVisible ? " visible" : ""}`}>
     <div className="dt-top">
      <div className="dt-label">Issue Tracker</div>
      <div className="dt-code">#FSV-1024 Damaged product in shipment</div>
     </div>
     <div className="demo-timeline">
      <div className="de">
       <div className="de-line">
        <div className="de-dot done"></div>
        <div className="de-conn"></div>
       </div>
       <div className="de-body">
        <div className="de-time">Apr 18, 2026 · 09:14</div>
        <div className="de-title">Issue submitted</div>
        <div className="de-detail">
         Submitted via QR code at warehouse gate
        </div>
       </div>
      </div>
      <div className="de">
       <div className="de-line">
        <div className="de-dot done"></div>
        <div className="de-conn"></div>
       </div>
       <div className="de-body">
        <div className="de-time">Apr 18, 2026 · 10:32</div>
        <div className="de-title">Assigned to Quality Team</div>
        <div className="de-detail">
         Owner: Sarah K. · Priority: High
        </div>
       </div>
      </div>
      <div className="de">
       <div className="de-line">
        <div className="de-dot done"></div>
        <div className="de-conn"></div>
       </div>
       <div className="de-body">
        <div className="de-time">Apr 19, 2026 · 14:05</div>
        <div className="de-title">Update posted</div>
        <div className="de-detail">
         &quot;Replacement shipment dispatched. ETA 2 days.&quot;
        </div>
       </div>
      </div>
      <div className="de">
       <div className="de-line">
        <div className="de-dot active"></div>
       </div>
       <div className="de-body">
        <div className="de-time">Apr 21, 2026 · 11:00</div>
        <div
         className="de-title"
         style={{ color: "var(--teal-light)", fontWeight: 700 }}
        >
         Issue resolved
        </div>
        <div className="de-detail">
         &quot;Replacement received and confirmed by customer.&quot;
        </div>
       </div>
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
    <div className="section-label">
     <Target size={13} /> Use cases
    </div>
    <h2>
     Built for real-world
     <br />
     operations
    </h2>
    <div className="uc-grid">
     <div className="uc-card">
      <div className="uc-icon">
       <Factory size={24} />
      </div>
      <h3>Manufacturing</h3>
      <p>
       Track supplier quality issues, shop floor complaint trends, and production line feedback in
       one place. Full audit trail included.
      </p>
      <Link href="/manufacturing/supplier-feedback/">
       See how supplier feedback works →
      </Link>
     </div>
     <div className="uc-card">
      <div className="uc-icon">
       <Utensils size={24} />
      </div>
      <h3>Restaurants &amp; Hotels</h3>
      <p>
       Collect table feedback with QR codes and respond to customers
       quickly. Turn complaints into loyalty.
      </p>
      <Link href="/restaurants/qr-feedback/">
       See how table QR feedback works →
      </Link>
     </div>
     <div className="uc-card">
      <div className="uc-icon">
       <Truck size={24} />
      </div>
      <h3>Logistics</h3>
      <p>
       Manage warehouse feedback, delivery complaints, 3PL feedback platform workflows, and driver issues with full
       visibility across every route.
      </p>
      <Link href="/logistics/delivery-feedback/">
       See how delivery tracking works →
      </Link>
     </div>
     <div className="uc-card">
      <div className="uc-icon">
       <Building2 size={24} />
      </div>
      <h3>Real Estate</h3>
      <p>
       Run a tenant feedback portal for maintenance requests and an HOA complaint form for community issues.
       No more lost work orders.
      </p>
      <Link href="/real-estate/tenant-feedback/">
       See how tenant tracking works →
      </Link>
     </div>
     <div className="uc-card">
      <div className="uc-icon">
       <ClipboardList size={24} />
      </div>
      <h3>Healthcare Clinics</h3>
      <p>
       Place a clinic feedback QR in reception and capture waiting-room feedback before small issues become public reviews.
      </p>
      <Link href="/blog/healthcare-patient-feedback-system/">
       See clinic feedback QR setup →
      </Link>
     </div>
     <div className="uc-card">
      <div className="uc-icon">
       <Palette size={24} />
      </div>
      <h3>Branded QR Codes</h3>
      <p>
       Customize your QR codes with your company logo, colors, and style.
       Print them on receipts, delivery notes, table tents, or walls.
       Your feedback board looks like yours - not a generic form.
      </p>
      <Link href="/features/branded-qr-codes/">
       Learn about QR code customization →
      </Link>
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
      <div className="section-label">
       <Gem size={13} /> Why FeedSolve
      </div>
      <h2>
       What Makes FeedSolve Different from Google Forms or Typeform?
      </h2>
      <p>
       <Link href="/compare/feedsolve-vs-google-forms/">Google Forms</Link> and <Link href="/compare/feedsolve-vs-typeform/">Typeform</Link> help you collect feedback.{" "}
       <strong>FeedSolve makes sure it gets resolved.</strong>
      </p>
      <p>
       FeedSolve also supports GDPR-aware intake patterns for UK and EU teams: anonymous submission mode, optional contact fields, and a structured audit trail help businesses collect complaint data with less unnecessary personal information.
      </p>
      <div className="diff-list">
       <div className="di">
        <div className="di-check">
         <Check size={13} />
        </div>{" "}
        Track every issue from start to finish
       </div>
       <div className="di">
        <div className="di-check">
         <Check size={13} />
        </div>{" "}
        Assign responsibility to your team
       </div>
       <div className="di">
        <div className="di-check">
         <Check size={13} />
        </div>{" "}
        Update status and communicate back
       </div>
       <div className="di">
        <div className="di-check">
         <Check size={13} />
        </div>{" "}
        Let submitters follow progress in real time
       </div>
      </div>
     </div>
     <div className="diff-table">
      <div className="diff-cols">
       <div>
        <div className="dcol-title">Others</div>
        <div className="dtool them">
         <X size={13} /> Google Forms
        </div>
        <div className="dtool them">
         <X size={13} /> Typeform
        </div>
        <div className="dtool them">
         <X size={13} /> SurveyMonkey
        </div>
       </div>
       <div>
        <div className="dcol-title">FeedSolve</div>
        <div className="dtool us">
         <Check size={13} /> Collect + Resolve
        </div>
        <div className="dtool us">
         <Check size={13} /> Track + Assign
        </div>
        <div className="dtool us">
         <Check size={13} /> Communicate back
        </div>
        <div className="dtool us">
         <Check size={13} /> Branded QR codes with your logo and colors
        </div>
        <div className="dtool us">
         <Check size={13} /> Multi-language submission forms for global teams
        </div>
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
    <div
     className="section-label"
     style={{ background: "var(--teal-pale)", color: "var(--teal)" }}
    >
     <BarChart2 size={13} /> Results
    </div>
    <h2>From chaos to clarity</h2>
    <div className="ba-grid">
     <div className="ba-card before">
      <div className="ba-label">
       <XCircle size={15} /> Before FeedSolve
      </div>
      <div className="ba-item">
       <MessageSquare size={16} style={{ color: "#DC2626" }} /> Feedback
       scattered everywhere
      </div>
      <div className="ba-item">
       <HelpCircle size={16} style={{ color: "#DC2626" }} /> No
       accountability
      </div>
      <div className="ba-item">
       <Clock size={16} style={{ color: "#DC2626" }} /> Issues forgotten
      </div>
      <div className="ba-item">
       <EyeOff size={16} style={{ color: "#DC2626" }} /> No visibility
       for anyone
      </div>
     </div>
     <div className="ba-card after">
      <div className="ba-label">
       <CheckCircle2 size={15} /> After FeedSolve
      </div>
      <div className="ba-item">
       <ClipboardList size={16} style={{ color: "#16A34A" }} /> Every
       issue tracked in one place
      </div>
      <div className="ba-item">
       <UserCheck size={16} style={{ color: "#16A34A" }} /> Clear
       ownership on every issue
      </div>
      <div className="ba-item">
       <RefreshCw size={16} style={{ color: "#16A34A" }} /> Structured
       resolution flow
      </div>
      <div className="ba-item">
       <Eye size={16} style={{ color: "#16A34A" }} /> Full transparency
       end-to-end
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}

const pricingPlans = [
 {
  tier: "Free",
  subtitle: "Trial",
  price: "$0",
  period: "7 days, full access",
  popular: false,
  features: [
   "2 feedback boards, 1 team member",
   "QR codes & shareable links",
   "Anonymous submissions",
   "Multi-language forms",
   "Tracking codes for submitters",
  ],
  cta: "Try Now",
  ctaClass: "pc-free-btn",
 },
 {
  tier: "Starter",
  subtitle: "Core workflow",
  price: "$19",
  period: "/month",
  popular: false,
  features: [
   "3 boards · 1,500 submissions/month · 3 team members",
   "Status tracking & assignment",
   "Public replies to submitters",
   "Internal notes & comments",
   "Email notifications",
   "File attachments",
   "3 reply templates",
   "Basic analytics dashboard",
  ],
  cta: "Try Now",
  ctaClass: "btn-primary",
 },
 {
  tier: "Growth",
  subtitle: "Automation & branding",
  price: "$49",
  period: "/month",
  popular: true,
  features: [
   "10 boards · 5,000 submissions/month · 10 team members",
   "Everything in Starter, plus:",
   "Custom branding (logo & colors)",
   "Location-based QR codes",
   "Recurring cycle resets",
   "Escalation rules",
   "Advanced analytics & CSV export",
   "Advanced filtering & bulk actions",
   "10 reply & board templates",
   "Public resolution feed",
  ],
  cta: "Try Now",
  ctaClass: "btn-primary teal",
 },
 {
  tier: "Business",
  subtitle: "Enterprise controls",
  price: "$79",
  period: "/month",
  popular: false,
  features: [
   "20 boards · 15,000 submissions/month · Unlimited team members",
   "Everything in Growth, plus:",
   "Custom roles & permissions",
   "Audit logs",
   "Unlimited templates",
   "Priority support",
  ],
  cta: "Try Now",
  ctaClass: "btn-primary",
 },
];

function Comparison() {
 return (
  <section id="comparison" style={{ padding: "80px 32px", background: "#FFFFFF" }}>
   <div className="container">
    <h2>How FeedSolve Compares</h2>
    <p style={{ fontSize: "16px", color: "#444441", marginTop: "12px", lineHeight: 1.65 }}>
     See why SMBs choose FeedSolve over general-purpose form tools that collect but never resolve.
    </p>
    <div className="comp-grid">
     <div className="comp-card">
      <h3>FeedSolve vs Google Forms</h3>
      <p>
       Google Forms gives you a spreadsheet. FeedSolve gives you a resolution workflow.
       Assign issues to your team, track every complaint with a unique code,
       and customize your QR code with your brand.
      </p>
      <Link href="/compare/feedsolve-vs-google-forms/">
       FeedSolve vs Google Forms: full comparison →
      </Link>
     </div>
     <div className="comp-card">
      <h3>FeedSolve vs Typeform</h3>
      <p>
       Typeform is built for surveys. FeedSolve is built for accountability.
       Every submitter gets a tracking code. Your team gets a Kanban board.
       Multi-language forms included - no extra setup.
      </p>
      <Link href="/compare/feedsolve-vs-typeform/">
       Why SMBs choose FeedSolve over Typeform →
      </Link>
     </div>
     <div className="comp-card">
      <h3>FeedSolve vs Zonka Feedback</h3>
      <p>
       Zonka measures satisfaction scores. FeedSolve measures Resolution Rate -
       did you actually fix it? Built for SMBs, not enterprise survey teams.
       Branded QR codes. Free to start.
      </p>
      <Link href="/compare/feedsolve-vs-zonka/">
       FeedSolve vs Zonka Feedback: full comparison →
      </Link>
     </div>
    </div>
   </div>
  </section>
 );
}

function Pricing() {
 return (
  <section id="pricing">
   <div className="container">
    <div className="section-label">
     <Tag size={13} /> Pricing
    </div>
    <h2>
     Simple pricing.
     <br />
     No surprises.
    </h2>
    <p className="pricing-sub">Start free. Upgrade as you grow.</p>
    <div className="pricing-grid">
     {pricingPlans.map((plan) => (
      <div
       key={plan.tier}
       className={`pc${plan.popular ? " popular" : ""}`}
      >
       {plan.popular && <div className="pop-badge">⭐ Recommended</div>}
       <div style={{ marginBottom: 8 }}>
        <div className="pc-tier">{plan.tier}</div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "var(--teal)", letterSpacing: "0.05em", marginTop: 4 }}>
         {plan.subtitle}
        </div>
       </div>
       <div className="pc-price">
        {plan.price !== "$0" && <sup>$</sup>}
        {plan.price.replace("$", "")}
        {plan.period === "/month" && <span>/mo</span>}
       </div>
       {plan.period !== "/month" && <div className="pc-period">{plan.period}</div>}
       <div className="pc-div"></div>
       <div className="pc-feats">
        {plan.features.map((f) => (
         <div key={f} className="pf">
          <div className="pf-check">
           <Check size={14} />
          </div>{" "}
          {f}
         </div>
        ))}
       </div>
       {plan.tier === "Free" ? (
        <a href="https://app.feedsolve.com/signup" className={plan.ctaClass} target="_blank" rel="noopener noreferrer">{plan.cta}</a>
       ) : (
        <a href="https://app.feedsolve.com/signup" className={plan.ctaClass} target="_blank" rel="noopener noreferrer">
         {plan.cta}
        </a>
       )}
      </div>
     ))}
    </div>
    <div className="pricing-note">
     <Info size={14} /> Pricing is based on feedback boards, not per user ·
     No hidden fees. Cancel anytime.
    </div>
   </div>
  </section>
 );
}

const faqs = [
 {
  q: "Do submitters need an account?",
  a: "No. Anyone can submit feedback without logging in. You share a link or QR code, they fill in the form - that's it. Zero friction for your customers.",
 },
 {
  q: "Can feedback be anonymous?",
  a: "Yes. You can enable anonymous submissions per board. Submitters still get a unique tracking code even when submitting anonymously.",
 },
 {
  q: "How long does setup take?",
  a: "Less than 2 minutes. Create an account, name your board, and share the link. No configuration required to get started collecting and tracking.",
 },
 {
  q: "Do I need a demo or sales call?",
  a: 'No. Just click "Try Now" and start immediately. We believe great software should sell itself - no gatekeeping, no onboarding calls required.',
 },
 {
  q: "Can I upgrade later?",
  a: "Yes. Start on the free plan and upgrade anytime as your usage grows. No data lost, no migrations, no downtime.",
 },
 {
  q: "Can I add my company logo and brand colors to the QR code?",
  a: "Yes. FeedSolve lets you customize your QR codes with your company logo, brand colors, and style. Branded QR codes are available on Growth and Pro plans and help your feedback boards look like a natural part of your business.",
 },
 {
  q: "Can submitters use the feedback form in their own language?",
  a: "Yes. FeedSolve supports multi-language submission forms so your customers, suppliers, and partners can submit feedback in their preferred language. Request any language and we'll add it - critical for businesses operating across South Asia, the Middle East, or East Africa.",
 },
];

function FAQ() {
 const [openIdx, setOpenIdx] = useState(0);

 return (
  <section id="faq">
   <div className="container">
    <div
     className="section-label"
     style={{ display: "block", textAlign: "center" }}
    >
     <HelpCircle size={13} /> FAQ
    </div>
    <h2 style={{ textAlign: "center" }}>Common questions</h2>
    <div className="faq-wrap">
     {faqs.map((faq, i) => (
      <div key={i} className={`faq-item${i === openIdx ? " open" : ""}`}>
       <div
        className="faq-q"
        onClick={() => setOpenIdx(i === openIdx ? -1 : i)}
        role="button"
        aria-expanded={i === openIdx}
        tabIndex={0}
        onKeyDown={(e) => {
         if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpenIdx(i === openIdx ? -1 : i);
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
 );
}

const landingBlogCards = [
 {
  stripe: "var(--teal)",
  tagStyle: { background: "var(--teal-pale)", color: "var(--teal)" } as React.CSSProperties,
  tagLabel: "Operations",
  blogId: 1,
 },
 {
  stripe: "#6366F1",
  tagStyle: { background: "#EEF2FF", color: "#3730A3" } as React.CSSProperties,
  tagLabel: "QR Codes",
  blogId: 2,
 },
 {
  stripe: "#16A34A",
  tagStyle: { background: "#F0FDF4", color: "#16A34A" } as React.CSSProperties,
  tagLabel: "Operations",
  blogId: 3,
 },
];

function Blog() {
 const featuredBlog = blogData[0];

 return (
  <section id="blog">
   <div className="container">
    <div className="blog-header">
     <div>
      <div className="section-label">
       <BookOpen size={13} /> From the Blog
      </div>
      <h2 style={{ margin: 0 }}>
       Insights on feedback
       <br />
       and operations
      </h2>
     </div>
     <Link href="/blog/" className="btn-outline" style={{ flexShrink: 0 }}>
      View all posts <ArrowRight size={16} />
     </Link>
    </div>

    <a href={`${featuredBlog.meta.slug}/`} className="blog-featured">
     <div className="blog-featured-content">
      <div>
       <div className="blog-featured-tag">
        <Star size={11} /> Featured
       </div>
       <h3>
        {featuredBlog.meta.title.split(" ").slice(0, 6).join(" ")}
        <br />
        {featuredBlog.meta.title.split(" ").slice(6).join(" ")}
       </h3>
       <p className="blog-featured-desc">
        {featuredBlog.content.quick_answer_box.slice(0, 180)}...
       </p>
      </div>
      <div className="blog-featured-footer">
       <div className="blog-author">
        <div className="blog-author-avatar">FS</div>
        <div>
         <div className="blog-author-name">FeedSolve Team</div>
         <div className="blog-author-meta">
          Apr 25, 2026 · 5 min read
         </div>
        </div>
       </div>
       <span className="blog-read-btn">
        Read post <ArrowRight size={14} />
       </span>
      </div>
     </div>
     <div className="blog-featured-visual">
      <div className="visual-panel-label">The resolution gap</div>
      <div className="visual-panel-block">
       <div className="visual-panel-block-label">Without tracking</div>
       <div className="visual-panel-row">
        <div
         className="visual-panel-icon"
         style={{ background: "#25D366" }}
        >
         <MessageCircle size={13} color="white" />
        </div>
        <div
         className="visual-panel-row-text"
         style={{ color: "rgba(255,255,255,0.55)" }}
        >
         Complaints via WhatsApp
        </div>
        <div
         className="visual-panel-badge"
         style={{
          background: "rgba(220,38,38,0.25)",
          color: "#FCA5A5",
         }}
        >
         Lost
        </div>
       </div>
       <div className="visual-panel-row">
        <div
         className="visual-panel-icon"
         style={{ background: "#6366F1" }}
        >
         <Mail size={13} color="white" />
        </div>
        <div
         className="visual-panel-row-text"
         style={{ color: "rgba(255,255,255,0.55)" }}
        >
         Feedback buried in email
        </div>
        <div
         className="visual-panel-badge"
         style={{
          background: "rgba(220,38,38,0.25)",
          color: "#FCA5A5",
         }}
        >
         Buried
        </div>
       </div>
      </div>
      <div className="visual-panel-block-solve">
       <div
        className="visual-panel-block-label"
        style={{ color: "var(--teal-light)" }}
       >
        With FeedSolve
       </div>
       <div className="visual-panel-row">
        <div
         className="visual-panel-icon"
         style={{ background: "var(--teal)" }}
        >
         <Hash size={13} color="white" />
        </div>
        <div
         className="visual-panel-row-text"
         style={{ color: "rgba(255,255,255,0.7)" }}
        >
         All complaints tracked
        </div>
        <div
         className="visual-panel-badge"
         style={{
          background: "rgba(34,197,94,0.2)",
          color: "#86EFAC",
         }}
        >
         Resolved
        </div>
       </div>
       <div className="visual-panel-row">
        <div
         className="visual-panel-icon"
         style={{ background: "rgba(58,143,165,0.4)" }}
        >
         <BellRing size={13} color="white" />
        </div>
        <div
         className="visual-panel-row-text"
         style={{ color: "rgba(255,255,255,0.7)" }}
        >
         Submitters notified
        </div>
        <div
         className="visual-panel-badge"
         style={{
          background: "rgba(34,197,94,0.2)",
          color: "#86EFAC",
         }}
        >
         Done
        </div>
       </div>
      </div>
     </div>
    </a>

    <div className="blog-cards">
     {landingBlogCards.map((card) => {
      const blog = blogData.find((b) => b.id === card.blogId);
      if (!blog) return null;
      return (
       <a key={blog.id} href={`${blog.meta.slug}/`} className="blog-card">
        <div
         className="blog-card-stripe"
         style={{ background: card.stripe }}
        ></div>
        <div className="blog-card-body">
         <div
          className="blog-card-tag"
          style={card.tagStyle}
         >
          {card.tagLabel}
         </div>
         <h3>{blog.meta.title}</h3>
         <p>{blog.content.quick_answer_box.slice(0, 120)}...</p>
         <div className="blog-card-footer">
          <div
           className="blog-card-avatar"
           style={{ background: card.stripe }}
          >
           FS
          </div>
          <div className="blog-card-author">FeedSolve Team · 5 min</div>
          <span className="blog-card-read">
           Read <ArrowRight size={13} />
          </span>
         </div>
        </div>
       </a>
      );
     })}
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
    <h2>
     Your first resolved issue
     <br />
     is 2 minutes away.
    </h2>
    <p>Start collecting and resolving feedback today.</p>
    <div className="cta-btns">
     <a href="https://app.feedsolve.com/signup" className="btn-primary teal" target="_blank" rel="noopener noreferrer">
      Try Now It&apos;s Free <ArrowRight size={17} />
     </a>
    </div>
    <div className="cta-trust-line">
     <Lock size={13} /> No credit card required
    </div>
   </div>
  </section>
 );
}

const faqJsonLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: faqs.map((faq) => ({
  "@type": "Question",
  name: faq.q,
  acceptedAnswer: {
   "@type": "Answer",
   text: faq.a,
  },
 })),
};

const websiteJsonLd = {
 "@context": "https://schema.org",
 "@type": "WebSite",
 name: "FeedSolve",
 url: "https://feedsolve.com/",
};

export default function Home() {
 return (
  <>
   <Navbar />
   <main>
    <Hero />
    <Steps />
    <FeatureTeaser />
    <Problem />
    <Solution />
    <Demo />
    <UseCases />
    <Diff />
    <BeforeAfter />
    <Pricing />
    <Comparison />
    <FAQ />
    <Blog />
    <FinalCTA />
   </main>
   <Footer />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
   />
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
   />
  </>
 );
}
