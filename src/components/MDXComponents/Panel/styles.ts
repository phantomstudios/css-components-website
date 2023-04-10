import { styled } from "@phntms/css-components";

import css from "./styles.module.css";

export const PanelWrapper = styled("div", {
  css: css.PanelWrapper,
  variants: {
    wide: {
      true: css.PanelWrapper_wide,
    },
  },
});

export const Title = styled("h2", {
  css: css.Title,
});

export const Content = styled("section", {
  css: css.Content,
});
