import { PreviewWrapper } from "./styles"

interface Props {
    children?: React.ReactNode;
}

const Preview = ({ children }: Props) => {
    return <PreviewWrapper>{children}</PreviewWrapper>;
}

export default Preview;