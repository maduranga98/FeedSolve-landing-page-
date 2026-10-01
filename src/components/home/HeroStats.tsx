"use client";

import { useEffect, useRef } from "react";

// The server renders the final numbers. After hydration a single
// requestAnimationFrame loop counts them up by writing textContent directly:
// no React state, so no re-renders while animating, and nothing at all under
// prefers-reduced-motion.
const STATS = [
 { target: 48, duration: 1000 },
 { target: 41, duration: 1100 },
 { target: 7, duration: 900 },
];

export default function HeroStats() {
 const totalRef = useRef<HTMLDivElement>(null);
 const resolvedRef = useRef<HTMLDivElement>(null);
 const openRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const nodes = [totalRef.current, resolvedRef.current, openRef.current];
  let frame = 0;
  const timer = setTimeout(() => {
   const start = performance.now();
   const tick = (now: number) => {
    let done = true;
    STATS.forEach(({ target, duration }, i) => {
     const progress = Math.min((now - start) / duration, 1);
     const eased = 1 - Math.pow(1 - progress, 3);
     const node = nodes[i];
     if (node) node.textContent = String(Math.round(eased * target));
     if (progress < 1) done = false;
    });
    if (!done) frame = requestAnimationFrame(tick);
   };
   frame = requestAnimationFrame(tick);
  }, 600);
  return () => {
   clearTimeout(timer);
   cancelAnimationFrame(frame);
  };
 }, []);

 return (
  <div className="board-stats">
   <div className="bstat">
    <div className="bstat-n" ref={totalRef}>48</div>
    <div className="bstat-l">Total Issues</div>
   </div>
   <div className="bstat">
    <div className="bstat-n" style={{ color: "var(--teal-text)" }} ref={resolvedRef}>41</div>
    <div className="bstat-l">Resolved</div>
   </div>
   <div className="bstat">
    <div className="bstat-n" style={{ color: "#b93c00" }} ref={openRef}>7</div>
    <div className="bstat-l">Open</div>
   </div>
  </div>
 );
}
