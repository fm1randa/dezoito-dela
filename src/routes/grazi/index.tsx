import { createFileRoute } from "@tanstack/react-router";

function Grazi() {
  return (
    <>
      <p>linda, maravilhosa</p>
    </>
  );
}

export const Route = createFileRoute("/grazi/")({
  component: Grazi,
});
