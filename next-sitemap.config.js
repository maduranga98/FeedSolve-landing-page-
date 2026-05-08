const SITE_URL = 'https://feedsolve.com';
const SITEMAP_ROUTES = [
  "/",
  "/blog",
  "/blog/feedback-resolution-rate",
  "/blog/qr-code-feedback-board",
  "/blog/supplier-feedback-tool-manufacturers",
  "/blog/restaurant-feedback-qr-code",
  "/blog/digital-suggestion-box-small-business",
  "/blog/tenant-complaint-portal-property-managers",
  "/blog/no-login-feedback-form",
  "/blog/complaint-resolution-workflow-smb",
  "/blog/feedsolve-vs-typeform",
  "/blog/distributor-feedback-tool-fmcg-logistics",
  "/blog/close-the-feedback-loop",
  "/blog/qr-code-feedback-system",
  "/blog/simple-zendesk-alternative",
  "/blog/track-every-issue",
  "/blog/partner-complaint-tracking"
];

const withTrailingSlash = (path) => (path === '/' ? path : `${path.replace(/\/$/, '')}/`);

module.exports = {
  siteUrl: SITE_URL,
  outDir: 'out',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['*'],
  transform: async (config, path) => {
    if (!SITEMAP_ROUTES.includes(path)) {
      return null;
    }

    return {
      loc: `${config.siteUrl}${withTrailingSlash(path)}`,
      changefreq: path === '/' || path === '/blog' ? 'weekly' : 'monthly',
      priority: path === '/' ? 1 : path === '/blog' ? 0.8 : 0.6,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => (
    await Promise.all(SITEMAP_ROUTES.map((path) => config.transform(config, path)))
  ).filter(Boolean),
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
      { userAgent: '*', disallow: '/blog/blog-post/' },
    ],
  },
};
