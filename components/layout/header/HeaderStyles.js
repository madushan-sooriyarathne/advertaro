import styled from "styled-components";

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
  align-items: end;
  justify-items: start;
  height: 30rem;

  background-image: url("/static/img/heading-bg.svg");
  background-size: cover;
`;

const ContentWrapper = styled.div`
  grid-column: content-start / content-end;
  padding: 0 0 3rem 0;
`;

export { HeaderContainer, ContentWrapper };
