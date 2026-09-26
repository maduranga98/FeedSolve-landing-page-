import type { MetadataRoute } from "next";
import blogData from "@/data/blog.json";
import { alternatives } from "@/data/alternatives";
import { hreflangForPath } from "@/lib/seo/hreflang";
import { BR_PAGES } from "@/data/brPages";
import { BR_POSTS, brPostPath } from "@/data/brBlog";

export const dynamic = "force-static";

const baseUrl = "https://feedsolve.com";
const withTrailingSlash = (path: string) => (path === "/" ? path : `${path.replace(/\/$/, "")}/`);
const absoluteUrl = (path: string) => `${baseUrl}${withTrailingSlash(path)}`;

/**
 * hreflang alternates come from the same cluster map the pages render, so the
 * sitemap and the HTML can never disagree (a mismatch gets the whole annotation
 * dropped). Single-locale pages carry NO `alternates` key at all.
 */
const languageAlternates = (path: string) => {
  const languages = hreflangForPath(withTrailingSlash(path));
  return languages ? { alternates: { languages } } : {};
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const blogPosts = blogData.map((blog) => ({
    url: absoluteUrl(blog.meta.slug),
    lastModified: new Date(blog.meta.date_modified),
    changeFrequency: "monthly" as const,
    priority: 0.6,
    ...languageAlternates(blog.meta.slug),
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
    ...BR_PAGES.map((page) => ({
      path: page.path,
      priority: page.path === "/br/" ? 0.9 : 0.8,
      frequency: "monthly" as const,
    })),
    { path: "/br/blog", priority: 0.7, frequency: "weekly" as const },
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
    ...BR_POSTS.map((post) => ({
      url: absoluteUrl(brPostPath(post)),
      lastModified: new Date(post.dateModified),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      ...languageAlternates(brPostPath(post)),
    })),
  ];
}
