import styled from "styled-components";
import pxIntoRem from "../../utils/pxIntoRem";

const IndexBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const IndexMainBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: ${pxIntoRem(672)};
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const IndexBlurredRectangle = styled.div`
  position: absolute;
  bottom: ${pxIntoRem(-28)};
  width: ${pxIntoRem(1916)};
  height: ${pxIntoRem(254)};
  background: #030512;
  filter: blur(${pxIntoRem(32)});
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 99;
  @media (max-width: 500px) {
    width: ${pxIntoRem(700)};
    height: ${pxIntoRem(131)};
    bottom: ${pxIntoRem(-40)};
  }
`;

const IndexUpperBackgroundBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: ${pxIntoRem(-29)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(77)};
    height: auto;
  }
`;

const IndexUpperBackgroundPicture = styled.picture`
  position: absolute;
  width: 100%;
  z-index: 99;
  padding: 0 ${pxIntoRem(35)};
  filter: drop-shadow(0px 24px 234px rgba(0, 0, 0, 0.20));
  @media (max-width: 500px) {
    padding: 0;
    aspect-ratio: initial;
  }
`;

const IndexUpperBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

const IndexUpperBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(100)};
  height: ${pxIntoRem(100)};
  top: 17%;
  right: ${pxIntoRem(-50)};
  border-radius: 50%;
  background: #1683E2;
  filter: blur(${pxIntoRem(176.5)});
  z-index: 9999;
  @supports (-moz-appearance:none) {
    position: absolute;
    top: 17%;
    right: ${pxIntoRem(-50)};
    background-image: url(/images/blurred-circle-small.svg);
    display: none;
  }
`;

const IndexLowerBackgroundBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: ${pxIntoRem(805)};
  margin-top: ${pxIntoRem(23)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(100)};
    height: auto;
  }
`;

const IndexLowerBackgroundPicture = styled.picture`
  width: 100%;
  height: ${pxIntoRem(805)};
  position: absolute;
  padding-left: ${pxIntoRem(35)};
  padding-right: ${pxIntoRem(35)};
  z-index: 99;
  filter: drop-shadow(0px 24px 234px rgba(0, 0, 0, 0.20));
  @media (max-width: 500px) {
    height: ${pxIntoRem(279)};
    bottom: 0px;
    padding-left: 0;
    padding-right: 0;
  }
`;

const IndexLowerBackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;

const IndexLowerBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(100)};
  height: ${pxIntoRem(100)};
  top: 52%;
  right: ${pxIntoRem(-50)};
  border-radius: 50%;
  background: #1683E2;
  filter: blur(${pxIntoRem(176.5)});
  @supports (-moz-appearance:none) {
    position: absolute;
    top: 52%;
    right: ${pxIntoRem(-50)};
    background-image: url(/images/blurred-circle-small.svg);
    display: none;
  }
`;

const IndexMiddleBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(100)};
  height: ${pxIntoRem(100)};
  top: ${pxIntoRem(1300)};
  left: 33%;
  border-radius: 50%;
  background: #1683E2;
  filter: blur(${pxIntoRem(176.5)});
  @supports (-moz-appearance:none) {
    position: absolute;
    top: ${pxIntoRem(1300)};
    left: 33%;
    background-image: url(/images/blurred-circle-small.svg);
    display: none;
  }
`;

const IndexBottomLeftBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(100)};
  height: ${pxIntoRem(100)};
  top: 91%;
  left: ${pxIntoRem(-50)};
  border-radius: 50%;
  background: #1683E2;
  filter: blur(${pxIntoRem(176.5)});
  @supports (-moz-appearance:none) {
    position: absolute;
    top: 91%;
    left: ${pxIntoRem(-50)};
    background-image: url(/images/blurred-circle-small.svg);
    display: none;
  }
  @media (max-width: 500px) {
    width: ${pxIntoRem(80)};
    height: ${pxIntoRem(80)};
    top: ${pxIntoRem(1630)};
    left: ${pxIntoRem(-40)};
    filter: blur(${pxIntoRem(176.5)});
  }
`;

const IndexBottomRightBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(100)};
  height: ${pxIntoRem(100)};
  top: 92%;
  right: ${pxIntoRem(-50)};
  border-radius: 50%;
  background: #1683E2;
  filter: blur(${pxIntoRem(176.5)});
  @supports (-moz-appearance:none) {
    position: absolute;
    top: 92%;
    right: ${pxIntoRem(-50)};
    background-image: url(/images/blurred-circle-small.svg);
    display: none;
  }
  @media (max-width: 500px) {
    width: ${pxIntoRem(80)};
    height: ${pxIntoRem(80)};
    top: ${pxIntoRem(1630)};
    right: ${pxIntoRem(-40)};
    filter: blur(${pxIntoRem(176.5)});
  }
`;

export {
  IndexBlock,
  IndexMainBlock,
  IndexBlurredRectangle,
  IndexUpperBackgroundBlock,
  IndexUpperBackgroundPicture,
  IndexUpperBackgroundImage,
  IndexUpperBlurredCircle,
  IndexLowerBackgroundBlock,
  IndexLowerBackgroundPicture,
  IndexLowerBackgroundImage,
  IndexLowerBlurredCircle,
  IndexMiddleBlurredCircle,
  IndexBottomLeftBlurredCircle,
  IndexBottomRightBlurredCircle
};
