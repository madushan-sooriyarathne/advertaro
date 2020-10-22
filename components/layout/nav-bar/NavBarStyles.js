import styled from "styled-components";

const NavBarComponent = styled.div`
  position: absolute;
  top: 0;
  display: grid;
  grid-template-columns:
    [full-start] minmax(6rem, 10rem) [content-start] minmax(max-content, 1fr)
    [mid] minmax(max-content, 1fr) [content-end] minmax(6rem, 10rem) [full-end];
  align-items: center;
  justify-items: start;
  width: 100%;
  padding: 3rem 0;

  background-color: rgba(0, 0, 0, 0.6);
`;

const Logo = styled.img`
  grid-column: content-start / mid;
  height: 5rem;
`;

const NavLinkSet = styled.div`
  grid-column: mid / content-end;
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

export { NavBarComponent, Logo, NavLinkSet, NavLink };
