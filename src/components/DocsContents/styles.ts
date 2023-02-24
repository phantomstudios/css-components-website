import Link from "next/link";
import { styled } from "@phntms/css-components";

import css from "./styles.module.css";

export const Categories = styled("ul", {
  css: css.Categories,
});

export const Docs = styled("ul", {
  css: css.Docs,
});

export const DocLink = styled(Link, {
  css: css.DocLink,
});
