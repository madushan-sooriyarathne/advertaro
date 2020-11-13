import styled from "styled-components";

const Container = styled.section`
  grid-column: full-start / full-end;

  display: flex;

  justify-content: center;
  align-items: center;

  height: 100vh;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(37, 16, 4, 0.7) 35%,
      rgba(0, 0, 0, 0.7) 100%
    ),
    url("/static/img/hero-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding: 10rem 5rem;
`;

const CTAGroup = styled.div`
  grid-column: center-start / center-end;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * {
    text-align: center;
  }
`;

const Heading = styled.h2`
  font-size: 7rem;
  font-weight: 900;
  font-family: ${(props) => props.theme.fontPrimary};
  letter-spacing: 3px;
  color: ${(props) => props.theme.colorPrimary};
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const SubHeading = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.fontPrimary};
  letter-spacing: 2px;
  color: ${(props) => props.theme.colorWhite};
  text-transform: uppercase;

  @media only screen and (max-width: 26.875em) {
    font-size: 2.5rem;
  }
`;

export { Container, CTAGroup, Heading, SubHeading };
