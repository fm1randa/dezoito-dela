import { Link, createFileRoute } from "@tanstack/react-router";
import { SubmitButton } from "../../index.styles";

function Search() {
  return (
    <Link to={"/results"}>
      <SubmitButton>Pesquisar</SubmitButton>
    </Link>
  );
}

export const Route = createFileRoute("/_search/search")({
  component: Search,
});
