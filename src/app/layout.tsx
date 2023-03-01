import "@/styles/globals.css";
import "@/styles/colors.css";
import type { Metadata } from "next";

import { fontClasses } from "@/styles/fonts";

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
    images: [
      {
        url: "https://www.css-components.net/banner.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CSS Components",
    creator: "@phntmLDN",
    images: ["https://www.css-components.net/banner.png"],
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
      <body className={fontClasses}>{children}</body>
    </html>
  );
}
