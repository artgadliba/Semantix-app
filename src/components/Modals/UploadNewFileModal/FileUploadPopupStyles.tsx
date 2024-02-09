import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const FileUploadPopupContent = styled.div`
  display: flex;
  width: ${pxIntoRem(450)};
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

const FileUploadPopupBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(12)};
  background: #16161F;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  @media (max-width: 500px) {
    width: 80vw;
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
  margin-top: ${pxIntoRem(24)};
  margin-bottom: ${pxIntoRem(32)};
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: 0.3s;
  &:focus-visible {
    border: 1px solid #FFF;
    transition: 0.3s;
  }
  @media (min-width: 501px) {
    &:hover {
      border: 1px solid #FFF;
      transition: 0.3s;
    }
  }
  @media (max-width: 500px) {
    margin: auto ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: 80vw;
  }
`;

export {
  FileUploadPopupContent,
  FileUploadPopupBackgroundLayer,
  FileUploadPopupTitle,
  FileUploadPopupMessage,
  FileUploadPopupProgressBar,
  FileUploadPopupCancelButton
};