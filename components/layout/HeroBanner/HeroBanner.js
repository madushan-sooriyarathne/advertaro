import Parallax from "parallax-js";
import { useEffect } from "react";

import CTAButton from "../../buttons/ctaButton/CTAButton";

import {
  Container,
  CTAGroup,
  Heading,
  ImageWrapper,
  Image,
  SubHeading,
} from "./HeroBannerStyles";

const HeroBanner = () => {
  useEffect(() => {
    let scene = document.getElementById("scene");
    let parallaxInstance = new Parallax(scene);
  });

  return (
    <Container>
      <CTAGroup>
        <SubHeading>We help companies to go</SubHeading>
        <Heading>Digital</Heading>
        <CTAButton text="Get in Touch" url="/contact"></CTAButton>
      </CTAGroup>
      <ImageWrapper id="scene">
        <Image
          src="/static/img/instagram-phone.png"
          alt="display phone"
          data-depth="0.3"
        />
      </ImageWrapper>
    </Container>
  );
};

export default HeroBanner;
