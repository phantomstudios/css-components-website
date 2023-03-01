import "@/styles/globals.css";
import "@/styles/colors.css";

import { Metadata } from "next";

import { fontClasses } from "@/styles/fonts";
import NotFound from "@/components/404";

export const metadata: Metadata = {
  title: "404",
  description:
    "Not another styling system, but a lightweight utility to compose CSS styles into standard React.JS components.",
  keywords: ["css", "component", "utility"],
  openGraph: {
    title: "404",
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

export default function PostNotFound() {
  return (
    <div className={fontClasses}>
      <NotFound text="Uh oh! This page couldn't be found. 🤷‍♂️" />
    </div>
  );
}
