"use client";

// The only client-side parts of a blog post. They receive nothing but the
// table-of-contents labels, so no post content (and no editorial data) is
// serialized into the page for them.

import { useEffect, useState, type ReactNode } from "react";

/** Thin bar at the top of the viewport showing how far down the page you are. */
export function ReadingProgress() {
 const [progress, setProgress] = useState(0);

 useEffect(() => {
  let ticking = false;
  const onScroll = () => {
   if (ticking) return;
   ticking = true;
   requestAnimationFrame(() => {
    const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
    setProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    ticking = false;
   });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
 }, []);

 return (
  <div className="reading-progress">
   <div className="reading-progress-fill" style={{ width: `${progress}%` }} />
  </div>
 );
}

/** Sidebar table of contents that highlights the section currently in view. */
export function TocList({ items }: { items: { id: string; label: string }[] }) {
 const [active, setActive] = useState(items[0]?.id || "");

 useEffect(() => {
  let ticking = false;
  const onScroll = () => {
   if (ticking) return;
   ticking = true;
   requestAnimationFrame(() => {
    let current = items[0]?.id || "";
    items.forEach(({ id }) => {
     const el = document.getElementById(id);
     if (el && el.getBoundingClientRect().top < 120) current = id;
    });
    setActive(current);
    ticking = false;
   });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
 }, [items]);

 return (
  <>
   {items.map(({ id, label }, i) => (
    <a key={id} href={`#${id}`} className={`toc-item${active === id ? " active" : ""}`}>
     <span className="toc-num">0{i + 1}</span>
     <span className="toc-text">{label}</span>
    </a>
   ))}
  </>
 );
}

export function CopyLinkButton({ children }: { children: ReactNode }) {
 const copyLink = () => {
  navigator.clipboard.writeText(window.location.href).catch(() => {});
 };
 return (
  <button className="share-btn" title="Copy link" onClick={copyLink}>
   {children}
  </button>
 );
}
