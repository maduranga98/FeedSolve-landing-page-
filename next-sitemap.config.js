module.exports = {
  siteUrl: 'https://feedsolve.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/blog'),
    await config.transform(config, '/blog/feedback-resolution-rate'),
    await config.transform(config, '/blog/qr-code-feedback-board'),
    await config.transform(config, '/blog/supplier-feedback-tool-manufacturers'),
    await config.transform(config, '/privacy'),
    await config.transform(config, '/terms'),
  ],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
    additionalSitemaps: ['https://feedsolve.com/sitemap.xml'],
  },
};
