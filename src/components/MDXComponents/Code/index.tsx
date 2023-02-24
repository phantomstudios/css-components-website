"use client";

import { CSSProperties } from "react";

import style from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light";
import SyntaxHighlighter from "react-syntax-highlighter";

import { CodeWrapper } from "./styles";

export type range = [number, number];

interface Props {
  children: string;
  language?: string;
  highlight?: range;
}

const Code = ({ children, language, highlight }: Props) => {
  return (
    <CodeWrapper id="code-example">
      <SyntaxHighlighter
        language={language}
        style={style}
        showLineNumbers
        wrapLines
        lineProps={(lineNumber) => {
          if (!highlight) return {};
          const style: CSSProperties = { transition: "all 0.2s ease" };
          if (lineNumber < highlight[0] || lineNumber > highlight[1]) {
            style.opacity = 0.2;
          }
          return { style };
        }}
      >
        {children}
      </SyntaxHighlighter>
    </CodeWrapper>
  );
};

export default Code;
