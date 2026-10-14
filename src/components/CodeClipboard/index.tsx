"use client";

import { useState, type KeyboardEvent } from "react";

import { BiCopy } from "react-icons/bi";

import { CodeClipboardWrapper } from "./styles";

interface Props {
  text: string;
}

const CodeClipboard = ({ text }: Props) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 300);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      copy();
    }
  };

  return (
    <CodeClipboardWrapper
      role="button"
      tabIndex={0}
      aria-label="Copy install command to clipboard"
      copied={isCopied}
      onClick={copy}
      onKeyDown={handleKeyDown}
    >
      {text} <BiCopy aria-hidden="true" />
    </CodeClipboardWrapper>
  );
};

export default CodeClipboard;
