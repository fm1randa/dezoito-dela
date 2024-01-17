import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
`;

const GridItem = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const PhotoGrid = () => {
  return (
    <GridContainer>
      <GridItem>
        <img src="https://picsum.photos/seed/1/400/400" alt="Imagem 1" />
      </GridItem>
      <GridItem>
        <img src="https://picsum.photos/seed/2/400/400" alt="Imagem 2" />
      </GridItem>
      <GridItem>
        <img src="https://picsum.photos/seed/3/400/400" alt="Imagem 3" />
      </GridItem>
      <GridItem>
        <img src="https://picsum.photos/seed/4/400/400" alt="Imagem 4" />
      </GridItem>
    </GridContainer>
  );
};
