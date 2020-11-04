import styled from "styled-components";

const ErrorWrapper = styled.section`
  grid-column: content-start / content-end;

  min-height: 100vh;
  padding-top: ${(props) => `calc(${props.theme.navBarHeight} + 5rem)`};

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
`;

const ErrorImage = styled.img`
  height: 40rem;
  margin-bottom: 5rem;
`;

export { ErrorWrapper, TitleGroup, ErrorImage };
