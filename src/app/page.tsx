import HeroFeatures from "@/components/HeroFeatures";

import { Container, Hero } from "./styles";

export default function Home() {
  return (
    <Container>
      <Hero>
        <h1>Componentize your CSS styles the right way</h1>
        <p>
          CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a
          best-in-class developer experience.
        </p>
      </Hero>
      <HeroFeatures />
    </Container>
  );
}
