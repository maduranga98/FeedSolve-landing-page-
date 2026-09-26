// Portuguese blog article. Server-rendered, no client JS; inline
// [âncora](/url) links in paragraphs become real anchors so the post passes
// link equity to the /br/ money pages.

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { JsonLdScript } from "@/components/JsonLd";
import { BrFooter, BrHeader } from "@/components/br/BrChrome";
import { BR_SIGNUP_URL } from "@/data/brPages";
import { BR_POSTS, brPostPath, type BrPost } from "@/data/brBlog";
import { SITE_URL, breadcrumbJsonLd, generateOrganizationSchema } from "@/lib/seo";

const INLINE_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderInline(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  for (const m of text.matchAll(INLINE_LINK)) {
    const [full, label, href] = m;
    const at = m.index ?? 0;
    if (at > cursor) nodes.push(text.slice(cursor, at));
    nodes.push(
      <Link key={`${href}-${at}`} href={href}>
        {label}
      </Link>
    );
    cursor = at + full.length;
  }
  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });

export default function BrArticle({ post }: { post: BrPost }) {
  const path = brPostPath(post);
  const url = `${SITE_URL}${path}`;
  const others = BR_POSTS.filter((p) => p.slug !== post.slug);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url,
      inLanguage: "pt-BR",
      keywords: post.keyword,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      image: [`${SITE_URL}/og-image.png`],
      author: { "@type": "Organization", name: "Equipe FeedSolve", url: `${SITE_URL}/authors/feedsolve-team/` },
      publisher: generateOrganizationSchema({ standalone: false }),
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    },
    breadcrumbJsonLd([
      { name: "FeedSolve Brasil", url: `${SITE_URL}/br/` },
      { name: "Blog", url: `${SITE_URL}/br/blog/` },
      { name: post.title, url },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "pt-BR",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <BrHeader path={path} englishHref={post.englishHref ?? "/blog/"} />
      <main>
        <article>
          <header className="br-hero br-article-hero">
            <div className="container br-narrow">
              <nav aria-label="Trilha de navegação" className="br-crumbs">
                <Link href="/br/">FeedSolve Brasil</Link>
                <span aria-hidden="true">/</span>
                <Link href="/br/blog/">Blog</Link>
              </nav>
              <h1 className="br-h1 br-article-h1">{post.h1}</h1>
              <p className="br-trust">
                Equipe FeedSolve · Publicado em{" "}
                <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
              </p>
            </div>
          </header>

          <div className="br-section">
            <div className="container br-narrow br-article">
              <div className="br-answer">
                <p className="br-answer-label">Resposta rápida</p>
                <p>{post.quickAnswer}</p>
              </div>

              {post.sections.map((s) => (
                <section key={s.h2}>
                  <h2>{s.h2}</h2>
                  {s.paragraphs.map((p, i) => (
                    <p key={i}>{renderInline(p)}</p>
                  ))}
                  {s.list && (
                    <ul>
                      {s.list.map((li) => (
                        <li key={li}>{renderInline(li)}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <section>
                <h2>Perguntas frequentes</h2>
                <div className="br-faq">
                  {post.faqs.map((f) => (
                    <details key={f.q}>
                      <summary>
                        {f.q}
                        <ChevronDown size={16} aria-hidden="true" />
                      </summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>

              <aside className="br-answer br-article-cta">
                <p className="br-answer-label">Coloque em prática</p>
                <p>
                  Veja como funciona: <Link href={post.solution.href}>{post.solution.label}</Link>. Teste grátis por
                  7 dias, sem cartão de crédito.
                </p>
                <a href={BR_SIGNUP_URL} className="btn-primary teal" target="_blank" rel="noopener noreferrer">
                  Testar grátis <ArrowRight size={15} />
                </a>
              </aside>
            </div>
          </div>
        </article>

        <section className="br-section br-bg">
          <div className="container">
            <h2 className="br-h2">Leia também</h2>
            <div className="br-grid">
              {others.map((p) => (
                <Link key={p.slug} href={brPostPath(p)} className="br-card br-card-link">
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <BrFooter englishHref={post.englishHref ?? "/blog/"} />
    </>
  );
}
