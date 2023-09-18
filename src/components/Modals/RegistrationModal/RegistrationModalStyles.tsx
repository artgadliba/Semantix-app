import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const RegistrationModalBlock = styled.div`
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
  overflow: hidden;
`;

const RegistrationModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${pxIntoRem(450)};
  height:  ${pxIntoRem(623)};
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

const RegistrationModalBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border-radius: ${pxIntoRem(12)};
  background: #16161F;
`;

const RegisterModalTitle = styled.h1`
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

const RegisterModalInputBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(386)};
  margin-top: ${pxIntoRem(20)};
  &:first-of-type {
    margin-top: ${pxIntoRem(24)};
  }
  @media (max-width: 500px) {
    margin: ${pxIntoRem(20)} ${pxIntoRem(20)}${pxIntoRem(20)} ${pxIntoRem(20)};
    width: 80vw;
    &:first-of-type {
      margin-top: ${pxIntoRem(24)};
    }
  }
`;

const RegisterModalInputTitle = styled.h2`
  position: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: stretch;
`;

const RegisterModalInputComponent = styled.div`
  display: flex;
  position: relative;
  height: ${pxIntoRem(42)};
  margin-top: ${pxIntoRem(6)};
  background: transparent;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(10)};
    border: 2px solid transparent;
    background: linear-gradient(90.77deg, rgba(45, 48, 66, 0.7) 5.42%, rgba(23, 24, 40, 1) 101.71%) border-box;
    -webkit-mask:
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
`;

const RegistrationModalInputBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border-radius: ${pxIntoRem(10)};
  background: #1F1F2E;
`;

const RegistrationModalInputField = styled.input`
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
`;

const RegistrationModalCheckboxBlock = styled. div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: ${pxIntoRem(386)};
  margin-top: ${pxIntoRem(20)};
  @media (max-width: 500px) {
    width: 80vw;
    margin-left: ${pxIntoRem(20)};
    margin-right: ${pxIntoRem(20)};
  }
`;

const RegistrationModalCheckboxInput = styled.input`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 1px solid #2D3042;
  border-radius: ${pxIntoRem(4)};
  cursor: pointer;
  &:checked {
    background: url("/images/checkbox-active.svg");
    background-position: center;
  }
`;

const RegistrationModalCheckboxText = styled.p`
  position: relative;
  width: ${pxIntoRem(358)};
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: ${pxIntoRem(8)};
  a {
    color: #FFF;
    text-decoration-line: underline;
  }
`;

const RegistrationModalMainButton = styled.button`
  display: flex;
  position: relative;
  width: ${pxIntoRem(386)};
  height: ${pxIntoRem(42)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(8)};
  background: #1683E2;
  margin-top: ${pxIntoRem(24)};
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
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} auto ${pxIntoRem(20)};
    width: 80vw;
  }
`;

const RegistrationModalLoginLink = styled.p`
  position: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(24)};
  margin-bottom: ${pxIntoRem(32)};
  a {
    color: #FFF;
  }
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(20)};
    margin-bottom: ${pxIntoRem(20)};
  }
`;

const RegistrationModalClose = styled.button`
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

const RegistrationModalCloseIcon = styled.svg`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  stroke: #79768B;
  transition: 0.3s;
  &:hover {
    stroke: #FFF;
  } 
`;

const RegistrationModalInputButtonIcon = styled.svg`
  display: flex;
  width: ${pxIntoRem(20)};
  heigth: ${pxIntoRem(20)};
  stroke: #393952;
  &:hover {
    stroke: #FFF;
  }
`;

const RegistrationModalInputButton = styled.button`
  position: relative;
  width: ${pxIntoRem(20)};
  heigth: ${pxIntoRem(20)};
  background: transparent;
  margin-left: auto;
  margin-right: ${pxIntoRem(16)};
  z-index: 9999;
  align-items: center;
  justify-content: center;
  &:hover ${RegistrationModalInputButtonIcon} {
    stroke: #FFF;
  }
  & > * {
    pointer-events: none;
  }
`;

export {
  RegistrationModalBlock,
  RegistrationModalContent,
  RegistrationModalBackgroundLayer,
  RegisterModalTitle,
  RegisterModalInputBlock,
  RegisterModalInputTitle,
  RegisterModalInputComponent,
  RegistrationModalInputBackgroundLayer,
  RegistrationModalInputField,
  RegistrationModalCheckboxBlock,
  RegistrationModalCheckboxInput,
  RegistrationModalCheckboxText,
  RegistrationModalMainButton,
  RegistrationModalLoginLink,
  RegistrationModalClose,
  RegistrationModalCloseIcon,
  RegistrationModalInputButton,
  RegistrationModalInputButtonIcon
};