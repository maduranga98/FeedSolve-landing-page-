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
        <div className="footer-links">
          <LinkComponent {...linkProps(productHref)}>Product</LinkComponent>
          <LinkComponent {...linkProps(pricingHref)}>Pricing</LinkComponent>
          {variant === "blog" && <Link href="/blog/">Blog</Link>}
          <a href="mailto:hello@feedsolve.com">Contact</a>
          <a href="/privacy/">Privacy Policy</a>
          {variant === "home" && <a href="/terms/">Terms</a>}
        </div>
      </div>
      <div className="footer-copy">
        © 2026 FeedSolve. All rights reserved. &nbsp;·&nbsp; A product of{" "}
        <strong style={{ color: "rgba(255,255,255,0.45)", fontWeight: 600 }}>
          Lumora Ventures Pvt. Ltd.
        </strong>
      </div>
    </footer>
  );
}
