import styled from "styled-components";

const NewsletterSection = styled.section`
  display: grid;
  grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
  margin: 10rem 0;
`;

const NewsletterWrapper = styled.div`
  grid-column: content-start / content-end;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const FormGroup = styled.form`
  display: grid;
  grid-template-columns: 80% 20%;
  align-items: stretch;
  justify-content: stretch;
  width: 50%;

  & > *:first-child {
    margin-right: 1rem;
  }
`;

export { NewsletterSection, NewsletterWrapper, TitleGroup, FormGroup };
