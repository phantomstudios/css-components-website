import { DemoButtonWrapper } from "./styles";

type Props = React.ComponentProps<typeof DemoButtonWrapper>;

const DemoButton = ({ children = "Demo Button", ...rest }: Props) => {
  return <DemoButtonWrapper {...rest}>{children}</DemoButtonWrapper>;
};

export default DemoButton;
