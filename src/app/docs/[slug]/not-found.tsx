import NotFound from "@/components/404";
import { Container } from "@/app/styles";

export default function PostNotFound() {
  return (
    <Container sideBar>
      <NotFound text="Uh oh! This document couldn't be found. 🤷‍♂️" />
    </Container>
  );
}
