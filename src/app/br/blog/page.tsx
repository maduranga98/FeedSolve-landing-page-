import Link from "next/link";
import { BrFooter, BrHeader } from "@/components/br/BrChrome";
import { brMetadata } from "@/components/br/brMetadata";
import { JsonLdScript } from "@/components/JsonLd";
import { BR_POSTS, brPostPath } from "@/data/brBlog";
import { SITE_URL, breadcrumbJsonLd } from "@/lib/seo";

const PATH = "/br/blog/";

/** Money pages the guides feed. Internal URLs keep their trailing slash. */
const BR_RELATED_PAGES = [
  { href: "/br/software-de-gestao-de-reclamacoes/", label: "Sistema de gestão de reclamações para empresas" },
  { href: "/br/pesquisa-de-satisfacao-qr-code/", label: "Pesquisa de satisfação por QR Code, sem login" },
  { href: "/br/restaurantes/", label: "Avaliação de restaurante por QR Code na mesa" },
  { href: "/br/caixa-de-sugestoes-online/", label: "Caixa de sugestões online e anônima" },
  { href: "/br/canal-de-denuncias/", label: "Canal de denúncias anônimo para empresas" },
] as const;

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
        <section className="br-section br-bg">
          <div className="container br-narrow br-prose">
            <h2 className="br-h2">Como usar este blog</h2>
            <p>
              Este blog reúne guias práticos em português para donos e gerentes de pequenas empresas que querem
              transformar reclamações e sugestões em melhorias reais. Começamos pelos restaurantes, onde o feedback
              chega todos os dias, na mesa, no balcão e nas avaliações públicas, e depois ampliamos para outros
              tipos de negócio.
            </p>
            <p>
              Cada artigo segue a mesma lógica do FeedSolve: receber o feedback sem atrito, registrar com um código
              de protocolo, atribuir um responsável, resolver e responder ao cliente. Se você ainda não tem um
              processo para isso, comece pelo guia sobre como lidar com reclamações na mesa e depois monte a sua
              pesquisa de satisfação com o modelo de perguntas.
            </p>
            <p>
              Quando o problema já virou uma avaliação pública, o guia sobre avaliações negativas no Google e no
              iFood mostra como responder e como evitar que a situação se repita.
            </p>
          </div>
        </section>
        <section className="br-section">
          <div className="container">
            <h2 className="br-h2">Guias</h2>
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
        <section className="br-section br-bg">
          <div className="container br-narrow br-prose">
            <h2 className="br-h2">Do guia para a prática</h2>
            <p>
              Os guias explicam o processo. Para colocá-lo em funcionamento com um QR Code, um painel de
              acompanhamento e um código de protocolo para o cliente, veja as páginas abaixo.
            </p>
            <ul className="br-list">
              {BR_RELATED_PAGES.map((page) => (
                <li key={page.href}>
                  <Link href={page.href}>{page.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <BrFooter englishHref="/blog/" />
    </>
  );
}
