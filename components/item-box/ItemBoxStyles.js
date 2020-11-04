import styled from "styled-components";

const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 1rem 2rem;

  width: 100%;
  height: 100%;
  min-width: 10rem;
  min-height: 35rem;
  background-image: ${(props) =>
    `linear-gradient(0deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%), url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.2s ease-in-out;
  box-shadow: ${(props) => props.theme.boxShadowNormal};

  &:hover {
    background-image: ${(props) =>
      `linear-gradient(0deg, rgba(55,22,2,0.6) 0%, rgba(59,21,3,0) 100%), url(${props.image})`};
    transform: translateY(-0.5rem);
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }
`;

const Name = styled.p`
  font-size: 2rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.fontPrimary};
  letter-spacing: 2px;
  color: ${(props) => props.theme.colorWhite};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(0.5rem);
  }
`;

export { Box, Name };
