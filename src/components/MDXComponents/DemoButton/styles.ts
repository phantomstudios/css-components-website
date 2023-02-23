import { styled } from "@phntms/css-components";

import css from "./styles.module.css";

export const DemoButtonWrapper = styled("button", {
  css: css.DemoButtonWrapper,
  variants: {
    color: {
      blue: css.colorBlue,
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
      color: "blue",
      outlined: true,
      css: css.colorOutlinedBlue,
    },
    {
      color: "gray",
      outlined: true,
      css: css.colorOutlinedGray,
    },
  ],
  defaultVariants: {
    color: "blue",
  },
});
