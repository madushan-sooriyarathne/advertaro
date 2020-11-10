import styled from "styled-components";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Field = styled.input`
  width: 100%;
  height: 100%;
  padding: 1rem 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${(props) => props.theme.colorSecondary};
  background-color: transparent;
  outline: none;
  border: ${(props) => `2px solid ${props.theme.colorSecondary}`};
  font-family: ${(props) => props.theme.fontPrimary};

  &::placeholder {
    font-family: ${(props) => props.theme.fontPrimary};
    font-size: 1.5rem;
    font-weight: 400;
  }

  ${(props) => props.theme.responsiveLowest} {
    border: ${(props) => `1px solid ${props.theme.colorSecondary}`};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 14rem;
  max-width: 100%;
  max-height: 14rem;
  padding: 1rem 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colorSecondary};
  background-color: transparent;
  resize: none;
  outline: none;
  border: ${(props) => `2px solid ${props.theme.colorSecondary}`};
  font-family: ${(props) => props.theme.fontPrimary};

  &::placeholder {
    font-family: ${(props) => props.theme.fontPrimary};
    font-size: 1.5rem;
    font-weight: 400;
  }
  ${(props) => props.theme.responsiveLowest} {
    border: ${(props) => `1px solid ${props.theme.colorSecondary}`};
  }
`;

export { InputGroup, Field, TextArea };
