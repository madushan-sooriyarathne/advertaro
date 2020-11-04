import Footer from "../footer/Footer";
import NavBar from "../nav-bar/NavBar";

import { Wrapper } from "./PageStyles";

const Page = ({ children }) => {
  return (
    <Wrapper>
      <NavBar
        navLinks={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Case Studies", href: "/case-studies" },
          { name: "contact", href: "/contact" },
        ]}
      />
      {children}

      <Footer />
    </Wrapper>
  );
};

export default Page;
