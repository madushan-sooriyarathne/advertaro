import styled from "styled-components";

const Section = styled.section`
  grid-column: full-start / full-end;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 10rem 5rem;

  background-color: ${(props) => props.theme.colorBg};
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

export { Section, TitleGroup };
