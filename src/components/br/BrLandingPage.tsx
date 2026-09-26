// Portuguese (Brazil) landing page shell. Server-rendered only - no client JS:
// the FAQ uses native <details>, so every answer ships in the static HTML that
// Googlebot and AI crawlers read. `<html lang>` is set to pt-BR for /br/ by
// scripts/set-html-lang.mjs after the static export.

import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronDown, Hash, Inbox, QrCode, UserCheck, XCircle } from "lucide-react";
import { JsonLdScript } from "@/components/JsonLd";
import { BR_PAGES, BR_SIGNUP_URL } from "@/data/brPages";
import { SITE_URL, breadcrumbJsonLd, generateOrganizationSchema } from "@/lib/seo";

export type BrFaq = { q: string; a: string };

export type BrLandingPageProps = {
  path: string;
  /** Equivalent English page, linked from the header language switch. */
  englishHref?: string;
  /** Title/description as used in <head>, reused for the WebPage schema. */
  seoTitle: string;
  seoDescription: string;
  badge: string;
  h1: string;
  lead: string;
  /** Answer-first summary: the passage search snippets and AI answers quote. */
  quickAnswer: string;
  problemHeading: string;
  problems: string[];
  featuresHeading: string;
  features: { icon: ReactNode; title: string; body: string }[];
  localHeading: string;
  localIntro?: string;
  localPoints: { title: string; body: string }[];
  useCasesHeading?: string;
  useCases?: string[];
  faqs: BrFaq[];
  ctaHeading: string;
  ctaSub: string;
  breadcrumbLabel: string;
  /** Extra sections rendered before the FAQ (e.g. the hub grid). */
  children?: ReactNode;
};

const STEPS = [
  { icon: QrCode, title: "Receber", body: "O cliente escaneia o QR Code ou abre o link e envia em segundos. Sem login, sem aplicativo." },
  { icon: Hash, title: "Protocolar", body: "Cada envio gera um código de protocolo para o cliente acompanhar o andamento quando quiser." },
  { icon: UserCheck, title: "Atribuir", body: "Defina um responsável e a prioridade. Notas internas ficam invisíveis para o cliente." },
  { icon: Inbox, title: "Resolver", body: "Mude o status, publique uma resposta e feche o ciclo. A taxa de resolução é calculada sozinha." },
];

