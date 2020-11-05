import styled from "styled-components";

const Bar = styled.div`
  position: fixed;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  bottom: ${(props) => (props.show ? "3rem" : "-10rem")};
  left: 3rem;

  min-width: 30rem;
  max-width: 60rem;
  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;
  justify-items: start;

  border-radius: 3px;
  padding: 2rem;

  background-color: ${(props) => props.theme.colorBlack};

  transition: bottom 0.2s ease-in-out;
`;

const Message = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${(props) => props.theme.colorWhite};
`;

const CloseButton = styled.svg`
  justify-self: center;

  height: 1.5rem;
  width: 1.5rem;
  fill: ${(props) => props.theme.colorWhite};
  transition: fill 0.2s ease-in-out;

  &:hover {
    fill: ${(props) => props.theme.colorPrimaryLite};
  }

  cursor: pointer;
`;

export { Bar, Message, CloseButton };
