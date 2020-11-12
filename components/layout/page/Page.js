import Footer from "../footer/Footer";
import NavBar from "../nav-bar/NavBar";
import SnackBar from "../../snack-bar/SnackBar";

import { Wrapper } from "./PageStyles";
import NavOverlay from "../nav-overlay/NavOverlay";

const Page = ({ children }) => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Case Studies", href: "/casestudies" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <Wrapper>
      <NavOverlay navLinks={navLinks} />
      <NavBar navLinks={navLinks} />
      {children}

      <Footer />
      <SnackBar />
    </Wrapper>
  );
};

export default Page;
