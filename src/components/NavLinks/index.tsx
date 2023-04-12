"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { useDocs } from "@/contexts/docs";

import { Docs, List } from "./styles";

interface Doc {
  title: string;
  docs: {
    title: string;
    slug: string;
  }[];
}

interface Props {
  categories: Doc[];
}

const NavLinks = ({ categories }: Props) => {
  const pathName = usePathname();
  const { setOpen } = useDocs();

  return (
    <>
      {categories.map((category, i) => (
        <li key={i}>
          <h2>{category.title}</h2>
          <Docs>
            {category.docs.map((doc, i) => (
              <List active={pathName?.endsWith(doc.slug)} key={i}>
                <Link
                  href={`/docs/${doc.slug}`}
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  {doc.title}
                </Link>
              </List>
            ))}
          </Docs>
        </li>
      ))}
    </>
  );
};

export default NavLinks;
