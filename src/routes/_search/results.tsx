import { Link, createFileRoute } from "@tanstack/react-router";
import { Navigation } from "../../components/Navigation";
import { PhotoGrid } from "../../components/PhotoGrid";

function Results() {
  return (
    <>
      <Navigation />
      <p>Amor é o puro sentimento que tenho por você,</p>
      <p>apenas por você.</p>
      <PhotoGrid />
      <Link to={"/grazi"}>Sobre Grazielly Alves de Castro</Link>
    </>
  );
}

export const Route = createFileRoute("/_search/results")({
  component: Results,
});
