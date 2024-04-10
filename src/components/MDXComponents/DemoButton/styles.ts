import { styled } from "@phantomstudios/css-components";

import css from "./styles.module.css";

export const DemoButtonWrapper = styled("button", {
  css: css.DemoButtonWrapper,
  variants: {
    color: {
      teal: css.colorTeal,
      gray: css.colorGray,
    },
    size: {
      small: css.sizeSmall,
      large: css.sizeLarge,
    },
    outlined: {
      true: css.outlined,
    },
  },
  compoundVariants: [
    {
      color: "teal",
      outlined: true,
      css: css.colorOutlinedTeal,
    },
    {
      color: "gray",
      outlined: true,
      css: css.colorOutlinedGray,
    },
  ],
  defaultVariants: {
    color: "teal",
  },
});
