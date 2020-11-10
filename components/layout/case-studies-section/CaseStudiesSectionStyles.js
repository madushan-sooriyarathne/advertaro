import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  padding: ${(props) => `calc(${props.theme.navBarHeight} + 5rem) 0 10rem 0`};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content;
  gap: 5rem;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > * {
    text-align: center;
  }
`;

const ItemGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  grid-template-rows: min-content;
  gap: 5rem;

  ${(props) => props.theme.responsiveHigh} {
    grid-template-columns: repeat(2, minmax(min-content, 1fr));
  }

  ${(props) => props.theme.responsiveLower} {
    grid-template-columns: 1fr;
  }
`;

export { Section, TitleGroup, ItemGroup };
