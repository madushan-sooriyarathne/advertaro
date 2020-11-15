import styled from "styled-components";

const Heading = styled.h1`
  font-size: 5.6rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fontSecondary};
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colorSecondary};

  ${(props) => props.theme.responsiveLower} {
    font-size: 4rem;
  }

  ${(props) => props.theme.responsiveLowest} {
    font-size: 3.5rem;
  }
`;

export { Heading };
