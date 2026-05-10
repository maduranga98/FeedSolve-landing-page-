import type { MetadataRoute } from "next";
import blogData from "@/data/blog.json";

export const dynamic = "force-static";

const baseUrl = "https://feedsolve.com";
const withTrailingSlash = (path: string) => (path === "/" ? path : `${path.replace(/\/$/, "")}/`);
const absoluteUrl = (path: string) => `${baseUrl}${withTrailingSlash(path)}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const blogPosts = blogData.map((blog) => ({
    url: absoluteUrl(blog.meta.slug),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticPages = [
    { path: "/", priority: 1, frequency: "weekly" as const },
    { path: "/blog", priority: 0.8, frequency: "weekly" as const },
    { path: "/features/branded-qr-codes", priority: 0.7, frequency: "monthly" as const },
    { path: "/logistics/delivery-feedback", priority: 0.7, frequency: "monthly" as const },
    { path: "/manufacturing/supplier-feedback", priority: 0.7, frequency: "monthly" as const },
    { path: "/real-estate/tenant-feedback", priority: 0.7, frequency: "monthly" as const },
    { path: "/restaurants/qr-feedback", priority: 0.7, frequency: "monthly" as const },
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
    })),
    ...blogPosts,
  ];
}
