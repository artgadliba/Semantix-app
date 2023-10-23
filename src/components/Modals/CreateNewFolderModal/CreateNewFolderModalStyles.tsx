import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const CreateNewFolderModalBlock = styled.div`
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

const CreateNewFolderModalContent = styled.div`
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

const CreateNewFolderModalBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(12)};
  background: #16161F;
  width: 100%;
  height: 100%;
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
`;

const CreateNewFolderModalInputField = styled.input`
  position: relative;
  color: var(--white, #FFF);
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
`;

const CreateNewFolderModalMainButton = styled.button`
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
  &:disabled {
    border: 1px solid #2D3042;
    color: #2D3042;
    background: transparent;
    pointer-events: none;
  }
  @media (max-width: 500px) {
    margin: auto ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const CreateNewFolderModalClose = styled.button`
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

const CreateNewFolderModalCloseIcon = styled.svg`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  stroke: #79768B;
  transition: 0.3s;
  &:hover {
    stroke: #FFF;
  } 
`;

const CreateNewFolderModalTooltipIcon = styled.svg`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  fill: #1B1D2C;
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
  &:hover ${CreateNewFolderModalTooltipIcon} {
    transition: 0.3s;
    fill: #1683E2;
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
`;

export {
  CreateNewFolderModalBlock,
  CreateNewFolderModalContent,
  CreateNewFolderModalBackgroundLayer,
  CreateNewFolderModalTitle,
  CreateNewFolderModalInputBlock,
  CreateNewFolderModalInputLabel,
  CreateNewFolderModalInputLabelRowWrapper,
  CreateNewFolderModalInputComponent,
  CreateNewFolderModalInputBackgroundLayer,
  CreateNewFolderModalInputField,
  CreateNewFolderModalMainButton,
  CreateNewFolderModalClose,
  CreateNewFolderModalCloseIcon,
  CreateNewFolderModalTooltipButton,
  CreateNewFolderModalTooltipIcon,
  CreateNewFolderModalTooltipBlock,
  CreateNewFolderModalTooltipBlockText,
  CreateNewFolderModalBottomError
};