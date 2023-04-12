import DocsNav from "@/components/DocsNav";
import DocsContents from "@/components/DocsContents";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DocsNav>
        <DocsContents />
      </DocsNav>
      {children}
    </>
  );
}
