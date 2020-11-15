import Footer from "../footer/Footer";
import NavBar from "../nav-bar/NavBar";
import SnackBar from "../../snack-bar/SnackBar";

import { Wrapper } from "./PageStyles";
import NavOverlay from "../nav-overlay/NavOverlay";
import Floater from "../floater/Floater";

const Page = ({ children }) => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <Wrapper>
      <NavOverlay navLinks={navLinks} />
      <NavBar navLinks={navLinks} />
      {children}

      <Footer navLinks={navLinks} />
      <SnackBar />
      <Floater />
    </Wrapper>
  );
};

export default Page;
