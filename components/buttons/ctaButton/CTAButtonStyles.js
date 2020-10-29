import styled from "styled-components";

const CallToActionButton = styled.button`
  position: relative;
  padding: 1rem 1.5rem;
  border: ${(props) => `2px solid ${props.theme.colorWhite}`};

  outline: none;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  color: ${(props) => props.theme.colorWhite};
  background-color: transparent;

  cursor: pointer;
  transition: color 0.3s ease-in, background-color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colorSecondary};
    background-color: ${(props) => props.theme.colorWhite};
  }
`;

export { CallToActionButton };
