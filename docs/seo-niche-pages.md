# Niche pages — uncontested queries already ranking top 15

_Written: 2026-11-23. Branch: `seo/gsc-nov-ctr-geo`. Source: GSC export 2026-08-22 → 2026-11-21._

Rule: only build where Google already ranks FeedSolve in the top 15 and no page
targets the query directly. Vendor/3D-sample prompts (pos 1–5) are excluded on
purpose: they read like another vendor's AI-tracking prompts and sit outside the ICP.

| Niche | Evidence (impr @ pos) | Action |
|---|---|---|
| Employee suggestion box | employee suggestion box software 29 @ 11.9 · top employee suggestion box software 19 @ 4.7 · what software can replace a suggestion box for employee ideas 6 @ 5.3 · free online suggestion box for employees 5 @ 9.6 · digital suggestion box for employees 4 @ 2.5 · employee suggestion software with idea routing 3 @ 1.0 · tracking employee improvement ideas 3 @ 8.0 | New `/employee-suggestion-box-software/`. Angle the pillar doesn't own: routing to department owners, boards per site/shift, frontline staff with no company email. Misconduct reporting explicitly out of scope (VoxWel's territory). |
| Pricing | complaint management software pricing for mid size business 14 @ 6.9 · complaint management software pricing 6 @ 19.8 · AI Mode follow-ups ("what are the prices of these options", "something for free?") | New `/pricing/`. Plan data moved to `src/data/pricingPlans.ts` so the cards and the table share one source. All `/#pricing` links on inner pages, nav/footer (blog variant), blog `/pricing` links and the Offer `url` now point to `/pricing/`. |
| Patient grievances / point of care | real-time patient feedback at point-of-care 7 @ 2.6 · patient grievances and feedback together 6 @ 6.2 · hospital complaint software 7 @ 6.9 · healthcare complaint & grievances software 11 @ 10.4 | Two FAQs added to `/healthcare/patient-complaint-software/`. Grievance answer avoids compliance claims and tells readers to check their regulator's rules. |

Measure after 28 days: impressions and position for the queries above, filtered
to the new URL. Watch `/digital-suggestion-box-software/` for any loss on
`employee suggestion box` queries (expected: those move to the new page).
