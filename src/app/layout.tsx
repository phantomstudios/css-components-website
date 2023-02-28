import "@/styles/globals.css";
import "@/styles/colors.css";
import { fontClasses } from "@/styles/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={fontClasses}>{children}</body>
    </html>
  );
}
