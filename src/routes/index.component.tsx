import { Link } from "@tanstack/react-router";
import { SubmitButton } from "../index.styles";

export const component = function Index() {
  return (
    <Link to={"/results"}>
      <SubmitButton>Pesquisar</SubmitButton>
    </Link>
  );
};
