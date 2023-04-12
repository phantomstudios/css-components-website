import { GoArrowRight, GoMarkGithub } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

import { getPackageVersion } from "@/services/npm";
import { codeExample, features, githubLink, stats } from "@/content/static";
import { getAllDocsCategories } from "@/content";
import Stats from "@/components/Stats";
import HeroFeatures from "@/components/HeroFeatures";
import Footer from "@/components/Footer";
import CodeExample from "@/components/CodeExample";
import CodeClipboard from "@/components/CodeClipboard";

import { Container, Hero, Version } from "./styles";

const categories = getAllDocsCategories();
const first = categories[0].docs[0];

export default async function Home() {
  const version = await getPackageVersion("@phntms/css-components");
  return (
    <Container>
      <Hero id="hero">
        <Image
          src="/logo.svg"
          alt="CSS Components"
          width={64}
          height={64}
          unoptimized
        />
        <h1>
          Componentize
          <br />
          your CSS styles
          <br />
          <span>the right way</span>
        </h1>
        <p>
          Not another styling system, but a lightweight utility to compose CSS
          styles into standard React.JS components.
        </p>
        <ul>
          <li>
            <Link href={`/docs/${first.slug}`}>
              <GoArrowRight /> Documentation
            </Link>
          </li>
          <li>
            <a href={githubLink} rel="external noreferrer" target="_blank">
              <GoMarkGithub />
              GitHub
            </a>
          </li>
        </ul>
        <CodeClipboard text="npm i @phntms/css-components" />
        <Version>
          Currently <strong>v{version}</strong>
        </Version>
      </Hero>
      <CodeExample {...codeExample} />
      <HeroFeatures features={features} />
      <Stats stats={stats} />
      <Footer />
    </Container>
  );
}
