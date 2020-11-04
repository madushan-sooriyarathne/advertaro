import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  min-height: 100vh;
  overflow: hidden;
  position: relative;

  display: grid;
  grid-template-columns:
    [full-start] minmax(5rem, 1fr) [content-start] repeat(
      8,
      [col-start] minmax(min-content, 20rem) [col-end]
    )
    [content-end] minmax(5rem, 1fr) [full-end];
`;

export { Wrapper };
