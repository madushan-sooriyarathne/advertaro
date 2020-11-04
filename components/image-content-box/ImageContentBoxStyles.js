import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Image = styled.img`
  width: 100%;
  padding-top: 100%;
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
`;

const BoxTitle = styled.h3`
  font-size: 2rem;
  font-weight: 600;
  color: ${(props) => props.theme.colorSecondary};
  text-transform: uppercase;
`;

const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: ${(props) => props.theme.colorSecondary};
`;

export { Box, Image, BoxTitle, Description };
