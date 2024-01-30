import { Link, createFileRoute } from "@tanstack/react-router";
import { SubmitButton } from "../index.styles";

function Index() {
  return (
    <>
      <p> Você recebeu um presente!</p>
      <Link to={"/search"}>
        <SubmitButton>Abrir</SubmitButton>
      </Link>
    </>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});
