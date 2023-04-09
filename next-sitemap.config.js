/** @type {import('next-sitemap').IConfig} */

const siteUrl =
  process.env.NEXT_PUBLIC_DOMAIN ?
    "https://" + process.env.NEXT_PUBLIC_DOMAIN
  : process.env.VERCEL_URL
    ? "https://" + process.env.VERCEL_URL
    : "http://localhost:3000";

module.exports = {
  siteUrl,
  generateIndexSitemap: true, //single sitemap
};
