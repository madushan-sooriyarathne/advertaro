import styled from "styled-components";

const Section = styled.div`
  display: grid;
  grid-template-columns:
    [full-start] minmax(6rem, 10rem)
    [content-start] 1fr [mid] 1fr [content-end] minmax(6rem, 10rem)
    [full-end];
  gap: 10rem;
  height: 60rem;
  margin: 20rem 0;
`;

const FormWrapper = styled.div`
  grid-column: content-start / mid;

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
  grid-column: mid / content-end;

  background-image: url("/static/img/contact-cover.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export { Section, FormGroup, FormWrapper, ImageWrapper };
