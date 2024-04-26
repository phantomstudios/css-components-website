import { styled } from "@phantomstudios/css-components";

import css from "./page.module.css";

export const Container = styled("div", {
  css: css.Container,
  variants: {
    sideBar: {
      true: css.Container_sideBar_true,
    },
    hasBackground: {
      true: css.Container_hasBackground_true,
    },
  },
});

export const Hero = styled("main", {
  css: css.Hero,
  passthrough: ["id"],
});

export const Version = styled("p", {
  css: css.Version,
});
