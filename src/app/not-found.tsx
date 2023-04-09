import { Metadata } from "next";

import NotFoundComponent from "@/components/404";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFound() {
  return <NotFoundComponent text="Uh oh! This page couldn't be found. 🤷‍♂️" />;
}
