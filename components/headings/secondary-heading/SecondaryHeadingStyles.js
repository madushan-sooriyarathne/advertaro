import styled from "styled-components";

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 300;
  font-family: ${(props) => props.theme.fontSecondary};
  color: ${(props) => props.theme.colorSecondary};
  letter-spacing: 2px;

  ${(props) => props.theme.responsiveHigh} {
    font-size: 2rem;
    letter-spacing: 1px;
  }
`;

export { Heading };
