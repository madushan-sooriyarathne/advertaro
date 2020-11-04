import {
  HeadingWrapper,
  NavBarWrapper,
  Logo,
  NavLinkSet,
  ActiveNavLink,
  NavLink,
} from "./NavBarStyles";
import Link from "next/link";
import { useRouter } from "next/router";

const toggleActive = (navLink) => {
  const router = useRouter();

  if (router.pathname === navLink.href) {
    return (
      <Link href={navLink.href}>
        <ActiveNavLink>{navLink.name}</ActiveNavLink>
      </Link>
    );
  } else {
    return (
      <Link href={navLink.href}>
        <NavLink>{navLink.name}</NavLink>
      </Link>
    );
  }
};

const NavBar = ({ navLinks }) => {
  return (
    <HeadingWrapper>
      <NavBarWrapper>
        <Link href="/">
          <Logo src="/static/img/advertaro-logo.svg" alt="advertaro logo" />
        </Link>

        <NavLinkSet>{navLinks.map((link) => toggleActive(link))}</NavLinkSet>
      </NavBarWrapper>
    </HeadingWrapper>
  );
};

export default NavBar;
