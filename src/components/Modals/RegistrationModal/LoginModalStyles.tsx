import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";
import { RegistrationModalShowPassword } from "./RegistrationModalStyles";

const LoginModalBlock = styled.div`
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

const LoginModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const LoginModalBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(12)};
  background: #16161F;
  width: 100%;
`;

const LoginModalTitle = styled.h1`
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

const LoginModalInputBlock = styled.div`
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
    margin-left: ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
    &:first-of-type {
      margin-top: ${pxIntoRem(24)};
    }
  }
`;

const LoginModalInputLabel = styled.label`
  position: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
`;

const LoginModalInputComponent = styled.div`
  display: flex;
  position: relative;
  margin-top: ${pxIntoRem(6)};
  height: ${pxIntoRem(42)} !important;
  padding: 1px;
  border-radius: ${pxIntoRem(10)};
  background: linear-gradient(180deg, rgba(45, 48, 66, 0.7) 5.42%, rgba(23, 24, 40, 1) 101.71%);
`;

const LoginModalInputBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(10)};
  background: #1F1F2E;
  width: 100%;
  display: flex;
  flex-direction: row;
  height: ${pxIntoRem(40)} !important;
`;



const LoginModalInputField = styled.input`
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
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
`;

const LoginModalMainButton = styled.button`
  display: flex;
  position: relative;
  width: ${pxIntoRem(386)};
  height: ${pxIntoRem(42)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(8)};
  background: #1683E2;
  margin: ${pxIntoRem(24)} ${pxIntoRem(32)} auto ${pxIntoRem(32)};
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
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} auto ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const LoginModalLoginLink = styled.p`
  position: relative;
  color: #79768B;
  text-align: center;
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

const LoginModalLoginLinkButton = styled.button`
  position: relative;
  color: #FFF;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  background: transparent;
  margin-left: ${pxIntoRem(4)};
`;

const LoginModalClose = styled.button`
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

const LoginModalCloseIcon = styled.svg`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  stroke: #79768B;
  transition: 0.3s;
  &:hover {
    stroke: #FFF;
  }
`;

const LoginModalForgotPasswordButtonBlock = styled.div`
  position: relative;
  width: ${pxIntoRem(386)};
  height: auto;
  margin-top: ${pxIntoRem(20)};
  margin-left: ${pxIntoRem(32)};
  @media (max-width: 500px) {
    width: 80vw;
    margin-left: ${pxIntoRem(20)};
    margin-right: ${pxIntoRem(20)};
  }
`;

const LoginModalForgotPasswordButton = styled.button`
  position: relative;
  display: flex;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  background: transparent;
  transition: 0.3s;
  &:hover {
    color: #FFF;
    transition: 0.3s;
  }
`;

const LoginModalInputButtonIcon = styled.svg`
  display: flex;
  width: ${pxIntoRem(20)};
  heigth: ${pxIntoRem(20)};
  stroke: #393952;
`;

const LoginModalInputButton = styled.button`
  position: relative;
  width: ${pxIntoRem(20)};
  heigth: ${pxIntoRem(20)};
  background: transparent;
  margin-left: auto;
  margin-right: ${pxIntoRem(16)};
  z-index: 9999;
  align-items: center;
  justify-content: center;
  &:hover ${LoginModalInputButtonIcon} {
    stroke: #FFF;
  }
  &:hover + ${RegistrationModalShowPassword} {
    display: flex;
  }
  & > * {
    pointer-events: none;
  }
`;

const LoginModalBottomError = styled.div`
  color: rgba(255, 21, 21, 0.8);
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  margin-top: ${pxIntoRem(16)};
  margin-bottom: ${pxIntoRem(-8)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(16)};
    margin-bottom: ${pxIntoRem(-8)};
  }
`;

export {
  LoginModalBlock,
  LoginModalContent,
  LoginModalBackgroundLayer,
  LoginModalTitle,
  LoginModalInputBlock,
  LoginModalInputLabel,
  LoginModalInputComponent,
  LoginModalInputBackgroundLayer,
  LoginModalInputField,
  LoginModalMainButton,
  LoginModalLoginLink,
  LoginModalLoginLinkButton,
  LoginModalClose,
  LoginModalCloseIcon,
  LoginModalForgotPasswordButtonBlock,
  LoginModalForgotPasswordButton,
  LoginModalInputButton,
  LoginModalInputButtonIcon,
  LoginModalBottomError
};