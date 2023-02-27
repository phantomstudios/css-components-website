import Link from "next/link";
import Image from "next/image";

import { FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <a href="#hero">
        <Image
          src="/logo.svg"
          alt="CSS Components logo"
          width={32}
          height={32}
        />
      </a>
      <p>
        CSS Components was made with ❤️ at
        <Link href="https://www.phantom.land">Phantom.land</Link>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
