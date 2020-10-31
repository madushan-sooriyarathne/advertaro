import {
  HeadingWrapper,
  NavBarWrapper,
  Logo,
  NavLinkSet,
  NavLink,
} from "./NavBarStyles";
import Link from "next/link";

const NavBar = ({ navLinks }) => {
  return (
    <HeadingWrapper>
      <NavBarWrapper>
        <Link href="/">
          <Logo src="/static/img/advertaro-logo.svg" alt="advertaro logo" />
        </Link>

        <NavLinkSet>
          {navLinks.map((link) => (
            <Link href={link.href} key={link.name}>
              <NavLink>{link.name}</NavLink>
            </Link>
          ))}
        </NavLinkSet>
      </NavBarWrapper>
    </HeadingWrapper>
  );
};

export default NavBar;
