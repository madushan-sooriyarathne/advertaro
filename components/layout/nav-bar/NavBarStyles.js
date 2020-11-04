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

  &:hover {
    color: ${(props) => props.theme.colorPrimaryLite};
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
