// Blog author profiles - one source for the visible byline/bio and the
// BlogPosting `author` JSON-LD, so the Person node always points at a page
// whose H1 matches its name.

import { generateOrganizationSchema } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";

export type AuthorProfile = {
  /** Name shown in the byline (this is the string stored in blog.json). */
  name: string;
  role: string;
  bio: string;
  initials: string;
  /** Author page path. Its H1 matches the Person name in JSON-LD. */
  href: string;
};

const TEAM_AUTHOR: AuthorProfile = {
  name: "FeedSolve Team",
  role: "Operations & Product",
  bio: "The FeedSolve team writes about feedback management, operational efficiency, and building systems that help SMBs track and resolve every complaint.",
  initials: "FS",
  href: "/authors/feedsolve-team/",
};

const FOUNDER_AUTHOR_NAME = "Maduranga, founder of FeedSolve";

const FOUNDER_AUTHOR: AuthorProfile = {
  name: FOUNDER_AUTHOR_NAME,
  role: "Founder, FeedSolve",
  bio: "Maduranga builds FeedSolve and writes about SMB feedback and complaint resolution.",
  initials: "M",
  href: "/authors/maduranga/",
};

export function getAuthor(authorName?: string): AuthorProfile {
  return authorName === FOUNDER_AUTHOR_NAME ? FOUNDER_AUTHOR : TEAM_AUTHOR;
}

/** The founder's Person node, shared by the author page and every BlogPosting. */
export function founderPersonJsonLd({ standalone = false } = {}) {
  return {
    ...(standalone ? { "@context": "https://schema.org" } : {}),
    "@type": "Person",
    name: "Maduranga",
    jobTitle: "Founder",
    url: `${SITE_URL}${FOUNDER_AUTHOR.href}`,
    worksFor: generateOrganizationSchema({ standalone: false }),
    // TODO: add `sameAs: ["<personal LinkedIn URL>"]` once the founder's real
    // LinkedIn profile URL is confirmed. Do not guess or invent profile URLs.
  };
}

/** BlogPosting `author` node for a post. */
export function authorJsonLd(authorName?: string) {
  if (getAuthor(authorName) === FOUNDER_AUTHOR) return founderPersonJsonLd();
  return {
    "@type": "Person",
    name: TEAM_AUTHOR.name,
    url: `${SITE_URL}${TEAM_AUTHOR.href}`,
  };
}
