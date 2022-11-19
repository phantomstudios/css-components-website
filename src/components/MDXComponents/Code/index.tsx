"use client";

import { CodeWrapper } from "./styles"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";

interface Props {
  children: string;
  language?: string;
}

const Code = ({ children, language }: Props) => {
  return <CodeWrapper>
    <SyntaxHighlighter language={language} style={style}>
      {children}
    </SyntaxHighlighter>
  </CodeWrapper>;
}

export default Code;