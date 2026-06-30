// Shared SEO helpers for structured data (JSON-LD).

export const SITE_URL = "https://feedsolve.com";

export interface Crumb {
  name: string;
  url: string;
}

/**
 * Build a schema.org BreadcrumbList. Google uses this to render the
 * breadcrumb trail in search results instead of the raw URL, which
 * improves click-through and clarifies site hierarchy.
 */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}

/** Convenience: a two-level "Home > {label}" breadcrumb for landing pages. */
export function landingBreadcrumb(label: string, url: string) {
  return breadcrumbJsonLd([
    { name: "Home", url: `${SITE_URL}/` },
    { name: label, url },
  ]);
}
