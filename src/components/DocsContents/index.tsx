import Link from "next/link";

import { getAllDocsCategories } from "@/content";

import { DocsContentsWrapper } from "./styles";

const DocsContents = () => {
  const categories = getAllDocsCategories();
  return (
    <DocsContentsWrapper>
      {categories.map((category, i) => (
        <li key={i}>
          <h2>{category.title}</h2>
          <ul>
            {category.docs.map((doc, i) => (
              <li key={i}>
                <Link href={`/docs/${doc.slug}`}>{doc.title}</Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </DocsContentsWrapper>
  );
};

export default DocsContents;
