// Per-page metadata builder. Every page goes through here so that a page-level
// `openGraph` block never replaces the root one and silently drops og:image,
// siteName or locale, and so twitter:* always matches og:*.

import type { Metadata } from "next";
import { OG_IMAGE_HEIGHT, OG_IMAGE_URL, OG_IMAGE_WIDTH, SITE_URL } from "./site";

type PageSeoInput = {
  /** Unique per page, without the " | FeedSolve" suffix - it is appended here. */
  title: string;
  /** Unique per page, at most 160 characters. */
  description: string;
  /** Path with leading and trailing slash, e.g. "/logistics/3pl-feedback-platform/". */
  path: string;
  /** Canonical + hreflang. Defaults to a self canonical; pass `clusterAlternates(...)` for hreflang pages. */
  alternates?: Metadata["alternates"];
  /** Open Graph locale, e.g. "pt_BR". Defaults to "en_US". */
  locale?: string;
  /** Open Graph object type. Defaults to "website"; blog posts use "article". */
  type?: "website" | "article";
  /** ISO dates, only emitted for `type: "article"`. */
  publishedTime?: string;
  modifiedTime?: string;
};

export function generatePageMetadata({
  title,
  description,
  path,
  alternates,
  locale = "en_US",
  type = "website",
  publishedTime,
  modifiedTime,
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
    alternates: alternates ?? { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "FeedSolve",
      locale,
      type,
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
      ...(type === "article" && modifiedTime ? { modifiedTime } : {}),
      images: [{ url: OG_IMAGE_URL, width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE_URL],
    },
    robots: { index: true, follow: true },
  };
}
