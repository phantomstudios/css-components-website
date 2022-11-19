import { DrawerWrapper } from "./styles";

interface Props {
  children?: React.ReactNode;
}

const Drawer = ({ children }: Props) => {
  return <DrawerWrapper>{children}</DrawerWrapper>;
};

export default Drawer;
