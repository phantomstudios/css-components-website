import { GoArrowRight, GoMarkGithub } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { Dela_Gothic_One } from "@next/font/google";
import { Noto_Sans } from "@next/font/google";

import { getAllDocsCategories } from "@/content";
import Stats from "@/components/Stats";
import HeroFeatures from "@/components/HeroFeatures";
import Footer from "@/components/Footer";
import CodeExample from "@/components/CodeExample";
import CodeClipboard from "@/components/CodeClipboard";

import { Container, Hero } from "./styles";

const categories = getAllDocsCategories();
const first = categories[0].docs[0];

const headerFont = Dela_Gothic_One({ weight: ["400"], subsets: ["latin"] });
const mainFont = Noto_Sans({ weight: ["400", "600"], subsets: ["latin"] });

export default function Home() {
  return (
    <Container hasBackground className={mainFont.className}>
      <Hero id="hero">
        <Image
          src="/logo.svg"
          alt="CSS Components"
          width={64}
          height={64}
          unoptimized
        />
        <h1 className={headerFont.className}>
          Componentize<br></br>your CSS styles<br></br>
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
            <a
              href="https://www.github.com/phantomstudios/css-components"
              rel="external"
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
      <Stats />
      <Footer />
    </Container>
  );
}
