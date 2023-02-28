import { Noto_Sans } from "@next/font/google";
import { Ubuntu } from "@next/font/google";

export const NOTO_SANS = Noto_Sans({
  variable: "--noto-sans",
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const UBUNTU = Ubuntu({
  variable: "--ubuntu",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const fontClasses = [NOTO_SANS.variable, UBUNTU.variable].join(" ");

// In theory, we should be able to use Google fonts in CSS by using
// var() - for example, ```font-family: var(--noto-sans);```.

// This should work in exactly the same way as local font imports,
// as seen in zendesk-15-years, but in practice it doesn't.

// This is a known quirk of Next 13, so this file (with comments)
// will be left in case of future changes.

// In the meantime, fonts are applied to individual components on a
// per-page basis.
