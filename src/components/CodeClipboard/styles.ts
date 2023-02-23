import { styled } from "@phntms/css-components";

import css from "./styles.module.css";

export const CodeClipboardWrapper = styled("span", {
  css: css.CodeClipboard,
  variants: {
    copied: {
      true: css.CodeClipboard_copied_true,
    },
  },
});
