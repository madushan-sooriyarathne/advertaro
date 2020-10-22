import styled from "styled-components";

const Heading = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 3px;
  color: ${(props) => props.theme.colorPrimary};
`;

export { Heading };
