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

  margin-bottom: 3rem;
`;

const BoxTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  font-family: ${(props) => props.theme.fontPrimary};
  letter-spacing: 1px;
  color: ${(props) => props.theme.colorSecondary};
  text-transform: uppercase;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  font-family: ${(props) => props.theme.fontPrimary};
  line-height: 2.4rem;

  color: ${(props) => props.theme.colorSecondary};
`;

export { Box, Image, BoxTitle, Description };
