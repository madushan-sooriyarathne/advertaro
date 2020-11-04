import styled from "styled-components";

const NewsletterSection = styled.section`
  grid-column: full-start / full-end;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${(props) => props.theme.colorBg};

  padding: 10rem 0;
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

export { NewsletterSection, TitleGroup, FormGroup };
