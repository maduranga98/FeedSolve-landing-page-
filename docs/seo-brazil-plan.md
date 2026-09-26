# Brazil (pt-BR) expansion + GSC review

_Written: 2026-09-26. Source: Search Console export, last 28 days (to 2026-09-24), Web._

## What the data says

| Metric | Value |
|---|---|
| Clicks | 15 |
| Impressions | 3,722 |
| CTR | 0.40% |
| Avg position, first 7 days → last 7 days | **41.2 → 27.7** (moving in the right direction) |
| Mobile CTR vs desktop CTR | 1.35% vs 0.20% |

- **Money pages are still on page 4–5.** `/complaint-management-software/`
  (1,084 impr, pos 45.7), `/uk/complaint-management-software/` (664, pos 49.5),
  `/digital-suggestion-box-software/` (563, pos 33.2). This is an authority
  problem, not an on-page one. See "Off-page" below.
- **Brazil already sees the site:** 24 impressions at avg position **11.9**,
  better than the US (36.1) or UK (48.5). But **zero Portuguese queries**
  appear in the export, because the site had no Portuguese content to rank.
  Brazilian SMBs search in Portuguese, so that demand has been invisible to us.
- Blog posts rank top-10 for long-tail, AI-style questions
  (`/blog/vendor-approval-tracking-manufacturers/` pos 4.4,
  `/blog/supplier-feedback-tool-manufacturers/` pos 8.9) and get almost no
  clicks. Their titles were rewritten on 2026-09-21
  (`docs/seo-title-tests.md`). Give that test at least 4 weeks before touching
  them again.

## What shipped in this change

### Portuguese section: `/br/`

| URL | Primary keyword (pt-BR) | hreflang pair |
|---|---|---|
| `/br/` | plataforma de feedback, gestão de reclamações | `/` |
| `/br/software-de-gestao-de-reclamacoes/` | sistema / software de gestão de reclamações | `/complaint-management-software/` cluster (+ UK/US/AU) |
| `/br/caixa-de-sugestoes-online/` | caixa de sugestões online, anônima, digital | `/digital-suggestion-box-software/` |
| `/br/pesquisa-de-satisfacao-qr-code/` | pesquisa de satisfação QR Code, avaliação de atendimento | `/qr-code-feedback/` |
| `/br/canal-de-denuncias/` | canal de denúncias anônimo | none (Brazil-only intent) |

Each page has:

- Native Portuguese copy (not a translation of the English page), with
  Brazil-specific framing: **protocolo** (the SAC protocol number Brazilians
  already expect), Reclame Aqui, CDC, LGPD data minimisation, WhatsApp sharing,
  and Lei 14.457/2022 on the whistleblowing page. Legal points are general and
  flagged as not legal advice. Nothing claims certified compliance.
- An answer-first "Resposta rápida" block for featured snippets and AI answers.
- `WebPage` (inLanguage pt-BR), `BreadcrumbList` and `FAQPage` JSON-LD.
- `<html lang="pt-BR">`, `og:locale` pt_BR, and a `Content-Language: pt-BR`
  header on Firebase Hosting.
- A Portuguese header and footer that cross-link every `/br/` page, plus an
  "English" switch to the equivalent English page.
- Honest pricing: a 7-day full-access trial, then US$19/49/79 per month. Custom
  branding and location QR codes are called out as Growth-plan features.

### Infrastructure

- `src/lib/seo/hreflang.ts` is now the **single source** for every hreflang
  cluster. Pages and `sitemap.xml` both read it, so they cannot disagree.
- `scripts/set-html-lang.mjs` (postbuild) sets `lang="pt-BR"` in the exported
  `/br/` HTML. The single App Router root layout can only render one `lang`.
- `scripts/check-seo.mjs` now fails the build if a `/br/` page ships the wrong
  `lang`, or if any hreflang map is not reciprocal.
- The English footer links to `/br/` on every page. `llms.txt` lists the
  Brazil pages, and two dead links in it (`/features/`, `/us/`) are fixed.

## Next steps (not code, and they matter more than the code)

### This week, in Search Console

1. Request indexing for the 5 `/br/` URLs (URL Inspection → Request indexing)
   and resubmit `sitemap.xml`.
2. In a month, filter Performance by **Country = Brazil** and
   **Query contains** `reclama`, `sugest`, `denúncia`, `pesquisa` to see which
   Portuguese terms we are picking up.

### Brazil authority (off-page)

A young domain with Portuguese pages but no Brazilian links will sit on page
3+. In rough order of return:

1. **Directory listings in Portuguese:** Capterra Brasil (capterra.com.br),
   GetApp Brasil, B2B Stack, and the Portuguese G2 locale. Use the `/br/` URLs
   as the listing destination.
2. **Google Business Profile** is not applicable without a Brazilian address.
   Don't create a fake one.
3. **Guest content / partnerships:** Brazilian restaurant (Abrasel ecosystem),
   condominium management (síndico blogs), and HR/compliance blogs (canal de
   denúncias is a live topic under Lei 14.457). One genuine article with a link
   is worth more than dozens of directory links.
4. **LinkedIn in Portuguese:** post the canal de denúncias and gestão de
   reclamações angles from the company page and link to `/br/`.

### Content roadmap for `/br/` (after the first 5 pages index)

Only add these once GSC shows Portuguese impressions. Otherwise we are writing
blind.

- `/br/blog/como-responder-reclamacao-reclame-aqui/`: very high-intent
  informational query cluster.
- `/br/restaurantes/avaliacao-qr-code/`: vertical page, mirrors
  `/restaurants/qr-feedback/`.
- `/br/condominios/canal-de-reclamacoes/`: síndicos are a strong SMB segment
  in Brazil.
- A Suggestion Box / Google Forms comparison in Portuguese
  (`/br/alternativa-google-forms/`).

### Product/billing (outside this repo, worth raising)

- Pricing is USD-only. Brazilian SMBs convert far better with **BRL prices and
  PIX / boleto**. Even showing an approximate "≈ R$" figure on `/br/` would
  help. That needs a pricing decision, so it was not guessed here.
- Confirm that submission forms fully render in Portuguese (the pages rely on
  the existing "multi-language forms" feature claim).
