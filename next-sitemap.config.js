/** @type {import('next-sitemap').IConfig} */

const siteUrl =
  process.env.DOMAIN ?
    "https://" + process.env.DOMAIN
  : process.env.VERCEL_URL
    ? "https://" + process.env.VERCEL_URL
    : "http://localhost:3000";

module.exports = {
  siteUrl,
  generateIndexSitemap: true, //single sitemap
};
