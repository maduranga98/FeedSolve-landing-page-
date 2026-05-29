import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "Claude-SearchBot",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "CCBot",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "FacebookBot",
  "Amazonbot",
  "DuckAssistBot",
  "YouBot",
  "cohere-ai",
  "Diffbot",
  "Bytespider",
  "Timpibot",
  "ImagesiftBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: "https://feedsolve.com/sitemap.xml",
    host: "https://feedsolve.com",
  };
}
