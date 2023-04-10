import { MDXComponents } from "mdx/types";

import Preview from "./Preview";
import Panel from "./Panel";
import DemoButton from "./DemoButton";
import Code from "./Code";
import CheckoutButton from "./CheckoutButton/index";
import { BenchmarkChart } from "./BenchmarkChart";

export const components: MDXComponents = {
  BenchmarkChart,
  Panel,

  code: (props) => {
    const { className, children } = props;
    const isInlineCode = !className;
    if (isInlineCode) return <code>{children}</code>;
    const language = className ? className.replace("language-", "") : "tsx";
    return <Code language={language}>{children as string}</Code>;
  },

  DemoButton,
  CheckoutButton,
  Preview: (props: React.ComponentProps<typeof Preview>) => (
    <Preview {...props} />
  ),
};
