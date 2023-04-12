import { GoArrowRight, GoMarkGithub } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

import { getAllDocsCategories } from "@/content";
import Stats from "@/components/Stats";
import HeroFeatures from "@/components/HeroFeatures";
import Footer from "@/components/Footer";
import CodeExample from "@/components/CodeExample";
import CodeClipboard from "@/components/CodeClipboard";

import { Container, Hero } from "./styles";

const categories = getAllDocsCategories();
const first = categories[0].docs[0];

export default function Home() {
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
          Clean and logical
          <br />
          React styling with
          <br />
          <span>CSS Components</span>
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
            <a
              href="https://www.github.com/phantomstudios/css-components"
              rel="external noreferrer"
              target="_blank"
            >
              <GoMarkGithub />
              GitHub
            </a>
          </li>
        </ul>
        <CodeClipboard text="npm i @phntms/css-components" />
      </Hero>
      <CodeExample />
      <HeroFeatures />
      <Stats
        stats={[
          {
            title: "Bundle Size",
            value: "2.3kb",
          },
          {
            title: "Bundle Size (GZIP)",
            value: "961b",
          },
          {
            title: "Runtime interpolations",
            value: "Zero",
          },
          {
            title: "Variants",
            value: "∞",
          },
        ]}
      />
      <Footer />
    </Container>
  );
}
