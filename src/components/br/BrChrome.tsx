// Portuguese header and footer shared by every /br/ page and article.

import Image from "next/image";
import Link from "next/link";
import { BR_NAV, BR_PAGES, BR_SIGNUP_URL } from "@/data/brPages";

export function BrHeader({ path, englishHref }: { path: string; englishHref?: string }) {
  return (
    <header className="br-header">
      <div className="br-header-inner">
        <Link href="/br/" className="nav-logo" aria-label="FeedSolve Brasil - início">
          <Image src="/logo.webp" alt="" width={28} height={28} priority />
          <span className="nav-logo-text">FeedSolve</span>
          <span className="br-flag">Brasil</span>
        </Link>
        <nav aria-label="Soluções" className="br-nav">
          {BR_NAV.map((p) => (
            <Link key={p.path} href={p.path} aria-current={path.startsWith(p.path) && p.path !== "/br/" ? "page" : undefined}>
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

export function BrFooter({ englishHref }: { englishHref?: string }) {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          <Image src="/logo.webp" alt="FeedSolve" width={28} height={28} />
          <span className="footer-logo-text">FeedSolve</span>
        </div>
        <div className="footer-links">
          {[...BR_PAGES, ...BR_NAV.filter((n) => !BR_PAGES.some((p) => p.path === n.path))].map((p) => (
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
