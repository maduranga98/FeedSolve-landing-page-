import type { MetadataRoute } from "next";
import blogData from "@/data/blog.json";

export const dynamic = "force-static";

const baseUrl = "https://feedsolve.com";
const withTrailingSlash = (path: string) =>
  path === "/" ? path : `${path.replace(/\/$/, "")}/`;
const absoluteUrl = (path: string) => `${baseUrl}${withTrailingSlash(path)}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const blogPosts = blogData.map((blog) => ({
    url: absoluteUrl(blog.meta.slug),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const comparePages = [
    "/compare/feedsolve-vs-google-forms",
    "/compare/feedsolve-vs-typeform",
    "/compare/feedsolve-vs-zonka",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...comparePages,
    ...blogPosts,
  ];
}
