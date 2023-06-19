/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://esprit-primeur.fr",
  generateRobotsTxt: true,
  changefreq: "yearly",
  generateIndexSitemap: false,
  // outDir: "dist",
};
