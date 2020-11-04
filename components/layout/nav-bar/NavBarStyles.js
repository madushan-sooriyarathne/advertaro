import styled from "styled-components";

const HeadingWrapper = styled.header`
  position: absolute;
  top: 0;
  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr) [content-start] repeat(
      8,
      minmax(min-content, 20rem)
    )
    [content-end] minmax(5rem, 1fr) [full-end];
  width: 100vw;
  min-height: ${(props) => props.theme.navBarHeight};
  padding: 3rem 0;
  z-index: 10;
`;

const NavBarWrapper = styled.div`
  grid-column: content-start / content-end;
  display: grid;
  grid-template-columns: [logo-start] 1fr [logo-end nav-start] 1fr [nav-end];
  gap: 5rem;
  justify-items: start;
  align-items: center;
`;

const Logo = styled.img`
  grid-column: logo-start / logo-end;
  height: 4rem;
  cursor: pointer;
`;

const NavLinkSet = styled.nav`
  grid-column: nav-start / nav-end;
  justify-self: end;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-items: space-between;

  & > *:not(:last-child) {
    margin-right: 4rem;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 600;
  outline: none;
  color: ${(props) => props.theme.colorGray};
  transition: color 0.2s ease-in-out;
  cursor: pointer;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0.8rem;
    background-color: ${(props) => props.theme.colorPrimaryLite};
    top: 50%;
    left: 0;
    z-index: -1;
    transform: rotate(1deg);

    transition: width 0.3s ease-in-out;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }

  &:after {
    position: absolute;
    top: 110%;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: transparent;
  }
`;

const ActiveNavLink = styled(NavLink)`
  &::after {
    background-color: ${(props) => props.theme.colorGray};
  }
`;

export {
  HeadingWrapper,
  NavBarWrapper,
  Logo,
  NavLinkSet,
  ActiveNavLink,
  NavLink,
};
