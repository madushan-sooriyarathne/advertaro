import styled from "styled-components";
import InputField from "./InputField";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const Field = styled.input`
  width: 100%;
  padding: 1.5rem 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2e4257;
  outline: none;
  border: 2px solid #27374a;
  font-family: "Montserrat", sans-serif;

  &::placeholder {
    font-family: "Montserrat", sans-serif;
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
  color: #2e4257;
  resize: none;
  outline: none;
  border: 2px solid #27374a;
  font-family: "Montserrat", sans-serif;

  &::placeholder {
    font-family: "Montserrat", sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export { InputGroup, Field, TextArea };
