"use client";

import { setTimeout } from "timers";

import { useState } from "react";

import { CodeClipboardWrapper } from "./styles";

interface Props {
  children: React.ReactNode;
  text: string;
}

const CodeClipboard = ({ children, text }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 200);
  };

  return (
    <CodeClipboardWrapper copied={isCopied} onClick={copy}>
      {" "}
      {text} {children}{" "}
    </CodeClipboardWrapper>
  );
};

export default CodeClipboard;
