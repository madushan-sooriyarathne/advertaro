import styled from "styled-components";

const NewsletterSection = styled.section`
  grid-column: full-start / full-end;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.colorBg};

  padding: 10rem 0;

  ${(props) => props.theme.responsiveLower} {
    padding: 10rem;
  }

  ${(props) => props.theme.responsiveLowest} {
    padding: 10rem 5rem;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  & > * {
    text-align: center;
  }
`;

const FormGroup = styled.form`
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: stretch;
  justify-content: stretch;
  width: 50%;

  & > *:first-child {
    margin-right: 1rem;
  }

  ${(props) => props.theme.responsiveMedium} {
    width: 80%;
  }

  ${(props) => props.theme.responsiveLower} {
    width: 100%;
  }
`;

export { NewsletterSection, TitleGroup, FormGroup };
