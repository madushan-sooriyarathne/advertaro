import styled from "styled-components";
import { CallToActionButton } from "../ctaButton/CTAButtonStyles";

const DarkButton = styled(CallToActionButton)`
  border: 2px solid #040404;
  color: #040404;
  background-color: transparent;

  &:hover {
    color: #fff;
    background-color: #040404;
  }
`;

export { DarkButton };
