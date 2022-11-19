"use client";

import style from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { CodeWrapper } from "./styles";

interface Props {
  children: string;
  language?: string;
}

const Code = ({ children, language }: Props) => {
  return (
    <CodeWrapper>
      <SyntaxHighlighter language={language} style={style}>
        {children}
      </SyntaxHighlighter>
    </CodeWrapper>
  );
};

export default Code;
