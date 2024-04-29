import { GoArrowRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
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
  const version = await getPackageVersion("@phantomstudios/css-components");
  return (
    <Container hasBackground>
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
            <Link href={githubLink} rel="external noreferrer" target="_blank">
              <FaGithub />
              GitHub
            </Link>
          </li>
        </ul>
        <CodeClipboard text="npm i @phantomstudios/css-components" />
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
