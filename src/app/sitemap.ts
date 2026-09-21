import type { MetadataRoute } from "next";
import blogData from "@/data/blog.json";
import { alternatives } from "@/data/alternatives";

export const dynamic = "force-static";

const baseUrl = "https://feedsolve.com";
const withTrailingSlash = (path: string) => (path === "/" ? path : `${path.replace(/\/$/, "")}/`);
const absoluteUrl = (path: string) => `${baseUrl}${withTrailingSlash(path)}`;

/**
 * The only real hreflang cluster on the site: one global complaint-management
 * page plus three market variants. These values must stay byte-identical to the
 * `alternates.languages` blocks rendered by the four pages themselves - a
 * sitemap that disagrees with the HTML gets the whole annotation dropped.
 *
 * Every other URL is a single-locale page and therefore carries NO `alternates`
 * key at all. Emitting one that points every region at the same URL (what this
 * file used to do) is a self-referential annotation Google ignores at best and
 * treats as a conflicting signal at worst.
 */
const MARKET_CLUSTER_LANGUAGES: Record<string, string> = {
  en: absoluteUrl("/complaint-management-software"),
  "en-GB": absoluteUrl("/uk/complaint-management-software"),
  "en-US": absoluteUrl("/us/complaint-management-software"),
  "en-AU": absoluteUrl("/au/complaint-management-software"),
  "x-default": absoluteUrl("/complaint-management-software"),
};

const MARKET_CLUSTER_PATHS = new Set([
  "/complaint-management-software",
  "/uk/complaint-management-software",
  "/us/complaint-management-software",
  "/au/complaint-management-software",
]);

/**
 * `/au/customer-feedback-software/` declares only `en-AU` -> itself and
 * `x-default` -> the homepage; `/customer-feedback-software/` declares no
 * language alternates at all. The two pages are not a reciprocal pair in the
 * HTML, so they are treated as ordinary single-locale entries here.
 */
const languageAlternates = (path: string) =>
  MARKET_CLUSTER_PATHS.has(path) ? { alternates: { languages: MARKET_CLUSTER_LANGUAGES } } : {};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const blogPosts = blogData.map((blog) => ({
    url: absoluteUrl(blog.meta.slug),
    lastModified: new Date(blog.meta.date_modified),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticPages = [
    { path: "/", priority: 1, frequency: "weekly" as const },
    { path: "/blog", priority: 0.8, frequency: "weekly" as const },
    { path: "/privacy", priority: 0.4, frequency: "yearly" as const },
    { path: "/terms", priority: 0.4, frequency: "yearly" as const },
    { path: "/authors/feedsolve-team", priority: 0.5, frequency: "monthly" as const },
    { path: "/uk/complaint-management-software", priority: 0.8, frequency: "monthly" as const },
    { path: "/au/complaint-management-software", priority: 0.8, frequency: "monthly" as const },
    { path: "/au/customer-feedback-software", priority: 0.8, frequency: "monthly" as const },
    { path: "/us/complaint-management-software", priority: 0.8, frequency: "monthly" as const },
    { path: "/eu/gdpr-feedback-management", priority: 0.8, frequency: "monthly" as const },
    { path: "/features/branded-qr-codes", priority: 0.7, frequency: "monthly" as const },
    { path: "/complaint-management-software", priority: 0.9, frequency: "weekly" as const },
    { path: "/customer-complaint-software", priority: 0.8, frequency: "monthly" as const },
    { path: "/customer-feedback-software", priority: 0.8, frequency: "monthly" as const },
    { path: "/digital-suggestion-box-software", priority: 0.8, frequency: "monthly" as const },
    { path: "/qr-code-feedback", priority: 0.8, frequency: "monthly" as const },
    { path: "/feedback-tracking-code", priority: 0.8, frequency: "monthly" as const },
    { path: "/logistics/delivery-feedback", priority: 0.7, frequency: "monthly" as const },
    { path: "/logistics/3pl-feedback-platform", priority: 0.7, frequency: "monthly" as const },
    { path: "/manufacturing/supplier-feedback", priority: 0.7, frequency: "monthly" as const },
    { path: "/real-estate/tenant-feedback", priority: 0.7, frequency: "monthly" as const },
    { path: "/real-estate/hoa-complaint-form", priority: 0.7, frequency: "monthly" as const },
    { path: "/restaurants/qr-feedback", priority: 0.7, frequency: "monthly" as const },
    { path: "/compare", priority: 0.7, frequency: "monthly" as const },
    { path: "/compare/feedsolve-vs-google-forms", priority: 0.6, frequency: "monthly" as const },
    { path: "/compare/feedsolve-vs-typeform", priority: 0.6, frequency: "monthly" as const },
    { path: "/compare/feedsolve-vs-zonka", priority: 0.6, frequency: "monthly" as const },
    { path: "/compare/feedsolve-vs-jotform", priority: 0.6, frequency: "monthly" as const },
    { path: "/alternatives", priority: 0.7, frequency: "monthly" as const },
    ...alternatives.map((alt) => ({
      path: `/alternatives/${alt.slug}`,
      priority: 0.6,
      frequency: "monthly" as const,
    })),
  ];

  return [
    ...staticPages.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified,
      changeFrequency: page.frequency,
      priority: page.priority,
      ...languageAlternates(page.path),
    })),
    ...blogPosts,
  ];
}
