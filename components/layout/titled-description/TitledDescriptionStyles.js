import styled from "styled-components";
import { Heading } from "../../headings/main-heading/MainHeadingStyle";

const Section = styled.section`
  grid-column: full-start / full-end;

  display: grid;
  grid-template-columns: 1fr minmax(min-content, 90rem) 1fr;
  grid-auto-rows: min-content;
  gap: 5rem;
  align-items: center;
  justify-items: center;

  padding: 10rem 0;
`;

const TitleGroup = styled.div`
  grid-column: 2 / 3;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  & > * {
    text-align: center;
  }
`;

const Title = styled(Heading)`
  color: ${(props) => props.theme.colorPrimary};
`;

const Description = styled.p`
  grid-column: 2 / 3;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;

  text-align: justify;
  hyphens: auto;

  color: ${(props) => props.theme.colorSecondary};
`;

export { Section, TitleGroup, Title, Description };
