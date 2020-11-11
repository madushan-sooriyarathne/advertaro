import Footer from "../footer/Footer";
import NavBar from "../nav-bar/NavBar";
import SnackBar from "../../snack-bar/SnackBar";

import { Wrapper } from "./PageStyles";

const Page = ({ children }) => {
  return (
    <Wrapper>
      <NavBar
        navLinks={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
          { name: "Case Studies", href: "/casestudies" },
          { name: "contact", href: "/contact" },
        ]}
      />
      {children}

      <Footer />
      <SnackBar />
    </Wrapper>
  );
};

export default Page;
