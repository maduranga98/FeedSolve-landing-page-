// Internal-link selection for blog posts.
//
// Every post links to two sets of posts:
//   - "related": the most topically similar posts (shared keyword tokens), so
//     each topic cluster links to itself - restaurant posts to restaurant posts,
//     suggestion-box posts to suggestion-box posts;
//   - "more": the next posts by id (wrapping around), which guarantees every
//     post gets inbound links even if no other post is topically close.
// Both are deterministic, so the static export is stable between builds.

type PostLike = {
  id: number;
  meta: { slug: string; primary_keyword: string; secondary_keywords?: string[] };
};

const STOPWORDS = new Set([
  "a", "an", "and", "the", "for", "to", "of", "in", "on", "with", "without", "vs", "how", "what",
  "is", "your", "you", "best", "free", "software", "tool", "system", "blog", "feedsolve", "2026",
]);

function tokens(post: PostLike): Set<string> {
  const text = [post.meta.slug, post.meta.primary_keyword, ...(post.meta.secondary_keywords ?? [])]
    .join(" ")
    .toLowerCase();
  return new Set(
    text
      .split(/[^a-z0-9]+/)
      .map((t) => t.replace(/s$/, ""))
      .filter((t) => t.length > 2 && !STOPWORDS.has(t))
  );
}

/** The `count` posts sharing the most keyword tokens with `post` (ties broken by id distance). */
export function getRelatedPosts<T extends PostLike>(post: T, all: T[], count = 3): T[] {
  const own = tokens(post);
  return all
    .filter((p) => p.id !== post.id)
    .map((p) => {
      let score = 0;
      for (const t of tokens(p)) if (own.has(t)) score++;
      return { p, score, distance: Math.abs(p.id - post.id) };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || a.distance - b.distance)
    .slice(0, count)
    .map((x) => x.p);
}

/** The next `count` posts by id (wrapping), skipping any already in `exclude`. */
export function getNeighbourPosts<T extends PostLike>(post: T, all: T[], exclude: T[], count = 3): T[] {
  const ordered = [...all].sort((a, b) => a.id - b.id);
  const start = ordered.findIndex((p) => p.id === post.id);
  const skip = new Set([post.id, ...exclude.map((p) => p.id)]);
  const out: T[] = [];
  for (let i = 1; i < ordered.length && out.length < count; i++) {
    const candidate = ordered[(start + i) % ordered.length];
    if (!skip.has(candidate.id)) out.push(candidate);
  }
  return out;
}

/**
 * The money page each post should feed. Ordered most-specific first, so a
 * "restaurant QR code" post points at the restaurant page, not the generic QR one.
 */
const SOLUTION_PAGES: { match: RegExp; href: string; label: string }[] = [
  { match: /restaurant|diner|menu|cafe|hotel|guest/, href: "/restaurants/qr-feedback/", label: "QR code feedback for restaurants" },
  { match: /suggestion/, href: "/digital-suggestion-box-software/", label: "Digital suggestion box software" },
  { match: /supplier|vendor|manufactur|factory|sample/, href: "/manufacturing/supplier-feedback/", label: "Supplier feedback for manufacturers" },
  { match: /hoa/, href: "/real-estate/hoa-complaint-form/", label: "HOA complaint form" },
  { match: /tenant|property|landlord/, href: "/real-estate/tenant-feedback/", label: "Tenant feedback portal" },
  { match: /3pl|shipper/, href: "/logistics/3pl-feedback-platform/", label: "3PL feedback platform" },
  { match: /deliver|logistic|distributor|courier/, href: "/logistics/delivery-feedback/", label: "Delivery complaint tracking" },
  { match: /gdpr/, href: "/eu/gdpr-feedback-management/", label: "GDPR feedback management" },
  { match: /no-login|login|registration|tracking code/, href: "/feedback-tracking-code/", label: "Feedback tracking codes" },
  { match: /qr/, href: "/qr-code-feedback/", label: "QR code feedback system" },
  { match: /complaint/, href: "/complaint-management-software/", label: "Complaint management software" },
];

export function getSolutionPage(post: PostLike): { href: string; label: string } {
  const text = [post.meta.slug, post.meta.primary_keyword].join(" ").toLowerCase();
  const hit = SOLUTION_PAGES.find((s) => s.match.test(text));
  // Plain object only: the result is passed to a client component, which
  // cannot receive the RegExp.
  return hit
    ? { href: hit.href, label: hit.label }
    : { href: "/customer-feedback-software/", label: "Customer feedback software" };
}
