"use client";

import Image from "next/image";
import Link from "next/link";
import { G2_PROFILE_URL, LINKEDIN_URL } from "@/lib/seo";

type FooterLink = { href: string; label: string; lang?: string };

const FOOTER_DIRECTORY: { title: string; links: FooterLink[] }[] = [
  {
    title: "Industries",
    links: [
      { href: "/restaurants/qr-feedback/", label: "Restaurants" },
      { href: "/manufacturing/supplier-feedback/", label: "Manufacturing" },
      { href: "/logistics/delivery-feedback/", label: "Delivery & logistics" },
      { href: "/logistics/3pl-feedback-platform/", label: "3PL" },
      { href: "/real-estate/tenant-feedback/", label: "Property management" },
      { href: "/real-estate/hoa-complaint-form/", label: "HOA" },
    ],
  },
  {
    title: "Markets",
    links: [
      { href: "/us/complaint-management-software/", label: "United States" },
      { href: "/uk/complaint-management-software/", label: "United Kingdom" },
      { href: "/au/complaint-management-software/", label: "Australia" },
      { href: "/au/customer-feedback-software/", label: "Australia: feedback software" },
      { href: "/eu/gdpr-feedback-management/", label: "EU (GDPR)" },
      { href: "/br/", label: "Brasil (Português)", lang: "pt-BR" },
    ],
  },
];

interface FooterProps {
  variant?: "home" | "blog";
  logoSrc?: string;
}

export default function Footer({ variant = "home", logoSrc }: FooterProps) {
  const resolvedLogo = logoSrc ?? "/logo.webp";

  const productHref = variant === "blog" ? "/#solution" : "#solution";
  const pricingHref = variant === "blog" ? "/#pricing" : "#pricing";

  const LinkComponent = variant === "blog" ? Link : "a";
  const linkProps = (href: string) =>
    variant === "blog" ? { href } : { href };

  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <Image src={resolvedLogo} alt="FeedSolve" width={28} height={28} />
          <span className="footer-logo-text">FeedSolve</span>
        </div>
        <div className="footer-links">
          <LinkComponent {...linkProps(productHref)}>Product</LinkComponent>
          <LinkComponent {...linkProps(pricingHref)}>Pricing</LinkComponent>
          <Link href="/complaint-management-software/">Complaint Software</Link>
          <Link href="/customer-complaint-software/">Customer Complaints</Link>
          <Link href="/customer-feedback-software/">Feedback Software</Link>
          <Link href="/digital-suggestion-box-software/">Suggestion Box</Link>
          <Link href="/qr-code-feedback/">QR Code Feedback</Link>
          <Link href="/feedback-tracking-code/">Tracking Codes</Link>
          <Link href="/compare/">Compare</Link>
          {variant === "blog" && <Link href="/blog/">Blog</Link>}
          <a href="mailto:hello@feedsolve.com">Contact</a>
          <a href="/privacy/">Privacy Policy</a>
          <a href="/terms/">Terms</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {/* Two-way reference for the G2 entry in the Organization sameAs. */}
          <a href={G2_PROFILE_URL} target="_blank" rel="noopener noreferrer">
            G2 Reviews
          </a>
        </div>
      </div>
      {/*
        Directory row: industry and market pages were reachable from only one
        or two in-body links each. A sitewide footer entry gives every one of
        them a crawl path from every page.
      */}
      <nav className="footer-directory" aria-label="Industries and markets">
        {FOOTER_DIRECTORY.map((group) => (
          <div key={group.title} className="footer-directory-group">
            <span className="footer-directory-title">{group.title}</span>
            {group.links.map((link) => (
              <Link key={link.href} href={link.href} hrefLang={link.lang} lang={link.lang}>
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </nav>
      <div className="footer-badges">
        <a
          href="https://saasbrowser.com/en/saas/1518652/feedsolve"
          target="_blank"
          rel="noopener"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://static-files.saasbrowser.com/saas-browser-badge-16.svg"
            alt="FeedSolve - SaaS search engine"
            width={200}
            height={54}
          />
        </a>
      </div>
      <div className="footer-built-by">
        Built by the team at{" "}
        <a className="footer-company-link" href="https://www.lumoraventures.com/" target="_blank" rel="noopener noreferrer">
          Lumora Ventures
        </a>{" "}
        — software builders with hands-on experience in SMB operations across South Asia and the UK.
      </div>
      <div className="footer-copy">
        © 2026 FeedSolve (also searched as &ldquo;Feed Solve&rdquo;). All rights reserved. &nbsp;·&nbsp; A product of{" "}
        <a className="footer-company-link" href="https://www.lumoraventures.com/" target="_blank" rel="noopener noreferrer">
          Lumora Ventures Pvt. Ltd.
        </a>
      </div>
    </footer>
  );
}
