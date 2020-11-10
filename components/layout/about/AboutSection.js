import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import { Container, TitleGroup, Description } from "./AboutSectionStyles";

const AboutSection = () => {
  return (
    <Container>
      <TitleGroup>
        <MainHeading>We Are</MainHeading>
        <SecondaryHeading>
          a Small Digital Agency with Big Solutions
        </SecondaryHeading>
      </TitleGroup>
      <Description>
        We help small to medium business / organizations to Digital with our
        comprehensive & result-oriented Marketing Solutions
      </Description>
    </Container>
  );
};

export default AboutSection;
