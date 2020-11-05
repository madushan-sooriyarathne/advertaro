import styled from "styled-components";

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  & > * {
    margin-bottom: 2rem;
  }
`;

export { FormGroup };
