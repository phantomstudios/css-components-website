import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";

import { getAllFrontmatter } from "@/content";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  const baseURL = process.env.DOMAIN
    ? "https://" + process.env.DOMAIN
    : process.env.VERCEL_URL
    ? "https://" + process.env.VERCEL_URL
    : "http://localhost:3000";

  const slugs = () => {
    const docs = getAllFrontmatter("docs");
    const slugsArray = [];

    for (let i = 0; i < docs.length; i++) {
      slugsArray.push(docs[i].slug);
    }
    return slugsArray;
  };

  const fields = slugs().map((slug) => ({
    loc: `${baseURL}/docs/${slug}`,
    lastmod: new Date().toISOString(),
    priority: 0.8,
  }));

  fields.push({
    loc: `${baseURL}`,
    lastmod: new Date().toISOString(),
    priority: 1.0,
  });

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {
  return;
}
