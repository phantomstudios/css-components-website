import { styled } from "@phntms/css-components";

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
  defaultVariants: {},
});

export const Hero = styled("main", {
  css: css.Hero,
});
