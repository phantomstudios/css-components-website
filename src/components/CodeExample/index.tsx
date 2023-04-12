"use client";

import { useState } from "react";

import { CodeExampleWrapper, CodeSections, CodeSection } from "./styles";
import Code, { range } from "../MDXComponents/Code";

export interface CodeSection {
  title: string;
  description: string;
  highlight: range;
}

interface Props {
  code: string;
  sections: CodeSection[];
}

const CodeExample = ({ code, sections }: Props) => {
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
