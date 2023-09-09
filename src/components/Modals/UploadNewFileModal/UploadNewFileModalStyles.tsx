import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const UploadNewFileModalBlock = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(${pxIntoRem(2)});
  background-color: rgba(0, 0, 0, 0.70);
  overflow: hidden;
`;

const UploadNewFileModalContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: ${pxIntoRem(672)};
  height:  ${pxIntoRem(551)};
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

const UploadNewFileModalBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border-radius: ${pxIntoRem(12)};
  background: #16161F;
`;

const UploadNewFileModalInputFileBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: ${pxIntoRem(608)};
  height: ${pxIntoRem(230)};
  border-radius: ${pxIntoRem(12)};
  border: 1px dashed #2D3042;
  margin-left: ${pxIntoRem(32)};
  margin-top: ${pxIntoRem(24)};
  @media (max-width: 500px) {
    display: none;
  }
`;

const UploadNewFileModalInputFileInstruction = styled.h2`
  position: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(64)};
`;

const UploadNewFileModalInputFileButton = styled.label`
  position: relative;
  display: flex;
  width: ${pxIntoRem(149)};
  height: ${pxIntoRem(42)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  background: transparent;
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #2D3042;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: ${pxIntoRem(16)};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    border: 1px solid #FFF;
  }
  &.mobile-upload {
    display: none;
  }
  @media (max-width: 500px) {
    &.mobile-upload {
      display: flex;
      margin: ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(16)} ${pxIntoRem(20)};
      width: 80vw;
    }
  }
`;

const UploadNewFileModalInputFileLimitText = styled.p`
  postion: relative;
  margin-top: ${pxIntoRem(39)};
  color: var(--Secondary-text, #79768B);
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &.mobile-text {
    display: none;
  }
  @media (max-width: 500px) {
    &.mobile-text {
      display: flex;
      margin: 0 ${pxIntoRem(20)} auto ${pxIntoRem(20)};
      z-index: 999999;
    }
  }
`;

const UploadNewFileModalInputFileField = styled.input`
  display: none;
`;

const UploadNewFileModalTitle = styled.h1`
  position: relative;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(24)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: ${pxIntoRem(24)};
  margin-left: ${pxIntoRem(32)};
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(18)};
    margin-left: ${pxIntoRem(20)};
  }
`;

const UploadNewFileModalAdjustmentsText = styled.p`
  postion: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(24)};
  margin-left: ${pxIntoRem(32)};
  z-index: 9999999;
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(20)};
  }
`;

const UploadNewFileModalCheckboxBlock = styled. div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: ${pxIntoRem(386)};
  margin-top: ${pxIntoRem(24)};
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
    gap: ${pxIntoRem(18)};
  }
`;

const UploadNewFileModalCheckboxInput = styled.input`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 1px solid #2D3042;
  border-radius: ${pxIntoRem(4)};
  margin-left: ${pxIntoRem(32)};
  cursor: pointer;
  &:checked {
    background: url("/images/checkbox-active.svg");
    background-position: center;
  }
`;

const UploadNewFileModalCheckboxText = styled.p`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: ${pxIntoRem(10)};
  white-space: nowrap;
`;

const UploadNewFileModalMainButton = styled.button`
  display: flex;
  position: relative;
  width: ${pxIntoRem(608)};
  height: ${pxIntoRem(42)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(8)};
  background: #1683E2;
  margin-top: ${pxIntoRem(32)};
  margin-left: ${pxIntoRem(32)};
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
  @media (max-width: 500px) {
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: 80vw;
  }
`;

const UploadNewFileModalLine = styled.div`
  postion: absolute;
  width: 100%;
  height: 1px;
  background: #1D2132;
  z-index: 999999999;
  margin-top: ${pxIntoRem(24)};
`;

const UploadNewFileModalClose = styled.button`
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

const UploadNewFileModalCloseIcon = styled.svg`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  stroke: #79768B;
  transition: 0.3s;
  &:hover {
    stroke: #FFF;
  } 
`;

const UploadNewFileModalMobilInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const UploadNewFileModalFilesBlock= styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${pxIntoRem(4)};
  margin-top: ${pxIntoRem(88)};
`;

const UploadNewFileModalFile = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: ${pxIntoRem(4)};
  border: 1px solid #2D3042;
  padding: ${pxIntoRem(4)} ${pxIntoRem(8)};
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const UploadNewFileModalFilesShortcut = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: ${pxIntoRem(4)};
  border: 1px solid #2D3042;
  padding: ${pxIntoRem(4)} ${pxIntoRem(8)};
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const UploadNewFileModalFileDeleteButton = styled.button`
  width: ${pxIntoRem(15)};
  height: ${pxIntoRem(15)};
  background: transparent;
  background: url("/images/small-close.svg");
  background-position: center;
  margin-left: ${pxIntoRem(4)};
`;

const UploadNewFileModalProgressBar = styled.progress`
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  width: ${pxIntoRem(150)};
  height: ${pxIntoRem(8)};
  margin-top: ${pxIntoRem(16)};
  &::-webkit-progress-bar {
    border-radius: ${pxIntoRem(8)};
    background: #1B1D2C;
  }
  &::-webkit-progress-value {
    border-radius: ${pxIntoRem(8)};
    background: #1683E2;
  }
  @media (max-width: 500px) {
    margin: ${pxIntoRem(20)} auto ${pxIntoRem(20)} auto;
    width: 80vw;
  }
`;

const UploadNewFileModalCancelButton = styled.button`
  display: flex;
  position: relative;
  width: ${pxIntoRem(149)};
  height: ${pxIntoRem(38)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(8)};
  background: transparent;
  border: 1px solid #2D3042;
  margin-top: ${pxIntoRem(30)};
  margin-bottom: ${pxIntoRem(24)};
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
    margin: auto auto 0 auto;
    width: 80vw;
  }
`;

const UploadNewFileModalFilesMobileBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: ${pxIntoRem(20)};
`;

const UploadNewFileModalFilesRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${pxIntoRem(6)};
  margin-top: ${pxIntoRem(6)};
  &:first-of-type {
    margin-top: ${pxIntoRem(24)};
  }
`;

const UploadNewFileModalFilesMobileWrapper = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

export {
  UploadNewFileModalBlock,
  UploadNewFileModalContent,
  UploadNewFileModalBackgroundLayer,
  UploadNewFileModalTitle,
  UploadNewFileModalInputFileBlock,
  UploadNewFileModalInputFileInstruction,
  UploadNewFileModalInputFileButton,
  UploadNewFileModalInputFileLimitText,
  UploadNewFileModalInputFileField,
  UploadNewFileModalAdjustmentsText,
  UploadNewFileModalCheckboxBlock,
  UploadNewFileModalCheckboxInput,
  UploadNewFileModalCheckboxText,
  UploadNewFileModalMainButton,
  UploadNewFileModalLine,
  UploadNewFileModalClose,
  UploadNewFileModalCloseIcon,
  UploadNewFileModalMobilInputWrapper,
  UploadNewFileModalFilesBlock,
  UploadNewFileModalFile,
  UploadNewFileModalFilesShortcut,
  UploadNewFileModalFileDeleteButton,
  UploadNewFileModalProgressBar,
  UploadNewFileModalCancelButton,
  UploadNewFileModalFilesMobileBlock,
  UploadNewFileModalFilesRow,
  UploadNewFileModalFilesMobileWrapper
};