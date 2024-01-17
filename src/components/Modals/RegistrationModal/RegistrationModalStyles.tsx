import styled from "styled-components";
import { Link } from "react-router-dom";
import pxIntoRem from "../../../utils/pxIntoRem";
import { MainButtonStyles, TooltipIcon, InputButtonIcon } from "components/Mixins/Mixins";

const RegistrationModalContent = styled.div`
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

const RegistrationModalTitle = styled.h1`
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

const RegistrationModalInputBlock = styled.div`
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

const RegistrationModalInputLabel = styled.label`
  position: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
`;

const RegistrationModalInputLabelRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RegistrationModalInputComponent = styled.div`
  display: flex;
  position: relative;
  margin-top: ${pxIntoRem(6)};
  padding: 1px;
  border-radius: ${pxIntoRem(10)};
  background: linear-gradient(180deg, rgba(45, 48, 66, 0.7) 5.42%, rgba(23, 24, 40, 1) 101.71%);
  &.error {
    background: rgba(255, 21, 21, 0.5);
  }
`;

const RegistrationModalInputBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(10)};
  background: #1F1F2E;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RegistrationModalInputActiveField = styled.div`
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
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  &:focus-visible + ${RegistrationModalInputActiveField} {
    display: block;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(16)};
  }
`;

const RegistrationModalCheckboxBlock = styled. div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: ${pxIntoRem(386)};
  margin-top: ${pxIntoRem(20)};
  margin-left: ${pxIntoRem(32)};
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
  &:focus-visible {
    border: 1px solid rgba(22, 131, 226, 1);
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
`;

const RegistrationModalCheckboxLink = styled(Link)`
  position: relative;
  width: ${pxIntoRem(358)};
  color: #FFF;
  text-decoration-line: underline;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: ${pxIntoRem(8)};
  &:focus-visible {
    color: rgba(22, 131, 226, 1);
  }
`;

const RegistrationModalMainButton = styled.button`
  ${MainButtonStyles}
  @media (max-width: 500px) {
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} 0 ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const RegistrationModalLoginLink = styled.p`
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
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(20)};
    margin-bottom: ${pxIntoRem(20)};
  }
`;

const RegistrationModalLoginButton = styled.button`
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
  &:focus-visible {
    color: rgba(22, 131, 226, 1);
  }
`;

const RegistrationModalShowPassword = styled.div`
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

const RegistrationModalInputButton = styled.button`
  position: absolute;
  display: block;
  width: ${pxIntoRem(20)};
  heigth: ${pxIntoRem(20)};
  background: transparent;
  right: ${pxIntoRem(16)};
  z-index: 9999;
  align-items: center;
  justify-content: center;
  &:hover ${InputButtonIcon} {
    stroke: #FFF;
  }
  &:hover + ${RegistrationModalShowPassword} {
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

const RegistrationModalInputError = styled.p`
  position: absolute;
  top: ${pxIntoRem(68)};
  right: 0;
  color: rgba(255, 21, 21, 0.8);
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RegistrationModalPasswordStrength = styled.div`
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

const RegistrationModalTooltipButton = styled.button`
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

const RegistrationModalTooltipBlock = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(188)};
  padding: ${pxIntoRem(8)};
  background: #171828;
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #202230;
  top: ${pxIntoRem(208)};
  left: ${pxIntoRem(172)};
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
    top: ${pxIntoRem(182)};
    left: ${pxIntoRem(161)};
  }
`; 

const RegistrationModalTooltipBlockText = styled.p`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  z-index: 9999;
`;

export {
  RegistrationModalContent,
  RegistrationModalTitle,
  RegistrationModalInputBlock,
  RegistrationModalInputLabel,
  RegistrationModalInputLabelRowWrapper,
  RegistrationModalInputComponent,
  RegistrationModalInputBackgroundLayer,
  RegistrationModalInputField,
  RegistrationModalInputActiveField,
  RegistrationModalCheckboxBlock,
  RegistrationModalCheckboxInput,
  RegistrationModalCheckboxText,
  RegistrationModalCheckboxLink,
  RegistrationModalMainButton,
  RegistrationModalLoginLink,
  RegistrationModalLoginButton,
  RegistrationModalInputButton,
  RegistrationModalInputError,
  RegistrationModalPasswordStrength,
  RegistrationModalShowPassword,
  RegistrationModalTooltipButton,
  RegistrationModalTooltipBlock,
  RegistrationModalTooltipBlockText
};