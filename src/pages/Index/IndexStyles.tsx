import styled from "styled-components";
import pxIntoRem from "../../utils/pxIntoRem";

const IndexBlock = styled.div`
  position: relative;
  display: block;
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
  bottom: ${pxIntoRem(-38)};
  width: ${pxIntoRem(1916)};
  height: ${pxIntoRem(254)};
  background: #030512;
  filter: blur(${pxIntoRem(32)});
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 99;
  @media (max-width: 500px) {
    display: none;
  }
`;

const IndexUpperBackgroundBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: ${pxIntoRem(-29)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(143)};
    height: auto;
  }
`;

const IndexUpperBackgroundPicture = styled.picture`
  position: absolute;
  width: 100%;
  z-index: 999999;
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
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  z-index: 999999;
  @supports (-moz-appearance: none) {
    opacity: 0.05;
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
  position: absolute;
  width: 100%;
  height: ${pxIntoRem(805)};
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
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  @supports (-moz-appearance: none) {
    opacity: 0.05;
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
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  @supports (-moz-appearance: none) {
    opacity: 0.05;
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
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  @supports (-moz-appearance: none) {
    opacity: 0.05;
  }
  @media (max-width: 500px) {
    width: ${pxIntoRem(80)};
    height: ${pxIntoRem(80)};
    top: ${pxIntoRem(1630)};
    left: ${pxIntoRem(-40)};
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
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden; 
  @supports (-moz-appearance: none) {
    opacity: 0.05;
  }
  @media (max-width: 500px) {
    width: ${pxIntoRem(80)};
    height: ${pxIntoRem(80)};
    top: ${pxIntoRem(1630)};
    right: ${pxIntoRem(-40)};
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
