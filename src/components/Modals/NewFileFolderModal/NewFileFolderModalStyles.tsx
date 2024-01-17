import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";
import { MainButtonStyles } from "components/Mixins/Mixins";

const NewFileFolderModalContent = styled.div`
  display: flex;
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

const NewFileFolderModalTitle = styled.h1`
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

const NewFileFolderModalSelectBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(608)};
  margin-top: ${pxIntoRem(24)};
  margin-left: ${pxIntoRem(32)};
  @media (max-width: 500px) {
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const NewFileFolderModalSelectLabel = styled.label`
  position: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
`;

const NewFileFolderModalSelectComponent = styled.div`
  display: flex;
  position: relative;
  height: ${pxIntoRem(42)};
  margin-top: ${pxIntoRem(6)};
  background: transparent;
  padding: 1px;
  border-radius: ${pxIntoRem(10)};
  background: linear-gradient(180deg, rgba(45, 48, 66, 0.7) 5.42%, rgba(23, 24, 40, 1) 101.71%);
`;

const NewFileFolderModalInputField = styled.input`
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
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(16)};
  }
`;

const NewFileFolderModalSelectBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(10)};
  background: #1F1F2E;
  width: 100%;
  display: flex;
  align-items: center;
`;

const NewFileFolderModalMainButton = styled.button`
  ${MainButtonStyles}
  width: ${pxIntoRem(608)};
  @media (max-width: 500px) {
    margin: auto ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const NewFileFolderModalInstruction = styled.p`
  position: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(16)};
  margin-left: ${pxIntoRem(32)};
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(14)};
    margin-left: ${pxIntoRem(20)};
  }
`;

const NewFileFolderModalMenuButton = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  &:focus-visible {
    border-radius: ${pxIntoRem(10)};
    outline: 1px solid rgba(57, 57, 75, 1);
    outline-offset: -1px;
  }
`;

const NewFileFolderModalMenuButtonIcon = styled.img`
  display: flex;
  width: ${pxIntoRem(20)};
  heigth: ${pxIntoRem(20)};
  margin-left: auto;
  margin-right: ${pxIntoRem(16)};
`;

export {
  NewFileFolderModalContent,
  NewFileFolderModalTitle,
  NewFileFolderModalSelectBlock,
  NewFileFolderModalSelectLabel,
  NewFileFolderModalSelectComponent,
  NewFileFolderModalSelectBackgroundLayer,
  NewFileFolderModalInputField,
  NewFileFolderModalMainButton,
  NewFileFolderModalInstruction,
  NewFileFolderModalMenuButton,
  NewFileFolderModalMenuButtonIcon
};