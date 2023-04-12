import DocsNav from "@/components/DocsNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DocsNav />
      {children}
    </>
  );
}
