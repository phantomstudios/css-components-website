import path from "path";
import fs from "fs";

import { bundleMDX } from "mdx-bundler";
import matter from "gray-matter";
import glob from "glob";

import { sortByIndex } from "@/utils/array";
import type { Frontmatter } from "@/types/frontmatter";

export interface Category {
  title: string;
  docs: Frontmatter[];
}

const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, "data");

export const getAllFrontmatter = (fromPath: string) => {
  const PATH = path.join(DATA_PATH, fromPath);
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return paths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(filePath), "utf8");
      const { data } = matter(source);
      return {
        ...(data as Frontmatter),
        slug: path.basename(filePath).replace(".mdx", ""),
      };
    })
    .sort(sortByIndex);
};

export const getAllDocsCategories = () => {
  const docs = getAllFrontmatter("docs");

  return docs.reduce((acc, doc) => {
    const category = doc.category || "Other";
    const foundCategory = acc.find((cat) => cat.title === category);

    if (foundCategory) {
      foundCategory.docs.push(doc);
    } else {
      acc.push({
        title: category,
        docs: [doc],
      });
    }
    return acc;
  }, [] as Category[]);
};

export const getMdxBySlug = async (basePath: string, slug: string) => {
  const mdxPath = path.join(DATA_PATH, basePath, `${slug}.mdx`);
  if (!fs.existsSync(mdxPath)) return;

  const source = fs.readFileSync(
    path.join(DATA_PATH, basePath, `${slug}.mdx`),
    "utf8"
  );

  const { frontmatter, code } = await bundleMDX({ source });

  return {
    frontmatter: {
      ...(frontmatter as Frontmatter),
      slug,
    } as Frontmatter,
    code,
  };
};
