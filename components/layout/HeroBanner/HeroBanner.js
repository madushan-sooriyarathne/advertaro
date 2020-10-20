import CTAButton from "../../buttons/ctaButton/CTAButton";
import { Container, CTAGroup, Heading, SubHeading } from "./HeroBannerStyles";

const HeroBanner = () => {
  return (
    <Container>
      <CTAGroup>
        <SubHeading>We help companies to go</SubHeading>
        <Heading>Digital</Heading>
        <CTAButton text="Get in Touch" url="/contact"></CTAButton>
      </CTAGroup>
    </Container>
  );
};

export default HeroBanner;
