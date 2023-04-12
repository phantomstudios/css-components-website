import { ReactNode } from "react";

import { IconType } from "react-icons";

import { HeroFeaturesWrapper } from "./styles";

interface Props {
  features: {
    title: string;
    description: ReactNode;
    icon: IconType;
  }[];
}

const HeroFeatures = ({ features }: Props) => {
  return (
    <HeroFeaturesWrapper>
      {features.map((feature, i) => (
        <li key={i}>
          <span>
            <feature.icon />
          </span>
          <h2>{feature.title}</h2>
          <p>{feature.description}</p>
        </li>
      ))}
    </HeroFeaturesWrapper>
  );
};

export default HeroFeatures;
