import { styled } from "@phantomstudios/css-components";

import css from "./styles.module.css";

export const Docs = styled("ul", {
  css: css.Docs,
});

export const List = styled("li", {
  css: css.List,
  variants: {
    active: {
      true: css.active,
    },
  },
});
