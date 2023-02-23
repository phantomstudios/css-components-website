import { GoArrowRight, GoMarkGithub } from "react-icons/go";
import { BiCopy } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

import { getAllDocsCategories } from "@/content";
import Stats from "@/components/Stats";
import HeroFeatures from "@/components/HeroFeatures";
import CodeExample from "@/components/CodeExample";
import CodeClipboard from "@/components/CodeClipboard";

import { Container, Hero } from "./styles";

const categories = getAllDocsCategories();
const first = categories[0].docs[0];

export default function Home() {
  return (
    <Container>
      <Hero>
        <Image
          src="/logo.svg"
          alt="CSS Components"
          width={64}
          height={64}
          unoptimized
        />
        <h1>Componentize your CSS styles the right way</h1>
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
            <a
              href="https://www.github.com/phantomstudios/css-components"
              rel="external"
            >
              <GoMarkGithub />
              GitHub
            </a>
          </li>
        </ul>
        <CodeClipboard text="npm i @phntms/css-components">
          <BiCopy />
        </CodeClipboard>
      </Hero>
      <CodeExample />
      <HeroFeatures />
      <Stats />
    </Container>
  );
}
