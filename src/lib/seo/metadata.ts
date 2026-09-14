// Per-page metadata builder. Keeps titles, canonicals, and social cards unique
// per page instead of repeating one stuffed site-wide block.

import type { Metadata } from "next";
import { SITE_URL } from "./site";

type PageSeoInput = {
  /** Unique per page, without the " | FeedSolve" suffix - it is appended here. */
  title: string;
  /** Unique per page, 150-160 characters. */
  description: string;
  /** Path with leading and trailing slash, e.g. "/logistics/3pl-feedback-platform/". */
  path: string;
  ogImage?: string;
};

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = `${SITE_URL}/feedsolve.webp`,
}: PageSeoInput): Metadata {
  const fullTitle = `${title} | FeedSolve`;
  const url = `${SITE_URL}${path}`;

  return {
    // `absolute` stops the segment layout's "%s | FeedSolve" template from
    // appending the brand a second time.
    title: { absolute: fullTitle },
    description,
    // No `keywords` field on purpose: Google ignores meta keywords, and an
    // identical stuffed string across pages reads as a thin-content signal.
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "FeedSolve",
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: { index: true, follow: true },
  };
}
