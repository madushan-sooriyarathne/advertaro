import styled from "styled-components";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Field = styled.input`
  width: 100%;
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colorSecondary};
  outline: none;
  border: ${(props) => `2px solid ${props.theme.colorSecondary}`};
  font-family: ${(props) => props.theme.fontPrimary};

  &::placeholder {
    font-family: ${(props) => props.theme.fontPrimary};
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 14rem;
  max-width: 100%;
  max-height: 14rem;
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.theme.colorSecondary};
  resize: none;
  outline: none;
  border: ${(props) => `2px solid ${props.theme.colorSecondary}`};
  font-family: ${(props) => props.theme.fontPrimary};

  &::placeholder {
    font-family: ${(props) => props.theme.fontPrimary};
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export { InputGroup, Field, TextArea };
