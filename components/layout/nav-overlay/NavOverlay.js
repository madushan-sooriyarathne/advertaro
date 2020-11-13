import Link from "next/link";
import { useRouter } from "next/router";

import { useContext, useEffect } from "react";
import {
  NavBarContext,
  NavBarDispatchContext,
} from "../../../context/NavBarContext";

import { NavLinkWrapper, NavLink, Overlay } from "./NavOverlayStyles";

const NavOverlay = ({ navLinks }) => {
  const router = useRouter();

  const NavBarOpen = useContext(NavBarContext);
  const setNavBarOpen = useContext(NavBarDispatchContext);

  const handleClose = (url) => {
    setNavBarOpen(false);
  };

  useEffect(() => {
    router.events.on("routeChangeComplete", handleClose);
  });

  return (
    <Overlay open={NavBarOpen}>
      <NavLinkWrapper>
        {navLinks.map((item) => (
          <Link href={item.href} key={item.name.toLowerCase()}>
            <NavLink>{item.name}</NavLink>
          </Link>
        ))}
      </NavLinkWrapper>
    </Overlay>
  );
};

export default NavOverlay;
