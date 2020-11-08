import styled from "styled-components";

const Section = styled.section`
  grid-column: full-start / full-end;

  min-height: 100vh;
  width: 100%;
  padding: ${(props) =>
    `calc(${props.theme.navBarHeight} + 5rem) 10rem 10rem 10rem`};

  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr [col-end]);
  gap: 5rem;
  align-items: center;
`;

const ImageBox = styled.div`
  grid-column: col-start / col-end;

  width: 100%;
  height: 100%;

  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const DetailsBox = styled.div`
  grid-column: col-start 2 / col-end 2;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 5rem;
`;

const DetailsGroup = styled.div`
  display: flex;
  flex-direction: column;

  & > :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.fontPrimary};
  letter-spacing: 2px;

  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: justify;
  hyphens: auto;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colorSecondary};
`;

export {
  Section,
  ImageBox,
  DetailsBox,
  TitleGroup,
  DetailsGroup,
  DetailItem,
  Title,
  Description,
};
