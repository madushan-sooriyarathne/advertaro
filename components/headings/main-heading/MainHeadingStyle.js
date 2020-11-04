import styled from "styled-components";

const Heading = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  font-family: ${(props) => props.theme.fontPrimary};
  letter-spacing: 3px;
  color: ${(props) => props.theme.colorSecondary};
`;

export { Heading };
