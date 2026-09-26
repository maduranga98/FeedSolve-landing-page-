import Link from "next/link";
import { BrFooter, BrHeader } from "@/components/br/BrChrome";
import { brMetadata } from "@/components/br/brMetadata";
import { JsonLdScript } from "@/components/JsonLd";
import { BR_POSTS, brPostPath } from "@/data/brBlog";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";

const PATH = "/br/blog/";

export const metadata = brMetadata({
  title: "Blog: Reclamações, Feedback e Restaurantes",
  description:
    "Guias práticos em português sobre gestão de reclamações, pesquisa de satisfação e avaliações de restaurante, para donos e gerentes de pequenas empresas.",
  path: PATH,
});

export default function BrBlogHub() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Blog FeedSolve Brasil",
      url: `${SITE_URL}${PATH}`,
      inLanguage: "pt-BR",
      blogPost: BR_POSTS.map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        url: `${SITE_URL}${brPostPath(p)}`,
        datePublished: p.datePublished,
      })),
    },
    breadcrumbJsonLd([
      { name: "FeedSolve Brasil", url: `${SITE_URL}/br/` },
      { name: "Blog", url: `${SITE_URL}${PATH}` },
    ]),
  ];

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <BrHeader path={PATH} englishHref="/blog/" />
      <main>
        <section className="br-hero">
          <div className="container">
            <nav aria-label="Trilha de navegação" className="br-crumbs">
              <Link href="/br/">FeedSolve Brasil</Link>
              <span aria-hidden="true">/</span>
              <span>Blog</span>
            </nav>
            <h1 className="br-h1">Blog FeedSolve Brasil</h1>
            <p className="br-lead">
              Guias práticos sobre gestão de reclamações, pesquisa de satisfação e avaliações, começando pelos
              restaurantes.
            </p>
          </div>
        </section>
        <section className="br-section">
          <div className="container">
            <div className="br-grid">
              {BR_POSTS.map((p) => (
                <Link key={p.slug} href={brPostPath(p)} className="br-card br-card-link">
                  <h2 className="br-card-title">{p.title}</h2>
                  <p>{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <BrFooter englishHref="/blog/" />
    </>
  );
}
