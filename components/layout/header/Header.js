import { HeaderContainer, ContentWrapper } from "./HeaderStyles";
import PageHeading from "../../headings/page-heading/PageHeading";

const Header = ({ title }) => {
  return (
    <HeaderContainer>
      <ContentWrapper>
        <PageHeading>{title}</PageHeading>
      </ContentWrapper>
    </HeaderContainer>
  );
};

export default Header;
