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
];

const CodeExample = () => {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <CodeExampleWrapper>
      <div>
        <h2>Design composable component APIs with variants</h2>
        <p>
          Variants are a first-class citizen of CSS Components. With multiple
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
              <a href="#code-example">
                <h3>{title}</h3>
                <p>{description}</p>
              </a>
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
