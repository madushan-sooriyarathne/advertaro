import NavBar from "../nav-bar/NavBar";

import { Wrapper, Content } from "./PageStyles";

const Page = ({ children }) => {
  return (
    <Wrapper>
      <NavBar
        navLinks={[
          { href: "/about", name: "About" },
          { href: "/work", name: "Work" },
          { href: "/contact", name: "Contact" },
        ]}
      ></NavBar>

      <Content>{children}</Content>
    </Wrapper>
  );
};

export default Page;
