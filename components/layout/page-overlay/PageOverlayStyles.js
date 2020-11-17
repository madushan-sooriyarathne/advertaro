import styled, { keyframes } from "styled-components";

const FadeIn = keyframes`
    from {
        opacity: 1;
        visibility: visible;
    }

    to {
        opacity: 0;
        visibility: hidden;
    }

`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 130;
  opacity: 1;
  visibility: visible;
  background-color: ${(props) => props.theme.colorWhite};

  animation: ${FadeIn} ease-in-out forwards 0.5s;
`;

export { Overlay };
