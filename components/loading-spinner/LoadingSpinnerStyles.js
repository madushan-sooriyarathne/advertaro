import styled, { keyframes } from "styled-components";

const Circle = keyframes`
0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }

`;

const OuterCircle = styled.div`
  display: inline-block;
  transform: translateZ(1px);
`;

const InnerCircle = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colorSecondary};
  animation: ${Circle} 5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
`;

export { OuterCircle, InnerCircle };
