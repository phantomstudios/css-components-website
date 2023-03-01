/** @type {import('next-sitemap').IConfig} */

const SITE_URL =
  process.env.DOMAIN ?
    "https://" + process.env.DOMAIN
  : process.env.VERCEL_URL
    ? "https://" + process.env.VERCEL_URL
    : "http://localhost:3000";

// Crawlers should not add these pages to search results
// If we are not on production, disallow everything
if (process.env.VERCEL_ENV !== "production") disallowedUrls.push('/');


module.exports = {
  siteUrl: SITE_URL,
  generateIndexSitemap: true, //single sitemap
  exclude: ["/server-sitemap.xml"],
};
