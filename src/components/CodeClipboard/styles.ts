import { styled } from "@phantomstudios/css-components";

import css from "./styles.module.scss";

export const CodeClipboardWrapper = styled("span", {
  css: css.CodeClipboard,
  variants: {
    copied: {
      true: css.CodeClipboard_copied_true,
    },
  },
});
