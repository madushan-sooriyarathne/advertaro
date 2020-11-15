import styled from "styled-components";

const ErrorWrapper = styled.section`
  grid-column: content-start / content-end;

  min-height: 100vh;
  padding: ${(props) => `calc(${props.theme.navBarHeight} + 5rem) 0 10rem 0`};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;

  & > * {
    text-align: center;
  }
`;

const ErrorImage = styled.img`
  height: 40rem;
  margin-bottom: 5rem;

  ${(props) => props.theme.responsiveLower} {
    width: 100%;
    height: auto;
  }
`;

export { ErrorWrapper, TitleGroup, ErrorImage };
