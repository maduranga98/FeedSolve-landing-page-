/** Canonical origin for every absolute URL emitted in metadata and JSON-LD. */
export const SITE_URL = "https://feedsolve.com";

/** G2 product profile. Also linked from the footer so the reference is two-way. */
export const G2_PROFILE_URL = "https://www.g2.com/products/feedsolve/reviews";

/** LinkedIn company page - the same URL the footer links. */
export const LINKEDIN_URL = "https://www.linkedin.com/company/feedsolve/";

/** SaaS Browser directory listing, already badged in the footer. */
export const SAASBROWSER_URL = "https://saasbrowser.com/en/saas/1518652/feedsolve";

/**
 * `sameAs` for every Organization node on the site - the entity links that tell
 * Google the feedsolve.com brand, the G2 product profile, the LinkedIn company
 * page, and the directory listing are one organisation.
 *
 * Single source of truth on purpose: the same array is emitted from the root
 * layout's Organization and SoftwareApplication provider and from
 * generateOrganizationSchema, so the profiles can never drift apart between
 * nodes. Every entry is a live profile - never add a URL that 404s, since a
 * broken sameAs is a worse signal than no sameAs at all.
 */
export const ORGANIZATION_SAME_AS: readonly string[] = [
  G2_PROFILE_URL,
  LINKEDIN_URL,
  SAASBROWSER_URL,
];
