import { getAllDocsCategories } from "@/content";
import DocsNav from "@/components/DocsNav";
import DocsContents from "@/components/DocsContents";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = getAllDocsCategories();

  return (
    <>
      <DocsNav>
        <DocsContents categories={categories} />
      </DocsNav>
      {children}
    </>
  );
}
