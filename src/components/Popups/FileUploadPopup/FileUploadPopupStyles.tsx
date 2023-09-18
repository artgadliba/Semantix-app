import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const FileUploadPopupBlock = styled.div`
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

const FileUploadPopupContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${pxIntoRem(450)};
  height:  ${pxIntoRem(245)};
  z-index: 9999;
  position: relative;
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
    width: 90vw;
    height: auto;
  }
`;

const FileUploadPopupBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border-radius: ${pxIntoRem(12)};
  background: #16161F;
`;

const FileUploadPopupTitle = styled.h1`
  position: relative;
  color: #FFF;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(24)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: ${pxIntoRem(40)};
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(18)};
  }
`;

const FileUploadPopupMessage = styled.p`
  position: relative;
  color: #79768B;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(16)};
  span {
    color: #FFF;
  }
  .mobile-break {
    display: none;
  }
  @media (max-width: 500px) {
    width: 80vw;
    .mobile-break {
      display: flex;
    }
  }
`;

const FileUploadPopupProgressBar = styled.progress`
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  width: ${pxIntoRem(386)};
  height: ${pxIntoRem(8)};
  margin-top: ${pxIntoRem(24)};
  &::-webkit-progress-bar {
    border-radius: ${pxIntoRem(8)};
    background: #1B1D2C;
  }
  &::-webkit-progress-value {
    border-radius: ${pxIntoRem(8)};
    background: #1683E2;
  }
  @media (max-width: 500px) {
    margin: ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(24)} ${pxIntoRem(20)};
    width: 80vw;
  }
`;

const FileUploadPopupCancelButton = styled.button`
  display: flex;
  position: relative;
  width: ${pxIntoRem(386)};
  height: ${pxIntoRem(42)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(8)};
  background: transparent;
  border: 1px solid #2D3042;
  margin-top: ${pxIntoRem(32)};
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 1px solid #FFF;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    margin: auto ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: 80vw;
  }
`;

const FileUploadPopupClose = styled.button`
  position: absolute;
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  top: ${pxIntoRem(16)};
  right: ${pxIntoRem(16)};
  background: transparent;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const FileUploadPopupCloseIcon = styled.svg`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  stroke: #79768B;
  transition: 0.3s;
  &:hover {
    stroke: #FFF;
  } 
`;

export {
  FileUploadPopupBlock,
  FileUploadPopupContent,
  FileUploadPopupBackgroundLayer,
  FileUploadPopupTitle,
  FileUploadPopupMessage,
  FileUploadPopupProgressBar,
  FileUploadPopupCancelButton,
  FileUploadPopupClose,
  FileUploadPopupCloseIcon
};