import { getMDXComponent } from "mdx-bundler/client";

import { Frontmatter } from "@/types/frontmatter";
import { components } from "@/components/MDXComponents";

import { Description, DocWrapper } from "./styles";

interface Props {
  doc: {
    frontmatter: Frontmatter;
    code: string;
  };
}

const Doc = ({ doc }: Props) => {
  const Component = getMDXComponent(doc.code);

  const {
    frontmatter: { title, description },
  } = doc;

  return (
    <DocWrapper>
      <h1>{title}</h1>
      {doc.frontmatter.description && <Description>{description}</Description>}
      <Component components={components} />
    </DocWrapper>
  );
};

export default Doc;
