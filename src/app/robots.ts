import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
      crawlDelay: 0,
    },
    sitemap: "https://feedsolve.com/sitemap.xml",
  };
}
