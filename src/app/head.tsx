import { MetaHeadEmbed } from "@phntms/react-share";

export default function Head() {
  return (
    <>
      <MetaHeadEmbed
        render={(meta: React.ReactNode) => <>{meta}</>}
        siteTitle="CSS Components"
        description="Not another styling system, but a lightweight utility to compose CSS styles into standard React.JS components."
        baseSiteUrl="https://www.css-components.net"
        keywords={["css", "component", "utility"]}
        imageUrl="https://bit.ly/3wiUOuk"
        imageAlt="PHANTOM logo."
        twitter={{
          cardSize: "large",
          siteUsername: "@phntmLDN",
          creatorUsername: "@phntmLDN",
        }}
      />
      <link href="/favicon.ico" rel="icon" />
    </>
  );
}
