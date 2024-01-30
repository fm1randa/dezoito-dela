import styled from "styled-components";
import oldGoogleLogo from "../../assets/old-google-logo.png";
import { Link, Outlet, createFileRoute } from "@tanstack/react-router";

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

function Layout() {
  return (
    <>
      <InvisibleTopBar />
      <Link to={"/"}>
        <OldGoogleLogo />
      </Link>
      <SearchBar value="O que é amor?" readOnly />
      <Outlet />
    </>
  );
}

export const Route = createFileRoute("/_search")({
  component: Layout,
});
