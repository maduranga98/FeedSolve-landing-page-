"use client";

import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  variant?: "home" | "blog";
  logoSrc?: string;
}

export default function Footer({ variant = "home", logoSrc }: FooterProps) {
  const resolvedLogo =
    logoSrc ?? (variant === "blog" ? "/feedsolve.webp" : "/logo.webp");

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
        <div className="footer-trust-and-links">
          <a
            className="footer-trust-badge"
            href="https://saasbrowser.com/en/saas/1458861/voxwel"
            target="_blank"
            rel="noopener"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- SaaS Browser provides this badge as an external SVG snippet. */}
            <img
              src="https://static-files.saasbrowser.com/saas-browser-badge-15.svg"
              alt="VoxWel - SaaS discovery platform"
              width="200"
            />
          </a>
          <div className="footer-links">
            <LinkComponent {...linkProps(productHref)}>Product</LinkComponent>
            <LinkComponent {...linkProps(pricingHref)}>Pricing</LinkComponent>
            {variant === "blog" && <Link href="/blog/">Blog</Link>}
            <a href="mailto:hello@feedsolve.com">Contact</a>
            <a href="/privacy/">Privacy Policy</a>
            <a href="/terms/">Terms</a>
            <a href="https://www.linkedin.com/company/feedsolve/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
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
