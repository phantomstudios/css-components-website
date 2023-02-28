import "@/styles/globals.css";
import "@/styles/colors.css";
import { NOTO_SANS } from "@/styles/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={NOTO_SANS.className}>{children}</body>
    </html>
  );
}
