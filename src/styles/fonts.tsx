import { Noto_Sans } from "next/font/google";
import { Ubuntu } from "next/font/google";

export const NOTO_SANS = Noto_Sans({
  variable: "--noto-sans",
  weight: ["400", "600"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const UBUNTU = Ubuntu({
  variable: "--ubuntu",
  weight: ["400", "700"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const fontClasses = [NOTO_SANS.variable, UBUNTU.variable].join(" ");

// Now import fontClasses into the layout, and add the class to the body
// (```<body className={fontClasses}>{children}</body>```).

// This will allow you to use ```var(--font-name)``` in CSS files.
