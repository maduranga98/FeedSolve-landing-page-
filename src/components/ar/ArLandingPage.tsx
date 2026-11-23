// Arabic (RTL) landing page shell for /ar-ae/ and /ar-sa/. Server-rendered only:
// the FAQ uses native <details>, so every answer ships in the static HTML that
// crawlers read. The wrapper carries dir="rtl" so the page is correct in dev;
// scripts/set-html-lang.mjs also sets <html lang dir> on the exported files.
// Reuses the br-* layout classes; RTL overrides live under [dir="rtl"] in globals.css.

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BarChart3, CheckCircle2, ChevronDown, Hash, Inbox, Languages, LayoutGrid, QrCode, UserCheck, XCircle } from "lucide-react";
import { JsonLdScript } from "@/components/JsonLd";
import { AR_ENGLISH_HREF, AR_PAGES, AR_SIGNUP_URL, type ArCode } from "@/data/arPages";
import { SITE_URL, breadcrumbJsonLd, generateOrganizationSchema } from "@/lib/seo";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { clusterAlternates } from "@/lib/seo/hreflang";

export function arMetadata(code: ArCode): Metadata {
  const page = AR_PAGES[code];
  const meta = generatePageMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: page.path,
    locale: page.ogLocale,
    alternates: clusterAlternates("complaintManagement", page.path),
  });
  return { ...meta, openGraph: { ...meta.openGraph, alternateLocale: ["en_US"] } };
}

const STEPS = [
  { icon: QrCode, title: "الاستلام", body: "يمسح العميل رمز QR أو يفتح الرابط ويرسل شكواه خلال ثوانٍ. بدون تسجيل دخول وبدون تطبيق." },
  { icon: Hash, title: "رمز التتبع", body: "تحصل كل شكوى على رمز تتبع فريد يتابع به العميل الحالة متى شاء." },
  { icon: UserCheck, title: "الإسناد", body: "حدد المسؤول والأولوية. الملاحظات الداخلية لا تظهر للعميل." },
  { icon: Inbox, title: "الحل", body: "غيّر الحالة، وانشر ردًا يراه العميل، وأغلق الشكوى. يُحسب معدل الحل تلقائيًا." },
];

const FEATURE_ICONS = [QrCode, Hash, UserCheck, LayoutGrid, Languages, BarChart3];

function ArHeader({ current }: { current: ArCode }) {
  return (
    <header className="br-header">
      <div className="br-header-inner">
        <Link href={AR_PAGES[current].path} className="nav-logo" aria-label="FeedSolve - الصفحة الرئيسية بالعربية">
          <Image src="/brand-mark.webp" alt="" width={28} height={28} priority />
          <span className="nav-logo-text">FeedSolve</span>
          <span className="br-flag">العربية</span>
        </Link>
        <nav aria-label="الدول" className="br-nav">
          {(Object.keys(AR_PAGES) as ArCode[]).map((code) => (
            <Link key={code} href={AR_PAGES[code].path} aria-current={code === current ? "page" : undefined}>
              {AR_PAGES[code].nav}
            </Link>
          ))}
        </nav>
        <div className="br-header-actions">
          <Link href={AR_ENGLISH_HREF} hrefLang="en" lang="en" className="br-lang">
            English
          </Link>
          <a href={AR_SIGNUP_URL} className="btn-primary br-header-cta" target="_blank" rel="noopener noreferrer">
            جرّب مجانًا
          </a>
        </div>
      </div>
    </header>
  );
}

function ArFooter() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <Image src="/brand-mark.webp" alt="FeedSolve" width={28} height={28} />
          <span className="footer-logo-text">FeedSolve</span>
        </div>
        <div className="footer-links">
          {(Object.keys(AR_PAGES) as ArCode[]).map((code) => (
            <Link key={code} href={AR_PAGES[code].path}>
              {AR_PAGES[code].breadcrumbLabel}
            </Link>
          ))}
          <Link href={AR_ENGLISH_HREF} hrefLang="en" lang="en">
            English
          </Link>
          <Link href="/pricing/" hrefLang="en" lang="en">
            Pricing
          </Link>
          <a href="mailto:hello@feedsolve.com">تواصل معنا</a>
          <Link href="/privacy/">الخصوصية</Link>
          <Link href="/terms/">الشروط</Link>
        </div>
      </div>
      <div className="footer-copy">
        © 2026 FeedSolve. جميع الحقوق محفوظة. · منتج من{" "}
        <a className="footer-company-link" href="https://www.lumoraventures.com/" target="_blank" rel="noopener noreferrer">
          Lumora Ventures Pvt. Ltd.
        </a>
      </div>
    </footer>
  );
}

