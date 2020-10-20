import { NavBarComponent, Logo, NavLinkSet, NavLink } from "./NavBarStyles";
import Link from "next/link";

const NavBar = ({ navLinks }) => {
  return (
    <NavBarComponent>
      <Logo src="/static/img/advertaro-logo.svg" alt="advertaro logo" />
      <NavLinkSet>
        {navLinks.map((link) => (
          <Link href={link.href} key={link.name}>
            <NavLink>{link.name}</NavLink>
          </Link>
        ))}
      </NavLinkSet>
    </NavBarComponent>
  );
};

export default NavBar;
