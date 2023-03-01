/** @type {import('next-sitemap').IConfig} */

const SITE_URL =
  process.env.DOMAIN ?
    "https://" + process.env.DOMAIN
  : process.env.VERCEL_URL
    ? "https://" + process.env.VERCEL_URL
    : "http://localhost:3000";

module.exports = {
  siteUrl: SITE_URL,
  generateIndexSitemap: true, //single sitemap
  exclude: ["/server-sitemap.xml"],
};
