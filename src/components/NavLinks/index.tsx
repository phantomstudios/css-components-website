"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

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
  closeNav: () => void;
}

const NavLinks = ({ categories, closeNav }: Props) => {
  const pathName = usePathname();

  return (
    <>
      {categories.map((category, i) => (
        <li key={i}>
          <h2>{category.title}</h2>
          <Docs>
            {category.docs.map((doc, i) => (
              <List active={pathName?.endsWith(doc.slug)} key={i}>
                <Link href={`/docs/${doc.slug}`} onClick={closeNav}>
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
