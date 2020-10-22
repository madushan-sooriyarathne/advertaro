import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: [full-start] minmax(6rem, 10rem) [mid-start] 1fr [mid-end] minmax(
      6rem,
      10rem
    );
  grid-template-rows: 1fr max-content;
  align-items: center;
  justify-items: center;
  height: 100vh;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.95) 0%,
      rgba(37, 16, 4, 0.95) 35%,
      rgba(0, 0, 0, 0.95) 100%
    ),
    url("/static/img/hero-background.jpg");
`;

const CTAGroup = styled.div`
  grid-column: mid-start / mid-end;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h2`
  font-size: 7rem;
  font-weight: 900;
  letter-spacing: 3px;
  color: ${(props) => props.theme.colorPrimary};
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const SubHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colorWhite};
  text-transform: uppercase;
`;

export { Container, CTAGroup, Heading, SubHeading };
