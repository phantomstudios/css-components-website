import { GoX } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

import { FooterWrapper, FooterLogos } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterLogos>
        <a href="#hero">
          <Image
            src="/logo.svg"
            alt="CSS Components logo"
            width={32}
            height={32}
          />
        </a>
        <GoX />
        <a href="https://www.phantom.land" target="_blank" rel="noreferrer">
          <Image
            src="/phntm-logo.svg"
            alt="Phantom logo"
            width={36}
            height={64}
          />
        </a>
      </FooterLogos>
      <p>
        CSS Components was made with ❤️ at
        <Link href="https://www.phantom.land" target="_blank">
          Phantom.land
        </Link>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
