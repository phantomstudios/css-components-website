import "@/styles/globals.css";
import "@/styles/colors.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "CSS Components",
    template: "%s | CSS Components",
  },
  description:
    "Not another styling system, but a lightweight utility to compose CSS styles into standard React.JS components.",
  keywords: ["css", "component", "utility"],
  openGraph: {
    title: {
      default: "CSS Components",
      template: "%s | CSS Components",
    },
    description:
      "Not another styling system, but a lightweight utility to compose CSS styles into standard React.JS components.",
    url: "https://www.css-components.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Components",
    creator: "@phntmLDN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
