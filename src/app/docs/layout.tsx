import { DocsProvider } from "@/contexts/docs";
import DocsNav from "@/components/DocsNav";
import DocsContents from "@/components/DocsContents";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DocsProvider>
      <DocsNav>
        <DocsContents />
      </DocsNav>
      {children}
    </DocsProvider>
  );
}
