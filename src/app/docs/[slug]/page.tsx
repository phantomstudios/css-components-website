"use server";

import { notFound } from "next/navigation";

import { getAllFrontmatter, getMdxBySlug } from "@/content";
import Doc from "@/components/Doc";
import { Container } from "@/app/styles";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: Props) {
  const params = await props.params;
  const doc = await getMdxBySlug("docs", params.slug);
  return { title: doc ? doc?.frontmatter.title : "CSS Components" };
}

export default async function Docs(props: Props) {
  const params = await props.params;
  const doc = await getMdxBySlug("docs", params.slug);
  if (!doc) return notFound();

  return (
    <Container sideBar>
      <Doc doc={doc} />
    </Container>
  );
}

export async function generateStaticParams() {
  const docs = getAllFrontmatter("docs");

  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}
