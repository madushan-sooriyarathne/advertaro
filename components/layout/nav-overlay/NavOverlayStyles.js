import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: ${(props) => (props.open ? "transformY(0)" : "translateY(-100%)")};
  z-index: 100;

  width: 100vw;
  height: 100vh;
  padding: 20rem 10rem;

  background: linear-gradient(
    170deg,
    rgba(0, 0, 0, 0.95) 0%,
    rgba(37, 16, 4, 0.95) 35%,
    rgba(0, 0, 0, 0.95) 100%
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease-in-out;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media only screen and (min-width: 37.5625em) {
    display: none;
  }
`;

const NavLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

const NavLink = styled.a`
  font-size: 3rem;
  font-weight: 300;
  font-family: ${(props) => props.theme.fontPrimary};
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.colorWhite};
  outline: none;
  background-image: ${(props) => `linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    ${props.theme.colorWhite} 50%
  )`};
  background-size: 250%;
  transition: all 0.4s;

  padding: 2rem;
  cursor: pointer;

  &:hover {
    background-position: 100%;
    color: ${(props) => props.theme.colorSecondary};
    transform: translateX(1rem);
  }
`;

export { Overlay, NavLinkWrapper, NavLink };
