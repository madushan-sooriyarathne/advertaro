import NavBar from "../nav-bar/NavBar";
import Footer from "../footer/Footer";

import { Wrapper, Content, FooterWrapper } from "./PageStyles";

const Page = ({ children }) => {
  return (
    <Wrapper>
      <NavBar
        navLinks={[
          { href: "/about", name: "About" },
          { href: "/case-studies", name: "Case Studies" },
          { href: "/contact", name: "Contact" },
        ]}
      ></NavBar>

      <Content>{children}</Content>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </Wrapper>
  );
};

export default Page;
