import Link from "next/link";
import Image from "next/image";

import { getAllDocsCategories } from "@/content";

import { Categories } from "./styles";
import NavLinks from "../NavLinks";

const DocsContents = () => {
  const categories = getAllDocsCategories();

  return (
    <>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="CSS Components logo"
          width={32}
          height={32}
        />
      </Link>
      <Categories>
        <NavLinks categories={categories} />
      </Categories>
    </>
  );
};

export default DocsContents;
