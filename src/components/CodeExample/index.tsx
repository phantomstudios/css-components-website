"use client";

import { useState } from "react";

import { CodeExampleWrapper, CodeSections, CodeSection } from "./styles";
import Code, { range } from "../MDXComponents/Code";

const code = `const Button = styled('button', {
  // base styles
  css: 'btn",
  variants: {
    color: {
      gray: "btnGray",
      blue: "btnBlue",
    },
    outline: {
      true: "btnOutline",
    }
  },
  compoundVariants: [
    {
      color: "gray",
      outline: true,
      css: "btnGrayOutline",
    },
    {
      color: "blue",
      outline: true,
      css: "btnBlueOutline",
    }
  ],
  defaultVariants: {
    color: "gray",
    outline: true,
  },
  domPassthrough: ["color"],
});`;

interface Section {
  title: string;
  description: string;
  highlight: range;
}

const sections: Section[] = [
  {
    title: "Variants",
    description: "Define multiple component variants.",
    highlight: [4, 12],
  },
  {
    title: "Compound Variants",
    description: "Apply styles only when multiple variants match.",
    highlight: [13, 24],
  },
  {
    title: "Default Variants",
    description: "Set a value as the default for each variant.",
    highlight: [25, 28],
  },
  {
    title: "DOM Shielding",
    description: "Prevent styles from leaking to DOM elements.",
    highlight: [29, 29],
  },
];

const CodeExample = () => {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <CodeExampleWrapper>
      <div>
        <h2>Design composable component APIs with variants</h2>
        <p>
          Variants are a first-class citizen of Stitches. With multiple
          variants, compound variants, and default variants, you can design
          composable component APIs which are typed automatically.
        </p>
        <CodeSections>
          {sections.map(({ title, description }, i) => (
            <CodeSection
              key={title}
              active={activeSection === i}
              onClick={() => setActiveSection(i)}
            >
              <h3>{title}</h3>
              <p>{description}</p>
            </CodeSection>
          ))}
        </CodeSections>
      </div>
      <Code language="tsx" highlight={sections[activeSection].highlight}>
        {code}
      </Code>
    </CodeExampleWrapper>
  );
};

export default CodeExample;