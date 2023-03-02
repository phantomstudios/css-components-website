import Link from "next/link";

import { NotFoundWrapper } from "./styles";

interface Props {
  text: string;
}

const NotFound = ({ text }: Props) => {
  return (
    <NotFoundWrapper>
      <h2>{text}</h2>
      <Link href="/">Go home</Link>
    </NotFoundWrapper>
  );
};

export default NotFound;
