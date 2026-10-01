import type { Metadata } from "next";
import { clusterAlternates, type HreflangCluster } from "@/lib/seo/hreflang";
import { generatePageMetadata } from "@/lib/seo/metadata";

type BrSeoInput = {
  /** Without the " | FeedSolve" suffix - appended here. Keep the rendered title under 60 chars. */
  title: string;
  /** 140-160 characters, Portuguese. */
  description: string;
  path: string;
  /** hreflang cluster shared with the English equivalent, if one exists. */
  cluster?: HreflangCluster;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/** Metadata for /br/ pages: pt_BR social cards and reciprocal hreflang with the English page. */
export function brMetadata({ cluster, ...page }: BrSeoInput): Metadata {
  const meta = generatePageMetadata({
    ...page,
    locale: "pt_BR",
    alternates: cluster ? clusterAlternates(cluster, page.path) : undefined,
  });
  return { ...meta, openGraph: { ...meta.openGraph, alternateLocale: ["en_US"] } };
}
