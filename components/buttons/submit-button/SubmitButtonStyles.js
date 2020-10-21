import styled from "styled-components";
import { CallToActionButton } from "../ctaButton/CTAButtonStyles";

const Button = styled(CallToActionButton)`
  border: 2px solid #040404;
  color: #040404;
  align-self: flex-start;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #040404;
    transform: translateX(0.5rem);
  }
`;

export { Button };
