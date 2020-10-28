import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  min-height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-rows: [nav-start] max-content [nav-end content-start] 1fr [content-end footer-start] max-content [footer-end];
`;

const FooterWrapper = styled.footer`
  grid-row: footer-start / footer-end;
`;

const Content = styled.div`
  grid-row: content-start / content-end;
`;

export { Wrapper, Content, FooterWrapper };
