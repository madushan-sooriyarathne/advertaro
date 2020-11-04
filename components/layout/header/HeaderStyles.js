import styled from "styled-components";

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  height: ${(props) => props.theme.headerHeight};
  width: 100%;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  height: 4rem;
  cursor: pointer;
`;

export { HeaderContainer, Logo };
