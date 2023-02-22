import { getAllDocsCategories } from "@/content";

import { Categories } from "./styles";
import NavLinks from "../NavLinks";

const DocsContents = () => {
  const categories = getAllDocsCategories();

  return (
    <Categories>
      <NavLinks categories={categories} />
    </Categories>
  );
};

export default DocsContents;
