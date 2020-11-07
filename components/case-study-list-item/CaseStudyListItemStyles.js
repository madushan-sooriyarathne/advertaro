import styled from "styled-components";

const ItemBox = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  width: 100%;
  padding-top: 100%;
  background-image: ${(props) =>
    `linear-gradient(180deg, rgba(191,78,10,0.4) 0%, rgba(79,39,3,0.4) 100%), url(${props.image});`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  box-shadow: ${(props) => props.theme.boxShadowNormal};

  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: ${(props) => props.theme.boxShadowHover};
  }
`;

const Title = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 100%;
  height: 100%;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 2px;
  font-family: ${(props) => props.theme.fontPrimary};
  color: ${(props) => props.theme.colorWhite};
  text-align: center;
`;

export { ItemBox, Title };
