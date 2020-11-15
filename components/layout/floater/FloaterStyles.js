import styled from "styled-components";

const Button = styled.div`
  position: fixed;
  right: 5rem;
  bottom: 5rem;

  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  padding: 1.5rem;
  z-index: 2;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: ${(props) => props.theme.boxShadowNormal};

  cursor: pointer;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }

  ${(props) => props.theme.responsiveLower} {
    padding: 1rem;
  }
`;

const Symbol = styled.svg`
  width: 2rem;
  height: 2rem;
  fill: ${(props) => props.theme.colorGray};
`;

export { Button, Symbol };
