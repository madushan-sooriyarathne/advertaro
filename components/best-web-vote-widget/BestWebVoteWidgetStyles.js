import styled from "styled-components";

const Widget = styled.a`
  position: fixed;
  bottom: 0;
  left: 2rem;
  background-color: ${(props) => props.theme.colorWhite};
  padding: 1rem;
  height: auto;
  width: auto;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  row-gap: 0.5rem;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  z-index: 290;
  box-shadow: ${(props) => props.theme.boxShadowNormal};

  & > div {
    width: 10rem;
    height: 10rem;
  }

  & > span {
    font-family: ${(props) => props.theme.fontPrimary};
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: ${(props) => props.theme.colorPrimary};
    text-align: center;
  }
`;

const Image = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: contain;
`;

export { Widget, Image };
