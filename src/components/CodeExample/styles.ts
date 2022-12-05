import { styled } from "@phntms/css-components";

import css from "./styles.module.css";

export const CodeExampleWrapper = styled("div", {
  css: css.CodeExampleWrapper,
});

export const CodeSections = styled("ul", {
  css: css.CodeSections,
});

export const CodeSection = styled("li", {
  css: css.CodeSection,
  variants: {
    active: {
      true: css.CodeSection_active_true,
    },
  },
});
