import { DemoButtonWrapper } from "./styles"

interface Props {
    children?: React.ReactNode;
}

const DemoButton = ({ children }: Props) => {
    return <DemoButtonWrapper>{children}</DemoButtonWrapper>;
}

export default DemoButton;