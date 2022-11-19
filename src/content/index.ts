import fs from "fs";
import path from 'path';
import glob from 'glob';
import matter from 'gray-matter';

import type { Frontmatter } from '../types/frontmatter';
import { bundleMDX } from "mdx-bundler";
import { sortByIndex } from '../utils/array';

export interface Category {
  title: string;
  docs: Frontmatter[];
}

const ROOT_PATH = process.cwd();
export const DATA_PATH = path.join(ROOT_PATH, 'data');

export const getAllFrontmatter = (fromPath: string) => {
  const PATH = path.join(DATA_PATH, fromPath);
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return paths.map((filePath) => {
    const source = fs.readFileSync(path.join(filePath), 'utf8');
    const { data, content } = matter(source);

    return {
      ...(data as Frontmatter),
      slug: path.basename(filePath).replace('.mdx', ''),
    };
  }).sort(sortByIndex);
};


export const getAllDocsCategories = () => {
  const docs = getAllFrontmatter('docs');

  return docs.reduce((acc, doc) => {
    const category = doc.category || 'Other';
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
  // console.log("HERE!!!!", basePath, slug);
  const mdxPath = path.join(DATA_PATH, basePath, `${slug}.mdx`);
  if (!fs.existsSync(mdxPath)) return;

  const source = fs.readFileSync(path.join(DATA_PATH, basePath, `${slug}.mdx`), 'utf8');
  // const { frontmatter, code } = await bundleMDX(source, {
  //   xdmOptions(input, options) {
  //     options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkSlug];
  //     options.rehypePlugins = [
  //       ...(options.rehypePlugins ?? []),
  //       rehypeMetaAttribute,
  //       rehypeHighlightCode,
  //     ];

  //     return options;
  //   },
  // });

  const { frontmatter, code } = await bundleMDX({ source });

  return {
    frontmatter: {
      ...(frontmatter as Frontmatter),
      slug,
      // wordCount: code.split(/\s+/g).length,
      // readingTime: readingTime(code),
    } as Frontmatter,
    code,
  };
};