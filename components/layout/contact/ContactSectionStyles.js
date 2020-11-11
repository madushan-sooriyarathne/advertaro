import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: [form-start] 1fr [form-end cover-start] 1fr [cover-end];
  grid-auto-rows: max-content;
  gap: 10rem;
  min-height: 30vw;
  padding: 10rem 0;

  ${(props) => props.theme.responsiveLow} {
    grid-template-columns: [center-start] 1fr [center-end];
    gap: 0rem;
  }
`;

const FormWrapper = styled.div`
  grid-column: form-start / form-end;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${(props) => props.theme.responsiveLow} {
    grid-column: center-start / center-end;
  }
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-bottom: 5rem;
`;

const ImageWrapper = styled.div`
  grid-column: cover-start / cover-end;

  background-image: url("/static/img/contact-cover.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${(props) => props.theme.responsiveLow} {
    visibility: hidden;
  }
`;

export { Section, TitleGroup, FormWrapper, ImageWrapper };
