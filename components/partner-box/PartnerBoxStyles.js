import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;

  min-width: 25rem;
  min-height: 25rem;
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-color: transparent;
  background-size: 20rem;
  background-repeat: no-repeat;
  padding: 1rem;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  cursor: pointer;
  /* box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.1); */

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }

  ${(props) => props.theme.responsivePhone} {
    box-shadow: ${(props) => props.theme.boxShadowNormal};
  }
`;

export { Box };
