"use client";

import { useState, type ReactNode } from "react";
import { Search, MousePointerClick } from "lucide-react";

// The only interactive part of the demo: the button that reveals the tracker.
// The timeline itself is server-rendered and passed in as children.
export default function DemoTracker({ children }: { children: ReactNode }) {
 const [trackerVisible, setTrackerVisible] = useState(false);

 return (
  <>
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
       color: "var(--muted-on-navy)",
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
       color: "var(--muted-on-navy)",
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
     {children}
    </div>
  </>
 );
}
