import styled from "styled-components";

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.colorSecondary};
  letter-spacing: 2px;
`;

export { Heading };
