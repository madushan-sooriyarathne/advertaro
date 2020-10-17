import Page from "../components/Page";
import styled from "styled-components";

const Index = () => {
  return (
    <Page>
      <Landing>
        <Branding>
          <Logo src="/static/img/advertaro-logo.svg" alt="advertaro logo" />
        </Branding>
        <CallToActionWrap>
          <Heading>Website is Under</Heading>
          <HeadingBlue>Construction</HeadingBlue>
          <ContactBox>
            <ContactText>
              For inquiries, Please feel free to contact on
            </ContactText>
            <ContactNumber>071 688 0657</ContactNumber>
          </ContactBox>
        </CallToActionWrap>
        <FooterText>© Advertaro {new Date().getFullYear()}</FooterText>
      </Landing>
    </Page>
  );
};

const Landing = styled.div`
  width: 100%;
  height: 100%;
  background: #feeeea;
  background-image: url("/static/img/main-bg.svg");
  background-position: right;
  background-repeat: no-repeat;

  display: grid;
  grid-template-columns:
    [full-start] minmax(6rem, 10rem)
    [content-start] 1fr [mid] 1fr [min-end] minmax(6rem, 10rem)
    [full-end];
  grid-template-rows: [nav-bar-start] max-content [nav-bar-end main-start] 1fr [main-end footer-start] min-content [footer-end];
  align-items: center;
  justify-items: start;
`;

const Branding = styled.div`
  grid-column: content-start / mid;
  grid-row: nav-bar-start / nav-bar-end;
  margin: 5rem 0;
`;

const Logo = styled.img`
  height: 4rem;
`;

const CallToActionWrap = styled.div`
  justify-self: center;
  grid-column: content-start / mid;
  grid-row: main-start / main-end;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.p`
  font-size: 6rem;
  font-weight: 900;
  color: #162550;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const HeadingBlue = styled(Heading)`
  color: #23356e;
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

const ContactText = styled.p`
  color: #162550;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: 1px;
`;

const ContactNumber = styled.p`
  margin-top: 1rem;
  color: #162550;
  font-size: 4rem;
  font-weight: 500;
  letter-spacing: 2px;
`;

const FooterText = styled.p`
  justify-self: center;
  grid-column: content-start / mid-end;
  grid-row: footer-start / footer-end;
  font-size: 1.8rem;
  font-weight: 500;
  color: #2a3039;
  margin: 2rem 0;
`;
export default Index;
