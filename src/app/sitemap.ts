import type { MetadataRoute } from "next";
import blogData from "@/data/blog.json";

export const dynamic = "force-static";

const baseUrl = "https://feedsolve.com";
const withTrailingSlash = (path: string) => (path === "/" ? path : `${path.replace(/\/$/, "")}/`);
const absoluteUrl = (path: string) => `${baseUrl}${withTrailingSlash(path)}`;
const languageAlternates = (path: string) => ({
  languages: {
    "en-GB": absoluteUrl(path),
    "en-AU": absoluteUrl(path),
    "en-US": absoluteUrl(path),
    en: absoluteUrl(path),
    "x-default": absoluteUrl(path),
  },
});

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const blogPosts = blogData.map((blog) => ({
    url: absoluteUrl(blog.meta.slug),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
    alternates: languageAlternates(blog.meta.slug),
  }));

  const staticPages = [
    { path: "/", priority: 1, frequency: "weekly" as const },
    { path: "/blog", priority: 0.8, frequency: "weekly" as const },
    { path: "/privacy", priority: 0.4, frequency: "yearly" as const },
    { path: "/terms", priority: 0.4, frequency: "yearly" as const },
    { path: "/authors/feedsolve-team", priority: 0.5, frequency: "monthly" as const },
    { path: "/uk/complaint-management-software", priority: 0.8, frequency: "monthly" as const },
    { path: "/au/complaint-management-software", priority: 0.8, frequency: "monthly" as const },
    { path: "/us/complaint-management-software", priority: 0.8, frequency: "monthly" as const },
    { path: "/eu/gdpr-feedback-management", priority: 0.8, frequency: "monthly" as const },
    { path: "/features/branded-qr-codes", priority: 0.7, frequency: "monthly" as const },
    { path: "/digital-suggestion-box-software", priority: 0.8, frequency: "monthly" as const },
    { path: "/logistics/delivery-feedback", priority: 0.7, frequency: "monthly" as const },
    { path: "/manufacturing/supplier-feedback", priority: 0.7, frequency: "monthly" as const },
    { path: "/real-estate/tenant-feedback", priority: 0.7, frequency: "monthly" as const },
    { path: "/restaurants/qr-feedback", priority: 0.7, frequency: "monthly" as const },
    { path: "/compare", priority: 0.7, frequency: "monthly" as const },
    { path: "/compare/feedsolve-vs-google-forms", priority: 0.6, frequency: "monthly" as const },
    { path: "/compare/feedsolve-vs-typeform", priority: 0.6, frequency: "monthly" as const },
    { path: "/compare/feedsolve-vs-zonka", priority: 0.6, frequency: "monthly" as const },
  ];

  return [
    ...staticPages.map((page) => ({
      url: absoluteUrl(page.path),
      lastModified,
      changeFrequency: page.frequency,
      priority: page.priority,
      alternates: languageAlternates(page.path),
    })),
    ...blogPosts,
  ];
}
