import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: repeat(3, [col-start] 1fr [col-end]);
  grid-template-rows: repeat(3, max-content);
  grid-auto-rows: max-content;
  grid-template-areas:
    "ti i2 i3"
    "i1 i2 i3"
    "bt bt bt";
  gap: 3rem;
  padding: 10rem 0;

  @media only screen and (max-width: 65.625em) {
    grid-template-areas:
      "ti ti ti"
      "i1 i2 i3"
      "bt bt bt";
  }

  ${(props) => props.theme.responsiveLow} {
    grid-template-columns: repeat(2, [col-start] 1fr [col-end]);
    grid-template-areas:
      "ti ti"
      "i1 i2"
      "i3 i3"
      "bt bt";
  }

  ${(props) => props.theme.responsiveLowest} {
    grid-template-columns: [col-start] 1fr [col-end];
    grid-template-areas:
      "ti"
      "i1"
      "i2"
      "i3"
      "bt";
  }
`;

const TitleGroup = styled.div`
  grid-area: ti;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 65.625em) {
    align-items: center;
  }
`;

const FirstBox = styled.div`
  grid-area: i1;
`;

const SecondBox = styled.div`
  grid-area: i2;
`;

const ThirdBox = styled.div`
  grid-area: i3;
`;

const ButtonWrapper = styled.div`
  grid-area: bt;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Section, TitleGroup, FirstBox, SecondBox, ThirdBox, ButtonWrapper };
