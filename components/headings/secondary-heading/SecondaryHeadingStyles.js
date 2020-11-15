import styled from "styled-components";

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 300;
  font-family: ${(props) => props.theme.fontPrimary};
  color: ${(props) => props.theme.colorSecondary};
  letter-spacing: 0.5px;

  ${(props) => props.theme.responsiveHigh} {
    font-size: 1.8rem;
  }
`;

export { Heading };
