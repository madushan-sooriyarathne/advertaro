import {
  HeadingWrapper,
  NavBarWrapper,
  Logo,
  NavLinkSet,
  ActiveNavLink,
  NavLink,
  NavHamburger,
  HamburgerSlice,
} from "./NavBarStyles";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import {
  NavBarContext,
  NavBarDispatchContext,
} from "../../../context/NavBarContext";

const toggleActive = (navLink) => {
  const router = useRouter();

  if (router.pathname === navLink.href) {
    return (
      <Link href={navLink.href} key={navLink.name.toLowerCase()}>
        <ActiveNavLink>{navLink.name}</ActiveNavLink>
      </Link>
    );
  } else {
    return (
      <Link href={navLink.href} key={navLink.name.toLowerCase()}>
        <NavLink>{navLink.name}</NavLink>
      </Link>
    );
  }
};

const NavBar = ({ navLinks }) => {
  const navBarOpen = useContext(NavBarContext);
  const setNavBarOpen = useContext(NavBarDispatchContext);

  const handleClick = (event) => {
    setNavBarOpen(!navBarOpen);
  };

  return (
    <HeadingWrapper>
      <NavBarWrapper>
        <Link href="/">
          <Logo src="/static/img/svg/advertaro-logo.svg" alt="advertaro logo" />
        </Link>

        <NavLinkSet>{navLinks.map((link) => toggleActive(link))}</NavLinkSet>
        <NavHamburger onClick={handleClick}>
          <HamburgerSlice open={navBarOpen} />
        </NavHamburger>
      </NavBarWrapper>
    </HeadingWrapper>
  );
};

export default NavBar;
