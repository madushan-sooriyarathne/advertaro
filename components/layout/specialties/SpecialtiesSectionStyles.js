import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;
  padding: 10rem 0;

  display: grid;
  grid-auto-rows: min-content;
  gap: 5rem;
  justify-items: center;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(min-content, 1fr));
  gap: 5rem;
`;

export { Section, TitleGroup, ItemGroup };
