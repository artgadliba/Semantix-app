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
  background-color: rgba(0, 0, 0, 0.70);
`;

const UploadNewFileModalContent = styled.div`
  width: ${pxIntoRem(672)};
  z-index: 9999;
  position: relative;
  padding: 1px;
  border-radius: ${pxIntoRem(12)};
  background: linear-gradient(180deg, rgba(26, 27, 37, 1) 5.42%, rgba(23, 24, 40, 1) 101.71%);
  @media (max-width: 500px) {
    width: 90vw;
    height: auto;
  }
`;

const UploadNewFileModalBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(12)};
  background: #16161F;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
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

const UploadNewFileModalInputFileButton = styled.button`
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
  &.mobileText {
    display: none;
  }
  span {
    color: #FFF;
  }
  @media (max-width: 500px) {
    &.mobileText {
      display: block;
      margin: 0 ${pxIntoRem(20)} auto ${pxIntoRem(20)};
      z-index: 999999;
      text-align: start;
    }
    text-align: center;
    margin-top: ${pxIntoRem(8)};
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
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(20)};
  }
`;

const UploadNewFileModalCheckboxLabel = styled.label`
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
  margin: ${pxIntoRem(32)};
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
  &:disabled {
    border: 1px solid #2D3042;
    color: #2D3042;
    background: transparent;
    pointer-events: none;
  }
  @media (max-width: 500px) {
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
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

const UploadNewFileModalFilesBlock= styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${pxIntoRem(6)};
  margin-top: ${pxIntoRem(57)};
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
  border-radius: ${pxIntoRem(8)};
  background: #1B1D2C;
  &::-webkit-progress-bar {
    border-radius: ${pxIntoRem(8)};
    background: #1B1D2C;
  }
  &::-webkit-progress-value {
    border-radius: ${pxIntoRem(8)};
    background: #1683E2;
  }
  &::-moz-progress-bar {
    border-radius: ${pxIntoRem(8)};
    background: #1683E2;
  }
  @media (max-width: 500px) {
    margin: ${pxIntoRem(20)} auto ${pxIntoRem(20)} auto;
    width: 80vw;
  }
`;

const UploadNewFileModalButtonsBlock = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${pxIntoRem(6)};
  @media (max-width: 500px) {
    flex-direction: column;
    gap: ${pxIntoRem(12)};
    margin-bottom: ${pxIntoRem(20)};
  }
`;

const UploadNewFileModalActionButton = styled.button`
  display: flex;
  position: relative;
  width: ${pxIntoRem(149)};
  height: ${pxIntoRem(38)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(15)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(8)};
  background: transparent;
  border: 1px solid #2D3042;
  margin-top: ${pxIntoRem(24)};
  margin-bottom: ${pxIntoRem(18)};
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 1px solid #FFF;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    margin: auto auto 0 auto;
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const UploadNewFileModalFilesMobileBlock = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: ${pxIntoRem(27)} ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
  gap: ${pxIntoRem(6)};
`;

const UploadNewFileModalFilesMobileWrapper = styled.div`
  display: none;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const UploadNewFileModalFilesError = styled.div`
  position: absolute;
  color: #FF1515;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  top: ${pxIntoRem(16)};
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
  UploadNewFileModalCheckboxLabel,
  UploadNewFileModalMainButton,
  UploadNewFileModalLine,
  UploadNewFileModalClose,
  UploadNewFileModalCloseIcon,
  UploadNewFileModalFilesBlock,
  UploadNewFileModalFile,
  UploadNewFileModalFilesShortcut,
  UploadNewFileModalFileDeleteButton,
  UploadNewFileModalProgressBar,
  UploadNewFileModalButtonsBlock,
  UploadNewFileModalActionButton,
  UploadNewFileModalFilesMobileBlock,
  UploadNewFileModalFilesMobileWrapper,
  UploadNewFileModalFilesError
};