import Link from "next/link";

import { getAllDocsCategories } from "@/content";

import { HeroFeaturesWrapper } from "./styles";

const categories = getAllDocsCategories();
const first = categories[0].docs[0];

const features = [
  {
    title: "Documentation",
    description: "Find in-depth information about CSS Components",
    link: `/docs/${first.slug}`,
  },
  {
    title: "Bla",
    description: "GitHub",
    link: "/",
  },
];

const HeroFeatures = () => {
  return (
    <HeroFeaturesWrapper>
      {features.map((feature, i) => (
        <li key={i}>
          <Link href={feature.link}>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </Link>
        </li>
      ))}
    </HeroFeaturesWrapper>
  );
};

export default HeroFeatures;
