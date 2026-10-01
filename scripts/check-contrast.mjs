#!/usr/bin/env node
/**
 * WCAG AA guard for the text colours introduced in src/app/globals.css.
 * Each entry is a real foreground/background pair used on the site; the build
 * fails if any drops below 4.5:1 (3:1 for the large-text entries).
 * No dependencies: plain relative-luminance maths from the WCAG 2.x spec.
 */

const hex = (h) => {
  const n = h.replace("#", "");
  return [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16));
};
const channel = (v) => {
  const c = v / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};
const luminance = ([r, g, b]) => 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
const ratio = (a, b) => {
  const [hi, lo] = [luminance(hex(a)), luminance(hex(b))].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

// Tokens (keep in sync with :root in src/app/globals.css).
const TEAL_BTN = "#2b7a8f";
const TEAL_BTN_HOVER = "#256477";
const TEAL_TEXT = "#256477";
const SLATE_TEXT = "#4f6377";
const GREEN_TEXT = "#0d6b2f";
const MUTED_ON_NAVY = "#bcc5d1";
const TEAL_ON_NAVY = "#86c7d8";

// Fail if the tokens in globals.css drift from the values asserted here.
import { readFileSync } from "node:fs";
const css = readFileSync("src/app/globals.css", "utf8");
const TOKENS = {
  "--teal-btn": TEAL_BTN,
  "--teal-btn-hover": TEAL_BTN_HOVER,
  "--teal-text": TEAL_TEXT,
  "--slate-text": SLATE_TEXT,
  "--green-text": GREEN_TEXT,
  "--muted-on-navy": MUTED_ON_NAVY,
  "--teal-on-navy": TEAL_ON_NAVY,
};
for (const [name, value] of Object.entries(TOKENS)) {
  const found = css.match(new RegExp(`${name}:\\s*(#[0-9a-fA-F]{6})`))?.[1];
  if (!found || found.toLowerCase() !== value) {
    console.error(`  - ${name} is ${found ?? "missing"} in globals.css, expected ${value}`);
    process.exit(1);
  }
}

const LIGHT = { white: "#ffffff", bg: "#f8f7f4", tealPale: "#e8f4f8", warm: "#f2f0ec", green: "#f0fdf4" };
// Navy surfaces from #152843 (navy-deep) to the lightest card overlay.
const NAVY = { deep: "#152843", navy: "#1e3557", card: "#293f5f", cardLight: "#384c6a" };

const pairs = [
  ["white on .btn-primary.teal", "#ffffff", TEAL_BTN],
  ["white on .btn-primary.teal:hover", "#ffffff", TEAL_BTN_HOVER],
  ...Object.entries(LIGHT).map(([n, bg]) => [`--teal-text on ${n}`, TEAL_TEXT, bg]),
  ...Object.entries(LIGHT).map(([n, bg]) => [`--slate-text on ${n}`, SLATE_TEXT, bg]),
  ["--green-text on #f0fdf4", GREEN_TEXT, LIGHT.green],
  ["--green-text on white", GREEN_TEXT, LIGHT.white],
  ["#2a7da0 link on white", "#2a7da0", LIGHT.white],
  ["white on green avatar", "#ffffff", "#15803d"],
  ["white on indigo avatar", "#ffffff", "#4f46e5"],
  ...Object.entries(NAVY).map(([n, bg]) => [`--muted-on-navy on ${n}`, MUTED_ON_NAVY, bg]),
  ...Object.entries(NAVY).map(([n, bg]) => [`--teal-on-navy on ${n}`, TEAL_ON_NAVY, bg]),
];

let failed = 0;
for (const [name, fg, bg] of pairs) {
  const r = ratio(fg, bg);
  if (r < 4.5) {
    failed++;
    console.error(`  - ${name}: ${r.toFixed(2)}:1 (need 4.5:1)`);
  }
}
if (failed) {
  console.error(`[contrast] ${failed} colour pair(s) below WCAG AA`);
  process.exit(1);
}
console.log(`[contrast] ${pairs.length} colour pairs meet WCAG AA (4.5:1)`);