export default function ArLandingPage({ code }: { code: ArCode }) {
  const page = AR_PAGES[code];
  const url = `${SITE_URL}${page.path}`;
  const other = (Object.keys(AR_PAGES) as ArCode[]).filter((c) => c !== code);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: page.seoTitle,
      description: page.seoDescription,
      url,
      inLanguage: page.hreflang,
      isPartOf: { "@type": "WebSite", name: "FeedSolve", url: `${SITE_URL}/` },
      // Plain Thing on purpose: the SoftwareApplication with offers lives on the homepage.
      about: { "@type": "Thing", name: "FeedSolve", url: `${SITE_URL}/` },
      publisher: generateOrganizationSchema({ standalone: false }),
    },
    breadcrumbJsonLd([
      { name: "FeedSolve", url: `${SITE_URL}/` },
      { name: page.breadcrumbLabel, url },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: page.hreflang,
      mainEntity: page.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <div dir="rtl" lang={page.hreflang} className="ar-page">
      <JsonLdScript data={jsonLd} />
      <ArHeader current={code} />

      <main id="main-content">
        <section className="br-hero">
          <div className="container">
            <nav aria-label="مسار التنقل" className="br-crumbs">
              <Link href="/">FeedSolve</Link>
              <span aria-hidden="true">/</span>
              <span>{page.breadcrumbLabel}</span>
            </nav>
            <div className="section-label br-badge">{page.badge}</div>
            <h1 className="br-h1">{page.h1}</h1>
            <p className="br-lead">{page.lead}</p>
            <div className="br-ctas">
              <a href={AR_SIGNUP_URL} className="btn-primary teal" target="_blank" rel="noopener noreferrer">
                جرّب مجانًا <ArrowLeft size={15} />
              </a>
              <a href="#how-it-works" className="btn-outline br-btn-light">
                كيف يعمل
              </a>
            </div>
            <p className="br-trust">تجربة مجانية لمدة 7 أيام · إعداد خلال دقائق · بدون تطبيق للعملاء</p>
          </div>
        </section>

        <section className="br-section br-bg">
          <div className="container br-narrow">
            <div className="br-answer">
              <p className="br-answer-label">الإجابة المختصرة</p>
              <p>{page.quickAnswer}</p>
            </div>
          </div>
        </section>

        <section className="br-section">
          <div className="container br-narrow">
            <h2 className="br-h2">{page.problemHeading}</h2>
            <ul className="br-list">
              {page.problems.map((p) => (
                <li key={p}>
                  <XCircle size={18} className="br-icon-bad" aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="how-it-works" className="br-section br-navy">
          <div className="container">
            <h2 className="br-h2 br-on-dark">كيف يعمل FeedSolve</h2>
            <ol className="br-steps">
              {STEPS.map(({ icon: Icon, title, body }, i) => (
                <li key={title} className="br-step">
                  <span className="br-step-num">الخطوة {i + 1}</span>
                  <Icon size={24} aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="br-section">
          <div className="container">
            <h2 className="br-h2">{page.featuresHeading}</h2>
            <div className="br-grid">
              {page.features.map((f, i) => {
                const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
                return (
                  <div key={f.title} className="br-card">
                    <div className="br-card-icon">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <h3>{f.title}</h3>
                    <p>{f.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="br-section br-bg">
          <div className="container">
            <h2 className="br-h2">{page.localHeading}</h2>
            <p className="br-sub">{page.localIntro}</p>
            <div className="br-grid">
              {page.localPoints.map((p) => (
                <div key={p.title} className="br-card">
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="br-section">
          <div className="container">
            <h2 className="br-h2">{page.useCasesHeading}</h2>
            <ul className="br-chips">
              {page.useCases.map((u) => (
                <li key={u}>
                  <CheckCircle2 size={16} aria-hidden="true" /> {u}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="br-section br-bg">
          <div className="container br-narrow">
            <h2 className="br-h2">الأسئلة الشائعة</h2>
            <div className="br-faq">
              {page.faqs.map((f, i) => (
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

        <section className="br-section">
          <div className="container">
            <h2 className="br-h2">صفحات ذات صلة</h2>
            <div className="br-grid">
              {other.map((c) => (
                <Link key={c} href={AR_PAGES[c].path} className="br-card br-card-link">
                  <h3>{AR_PAGES[c].breadcrumbLabel}</h3>
                  <p>{AR_PAGES[c].lead}</p>
                </Link>
              ))}
              <Link href={AR_ENGLISH_HREF} hrefLang="en" className="br-card br-card-link">
                <h3 lang="en">Complaint management software (English)</h3>
                <p>نفس المنتج بالإنجليزية، مع مقارنات وأدلة تفصيلية.</p>
              </Link>
              <Link href="/pricing/" hrefLang="en" className="br-card br-card-link">
                <h3 lang="en">FeedSolve pricing</h3>
                <p>الخطط والأسعار بالدولار الأمريكي وحدود كل خطة.</p>
              </Link>
            </div>
          </div>
        </section>

        <section className="br-section br-navy br-center">
          <div className="container br-narrow">
            <h2 className="br-h2 br-on-dark">{page.ctaHeading}</h2>
            <p className="br-sub br-on-dark-mid">{page.ctaSub}</p>
            <a href={AR_SIGNUP_URL} className="btn-primary teal" target="_blank" rel="noopener noreferrer">
              ابدأ التجربة المجانية <ArrowLeft size={15} />
            </a>
          </div>
        </section>
      </main>

      <ArFooter />
    </div>
  );
}
