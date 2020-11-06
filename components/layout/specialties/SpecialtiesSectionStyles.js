import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;
  margin-bottom: 10rem;

  display: grid;
  grid-template-rows: repeat(2, [col-start] max-content [col-end]);
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
  grid-template-columns: repeat(
    3,
    [item-start] minmax(min-content, 1fr) [item-end]
  );
  gap: 5rem;
`;

export { Section, TitleGroup, ItemGroup };
