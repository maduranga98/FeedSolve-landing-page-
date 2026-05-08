"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  variant?: "home" | "blog";
  logoSrc?: string;
}

function useScrollNavbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

export default function Navbar({ variant = "home", logoSrc }: NavbarProps) {
  const scrolled = useScrollNavbar();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMobileMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => closeMobileMenu();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const resolvedLogo = logoSrc ?? (variant === "blog" ? "/feedsolve.webp" : "/logo.webp");
  const navClass = variant === "home" ? (scrolled ? "scrolled" : "") : "scrolled";

  const productHref = variant === "blog" ? "/#solution" : "#solution";
  const pricingHref = variant === "blog" ? "/#pricing" : "#pricing";
  const demoHref = variant === "blog" ? "/#demo" : "#demo";
  const heroHref = variant === "blog" ? "/" : "#hero";

  const LinkComponent = variant === "blog" ? Link : "a";
  const linkProps = (href: string) =>
    variant === "blog" ? { href } : { href };

  const blogLinkStyle =
    variant === "blog" ? { color: "var(--navy)", fontWeight: 600 } : undefined;

  return (
    <>
      <nav id="navbar" className={navClass}>
        <div className="nav-inner">
          <LinkComponent {...linkProps(heroHref)} className="nav-logo">
            <Image src={resolvedLogo} alt="FeedSolve" width={34} height={34} />
            <span className="nav-logo-text">FeedSolve</span>
          </LinkComponent>
          <ul className="nav-links">
            <li>
              <LinkComponent {...linkProps(productHref)}>Product</LinkComponent>
            </li>
            <li>
              <LinkComponent {...linkProps(pricingHref)}>Pricing</LinkComponent>
            </li>
            <li>
              <LinkComponent {...linkProps(demoHref)}>Demo</LinkComponent>
            </li>
            <li>
              <Link href="/blog/" style={blogLinkStyle}>
                Blog
              </Link>
            </li>
          </ul>
          <div className="nav-actions">
            <a href="https://app.feedsolve.com/login" className="btn-ghost" target="_blank" rel="noopener noreferrer">
              Login
            </a>
            <a href="https://app.feedsolve.com/signup" className="btn-primary teal" target="_blank" rel="noopener noreferrer">
              Try Now
            </a>
            <button
              className={`nav-hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <LinkComponent {...linkProps(productHref)} onClick={closeMobileMenu}>
          Product
        </LinkComponent>
        <LinkComponent {...linkProps(pricingHref)} onClick={closeMobileMenu}>
          Pricing
        </LinkComponent>
        <LinkComponent {...linkProps(demoHref)} onClick={closeMobileMenu}>
          Demo
        </LinkComponent>
        <Link href="/blog/" onClick={closeMobileMenu}>
          Blog
        </Link>
        <a href="https://app.feedsolve.com/login" onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer">
          Login
        </a>
        <a href="https://app.feedsolve.com/signup" className="mobile-cta" onClick={closeMobileMenu} target="_blank" rel="noopener noreferrer">
          Try Now It&apos;s Free
        </a>
      </div>
    </>
  );
}
