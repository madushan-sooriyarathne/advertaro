import styled from "styled-components";

const Section = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(6rem, 10rem) repeat(10, [col-start] 1fr [col-end])
    minmax(6rem, 10rem) [full-end];
  grid-template-rows: repeat(3, max-content);
  gap: 3rem;
  margin: 20rem 0 10rem 0;
`;

const TitleGroup = styled.div`
  grid-column: col-start / col-end 6;
  grid-row: 1 / 2;
`;

const FirstBox = styled.div`
  grid-column: col-start / col-end 3;
  grid-row: 2 / 3;
`;

const SecondBox = styled.div`
  grid-column: col-start 4 / col-end 6;
  grid-row: 2 / 3;
`;

const ThirdBox = styled.div`
  grid-column: col-start 7 / col-end 10;
  grid-row: 1 / 3;
`;

const ButtonWrapper = styled.div`
  grid-column: col-start 1 / col-end 10;
  grid-row: 3 / 4;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export { Section, TitleGroup, FirstBox, SecondBox, ThirdBox, ButtonWrapper };
