import { styled } from "@phntms/css-components";

import css from "./styles.module.css";

export const DocsNavWrapper = styled("div", {
  css: css.DocsNavWrapper,
  variants: {
    open: {
      true: css.DocsNavClosed,
    },
  },
});

export const DocsNavTopbar = styled("div", {
  css: css.DocsNavTopbar,
});

export const DocsNavToggle = styled("button", {
  css: css.DocsNavToggle,
});
