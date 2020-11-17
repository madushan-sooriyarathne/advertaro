import styled, { keyframes } from "styled-components";

const Container = styled.section`
  grid-column: full-start / full-end;

  display: grid;

  grid-template-columns: repeat(2, minmax(max-content, 1fr));
  grid-auto-rows: max-content;
  grid-template-areas: "ct im";

  justify-content: center;
  align-items: center;

  height: 100vh;
  background: url("/static/img/svg/hero-bg.svg"),
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(37, 16, 4, 1) 35%,
      rgba(0, 0, 0, 1) 100%
    );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;

  padding: 10rem 5rem;

  & > * {
    padding: 10rem;
  }

  ${(props) => props.theme.responsiveMediumHigh} {
    height: 80vh;
  }

  ${(props) => props.theme.responsiveMedium} {
    height: 70vh;
    & > * {
      padding: 5rem;
    }
  }

  ${(props) => props.theme.responsiveLower} {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-areas:
      "ct"
      "im";
    padding: 5rem;
  }
`;

const CTAGroup = styled.div`
  grid-area: ct;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 10rem 10rem 10rem 20rem;

  & > * {
    text-align: center;
  }

  ${(props) => props.theme.responsiveLower} {
    min-height: 50vh;
    align-items: center;
    padding: 10rem;
  }
`;

const ImageWrapper = styled.div`
  grid-area: im;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 65rem;

  ${(props) => props.theme.responsiveHighest} {
    height: 60rem;
    align-self: flex-end;
  }

  ${(props) => props.theme.responsiveLower} {
    min-height: 65rem;
    align-items: center;
  }
`;

const Heading = styled.h2`
  font-size: 10rem;
  font-weight: 700;
  font-family: ${(props) => props.theme.fontSecondary};
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colorPrimary};
  margin-bottom: 2rem;
`;

const SubHeading = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  font-family: ${(props) => props.theme.fontPrimary};
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colorWhite};

  @media only screen and (max-width: 26.875em) {
    font-size: 2.5rem;
  }
`;

export { Container, CTAGroup, ImageWrapper, Image, Heading, SubHeading };
