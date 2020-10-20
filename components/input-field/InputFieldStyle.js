import styled from "styled-components";

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const InputFiled = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #2e4257;
  border: 2px solid #27374a;
`;

const InputLabel = styled.label`
  margin-left: calc(2px + 1rem);
  font-size: 1.6rem;
  font-weight: 600;
`;

export { InputGroup, InputFiled, InputLabel };
