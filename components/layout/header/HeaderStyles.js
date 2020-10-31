import styled from "styled-components";

const HeaderContainer = styled.div`
  height: ${(props) => props.theme.navBarHeight};
  background-image: url("/static/img/heading-bg.svg");
  background-size: cover;
`;

export { HeaderContainer };
