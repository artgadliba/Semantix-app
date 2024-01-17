import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";
import { MainButtonStyles } from "components/Mixins/Mixins";

const ExportModalContent = styled.div`
  display: flex;
  width: ${pxIntoRem(450)};
  height:  ${pxIntoRem(292)};
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

const ExportModalTitle = styled.h1`
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

const ExportModalSelectBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(386)};
  margin-top: ${pxIntoRem(20)};
  margin-left: ${pxIntoRem(32)};
  &:first-of-type {
    margin-top: ${pxIntoRem(24)};
  }
  @media (max-width: 500px) {
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: 80vw;
  }
`;

const ExportModalSelectLabel = styled.label`
  position: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ExportModalSelectComponent = styled.div`
  display: flex;
  position: relative;
  margin-top: ${pxIntoRem(6)};
  background: transparent;
  padding: 1px;
  border-radius: ${pxIntoRem(10)};
  background: linear-gradient(180deg, rgba(45, 48, 66, 0.7) 5.42%, rgba(23, 24, 40, 1) 101.71%);
`;

const ExportModalInputActiveField = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: ${pxIntoRem(10)};
  border: 1px solid rgba(57, 57, 75, 1);
`;

const ExportModalInputField = styled.input`
  position: relative;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  padding: ${pxIntoRem(10)} ${pxIntoRem(16)} ${pxIntoRem(10)} ${pxIntoRem(16)};
  width: 100%;
  background: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
  &:focus-visible + ${ExportModalInputActiveField} {
    display: block;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(16)};
  }
`;

const ExportModalSelectBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(10)};
  background: #1F1F2E;
  width: 100%;
  display: flex;
`;

const ExportModalMainButton = styled.button`
  ${MainButtonStyles}
  @media (max-width: 500px) {
    margin: auto ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const ExportModalFilename = styled.p`
  position: relative;
  color: #79768B;
  font-family: Mulish;
  text-align: center;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(16)};
`;

const ExportModalMenuButton = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 9999;
  align-items: center;
  justify-content: center;
`;

const ExportModalMenuButtonIcon = styled.img`
  display: flex;
  width: ${pxIntoRem(20)};
  heigth: ${pxIntoRem(20)};
  margin-left: auto;
  margin-right: ${pxIntoRem(16)};
`;

export {
  ExportModalContent,
  ExportModalTitle,
  ExportModalSelectBlock,
  ExportModalSelectLabel,
  ExportModalSelectComponent,
  ExportModalSelectBackgroundLayer,
  ExportModalInputField,
  ExportModalInputActiveField,
  ExportModalMainButton,
  ExportModalFilename,
  ExportModalMenuButton,
  ExportModalMenuButtonIcon
};