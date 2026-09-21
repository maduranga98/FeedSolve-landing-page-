# Title & meta description tests — pages already ranking at position ≤15

_Applied: 2026-09-21. Branch: `seo/gsc-improvements`._

## Why only these five pages

About 85% of query impressions sit at position 30+, where CTR is effectively
zero regardless of copy. Rewriting titles there changes nothing. These five
pages are the exception: they already appear high enough that the snippet is
actually read, so a sharper hook converts impressions that already exist.

Rules applied to every row:

- Primary keyword unchanged and still leading the title.
- Rendered `<title>` under 60 characters. Blog posts render the raw title with
  no `| FeedSolve` suffix (`src/app/blog/layout.tsx` sets a plain string title,
  so the root `%s | FeedSolve` template does not apply); `/restaurants/qr-feedback/`
  sits under `src/app/restaurants/layout.tsx`, which does apply the suffix, and
  its rendered length is measured with it.
- Meta description 140–160 characters, carrying one concrete benefit and one
  specific hook (a number, a formula, a template, or "free").
- No fabricated statistics. Every number below already appears in the page body.

## Before / after

### 1. `/blog/qr-code-feedback-board/`

| | Before | After |
|---|---|---|
| Title | QR Code Feedback Board: Collect Complaints Without a Form (57) | **QR Code Feedback Board: Free 10-Minute Setup** (44) |
| Description | A QR code feedback board lets customers, suppliers, and staff submit complaints by scanning - no login needed. Set one up in minutes, free. (139) | **A QR code feedback board lets anyone report an issue by scanning - no login. Set one up free in 10 minutes and track every submission through to resolution.** (156) |

Hook: "free" + "10-minute". Benefit moved into the title instead of a negative
framing ("without a form") that assumes the reader already knows the objection.

### 2. `/restaurants/qr-feedback/`

| | Before | After |
|---|---|---|
| Title | QR Code Feedback for Restaurants - Catch Complaints Before Google Reviews (73 raw / 85 rendered) | **QR Code Feedback for Restaurants in 30 Seconds** (46 raw / 58 rendered) |
| Description | Place a branded QR code on every table. Guests report issues in 30 seconds, your team resolves them instantly, and the loop closes before anyone posts a review. (159) | **Put a branded QR code on every table. Guests report an issue in 30 seconds and your team resolves it before anyone posts a review. Free to start.** (145) |

The old title was truncated in the SERP well before "Google Reviews" — the
entire hook was invisible. The number moves into the title; the review defence
stays in the description where there is room for it.

### 3. `/blog/feedback-resolution-rate/`

| | Before | After |
|---|---|---|
| Title | What Is Feedback Resolution Rate? (Formula + Benchmark) (55) | **Feedback Resolution Rate Formula + 80% Benchmark** (48) |
| Description | Feedback resolution rate = (Resolved ÷ Total) × 100. See what counts as a healthy SMB benchmark (80%+) and 3 ways to improve yours. (131) | **Feedback resolution rate = (Resolved ÷ Total) × 100. See the 80% benchmark healthy SMBs hit, why NPS misses it, and 3 fixes that raise yours this quarter.** (154) |

Hook: the formula plus a specific number (80%) in the title rather than the
generic word "Benchmark". The old description was 131 characters — short enough
that Google had spare room it filled with its own extract.

### 4. `/blog/supplier-feedback-tool-manufacturers/`

| | Before | After |
|---|---|---|
| Title | Supplier Feedback Tool for Manufacturers (Not WhatsApp) (55) | **Supplier Feedback Tool for Manufacturers (Free)** (47) |
| Description | Track supplier quality issues, vendor approvals, and sample reviews in one QR-based tool — no more WhatsApp threads or email chains. Free to start. (147) | **Track supplier defects, vendor approvals, and sample reviews on one QR-based board instead of WhatsApp threads. Free plan, and suppliers submit with no login.** (158) |

This is the page nearest page one (`supplier fault tracking`, 133 impressions,
position 17.7). "(Free)" is a stronger SERP differentiator than "(Not WhatsApp)",
which reads as an in-joke to anyone who has not felt the problem; the WhatsApp
contrast survives in the description. "defects" is added because it is closer to
the "fault tracking" query wording the page actually ranks for.

### 5. `/blog/next-step-after-resolving-complaint/`

| | Before | After |
|---|---|---|
| Title | What Should Happen After You Resolve a Complaint? A 4-Step Checklist (68) | **After You Resolve a Complaint: 4-Step Checklist** (47) |
| Description | Marking a complaint 'resolved' isn't the finish line. Here's the 4-step checklist SMBs use to confirm, close, and learn from every resolved complaint. (150) | **Marking a complaint resolved is not the finish line. Use this 4-step checklist to confirm the fix, close the loop with the complainant, and stop the repeat.** (154) |

The old title was 68 characters, so "A 4-Step Checklist" — the entire hook — was
cut off in the SERP. Shortening it puts the checklist promise inside the visible
window. The straight apostrophes in the old description are dropped; they render
as typographic quotes and cost snippet width for nothing.

## How to measure

These are ranking-independent changes, so judge them on CTR at a fixed position,
not on clicks:

1. In Search Console, filter to each page and record the current 28-day
   average position and CTR before this deploys.
2. Re-check after 28 days. Compare CTR **at a comparable average position**; if
   position moved more than ~3 places, the comparison is not clean.
3. Revert any row where CTR drops. Nothing here changes the primary keyword, so
   a revert is a copy change only.
