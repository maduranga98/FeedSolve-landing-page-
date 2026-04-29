import type { MetadataRoute } from "next";
import blogData from "@/data/blog.json";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://feedsolve.com";

  const blogPosts = blogData.map((blog) => ({
    url: `${baseUrl}${blog.meta.slug}`,
    lastModified: new Date("2026-04-25"),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/blog-post`,
      lastModified: new Date("2026-04-18"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...blogPosts,
  ];
}
