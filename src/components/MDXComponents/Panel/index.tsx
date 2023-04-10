import { PanelWrapper, Title, Content } from "./styles";

interface Props {
  title: string;
  children: React.ReactNode;
  wide?: boolean;
}

const Panel = ({ title, children, wide }: Props) => (
  <PanelWrapper wide={wide}>
    <Title>{title}</Title>
    <Content>{children}</Content>
  </PanelWrapper>
);

export default Panel;
