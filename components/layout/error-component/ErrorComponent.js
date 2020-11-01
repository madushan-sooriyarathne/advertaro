import {
  ErrorWrapper,
  Container,
  TitleGroup,
  ErrorImage,
} from "./ErrorComponentStyles";
import MainHeading from "../../headings/main-heading/MainHeading";
import SecondaryHeading from "../../headings/secondary-heading/SecondaryHeading";
import CommonButtonDark from "../../buttons/common-button/CommonButtonDark";

const ErrorComponent = ({ message, image }) => {
  return (
    <ErrorWrapper>
      <Container>
        <TitleGroup>
          <MainHeading>Sorry!</MainHeading>
          <SecondaryHeading>{message}</SecondaryHeading>
        </TitleGroup>
        <ErrorImage src={image} alt={message} />

        <CommonButtonDark text="Go back to homepage" url="/"></CommonButtonDark>
      </Container>
    </ErrorWrapper>
  );
};

export default ErrorComponent;
