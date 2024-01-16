import { Outlet } from "@tanstack/react-router";
import oldGoogleLogo from "../assets/old-google-logo.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  row-gap: 1em;
`;

const InvisibleTopBar = styled.div`
  height: 100px;
`;

const OldGoogleLogo = styled.img`
  width: 272px;
  height: 92px;
`;
OldGoogleLogo.defaultProps = {
  src: oldGoogleLogo,
};

const SearchBar = styled.input`
  width: 300px;
  height: 20px;

  pointer-events: none;
`;

const SubmitButton = styled.button`
  width: 100px;
`;

function App() {
  return (
    <Container>
      <InvisibleTopBar />
      <OldGoogleLogo />
      <SearchBar value="O que é amor?" />
      <SubmitButton>Pesquisar</SubmitButton>
      <Outlet />
    </Container>
  );
}

export default App;
