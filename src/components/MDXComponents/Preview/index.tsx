import { ParentProps } from "@/types/base";

import { PreviewWrapper } from "./styles";

const Preview = ({ children }: ParentProps) => {
  return <PreviewWrapper>{children}</PreviewWrapper>;
};

export default Preview;
