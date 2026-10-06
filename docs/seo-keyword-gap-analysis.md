# FeedSolve — Competitive Keyword Gap Analysis

_Last updated: 2026-10-06. The October 2026 snapshot is first; the June 2026 analysis follows unchanged as the baseline._

## October 2026 snapshot (GSC, 6 Sep – 3 Oct 2026)

Source: Google Search Console performance export, feedsolve.com, Web search,
last 28 days. First-party data. Figures below are as exported; nothing here is
estimated or invented.

| Metric | Oct 2026 | June 2026 baseline |
|---|---|---|
| Clicks | 15 | ~4 |
| Impressions | 3,513 | ~2,190 |
| CTR | 0.43% | ~0.2% |
| Avg position | 33.0 | ~40–50 |

- **Countries (impressions):** US 1,931 (55%), UK 608, AU 188, India 185.
- **Devices:** mobile CTR ~1.05% vs desktop ~0.28%.
- **Excluded from optimisation:** ~25 long, prompt-style queries (for example
  "which platform helps factories report…"). They look like AI or bot traffic and
  are not targeted.

### Complaint cluster (111 queries, ~1,255 impressions, avg position ~48)

| Query | Impr | Pos |
|---|---|---|
| complaint management software | 160 | 43.9 |
| complaints management software | 115 | 45.8 |
| complaint tracking software | 97 | 43.9 |
| complaint management solutions | 93 | 46.1 |
| complaint software | 71 | 43.0 |
| complaint handling software | 59 | 45.6 |
| complaint management system software | 46 | 53.3 |

Landing pages: `/complaint-management-software/` 909 impr (pos 45.7), `/uk/`
473 (pos 50.3), `/au/` 140 (pos 54.9), `/us/` only 25 (pos 30.6) despite the US
being 55% of impressions.

### Other clusters

- **Alternatives (page 1–2, zero clicks):** "uniqode alternative" 112 impr
  (pos 8.75); "alternative to freshdesk" 47 (pos 14.6); InMoment, Medallia and
  Alchemer alternatives around pos 25–28. `/alternatives/uniqode/` 115 impr
  (pos 9.8), `/alternatives/freshdesk/` 101 impr (pos 19.9).
- **Suggestion box:** `/digital-suggestion-box-software/` 418 impr, pos 32.5
  (was ~57 in June). "suggestion box software" pos 15.0, "online suggestion box"
  pos 42.3, "anonymous suggestion box" pos 63.9.
- **Page-1 pages with ~zero clicks:** `/blog/qr-code-feedback-board/` (pos 7.6,
  98 impr), `/blog/next-step-after-resolving-complaint/` (9.0, 86),
  `/blog/supplier-feedback-tool-manufacturers/` (7.8, 151),
  `/blog/vendor-approval-tracking-manufacturers/` (4.5, 126),
  `/restaurants/qr-feedback/` (8.2, 34), `/qr-code-feedback/` (4.7, 10).
- **Possible cannibalisation:** `/manufacturing/supplier-feedback/` shows only 17
  impr at pos 9.3 while the supplier blog post has 151.

### Phase 0 audit findings (built HTML, 6 Oct 2026)

- **Word counts:** the homepage has about 2,000 words of body copy, not the ~156
  an external crawler reported. Genuinely thin pages were `/us/…` (180),
  `/compare/` (157), `/br/blog/` (308, fixed in an earlier change) and
  `/authors/feedsolve-team/` (97, a profile page, left alone).
- **Structured data:** every JSON-LD block parses; no required-field gaps found
  on Organization, WebSite, FAQPage, BreadcrumbList or BlogPosting. The only node
  an auditor can flag is the homepage `SoftwareApplication`, which has `offers`
  but no `aggregateRating` or `review` (see caveats).
- **Canonicals and trailing slashes:** consistent. Canonicals, sitemap entries,
  JSON-LD URLs, hreflang and internal links all carry trailing slashes, and the
  sitemap matches the built page set exactly. The slash-less URLs in GSC are
  legacy; `trailingSlash: true` on Firebase Hosting redirects them.
