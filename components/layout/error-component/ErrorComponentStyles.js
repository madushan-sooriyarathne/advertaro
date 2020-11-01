import styled from "styled-components";

const ErrorWrapper = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navBarHeight})`};
  width: 100%;

  display: grid;
  grid-template-columns: ${(props) => props.theme.gridTemplateColumns};
  justify-items: center;
  align-items: center;
`;

const Container = styled.div`
  grid-column: content-start / content-end;
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

export { ErrorWrapper, Container, TitleGroup, ErrorImage };
