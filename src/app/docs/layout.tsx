import type { Metadata } from "next";

import DocsNav from "@/components/DocsNav";
import DocsContents from "@/components/DocsContents";

export const metadata: Metadata = {
  title: "Documentation",
};

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
