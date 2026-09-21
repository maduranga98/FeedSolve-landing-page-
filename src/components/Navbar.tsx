"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface NavbarProps {
  variant?: "home" | "blog";
  logoSrc?: string;
}

type NavItem = { href: string; label: string };
type NavGroup = { title: string; items: NavItem[] };

/**
 * Money pages and vertical landing pages. Previously reachable only from the
 * footer and from in-body links, which left them several hops from the
 * homepage; a header entry point shortens that for crawlers and for readers.
 * Every href keeps its trailing slash - scripts/check-seo.mjs fails the build
 * on any internal link that would 301 on Firebase Hosting.
 */
const SOLUTIONS_GROUPS: NavGroup[] = [
  {
    title: "Platform",
    items: [
      { href: "/complaint-management-software/", label: "Complaint Management" },
      { href: "/digital-suggestion-box-software/", label: "Digital Suggestion Box" },
      { href: "/customer-feedback-software/", label: "Customer Feedback" },
      { href: "/qr-code-feedback/", label: "QR Code Feedback" },
      { href: "/feedback-tracking-code/", label: "Feedback Tracking Code" },
    ],
  },
  {
    title: "By industry",
    items: [
      { href: "/restaurants/qr-feedback/", label: "Restaurants" },
      { href: "/manufacturing/supplier-feedback/", label: "Manufacturing" },
      { href: "/logistics/delivery-feedback/", label: "Logistics" },
      { href: "/real-estate/tenant-feedback/", label: "Real Estate" },
    ],
  },
];

const COMPARE_GROUPS: NavGroup[] = [
  {
    title: "Head to head",
    items: [
      { href: "/compare/", label: "All comparisons" },
      { href: "/compare/feedsolve-vs-google-forms/", label: "vs Google Forms" },
      { href: "/compare/feedsolve-vs-typeform/", label: "vs Typeform" },
      { href: "/compare/feedsolve-vs-zonka/", label: "vs Zonka Feedback" },
      { href: "/compare/feedsolve-vs-jotform/", label: "vs Jotform" },
    ],
  },
  {
    title: "Alternatives",
    items: [
      { href: "/alternatives/", label: "Alternatives hub" },
      { href: "/alternatives/suggestion-ox/", label: "Suggestion Ox alternative" },
      { href: "/alternatives/zendesk/", label: "Zendesk alternative" },
      { href: "/alternatives/medallia/", label: "Medallia alternative" },
    ],
  },
];

type MenuId = "solutions" | "compare";

function useScrollNavbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

/**
 * The panel is always in the DOM and only hidden with CSS, so every link ships
 * in the static export's HTML whether or not the menu is ever opened.
 */
function NavDropdown({
  id,
  label,
  groups,
  open,
  onOpen,
  onClose,
}: {
  id: MenuId;
  label: string;
  groups: NavGroup[];
  open: boolean;
  onOpen: (id: MenuId) => void;
  onClose: () => void;
}) {
  return (
    <li
      className="nav-dropdown"
      onMouseEnter={() => onOpen(id)}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className="nav-dropdown-trigger"
        aria-expanded={open}
        aria-controls={`nav-menu-${id}`}
        onClick={() => (open ? onClose() : onOpen(id))}
      >
        {label}
        <ChevronDown size={14} aria-hidden="true" />
      </button>
      <div
        id={`nav-menu-${id}`}
        className="nav-dropdown-panel"
        data-open={open ? "true" : "false"}
      >
        {groups.map((group) => (
          <div key={group.title} className="nav-dropdown-group">
            <span className="nav-dropdown-title">{group.title}</span>
            {group.items.map((item) => (
              <Link key={item.href} href={item.href} onClick={onClose}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </li>
  );
}

export default function Navbar({ variant = "home", logoSrc }: NavbarProps) {
  const scrolled = useScrollNavbar();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuId | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const closeMobileMenu = () => setMenuOpen(false);
  const closeDropdown = useCallback(() => setOpenMenu(null), []);
  const openDropdown = useCallback((id: MenuId) => setOpenMenu(id), []);

  useEffect(() => {
    const onScroll = () => {
      setMenuOpen(false);
      setOpenMenu(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    const onPointerDown = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  const resolvedLogo = logoSrc ?? "/logo.webp";
  const navClass = variant === "home" ? (scrolled ? "scrolled" : "") : "scrolled";

  const productHref = variant === "blog" ? "/#solution" : "#solution";
  const pricingHref = variant === "blog" ? "/#pricing" : "#pricing";
  const demoHref = variant === "blog" ? "/#demo" : "#demo";
  const contactHref = variant === "blog" ? "/#contact" : "#contact";
  const heroHref = variant === "blog" ? "/" : "#hero";

  const LinkComponent = variant === "blog" ? Link : "a";
  const linkProps = (href: string) =>
    variant === "blog" ? { href } : { href };

  const blogLinkStyle =
    variant === "blog" ? { color: "var(--navy)", fontWeight: 600 } : undefined;

  return (
    <>
      <nav id="navbar" ref={navRef} className={navClass}>
        <div className="nav-inner">
          <LinkComponent {...linkProps(heroHref)} className="nav-logo">
            <Image src={resolvedLogo} alt="FeedSolve" width={34} height={34} />
            <span className="nav-logo-text">FeedSolve</span>
          </LinkComponent>
          <ul className="nav-links">
            <li>
              <LinkComponent {...linkProps(productHref)}>Product</LinkComponent>
            </li>
            <NavDropdown
              id="solutions"
              label="Solutions"
              groups={SOLUTIONS_GROUPS}
              open={openMenu === "solutions"}
              onOpen={openDropdown}
              onClose={closeDropdown}
            />
            <NavDropdown
              id="compare"
              label="Compare"
              groups={COMPARE_GROUPS}
              open={openMenu === "compare"}
              onOpen={openDropdown}
              onClose={closeDropdown}
            />
            <li>
              <LinkComponent {...linkProps(pricingHref)}>Pricing</LinkComponent>
            </li>
            <li>
              <LinkComponent {...linkProps(demoHref)}>Demo</LinkComponent>
            </li>
            <li>
              <LinkComponent {...linkProps(contactHref)}>Contact</LinkComponent>
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
        <LinkComponent {...linkProps(contactHref)} onClick={closeMobileMenu}>
          Contact
        </LinkComponent>
        <Link href="/blog/" onClick={closeMobileMenu}>
          Blog
        </Link>
        {[...SOLUTIONS_GROUPS, ...COMPARE_GROUPS].map((group) => (
          <div key={group.title} className="mobile-menu-group">
            <span className="mobile-menu-title">{group.title}</span>
            {group.items.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMobileMenu}>
                {item.label}
              </Link>
            ))}
          </div>
        ))}
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
