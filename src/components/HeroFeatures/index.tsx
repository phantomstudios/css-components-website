import { GoThumbsup, GoTerminal, GoRepoForked, GoFlame } from "react-icons/go";

import { HeroFeaturesWrapper } from "./styles";

const features = [
  {
    title: "Based on Stitches",
    description: (
      <>
        We bow our heads to the creators of{" "}
        <a href="https://stitches.dev" rel="external">
          Stitches
        </a>
        . CSS Components is a like-for-like port.
      </>
    ),
    icon: GoRepoForked,
  },
  {
    title: "Feature-rich",
    description:
      "Packed full of useful features like variations, explicit DOM shielding, and a fully-typed API.",
    icon: GoFlame,
  },
  {
    title: "Best-in-class DX",
    description:
      "CSS Components has a fully-typed API, to minimize the learning curve, and provide the best possible developer experience.",
    icon: GoThumbsup,
  },
  {
    title: "CLI Magic",
    description:
      "CSS Components comes pack with a CLI to automatically generate components from bog-standard CSS files.",
    icon: GoTerminal,
  },
];

const HeroFeatures = () => {
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
