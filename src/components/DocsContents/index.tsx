import Link from "next/link";
import Image from "next/image";

import { getAllDocsCategories } from "@/content";

import { Categories } from "./styles";
import NavLinks from "../NavLinks";

interface Props {
  closeNav: () => void;
}

const DocsContents = ({ closeNav }: Props) => {
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
        <NavLinks categories={categories} closeNav={closeNav} />
      </Categories>
    </>
  );
};

export default DocsContents;
