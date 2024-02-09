import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";
import { ModalMainButtonStyles, TooltipIcon } from "components/Mixins/Mixins";

const CreateNewFolderModalContent = styled.div`
  display: flex;
  width: ${pxIntoRem(450)};
  z-index: 9999;
  position: relative;
  padding: 1px;
  border-radius: ${pxIntoRem(12)};
  background: linear-gradient(180deg, rgba(26, 27, 37, 1) 5.42%, rgba(23, 24, 40, 1) 101.71%);
  @media (max-width: 500px) {
    width: calc(100% - ${pxIntoRem(30)});
    height: auto;
  }
`;

const CreateNewFolderModalTitle = styled.h2`
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

const CreateNewFolderModalInputBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(386)};
  margin-top: ${pxIntoRem(24)};
  margin-left: ${pxIntoRem(32)};
  @media (max-width: 500px) {
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const CreateNewFolderModalInputLabel = styled.label`
  position: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
`;

const CreateNewFolderModalInputLabelRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`; 

const CreateNewFolderModalInputComponent = styled.div`
  display: flex;
  position: relative;
  height: ${pxIntoRem(42)};
  margin-top: ${pxIntoRem(6)};
  background: transparent;
  padding: 1px;
  border-radius: ${pxIntoRem(10)};
  background: linear-gradient(180deg, rgba(45, 48, 66, 0.7) 5.42%, rgba(23, 24, 40, 1) 101.71%);
`;

const CreateNewFolderModalInputBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(10)};
  background: #1F1F2E;
  width: 100%;
  height: 100%;
`; 

const CreateNewFolderModalInputActiveField = styled.div`
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

const CreateNewFolderModalInputField = styled.input`
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
  &:focus-visible + ${CreateNewFolderModalInputActiveField} {
    display: block;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(16)};
  }
`;

const CreateNewFolderModalMainButton = styled.button`
  ${ModalMainButtonStyles}
  @media (max-width: 500px) {
    margin: auto ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const CreateNewFolderModalTooltipButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxIntoRem(16)};
  height: ${pxIntoRem(16)};
  background: transparent;
  margin-left: ${pxIntoRem(6)};
  z-index: 9999;
  transition: 0.3s;
  @media (min-width: 501px) {
    &:hover ${TooltipIcon} {
      transition: 0.3s;
      fill: #1683E2;
    }
    &:focus-visible ${TooltipIcon} {
      transition: 0.3s;
      fill: #1683E2;
    }
  }
`;

const CreateNewFolderModalTooltipBlock = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(160)};
  padding: ${pxIntoRem(8)};
  background: #171828;
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #202230;
  top: ${pxIntoRem(66)};
  left: ${pxIntoRem(132)};
  z-index: 99999999;
  filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.15));
  &:before {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 0;
    height: 0;
    border: ${pxIntoRem(10)} solid transparent;
    border-right-color: #202230;
    border-left: 0;
    margin-left: ${pxIntoRem(-10)};
    margin-bottom: ${pxIntoRem(-10)};
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 50%;
    left: 0;
    width: 0;
    height: 0;
    border: ${pxIntoRem(10)} solid transparent;
    border-right-color: #171828;
    border-left: 0;
    margin-left: ${pxIntoRem(-9)};
    margin-bottom: ${pxIntoRem(-10)};
  }
  @media (max-width: 500px) {
    top: ${pxIntoRem(59)};
    left: ${pxIntoRem(120)};
  }
`; 

const CreateNewFolderModalTooltipBlockText = styled.p`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  z-index: 9999;
`;

const CreateNewFolderModalBottomError = styled.div`
  color: rgba(255, 21, 21, 0.8);
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  margin-top: ${pxIntoRem(-16)};
  margin-bottom: ${pxIntoRem(32)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(-10)};
    margin-bottom: ${pxIntoRem(20)};
  }
`;

export {
  CreateNewFolderModalContent,
  CreateNewFolderModalTitle,
  CreateNewFolderModalInputBlock,
  CreateNewFolderModalInputLabel,
  CreateNewFolderModalInputLabelRowWrapper,
  CreateNewFolderModalInputComponent,
  CreateNewFolderModalInputBackgroundLayer,
  CreateNewFolderModalInputField,
  CreateNewFolderModalInputActiveField,
  CreateNewFolderModalMainButton,
  CreateNewFolderModalTooltipButton,
  CreateNewFolderModalTooltipBlock,
  CreateNewFolderModalTooltipBlockText,
  CreateNewFolderModalBottomError
};