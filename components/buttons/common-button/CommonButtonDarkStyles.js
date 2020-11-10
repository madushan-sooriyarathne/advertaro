import styled from "styled-components";
import { CallToActionButton } from "../ctaButton/CTAButtonStyles";

const DarkButton = styled(CallToActionButton)`
  border: ${(props) => `2px solid ${props.theme.colorSecondary}`};
  color: ${(props) => props.theme.colorSecondary};
  background-color: transparent;

  &:hover {
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => props.theme.colorSecondary};
  }

  ${(props) => props.theme.responsiveLowest} {
    border: ${(props) => `1px solid ${props.theme.colorSecondary}`};
  }
`;

export { DarkButton };
