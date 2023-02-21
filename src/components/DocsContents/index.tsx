import Link from "next/link";

import { getAllDocsCategories } from "@/content";

import { Categories } from "./styles";
import { Docs } from "./styles";

const DocsContents = () => {
  const categories = getAllDocsCategories();
  // className={doc.title == slug ? "active" : ""}
  return (
    <Categories>
      {categories.map((category, i) => (
        <li key={i}>
          <h2>{category.title}</h2>
          <Docs>
            {category.docs.map((doc, i) => (
              <li key={i}>
                <Link href={`/docs/${doc.slug}`}>{doc.title}</Link>
              </li>
            ))}
          </Docs>
        </li>
      ))}
    </Categories>
  );
};

export default DocsContents;
