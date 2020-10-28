import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
  height: 60rem;
  margin: 20rem 0;
`;

const ContactWrapper = styled.section`
  grid-column: content-start / content-end;
  display: grid;
  grid-template-columns: [form-start] 1fr [form-end cover-start] 1fr [cover-end];
  gap: 10rem;
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
`;

const ImageWrapper = styled.div`
  grid-column: cover-start / cover-end;

  background-image: url("/static/img/contact-cover.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export { Section, ContactWrapper, FormGroup, FormWrapper, ImageWrapper };
