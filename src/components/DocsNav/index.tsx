"use client";

import { useState } from "react";

import Image from "next/image";

import { ParentProps } from "@/types/base";
import HamburgerIcon from "@/icons/Hamburger.svg";

import { DocsNavToggle, DocsNavTopbar, DocsNavWrapper } from "./styles";

const DocsNav = ({ children }: ParentProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DocsNavTopbar>
        <DocsNavToggle onClick={() => setOpen(!open)}>
          <Image src={HamburgerIcon} alt="Toggle navigation" />
        </DocsNavToggle>
      </DocsNavTopbar>
      <DocsNavWrapper open={open}>{children}</DocsNavWrapper>
    </>
  );
};

export default DocsNav;
