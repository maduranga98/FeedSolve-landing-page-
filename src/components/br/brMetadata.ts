import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo/site";
import { clusterAlternates, type HreflangCluster } from "@/lib/seo/hreflang";

type BrSeoInput = {
  /** Without the " | FeedSolve" suffix - appended here. Keep the rendered title under 60 chars. */
  title: string;
  /** 140-160 characters, Portuguese. */
  description: string;
  path: string;
  /** hreflang cluster shared with the English equivalent, if one exists. */
  cluster?: HreflangCluster;
};

/** Metadata for /br/ pages: pt_BR social cards and reciprocal hreflang with the English page. */
export function brMetadata({ title, description, path, cluster }: BrSeoInput): Metadata {
  const fullTitle = `${title} | FeedSolve`;
  const url = `${SITE_URL}${path}`;
  const image = `${SITE_URL}/feedsolve.webp`;

  return {
    title: { absolute: fullTitle },
    description,
    alternates: cluster ? clusterAlternates(cluster, path) : { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "FeedSolve",
      locale: "pt_BR",
      alternateLocale: ["en_US"],
      type: "website",
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
    robots: { index: true, follow: true },
  };
}
