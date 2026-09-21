# Suggestion-box cluster — overlap report

_Written: 2026-09-21. Branch: `seo/gsc-improvements`. **No posts were merged,
renamed, or deleted** — this is the evidence for that decision, not the decision._

## The cluster as it stands

| Page | Role | Primary keyword | Funnel | Words |
|---|---|---|---|---|
| `/digital-suggestion-box-software/` | **Pillar** (money page) | digital suggestion box software | BOFU | landing page |
| `/blog/suggestion-box-software-features/` | Supporting | suggestion box software | MOFU | 1,400–1,700 |
| `/blog/anonymous-suggestion-box/` | Supporting | anonymous suggestion box | TOFU/MOFU | 1,800–2,200 |
| `/blog/online-suggestion-box-setup/` | Supporting | online suggestion box | TOFU | 1,200–1,500 |
| `/blog/digital-suggestion-box-small-business/` | Supporting (labelled "Pillar" in its own metadata) | digital suggestion box small business | TOFU/MOFU | 1,500–1,900 |

Links added in this branch: 2–3 in-body markdown links from each supporting post
to the pillar, using varied keyword anchors ("suggestion box software",
"online suggestion box", "anonymous suggestion box", "digital suggestion box"),
plus one link from the pillar to each of the four supporting posts, in a new
prose section on the landing page.

## Shared H2s and duplicated intent

### A. "Why the old/paper/Google-Form box fails" — appears in 3 of 4

- `suggestion-box-software-features` → *Why most suggestion boxes fail*
- `digital-suggestion-box-small-business` → *The Old Suggestion Box Had One Fatal Flaw — Nobody Knew What Happened Next*
- `anonymous-suggestion-box` → *Why Anonymity Is the Feature That Makes Suggestion Boxes Work* (same argument, entered through anonymity)

All three make the identical argument: collection is not the problem, silence
after collection is. The pillar page's `problemPoints` block makes it a fourth
time. **This is the single largest duplication in the cluster.**

### B. "10-minute setup" — appears in 2 of 4, at near-identical depth

- `online-suggestion-box-setup` → *The 5-step setup* (this is the post's entire reason to exist)
- `anonymous-suggestion-box` → *Set One Up Free in 10 Minutes: Step by Step*

Both walk the reader from nothing to a live QR code. The titles even share the
"10 minutes" promise: "How to Set Up an Online Suggestion Box in 10 Minutes" vs
"Anonymous Suggestion Box: How to Set One Up Online (Free, 2026)". These two
posts are the strongest merge candidate in the cluster.

### C. "vs Google Forms" comparison — appears in 2 of 4

- `anonymous-suggestion-box` → *Free Options Compared: FeedSolve vs Google Forms vs Paper*
- `digital-suggestion-box-small-business` → *Digital Suggestion Box vs. Google Forms vs. Dedicated Feedback Platforms*

Both also duplicate `/compare/feedsolve-vs-google-forms/`, which is the page
that should own this comparison outright.

### D. "Keep it alive after launch" — appears in 2 of 4

- `online-suggestion-box-setup` → *Keep it working after launch*
- `anonymous-suggestion-box` → *Keeping It Alive: The First 90 Days*

Same advice (weekly cadence, public replies, demonstrate one early fix),
different length.

### E. Duplicated FAQ questions

Anonymity is asked and answered on all four posts **and** on the pillar:

| Question | Where it appears |
|---|---|
| Can it be anonymous? | `suggestion-box-software-features`, `anonymous-suggestion-box`, `online-suggestion-box-setup`, `digital-suggestion-box-small-business`, pillar |
| Is there a free option? | `suggestion-box-software-features`, `anonymous-suggestion-box`, pillar |
| Is a Google Form enough? | `suggestion-box-software-features`, pillar (and both comparison H2s above) |

Five pages currently emit FAQ schema answering "can it be anonymous?". Only one
of them can win that snippet.

### F. Keyword overlap between the posts and the pillar

The pillar's own `keywords` list already contains `suggestion box software`,
`online suggestion box`, `anonymous suggestion box` and `digital suggestion box`
— i.e. the primary keyword of every supporting post. The pillar is therefore
competing with its own cluster for the same head terms while sitting at
position ~56.

## What genuinely does not overlap

Worth protecting if anything is merged:

- `digital-suggestion-box-small-business` → *Five Real-World Placements for Your Digital Suggestion Box QR Code*. Nothing else covers physical placement.
- `anonymous-suggestion-box` → *What Makes a Suggestion Box Genuinely Anonymous*. The mechanism (tracking code enabling anonymous two-way follow-up) is unique and is the cluster's strongest differentiator against Suggestion Ox, FreeSuggestionBox, and Incogneato.
- `suggestion-box-software-features` → *How to evaluate a tool in 10 minutes*. A buyer's test, not a how-to. Distinct commercial intent.

## Options, for your decision

Presented without acting on any of them. Slugs unchanged either way.

**Option 1 — keep all four, differentiate in place (lowest risk).**
Trim the "why boxes fail" opener in `suggestion-box-software-features` and
`digital-suggestion-box-small-business` to two sentences each and link to the
pillar for the full argument. Cut the Google Forms comparison H2 from both posts
that carry it and point at `/compare/feedsolve-vs-google-forms/`. Keep the
anonymity FAQ on `anonymous-suggestion-box` and the pillar only; remove it from
the other three so one page can win the snippet. No redirects, no lost URLs.

**Option 2 — merge the two setup guides.**
Fold `anonymous-suggestion-box`'s step-by-step section into
`online-suggestion-box-setup` (which already owns the how-to intent and the
`online suggestion box` keyword, 89 impressions at position 40.9), and narrow
`anonymous-suggestion-box` to the anonymity mechanism alone — the part nothing
else covers. Both URLs survive; only the overlapping middle moves. This is the
merge I would argue for if you want one.

**Option 3 — redirect `digital-suggestion-box-small-business` into the pillar.**
Its metadata labels it "Pillar", which conflicts with the landing page also
being the pillar; its unique value is one section (QR placements) that could
live on the landing page. At 301 it would pass its equity to the money page
stuck at position 56. **Higher risk**: it is an existing indexed URL and this is
irreversible in practice. I would not do this before Options 1 and 2 have had a
quarter to show whether the pillar moves.

## Recommendation

Option 1 now, Option 2 next, Option 3 only if the pillar has not moved off
position ~50 after a quarter of interlinking. The cluster's ranking problem is
authority, not word count — cutting pages does not add links, and merging
prematurely loses indexed URLs that are already collecting impressions.
