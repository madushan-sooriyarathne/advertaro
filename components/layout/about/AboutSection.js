import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import { Container, TitleGroup, Description } from "./AboutSectionStyles";

const AboutSection = () => {
  return (
    <Container>
      <TitleGroup>
        <MainHeading>If your Business is a Story</MainHeading>
        <SecondaryHeading>
          We tell it to people by making sure they’ll be all ears.
        </SecondaryHeading>
      </TitleGroup>
      <Description>
        We are an independent creative marketing firm on Business-to-consumer
        model assisting modest to substantial businesses to perform on digital
        and Tradition platforms with a result-driven framework.
      </Description>
    </Container>
  );
};

export default AboutSection;
