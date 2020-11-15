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
    `linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 10%, rgba(0,0,0,0) 100%), url(${props.image})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease;
  box-shadow: ${(props) => props.theme.boxShadowNormal};

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }
`;

const Name = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  font-family: ${(props) => props.theme.fontPrimary};
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.colorWhite};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(0.5rem);
  }
`;

export { Box, Name };
