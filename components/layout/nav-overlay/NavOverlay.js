import Link from "next/link";
import { useContext } from "react";
import {
  NavBarContext,
  NavBarDispatchContext,
} from "../../../context/NavBarContext";

import { NavLinkWrapper, NavLink, Overlay } from "./NavOverlayStyles";

const NavOverlay = ({ navLinks }) => {
  const NavBarOpen = useContext(NavBarContext);
  const setNavBarOpen = useContext(NavBarDispatchContext);

  const handleClose = (event) => {
    setNavBarOpen(false);
  };
  return (
    <Overlay open={NavBarOpen}>
      <NavLinkWrapper>
        {navLinks.map((item) => (
          <Link href={item.href} key={item.name.toLowerCase()}>
            <NavLink onClick={handleClose}>{item.name}</NavLink>
          </Link>
        ))}
      </NavLinkWrapper>
    </Overlay>
  );
};

export default NavOverlay;
