// Portuguese (Brazil) section - one list feeds the /br/ header, footer, hub
// grid and sitemap, so a new page cannot ship without being linked. Paths keep
// their trailing slash (scripts/check-seo.mjs fails the build otherwise).

export type BrPage = {
  path: string;
  /** Short label for navigation. */
  nav: string;
  /** One-line summary for the hub grid. */
  summary: string;
};

export const BR_PAGES: BrPage[] = [
  {
    path: "/br/",
    nav: "Início",
    summary: "Plataforma de feedback e gestão de reclamações para empresas brasileiras.",
  },
  {
    path: "/br/software-de-gestao-de-reclamacoes/",
    nav: "Gestão de reclamações",
    summary: "Receba, atribua e resolva cada reclamação com protocolo de acompanhamento.",
  },
  {
    path: "/br/caixa-de-sugestoes-online/",
    nav: "Caixa de sugestões",
    summary: "Caixa de sugestões online e anônima para clientes e funcionários.",
  },
  {
    path: "/br/pesquisa-de-satisfacao-qr-code/",
    nav: "Pesquisa por QR Code",
    summary: "Pesquisa de satisfação e avaliação de atendimento por QR Code, sem login.",
  },
  {
    path: "/br/restaurantes/",
    nav: "Restaurantes",
    summary: "Avaliação por QR Code na mesa para resolver reclamações antes da conta.",
  },
  {
    path: "/br/canal-de-denuncias/",
    nav: "Canal de denúncias",
    summary: "Canal de denúncias anônimo com acompanhamento por código de protocolo.",
  },
];

/** Header navigation: every solution page plus the blog hub. */
export const BR_NAV: Pick<BrPage, "path" | "nav">[] = [
  ...BR_PAGES.slice(1),
  { path: "/br/blog/", nav: "Blog" },
];

export const BR_SIGNUP_URL = "https://app.feedsolve.com/signup";
