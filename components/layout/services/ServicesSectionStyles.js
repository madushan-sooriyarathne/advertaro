import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
  margin: 20rem 0 10rem 0;
`;

const ContentWrapper = styled.div`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: repeat(3, [col-start] 1fr [col-end]);
  grid-template-rows: repeat(3, max-content);
  gap: 3rem;
`;

const TitleGroup = styled.div`
  grid-column: col-start / col-end;
  grid-row: 1 / 2;
`;

const FirstBox = styled.div`
  grid-column: col-start / col-end;
  grid-row: 2 / 3;
`;

const SecondBox = styled.div`
  grid-column: col-start 2 / col-end 2;
  grid-row: 1 / 3;
`;

const ThirdBox = styled.div`
  grid-column: col-start 3 / col-end 3;
  grid-row: 1 / 3;
`;

const ButtonWrapper = styled.div`
  grid-column: col-start 1 / col-end 3;
  grid-row: 3 / 4;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  Section,
  ContentWrapper,
  TitleGroup,
  FirstBox,
  SecondBox,
  ThirdBox,
  ButtonWrapper,
};
