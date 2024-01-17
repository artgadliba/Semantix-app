import styled, { keyframes } from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const LoadingAnimation = keyframes`
  0% { fill-opacity: 1; r: 3; }
  16.666% { fill-opacity: 0.9; r: 2.9; }
  16.667% { fill-opacity: 0.8; r: 2.8; }
  33.333% { fill-opacity: 0.7; r: 2.7; }
  50% { fill-opacity: 0.6; r: 2.6; }
  66.666% { fill-opacity: 0.5; r: 2.5; }
  66.666% { fill-opacity: 0.4; r: 2.4; }
  83.333% { fill-opacity: 0.3; r: 2.3; }
  100% { fill-opacity: 0.2; r: 2.2; }
`;

const LoadingIcon = styled.svg`
  margin-top: ${pxIntoRem(24)};
  margin-left: ${pxIntoRem(24)};
  width: ${pxIntoRem(48)};
  height: ${pxIntoRem(66)};
  .upload_circle_1 {
    animation: ${LoadingAnimation} 1.5s infinite;
  }
  .upload_circle_2 {
    animation: ${LoadingAnimation} 1.5s infinite 0.25s;
  }
  .upload_circle_3 {
    animation: ${LoadingAnimation} 1.5s infinite 0.5s;
  }
  .upload_circle_4 {
    animation: ${LoadingAnimation} 1.5s infinite 0.75s;
  }
  .upload_circle_5 {
    animation: ${LoadingAnimation} 1.5s infinite 1s;
  }
  .upload_circle_6 {
    animation: ${LoadingAnimation} 1.5s infinite 1.25s;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const LoadingIconMobile = styled.svg`
  display: none;
  width: ${pxIntoRem(38)};
  height: ${pxIntoRem(50)};
  .upload_circle_1 {
    animation: ${LoadingAnimation} 1.5s infinite;
  }
  .upload_circle_2 {
    animation: ${LoadingAnimation} 1.5s infinite 0.25s;
  }
  .upload_circle_3 {
    animation: ${LoadingAnimation} 1.5s infinite 0.5s;
  }
  .upload_circle_4 {
    animation: ${LoadingAnimation} 1.5s infinite 0.75s;
  }
  .upload_circle_5 {
    animation: ${LoadingAnimation} 1.5s infinite 1s;
  }
  .upload_circle_6 {
    animation: ${LoadingAnimation} 1.5s infinite 1.25s;
  }
  @media (max-width: 500px) {
    display: block;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  top: ${pxIntoRem(16)};
  right: ${pxIntoRem(16)};
  background: transparent;
  justify-content: center;
  align-items: center;
  z-index: 999;
  &:focus-visible {
    border-radius: ${pxIntoRem(4)};
    outline: 1px solid rgba(22, 131, 226, 1);
    outline-offset: -1px;
  }
`;

const ModalCloseButtonIcon = styled.svg`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  stroke: #79768B;
  transition: 0.3s;
  &:hover {
    stroke: #FFF;
  } 
`;

const ModalOutsideClose = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

const ModalExternalBlock = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.70);
`;

const ModalBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(12)};
  background: #16161F;
  width: 100%;
  height: 100%;
`;

const TooltipIcon = styled.svg`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  fill: #1B1D2C;
`;

const InputButtonIcon = styled.svg`
  display: flex;
  width: ${pxIntoRem(20)};
  heigth: ${pxIntoRem(20)};
  stroke: #393952;
`;

const MainButtonStyles = `
  display: flex;
  position: relative;
  width: ${pxIntoRem(386)};
  height: ${pxIntoRem(42)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(8)};
  background: #1683E2;
  margin: ${pxIntoRem(24)} ${pxIntoRem(32)} ${pxIntoRem(32)} ${pxIntoRem(32)};
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #1668E2;
    box-shadow: 0px 0px ${pxIntoRem(24)} 0px rgba(22, 104, 226, 0.50);
    transition: 0.3s;
  }
  &:focus-visible {
    background: #1668E2;
    box-shadow: 0px 0px ${pxIntoRem(24)} 0px rgba(22, 104, 226, 0.50);
    transition: 0.3s;
  }
  &:disabled {
    border: 1px solid #2D3042;
    color: #2D3042;
    background: transparent;
    pointer-events: none;
  }
`;

export {
    LoadingAnimation,
    LoadingIcon,
    LoadingIconMobile,
    ModalCloseButton,
    ModalCloseButtonIcon,
    ModalOutsideClose,
    ModalExternalBlock,
    ModalBackgroundLayer, 
    TooltipIcon,
    InputButtonIcon,
    MainButtonStyles
};