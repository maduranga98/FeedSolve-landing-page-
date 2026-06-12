"use client";

import { useEffect, useRef, useState } from "react";

function useCounter(target: number, duration = 1200) {
 const [value, setValue] = useState(target);
 const started = useRef(false);
 useEffect(() => {
  if (started.current) return;
  started.current = true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const timer = setTimeout(() => {
   const start = performance.now();
   const update = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    setValue(Math.round(eased * target));
    if (progress < 1) requestAnimationFrame(update);
   };
   requestAnimationFrame(update);
  }, 600);
  return () => clearTimeout(timer);
 }, [target, duration]);
 return value;
}

export default function HeroStats() {
 const total = useCounter(48, 1000);
 const resolved = useCounter(41, 1100);
 const open = useCounter(7, 900);

 return (
  <div className="board-stats">
   <div className="bstat">
    <div className="bstat-n">{total}</div>
    <div className="bstat-l">Total Issues</div>
   </div>
   <div className="bstat">
    <div className="bstat-n" style={{ color: "var(--teal)" }}>{resolved}</div>
    <div className="bstat-l">Resolved</div>
   </div>
   <div className="bstat">
    <div className="bstat-n" style={{ color: "#E65100" }}>{open}</div>
    <div className="bstat-l">Open</div>
   </div>
  </div>
 );
}
