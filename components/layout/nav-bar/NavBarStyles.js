import styled from "styled-components";

const HeadingWrapper = styled.header`
  position: absolute;
  top: 0;
  display: grid;
  grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
  width: 100vw;
  padding: 3rem 0;

  background-color: rgba(0, 0, 0, 0.6);
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
  height: 5rem;
`;

const NavLinkSet = styled.nav`
  grid-column: nav-start / nav-end;
  justify-self: end;

  display: "flex";
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
  color: ${(props) => props.theme.colorWhite};
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colorPrimaryLite};
  }
`;

export { HeadingWrapper, NavBarWrapper, Logo, NavLinkSet, NavLink };
