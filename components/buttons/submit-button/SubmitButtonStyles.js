import styled from "styled-components";
import { CallToActionButton } from "../ctaButton/CTAButtonStyles";

const Button = styled(CallToActionButton)`
  border: ${(props) => `2px solid ${props.theme.colorSecondary}`};
  color: ${(props) => props.theme.colorSecondary};
  align-self: flex-start;
  transition: all 0.2s ease-in-out;
  height: 100%;
  min-width: 13rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${(props) => props.theme.colorWhite};
    background-color: ${(props) => props.theme.colorSecondary};
    transform: translateX(0.5rem);
  }

  ${(props) => props.theme.responsiveLowest} {
    border: ${(props) => `1px solid ${props.theme.colorSecondary}`};
  }
`;

export { Button };
