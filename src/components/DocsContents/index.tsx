import Link from "next/link";

import { Category } from "@/content";

import { Categories } from "./styles";
import { Docs } from "./styles";

const DocsContents = ({ categories }: { categories: Category[] }) => {
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
