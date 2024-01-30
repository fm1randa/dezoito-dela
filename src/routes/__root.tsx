import { Outlet, createRootRoute } from "@tanstack/react-router";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  row-gap: 1em;
`;

export const Route = createRootRoute({
  component: () => (
    <Container>
      <Outlet />
    </Container>
  ),
});