- **Supplier overlap:** the money page and the guide shared a WhatsApp H1, and
  the money page's JSON-LD name duplicated the guide's title. Neither post linked
  to the page from body copy.
- **Suggestion Ox:** `/alternatives/suggestion-ox/` already exists.

### What shipped (this change set)

| Area | Change |
|---|---|
| Alternatives | Rewrote Uniqode and Freshdesk title/meta to query language. Added a feature table, "who it's for" and two FAQs each to Medallia, InMoment and Alchemer. Added every alternatives guide to `/compare/`, plus links from relevant blog posts. |
| Page-1, low-CTR pages | Rewrote title/meta on the six pages listed above. |
| US page | `/us/complaint-management-software/` rebuilt from a ~180-word wrapper into a US-specific page (~1,450 words): how it works, four industries, USD pricing table from real plan limits, documented-resolution framing with no legal-compliance claims, seven FAQs, WebPage + FAQPage + Breadcrumb schema. Implemented as optional props on `MarketLandingPage`. |
| Complaint cluster | Worked the exact GSC variants into `/complaint-management-software/` (category and buyer intent) and `/customer-complaint-software/` (front-line and reputation intent), with new FAQs and reciprocal links to the US, UK and AU pages and blog posts. |
| Suggestion box | Added a vs-free-tools comparison, three FAQs (online, anonymous, free) and a `SoftwareApplication` block to the product page. Expanded `/blog/online-suggestion-box-setup/` into a step-by-step guide (about 2,400 words). Varied the anchors pointing at the product page. |
| Manufacturing | `/manufacturing/supplier-feedback/` is now the primary page (title and H1 around "supplier feedback and fault tracking"). Exact-match anchors from both supplier posts point up to it, and the guide's H1 is differentiated. Posts stay indexable. |
| Thin pages | Added choosing guidance to `/compare/`. |

Status of the June plan: Suggestion Ox page exists, supplier fault tracking
strengthened, setup guide expanded and product page strengthened. **Not done:**
healthcare patient-feedback landing page (Gap D) and the off-page work.

### Caveats

- **Semrush data is unverified.** Semrush API units were unavailable, so no
  Semrush volumes or competitor keyword exports are used anywhere. GSC
  impressions are the only demand signal, and no search volumes are invented.
- **Results are not yet measured.** These changes shipped in October; judge them
  on a fresh 28-day GSC window, not this snapshot. Title rewrites can move CTR
  quickly, but ranking changes take longer.
- **`SoftwareApplication` has no rating by design.** Google's rich result needs
  `aggregateRating` or `review`. The homepage node and the suggestion box page
  node (same `@id`) will keep being flagged by auditors such as Semrush until
  real G2 or Capterra reviews exist. A fabricated or self-written rating would
  violate Google's structured-data policy.
- **Competitor claims are positioning-level.** Alternatives and comparison copy
  states approach (quote-only vs published pricing, per-agent vs flat) and avoids
  unverifiable specifics. Re-check competitor pricing before quoting numbers.
- **Authority is still the ceiling.** As in June, head terms such as "complaint
  management software" need links and time; on-page work gives marginal lift.
- **Known inconsistencies left for follow-up (not changed here):** the AU page
  says Starter has "unlimited team members on the board", but the plan table
  gives Starter 3 team members. It also quotes Freshdesk per-agent prices that
  should be re-verified, and its JSON-LD FAQ lists 3 of the 5 visible questions.
  The legal-compliance framing on the UK and AU pages was not reviewed in this
  pass.

---

# June 2026 baseline

## Method & data sources

- **Google Search Console performance export** — feedsolve.com, last 28 days
  (to 2026-06-30), Web search. This is real first-party data and the backbone
  of this analysis. "Impr" = impressions, "Pos" = average position.
- **Live SERP research** (Jun 2026) to identify who currently ranks for the
  target clusters and where the white space is.