export default function BrLandingPage(props: BrLandingPageProps) {
  const {
    path, englishHref, seoTitle, seoDescription, badge, h1, lead, quickAnswer,
    problemHeading, problems, featuresHeading, features, localHeading, localIntro,
    localPoints, useCasesHeading, useCases, faqs, ctaHeading, ctaSub, breadcrumbLabel, children,
  } = props;

  const url = `${SITE_URL}${path}`;
  const isHub = path === "/br/";

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: seoTitle,
      description: seoDescription,
      url,
      inLanguage: "pt-BR",
      isPartOf: { "@type": "WebSite", name: "FeedSolve", url: `${SITE_URL}/` },
      about: {
        "@type": "SoftwareApplication",
        name: "FeedSolve",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
      },
      publisher: generateOrganizationSchema({ standalone: false }),
    },
    breadcrumbJsonLd(
      isHub
        ? [{ name: "FeedSolve Brasil", url }]
        : [
            { name: "FeedSolve Brasil", url: `${SITE_URL}/br/` },
            { name: breadcrumbLabel, url },
          ]
    ),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "pt-BR",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <BrHeader path={path} englishHref={englishHref} />

      <main>
        {/* Hero */}
        <section className="br-hero">
          <div className="container">
            {!isHub && (
              <nav aria-label="Trilha de navegação" className="br-crumbs">
                <Link href="/br/">FeedSolve Brasil</Link>
                <span aria-hidden="true">/</span>
                <span>{breadcrumbLabel}</span>
              </nav>
            )}
            <div className="section-label br-badge">{badge}</div>
            <h1 className="br-h1">{h1}</h1>
            <p className="br-lead">{lead}</p>
            <div className="br-ctas">
              <a href={BR_SIGNUP_URL} className="btn-primary teal" target="_blank" rel="noopener noreferrer">
                Testar grátis <ArrowRight size={15} />
              </a>
              <a href="#como-funciona" className="btn-outline br-btn-light">
                Como funciona
              </a>
            </div>
            <p className="br-trust">Teste grátis de 7 dias · Sem cartão de crédito · Configuração em minutos</p>
          </div>
        </section>

        {/* Answer-first summary */}
        <section className="br-section br-bg">
          <div className="container br-narrow">
            <div className="br-answer">
              <p className="br-answer-label">Resposta rápida</p>
              <p>{quickAnswer}</p>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="br-section">
          <div className="container br-narrow">
            <h2 className="br-h2">{problemHeading}</h2>
            <ul className="br-list">
              {problems.map((p) => (
                <li key={p}>
                  <XCircle size={18} className="br-icon-bad" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section id="como-funciona" className="br-section br-navy">
          <div className="container">
            <h2 className="br-h2 br-on-dark">Como o FeedSolve funciona</h2>
            <ol className="br-steps">
              {STEPS.map(({ icon: Icon, title, body }, i) => (
                <li key={title} className="br-step">
                  <span className="br-step-num">Passo {i + 1}</span>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Features */}
        <section className="br-section">
          <div className="container">
            <h2 className="br-h2">{featuresHeading}</h2>
            <div className="br-grid">
              {features.map((f) => (
                <div key={f.title} className="br-card">
                  <div className="br-card-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brazil-specific context */}
        <section className="br-section br-bg">
          <div className="container">
            <h2 className="br-h2">{localHeading}</h2>
            {localIntro && <p className="br-sub">{localIntro}</p>}
            <div className="br-grid">
              {localPoints.map((p) => (
                <div key={p.title} className="br-card">
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {useCases && useCases.length > 0 && (
          <section className="br-section">
            <div className="container">
              <h2 className="br-h2">{useCasesHeading ?? "Para quem é"}</h2>
              <ul className="br-chips">
                {useCases.map((u) => (
                  <li key={u}>
                    <CheckCircle2 size={16} aria-hidden="true" /> {u}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {children}

        {/* FAQ */}
        <section className="br-section br-bg">
          <div className="container br-narrow">
            <h2 className="br-h2">Perguntas frequentes</h2>
            <div className="br-faq">
              {faqs.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>
                    {f.q}
                    <ChevronDown size={16} aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section className="br-section">
          <div className="container">
            <h2 className="br-h2">Soluções FeedSolve no Brasil</h2>
            <div className="br-grid">
              {BR_PAGES.filter((p) => p.path !== path).map((p) => (
                <Link key={p.path} href={p.path} className="br-card br-card-link">
                  <h3>{p.nav}</h3>
                  <p>{p.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="br-section br-navy br-center">
          <div className="container br-narrow">
            <h2 className="br-h2 br-on-dark">{ctaHeading}</h2>
            <p className="br-sub br-on-dark-mid">{ctaSub}</p>
            <a href={BR_SIGNUP_URL} className="btn-primary teal" target="_blank" rel="noopener noreferrer">
              Testar grátis por 7 dias <ArrowRight size={15} />
            </a>
          </div>
        </section>
      </main>

      <BrFooter englishHref={englishHref} />
    </>
  );
}

function BrHeader({ path, englishHref }: { path: string; englishHref?: string }) {
  return (
    <header className="br-header">
      <div className="br-header-inner">
        <Link href="/br/" className="nav-logo" aria-label="FeedSolve Brasil - início">
          <Image src="/logo.webp" alt="" width={28} height={28} priority />
          <span className="nav-logo-text">FeedSolve</span>
          <span className="br-flag">Brasil</span>
        </Link>
        <nav aria-label="Soluções" className="br-nav">
          {BR_PAGES.slice(1).map((p) => (
            <Link key={p.path} href={p.path} aria-current={p.path === path ? "page" : undefined}>
              {p.nav}
            </Link>
          ))}
        </nav>
        <div className="br-header-actions">
          <Link href={englishHref ?? "/"} hrefLang="en" lang="en" className="br-lang">
            English
          </Link>
          <a href={BR_SIGNUP_URL} className="btn-primary br-header-cta" target="_blank" rel="noopener noreferrer">
            Testar grátis
          </a>
        </div>
      </div>
    </header>
  );
}

function BrFooter({ englishHref }: { englishHref?: string }) {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <Image src="/logo.webp" alt="FeedSolve" width={28} height={28} />
          <span className="footer-logo-text">FeedSolve</span>
        </div>
        <div className="footer-links">
          {BR_PAGES.map((p) => (
            <Link key={p.path} href={p.path}>
              {p.nav}
            </Link>
          ))}
          <Link href={englishHref ?? "/"} hrefLang="en" lang="en">
            English
          </Link>
          <a href="mailto:hello@feedsolve.com">Contato</a>
          <Link href="/privacy/">Privacidade</Link>
          <Link href="/terms/">Termos</Link>
        </div>
      </div>
      <div className="footer-copy">
        © 2026 FeedSolve. Todos os direitos reservados. · Um produto da{" "}
        <a className="footer-company-link" href="https://www.lumoraventures.com/" target="_blank" rel="noopener noreferrer">
          Lumora Ventures Pvt. Ltd.
        </a>
      </div>
    </footer>
  );
}
