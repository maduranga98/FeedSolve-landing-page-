# FeedSolve — Competitive Keyword Gap Analysis

_Last updated: 2026-06-30_

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
