import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const AppInterfaceBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

const AppInterfaceContent = styled.main`
  position: relative;
  width: calc(100% - ${pxIntoRem(256)});
  height: auto;
  margin-left: auto;
  margin-right: 0;
  z-index: 999;
  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }
`;

const AppInterfaceBlurredCircleBottomLeft = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: ${pxIntoRem(228)};
  height: ${pxIntoRem(228)};
  background: linear-gradient(44deg, #0781FE 0%, #00C7B4 100%);
  opacity: 0.2;
  border-radius: 50%;
  filter: blur(197px);
  -webkit-transform: translate3d(0, 0, 0);
  @supports (-moz-appearance:none) {
    position: fixed;
    bottom: 0;
    right: 0;
    background-image: url(/images/blurred-circle-big.svg);
  }
`;

const AppInterfaceEmailVerificationBlock = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  width: ${pxIntoRem(753)};
  height: ${pxIntoRem(95)};
  left: ${pxIntoRem(296)};
  bottom: ${pxIntoRem(30)};
  z-index: 999;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(12)};
    border: 2px solid transparent;
    background: linear-gradient(181deg, rgba(32, 34, 48, 0.7) 1.02%, rgba(32, 33, 41, 0) 128.15%) border-box;
    -webkit-mask:
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
  @media (max-width: 500px) {
    left: ${pxIntoRem(15)};
    right: ${pxIntoRem(15)};
    bottom: ${pxIntoRem(20)};
    width: auto;
    height: auto;
  }
`;

const AppInterfaceEmailVerificationBlockBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: #171828;
  border-radius: ${pxIntoRem(12)};
`;

const AppInterfaceEmailVerificationIcon = styled.img`
  width: ${pxIntoRem(19)};
  height: ${pxIntoRem(19)};
  margin-top: ${pxIntoRem(16)};
  margin-left: ${pxIntoRem(16)};
  z-index: 999;
`;

const AppInterfaceEmailVerificationText = styled.p`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: ${pxIntoRem(16)} ${pxIntoRem(20)} ${pxIntoRem(16)} ${pxIntoRem(16)};
  z-index: 999;
  span {
    color: #FFF;
  }
`;

const AppInterfaceEmailVerificationClose = styled.button`
  position: absolute;
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  top: ${pxIntoRem(10)};
  right: ${pxIntoRem(10)};
  background: transparent;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const AppInterfaceEmailVerificationCloseIcon = styled.svg`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  stroke: #79768B;
  transition: 0.3s;
  &:hover {
    stroke: #FFF;
  } 
`;
 
export {
  AppInterfaceBlock,
  AppInterfaceContent,
  AppInterfaceBlurredCircleBottomLeft,
  AppInterfaceEmailVerificationBlock,
  AppInterfaceEmailVerificationBlockBackgroundLayer,
  AppInterfaceEmailVerificationIcon,
  AppInterfaceEmailVerificationText,
  AppInterfaceEmailVerificationClose,
  AppInterfaceEmailVerificationCloseIcon
};