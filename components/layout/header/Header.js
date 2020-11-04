import Link from "next/link";

import { HeaderContainer, Logo } from "./HeaderStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <Logo src="/static/img/advertaro-logo.svg" alt="advertaro logo" />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
