"use client";

import { useState } from "react";
import { PlayCircle, Search, MousePointerClick } from "lucide-react";

export default function DemoSection() {
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
      aria-expanded={trackerVisible}
      aria-controls="demo-tracker-panel"
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
    <div id="demo-tracker-panel" aria-live="polite" className={`demo-tracker${trackerVisible ? " visible" : ""}`}>
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
