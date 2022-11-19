"use server";

import { notFound } from "next/navigation";
import { getMDXComponent } from "mdx-bundler/client";

import { getAllFrontmatter, getMdxBySlug } from "@/content";
import { components } from "@/components/MDXComponents";

import styles from "../../page.module.css";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Docs({ params }: Props) {
  const doc = await getMdxBySlug("docs", params.slug);
  if (!doc) return notFound();
  const Component = getMDXComponent(doc.code);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{doc.frontmatter.title}</h1>
      {doc.frontmatter.description && <p>{doc.frontmatter.description}</p>}
      <Component components={components} />
    </main>
  );
}

export async function generateStaticParams() {
  const docs = getAllFrontmatter("docs");

  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}
