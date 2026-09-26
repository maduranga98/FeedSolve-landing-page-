#!/usr/bin/env node
/**
 * Sets <html lang> for localized sections of the static export.
 *
 * The App Router has a single root layout, which renders `<html lang="en">` for
 * every route. Splitting it into per-locale root layouts would move every
 * existing route into a route group, so instead the exported HTML for
 * localized prefixes is rewritten here, before scripts/check-seo.mjs runs.
 * React does not patch <html> attributes on hydration, so the value sticks.
 */

import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
/** Exported directory -> BCP 47 language tag. */
const LOCALES = { br: "pt-BR" };

function htmlFiles(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) htmlFiles(full, acc);
    else if (entry.endsWith(".html")) acc.push(full);
  }
  return acc;
}

for (const [dir, lang] of Object.entries(LOCALES)) {
  const root = join(OUT, dir);
  if (!existsSync(root)) {
    console.error(`[lang] ${root}/ not found - run "next build" first.`);
    process.exit(1);
  }
  let count = 0;
  for (const file of htmlFiles(root)) {
    const html = readFileSync(file, "utf8");
    const next = html.replace(/<html lang="[^"]*"/, `<html lang="${lang}"`);
    if (next === html) {
      console.error(`[lang] no <html lang> found in ${file}`);
      process.exit(1);
    }
    writeFileSync(file, next);
    count++;
  }
  console.log(`[lang] ${count} page(s) under /${dir}/ set to lang="${lang}"`);
}