- **Note:** Semrush MCP is not included in the current Semrush plan, so live
  Semrush volumes / competitor keyword exports were not available
  (see https://www.semrush.com/mcp-access). Where exact search volume isn't
  cited, GSC impressions are used as the demand proxy and competitive depth is
  described qualitatively. No search volumes have been invented.

## Performance snapshot (28 days)

| Metric | Value |
|---|---|
| Clicks | ~4 |
| Impressions | ~2,190 |
| Avg CTR | ~0.2% |
| Avg position | ~40–50 |

**Diagnosis:** the site is indexed and shown widely, but almost everything
ranks on page 4–7, where CTR is naturally ~0. The lever right now is
**ranking position + rich results**, not headline copy. On-page SEO is already
strong (metadata, FAQ schema, internal links, sitemap, AI-crawler robots), so
the gaps are (a) a handful of winnable near-page-1 terms, (b) missing pages for
demand the site already sees, and (c) authority/links (off-page).

## Query clusters (from GSC)

### 1. Suggestion box — largest cluster, badly under-ranking
The single biggest theme by demand. Lands mostly on
`/digital-suggestion-box-software/` (611 impr, **pos 56.7**) and the blog post
`/blog/suggestion-box-software-features/` (557 impr, pos 35.9).

| Query | Impr | Pos |
|---|---|---|
| online suggestion box | 89 | 40.9 |
| suggestion box software | 64 | 22.0 |
| anonymous suggestion box | 60 | 66.4 |
| free suggestion box | 57 | 38.1 |
| digital suggestion box | 52 | 45.4 |
| suggestion box online | 43 | 32.4 |
| virtual suggestion box | 37 | 51.6 |
| anonymous suggestion box software | 32 | 40.5 |
| feedback box online | 31 | 42.2 |
| how to set up suggestion box | 26 | 37.3 |
| **suggestion ox** | 25 | 38.3 |
| **suggestion ox alternatives** | 19 | 44.8 |
| google suggestion box | 10 | 19.7 |
| how to make a suggestion box online | 8 | 52.6 |

**Competitive landscape:** Suggestion Ox, FreeSuggestionBox.com, WhisperMeter,
Incogneato, Connecteam, BlockSurvey, Vetter, Jotform, FaceUp. Many are
single-purpose, free, employee-focused tools — FeedSolve's "collect **and
resolve** + tracking code" angle is a genuine differentiator.

### 2. Complaint management — broad, mid-ranking
Lands on `/complaint-management-software/`, `/customer-complaint-software/` and
the market pages (`/uk/`, `/au/`, `/us/`).

| Query | Impr | Pos |
|---|---|---|
| online complaint management software | 29 | 50.9 |
| complaint management system | 28 | 70.0 |
| customer complaint tracking | 28 | 48.1 |
| complaint software | 20 | 49.4 |
| complaint management software | 18 | 53.3 |
| free complaint management software | 16 | 46.1 |
| complaint management software australia | 12 | 30.2 |

**Competitive landscape:** Zendesk, Zoho Desk, Freshdesk, HappyFox, Help Scout,
SafetyCulture, isoTracker, monday, Tidio. Crowded and authority-heavy; long-tail
+ market/vertical angles are the realistic path.

### 3. Supplier / manufacturing — best ranker, closest to page 1
`/manufacturing/supplier-feedback/` is the strongest page on the site.

| Query | Impr | Pos |
|---|---|---|
| **supplier fault tracking** | 133 | **17.7** |
| whatsapp returns supplier | 12 | 39.6 |

### 4. Australia feedback — localizable demand
| Query | Impr | Pos |
|---|---|---|
| customer feedback platform australia | 66 | 74.2 |
| feedback software australia | 55 | 47.5 |

These were landing on the AU *complaint* page (wrong intent → poor position).
**A dedicated AU customer-feedback page now exists** (see "Shipped" below).

### 5. Other / tangential (niche)
`appeal software` (36, pos 81), `healthcare feedback platform` (35, pos 82),
`noise complaint reporting software` (21, pos 60), `dispute management software`
(7), `resolution rate` (6). Low priority individually.

## The gaps that matter

### Gap A — "Suggestion Ox" competitor capture (high intent, zero coverage)
GSC shows real demand for the **competitor brand**: `suggestion ox` (25) and
`suggestion ox alternatives` (19), plus `freesuggestionbox` (8). The site has no
page targeting "Suggestion Ox alternative," yet it already ranks ~pos 38–45 for
these on a generic page. This is the highest-ROI new asset: bottom-funnel intent,
weak incumbent, and the site already has a comparison-page template
(`/compare/feedsolve-vs-zonka/`, etc.).
**Action:** create `/compare/feedsolve-vs-suggestion-ox/` (or
`/suggestion-ox-alternative/`).

### Gap B — Suggestion-box informational content (top-of-funnel, winnable)
`how to set up suggestion box` (26), `how to make a suggestion box online` (8),
`google suggestion box` (10, already pos 19.7). Informational long-tail is the
easiest place for a young domain to rank and to build topical authority that
lifts the money page (`/digital-suggestion-box-software/`).
**Action:** strengthen/expand `/blog/online-suggestion-box-setup/` (currently
pos 52) into a definitive "How to set up an online suggestion box" guide, and
internally link it to the money page with varied anchors.

### Gap C — AU feedback localization ✅ (now shipped)
`customer feedback platform australia` (66) + `feedback software australia` (55)
= ~120 impr landing on the wrong-intent page. Now addressed.

### Gap D — Healthcare feedback landing page
`healthcare feedback platform` (35, pos 82) only has a blog post
(`/blog/healthcare-patient-feedback-system/`). A proper vertical landing page
(`/healthcare/patient-feedback/`, mirroring the manufacturing page) would target
this demand far better.

## Prioritized action plan

| Priority | Action | Target queries | Effort | Why |
|---|---|---|---|---|
| **P0** | "Suggestion Ox alternative" comparison page | suggestion ox, suggestion ox alternatives | S | High intent, weak incumbent, template exists |
| **P0** | Push `supplier fault tracking` to page 1 — internal links w/ exact anchor, light content depth | supplier fault tracking (pos 17.7) | S | Closest win to page 1 |
| **P1** | Expand suggestion-box setup guide + interlink to money page | how to set up / make a suggestion box | M | Topical authority lifts pos-56 money page |
| **P1** | Strengthen `/digital-suggestion-box-software/`: add SoftwareApplication schema, comparison block vs free tools, more inbound internal links | online/anonymous/free/digital suggestion box | M | 611 impr stuck at pos 56 — biggest single opportunity |
| **P1** | Healthcare patient-feedback vertical landing page | healthcare feedback platform | M | Demand exists, no dedicated page |
| **P2** | Off-page: directory listings (Capterra AU, GetApp, SourceForge, G2), LinkedIn, a few quality backlinks | all clusters | M–L | Authority is the ranking ceiling for a young domain |
| **P2** | Validate all structured data in Rich Results Test; request indexing of top pages in GSC | — | S | Realizes the breadcrumb/article rich results already shipped |

Effort: S = hours, M = a day, L = ongoing.

## Already shipped (this engagement)

- **BreadcrumbList structured data** site-wide (all landing/market pages + 31
  blog posts) → breadcrumb rich result in SERPs instead of raw URLs.
- **Organization schema** `sameAs` (LinkedIn) + description; enriched homepage
  **WebSite** schema.
- **BlogPosting** schema enriched with `image`, `inLanguage`, `keywords`.
- **EU page** given WebPage + breadcrumb schema (previously had none).
- **AU customer-feedback page** — `/au/customer-feedback-software/` targeting
  "customer feedback platform australia" / "feedback software australia", with
  AU-specific content (AUD pricing, ACL framing, multilingual, Google-review
  protection), FAQ + WebPage + breadcrumb schema, sitemap entry, and an inbound
  link from the AU complaint page.
- **Fixed doubled `| FeedSolve | FeedSolve` page titles** on the UK, AU
  (complaint), AU (feedback), and EU pages — recovers wasted SERP title space.

## Honest caveats

- The dominant constraint for a domain this young is **authority/backlinks**,
  which code changes cannot fix. On-page work and rich results help CTR and give
  marginal ranking lift, but page-1 for competitive head terms
  ("complaint management software", "customer feedback software") will require
  links and time.
- Realistic near-term wins: **supplier fault tracking** (pos 17.7), the
  **Suggestion Ox** capture, and the **AU + long-tail suggestion-box** terms.
