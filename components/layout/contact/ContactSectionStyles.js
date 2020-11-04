import styled from "styled-components";

const Section = styled.section`
  grid-column: content-start / content-end;

  display: grid;
  grid-template-columns: [form-start] 1fr [form-end cover-start] 1fr [cover-end];
  gap: 10rem;
  height: 30vw;
  margin: 10rem 0 10rem 0;
`;

const FormWrapper = styled.div`
  grid-column: form-start / form-end;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  margin-top: 5rem;

  & > * {
    margin-bottom: 2rem;
  }
`;

const ImageWrapper = styled.div`
  grid-column: cover-start / cover-end;

  background-image: url("/static/img/contact-cover.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export { Section, FormGroup, FormWrapper, ImageWrapper };
