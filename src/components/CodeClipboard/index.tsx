"use client";

import { setTimeout } from "timers";

import { useState } from "react";

import { BiCopy } from "react-icons/bi";

import { CodeClipboardWrapper } from "./styles";

interface Props {
  text: string;
}

const CodeClipboard = ({ text }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = () => {
    // Allows animation to play on mobile
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 150);
  };

  return (
    <CodeClipboardWrapper copied={isCopied} onClick={copy}>
      {text} <BiCopy />
    </CodeClipboardWrapper>
  );
};

export default CodeClipboard;
