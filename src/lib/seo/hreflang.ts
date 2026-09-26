// hreflang clusters - the single source of truth for every language/region
// alternate on the site. Both the page metadata (`alternates.languages`) and
// sitemap.xml read from here, so the two can never disagree: Google drops the
// whole annotation when the HTML and the sitemap contradict each other.
//
// Every URL in a cluster must list the SAME map (reciprocal return links), and
// every page in a cluster must be a real, indexable, self-canonical page.

import type { Metadata } from "next";
import { SITE_URL } from "./site";

export const HREFLANG_CLUSTERS = {
  home: {
    en: "/",
    "pt-BR": "/br/",
    "x-default": "/",
  },
  complaintManagement: {
    en: "/complaint-management-software/",
    "en-GB": "/uk/complaint-management-software/",
    "en-US": "/us/complaint-management-software/",
    "en-AU": "/au/complaint-management-software/",
    "pt-BR": "/br/software-de-gestao-de-reclamacoes/",
    "x-default": "/complaint-management-software/",
  },
  suggestionBox: {
    en: "/digital-suggestion-box-software/",
    "pt-BR": "/br/caixa-de-sugestoes-online/",
    "x-default": "/digital-suggestion-box-software/",
  },
  qrFeedback: {
    en: "/qr-code-feedback/",
    "pt-BR": "/br/pesquisa-de-satisfacao-qr-code/",
    "x-default": "/qr-code-feedback/",
  },
} as const satisfies Record<string, Record<string, string>>;

export type HreflangCluster = keyof typeof HREFLANG_CLUSTERS;

/** Absolute-URL language map for one cluster. */
export function hreflangLanguages(cluster: HreflangCluster): Record<string, string> {
  return Object.fromEntries(
    Object.entries(HREFLANG_CLUSTERS[cluster]).map(([lang, path]) => [lang, `${SITE_URL}${path}`])
  );
}

/** `alternates` for a page that belongs to a cluster: self canonical + the full reciprocal map. */
export function clusterAlternates(cluster: HreflangCluster, path: string): Metadata["alternates"] {
  return { canonical: `${SITE_URL}${path}`, languages: hreflangLanguages(cluster) };
}

/** Sitemap lookup: the cluster map for a trailing-slash path, or undefined for single-locale pages. */
export function hreflangForPath(path: string): Record<string, string> | undefined {
  for (const cluster of Object.keys(HREFLANG_CLUSTERS) as HreflangCluster[]) {
    if ((Object.values(HREFLANG_CLUSTERS[cluster]) as string[]).includes(path)) {
      return hreflangLanguages(cluster);
    }
  }
  return undefined;
}
