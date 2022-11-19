import Drawer from "@/components/Drawer";
import DocsContents from "@/components/DocsContents";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Drawer>
        <DocsContents />
      </Drawer>
      {children}
    </>
  );
}
