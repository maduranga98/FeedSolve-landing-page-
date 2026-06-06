"use client";

import Image from "next/image";
import Link from "next/link";

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
          <a href="https://www.linkedin.com/company/feedsolve/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
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
        © 2026 FeedSolve. All rights reserved. &nbsp;·&nbsp; A product of{" "}
        <a className="footer-company-link" href="https://www.lumoraventures.com/" target="_blank" rel="noopener noreferrer">
          Lumora Ventures Pvt. Ltd.
        </a>
      </div>
    </footer>
  );
}
