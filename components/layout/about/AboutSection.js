import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import { Container, Group, Description } from "./AboutSectionStyles";

const AboutSection = () => {
  return (
    <Container>
      <Group>
        <MainHeading>We Are</MainHeading>
        <SecondaryHeading>
          a Small Digital Agency with Big Solutions
        </SecondaryHeading>
        <Description>
          We help small to medium business / organizations to Digital with
          <br></br> our comprehensive & result-oriented Marketing Solutions
        </Description>
      </Group>
    </Container>
  );
};

export default AboutSection;
