import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";
import { MainButtonStyles, TooltipIcon } from "components/Mixins/Mixins";

const PasswordRecoveryModalContent = styled.div`
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

const PasswordRecoveryModalTitle = styled.h1`
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

const PasswordRecoveryModalInstruction = styled.p`
  position: relative;
  color: #79768B;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(16)};
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(20)};
    margin-right: ${pxIntoRem(20)};
    width: auto;
  }
`;

const PasswordRecoveryModalInputBlock = styled.div`
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

const PasswordRecoveryModalInputLabelRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PasswordRecoveryModalInputLabel = styled.label`
  position: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PasswordRecoveryModalInputComponent = styled.div`
  display: flex;
  position: relative;
  margin-top: ${pxIntoRem(6)};
  height: ${pxIntoRem(42)};
  padding: 1px;
  border-radius: ${pxIntoRem(10)};
  background: linear-gradient(180deg, rgba(45, 48, 66, 0.7) 5.42%, rgba(23, 24, 40, 1) 101.71%);
`;

const PasswordRecoveryModalInputBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(10)};
  background: #1F1F2E;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${pxIntoRem(40)};
`;

const PasswordRecoveryModalInputActiveField = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${pxIntoRem(10)};
  border: 1px solid rgba(57, 57, 75, 1);
`;

const PasswordRecoveryModalInputField = styled.input`
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
  &:focus-visible + ${PasswordRecoveryModalInputActiveField} {
    display: block;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(16)};
  }
`;

const PasswordRecoveryModalShowPassword = styled.div`
  position: absolute;
  display: none;
  align-items: center;
  justify-content: center;
  padding: ${pxIntoRem(8)};
  background: #171828;
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #202230;
  white-space: nowrap;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  z-index: 9999;
  top: ${pxIntoRem(35)};
  right: 0;
`;

const PasswordRecoveryModalInputButtonIcon = styled.svg`
  display: flex;
  width: ${pxIntoRem(20)};
  heigth: ${pxIntoRem(20)};
  stroke: #393952;
  &:hover {
    stroke: #FFF;
  }
`;

const PasswordRecoveryModalInputButton = styled.button`
  position: absolute;
  width: ${pxIntoRem(20)};
  heigth: ${pxIntoRem(20)};
  background: transparent;
  right: ${pxIntoRem(16)};
  z-index: 9999;
  align-items: center;
  justify-content: center;
  &:hover ${PasswordRecoveryModalInputButtonIcon} {
    stroke: #FFF;
  }
  &:hover + ${PasswordRecoveryModalShowPassword} {
    display: flex;
  }
  & > * {
    pointer-events: none;
  }
  &:focus-visible {
    border-radius: ${pxIntoRem(4)};
    outline: 1px solid rgba(22, 131, 226, 1);
    outline-offset: -1px;
  }
`;

const PasswordRecoveryModalMainButton = styled.button`
  ${MainButtonStyles}
  @media (max-width: 500px) {
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const PasswordRecoveryModalLoginLink = styled.p`
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
`;

const PasswordRecoveryModalBottomError = styled.div`
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

const PasswordRecoveryModalInputError = styled.p`
  position: relative;
  margin: ${pxIntoRem(5)} 0 0 auto;
  color: #FF1515;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PasswordRecoveryModalPasswordStrength = styled.div`
  position: relative;
  color: rgba(255, 21, 21, 0.8);
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: ${pxIntoRem(6)};
  &.pass_strong {
    color: green;
  }
  &.pass_not_match {
    color: rgba(255, 21, 21, 0.8);
  }
  &.pass_match {
    color: green;
  }
`;

const PasswordRecoveryModalTooltipButton = styled.button`
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
  &:hover ${TooltipIcon} {
    transition: 0.3s;
    fill: #1683E2;
  }
  &:focus-visible ${TooltipIcon} {
    transition: 0.3s;
    fill: #1683E2;
  }
`;

const PasswordRecoveryModalTooltipBlock = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(188)};
  padding: ${pxIntoRem(8)};
  background: #171828;
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #202230;
  top: ${pxIntoRem(76)};
  left: ${pxIntoRem(173)};
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
    width: ${pxIntoRem(144)};
    top: ${pxIntoRem(51)};
    left: ${pxIntoRem(158)};
  }
`; 

const PasswordRecoveryModalTooltipBlockText = styled.p`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  z-index: 9999;
`;

export {
  PasswordRecoveryModalContent,
  PasswordRecoveryModalTitle,
  PasswordRecoveryModalInstruction,
  PasswordRecoveryModalInputBlock,
  PasswordRecoveryModalInputLabelRowWrapper,
  PasswordRecoveryModalInputLabel,
  PasswordRecoveryModalInputComponent,
  PasswordRecoveryModalInputBackgroundLayer,
  PasswordRecoveryModalInputField,
  PasswordRecoveryModalInputActiveField,
  PasswordRecoveryModalInputButtonIcon,
  PasswordRecoveryModalInputButton,
  PasswordRecoveryModalMainButton,
  PasswordRecoveryModalLoginLink,
  PasswordRecoveryModalBottomError,
  PasswordRecoveryModalInputError,
  PasswordRecoveryModalPasswordStrength,
  PasswordRecoveryModalShowPassword,
  PasswordRecoveryModalTooltipButton,
  PasswordRecoveryModalTooltipBlock,
  PasswordRecoveryModalTooltipBlockText
};