#!/usr/bin/env node
/**
 * Post-build SEO guard for the static export.
 *
 * Search Console reported a batch of "Redirect error" URLs that were all
 * slash-less variants of real pages, plus soft-404s caused by the export
 * writing 200-served /404/ and /_not-found/ files. Everything here is a
 * regression test for that class of bug: the build fails rather than
 * shipping URLs that Googlebot has to redirect through or de-duplicate.
 */

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const OUT = "out";
const ORIGIN = "https://feedsolve.com";
const errors = [];

/** Paths whose files are intentionally not indexable pages. */
const NOT_A_PAGE = /^\/(404|_not-found)\//;
/** hrefs that legitimately carry no trailing slash. */
const HAS_EXTENSION = /\.[a-z0-9]{2,5}$/i;

function htmlFiles(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === "_next") continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) htmlFiles(full, acc);
    else if (entry === "index.html") acc.push(full);
  }
  return acc;
}

function urlForFile(file) {
  const rel = relative(OUT, file).split(sep).slice(0, -1).join("/");
  return rel ? `/${rel}/` : "/";
}

if (!existsSync(OUT)) {
  console.error(`[seo] ${OUT}/ not found - run "next build" first.`);
  process.exit(1);
}

const pages = htmlFiles(OUT);

// 1. Internal links must already be canonical, so Googlebot never follows a
//    301 from /blog/foo to /blog/foo/.
// 2. Indexable pages must carry a self-referential canonical.
for (const file of pages) {
  const url = urlForFile(file);
  const html = readFileSync(file, "utf8");

  for (const href of new Set([...html.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]))) {
    const path = href.split("#")[0].split("?")[0];
    if (!path || path.endsWith("/") || HAS_EXTENSION.test(path)) continue;
    errors.push(`${url} links to "${href}" - missing trailing slash (301 on Firebase Hosting)`);
  }

  const noindex = /<meta name="robots"[^>]*content="[^"]*noindex/i.test(html);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];

  if (NOT_A_PAGE.test(url)) {
    if (!noindex) errors.push(`${url} is served 200 by the export but is not marked noindex`);
    continue;
  }
  if (noindex) continue;
  if (!canonical) errors.push(`${url} has no canonical tag`);
  else if (canonical !== `${ORIGIN}${url}`) {
    errors.push(`${url} canonical points elsewhere: ${canonical}`);
  }
}

// 3. Every sitemap URL must be a canonical, 200-serving page - never a URL
//    that redirects, and never one with no file behind it.
const sitemapPath = join(OUT, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  errors.push("sitemap.xml was not generated");
} else {
  const sitemap = readFileSync(sitemapPath, "utf8");
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) errors.push("sitemap.xml contains no <loc> entries");

  const redirectSources = new Set(
    (JSON.parse(readFileSync("firebase.json", "utf8")).hosting?.redirects ?? []).map((r) => r.source)
  );

  for (const loc of locs) {
    if (!loc.startsWith(ORIGIN)) {
      errors.push(`sitemap entry is off-origin: ${loc}`);
      continue;
    }
    const path = loc.slice(ORIGIN.length);
    if (!path.endsWith("/")) errors.push(`sitemap entry missing trailing slash: ${loc}`);
    if (redirectSources.has(path) || redirectSources.has(path.replace(/\/$/, ""))) {
      errors.push(`sitemap entry is a redirect source: ${loc}`);
    }
    if (!existsSync(join(OUT, path.slice(1), "index.html"))) {
      errors.push(`sitemap entry has no built page: ${loc}`);
    }
  }
  console.log(`[seo] ${locs.length} sitemap URLs checked`);
}

// 4. Every blog post must be linked from the /blog/ hub in the STATIC html.
//    The hub grid is client-paginated, so a post that only appears on page 2+
//    ships with no crawlable link from its own hub.
const hubFile = join(OUT, "blog", "index.html");
if (existsSync(hubFile)) {
  const hub = readFileSync(hubFile, "utf8");
  const linked = new Set([...hub.matchAll(/href="(\/blog\/[^"\/]+\/)"/g)].map((m) => m[1]));
  const built = readdirSync(join(OUT, "blog"), { withFileTypes: true })
    .filter((e) => e.isDirectory() && existsSync(join(OUT, "blog", e.name, "index.html")))
    .map((e) => `/blog/${e.name}/`);
  const orphans = built.filter((u) => !linked.has(u));
  if (orphans.length) {
    errors.push(`${orphans.length} blog post(s) not linked from /blog/: ${orphans.slice(0, 5).join(", ")}${orphans.length > 5 ? " ..." : ""}`);
  }
  console.log(`[seo] ${built.length} blog posts, ${built.length - orphans.length} linked from the hub`);
}

// 5. Localized sections must ship the right <html lang>, and every hreflang
//    annotation must be reciprocal: if A lists B, B must list A with the same
//    map, or Google ignores the whole cluster.
const LOCALIZED = { "/br/": "pt-BR" };
const hreflangByUrl = new Map();
for (const file of pages) {
  const url = urlForFile(file);
  const html = readFileSync(file, "utf8");
  const lang = html.match(/<html lang="([^"]+)"/)?.[1];
  const expected = Object.entries(LOCALIZED).find(([prefix]) => url.startsWith(prefix))?.[1] ?? "en";
  if (!NOT_A_PAGE.test(url) && lang !== expected) {
    errors.push(`${url} has <html lang="${lang}">, expected "${expected}"`);
  }
  const alts = [...html.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)];
  if (alts.length) hreflangByUrl.set(`${ORIGIN}${url}`, new Map(alts.map((m) => [m[1], m[2]])));
}
for (const [url, map] of hreflangByUrl) {
  if (![...map.values()].includes(url)) errors.push(`${url} hreflang map does not include itself`);
  for (const [lang, target] of map) {
    const back = hreflangByUrl.get(target);
    if (!back) {
      errors.push(`${url} hreflang ${lang} -> ${target}, which has no hreflang annotations`);
    } else if ([...map].some(([l, t]) => back.get(l) !== t) || back.size !== map.size) {
      errors.push(`${url} and ${target} declare different hreflang maps`);
    }
  }
}
console.log(`[seo] ${hreflangByUrl.size} pages with hreflang checked for reciprocity`);

console.log(`[seo] ${pages.length} pages checked`);

if (errors.length) {
  console.error(`\n[seo] ${errors.length} problem(s) found:\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log("[seo] no redirect, canonical, or sitemap problems found");
