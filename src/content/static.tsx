import { GoThumbsup, GoTerminal, GoRepoForked, GoFlame } from "react-icons/go";

import type { CodeSection } from "@/components/CodeExample";

export const githubLink =
  "https://www.github.com/phantomstudios/css-components";

export const stats = [
  {
    title: "Bundle Size",
    value: "2.3kb",
  },
  {
    title: "Bundle Size (GZIP)",
    value: "961b",
  },
  {
    title: "Runtime interpolations",
    value: "Zero",
  },
  {
    title: "Variants",
    value: "∞",
  },
];

export const features = [
  {
    title: "Based on Stitches",
    description: (
      <>
        We bow our heads to the creators of{" "}
        <a href="https://stitches.dev" rel="external">
          Stitches
        </a>
        . CSS Components is a like-for-like port.
      </>
    ),
    icon: GoRepoForked,
  },
  {
    title: "Feature-rich",
    description:
      "Packed full of useful features like variations, explicit DOM shielding, and a fully-typed API.",
    icon: GoFlame,
  },
  {
    title: "Best-in-class DX",
    description:
      "CSS Components has a fully-typed API, to minimize the learning curve, and provide the best possible developer experience.",
    icon: GoThumbsup,
  },
  {
    title: "CLI Magic",
    description:
      "CSS Components comes pack with a CLI to automatically generate components from bog-standard CSS files.",
    icon: GoTerminal,
  },
];

export const codeExample = {
  code: `const Button = styled('button', {
    // base styles
    css: 'btn",
    variants: {
      color: {
        gray: "btnGray",
        teal: "btnTeal",
      },
      outline: {
        true: "btnOutline",
      },
      disabled: {
        true: "btnDisabled",
      },
    },
    compoundVariants: [
      {
        color: "gray",
        outline: true,
        css: "btnGrayOutline",
      },
      {
        color: "teal",
        outline: true,
        css: "btnTealOutline",
      }
    ],
    defaultVariants: {
      color: "gray",
      outline: true,
    },
    passthrough: ["disabled"],
  });`,
  sections: [
    {
      title: "Variants",
      description: "Define multiple component variants.",
      highlight: [4, 15],
    },
    {
      title: "Compound Variants",
      description: "Apply styles only when multiple variants match.",
      highlight: [16, 27],
    },
    {
      title: "Default Variants",
      description: "Set a value as the default for each variant.",
      highlight: [28, 31],
    },
    {
      title: "Passthrough",
      description: "Allow props to passthrough to the element it is extending.",
      highlight: [32, 32],
    },
  ] as CodeSection[],
};
