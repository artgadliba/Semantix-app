import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";
import { ModalMainButtonStyles, TooltipIcon } from "components/Mixins/Mixins";

const CustomPurchaseModalContent = styled.div`
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

const CustomPurchaseModalTitle = styled.h1`
  position: relative;
  color: #FFF;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(24)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: ${pxIntoRem(40)};
  margin-bottom: ${pxIntoRem(32)};
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(18)};
    margin-bottom: ${pxIntoRem(20)};
  }
`;

const CustomPurchaseModalLine = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background: #1D2132;
  z-index: 999;
`;

const CustomPurchaseModalRateType = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(16)};
  margin-left: ${pxIntoRem(32)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(12)};
    margin-left: ${pxIntoRem(20)};
  }
`;

const CustomPurchaseModalOptionBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: ${pxIntoRem(6)} ${pxIntoRem(32)} ${pxIntoRem(16)} ${pxIntoRem(32)};
  @media (max-width: 500px) {
    margin: ${pxIntoRem(6)} ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
  }
`;

const CustomPurchaseModalOptionValue = styled.div`
  color: #2499FF;
  font-family: Mulish;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  span {
    color: #FFF;
  }
  &.mobile_break {
    display: none;
    @media (max-width: 500px) {
        display: flex;
    }
  }
`;

const CustomPurchaseModalOptionPrice = styled.div`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-left: auto;
  margin-right: 0;
  @media (max-width: 500px) {
    margin-top: auto;
    margin-bottom: 0;
    &.lower_price_block {
        display: none;
    }
  }
`;

const CustomPurchaseModalMainButton = styled.button`
  ${ModalMainButtonStyles}
  @media (max-width: 500px) {
    margin: ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const CustomPurchaseModalSelectBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${pxIntoRem(6)} ${pxIntoRem(32)} ${pxIntoRem(24)} ${pxIntoRem(32)};
  @media (max-width: 500px) {
    margin: ${pxIntoRem(6)} ${pxIntoRem(20)} ${pxIntoRem(16)} ${pxIntoRem(20)};
  }
`;

const CustomPurchaseModalSelectRowBlock = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-top: ${pxIntoRem(10)};
  &.mobile_block {
    display: none;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: start;
    &.mobile_block {
        flex-direction: row;
        display: flex;
        margin-top: ${pxIntoRem(16)};
    }
  }
`;

const CustomPurchaseModalSelectLabelMinutes = styled.label`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const CustomPurchaseModalInputLabelRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const CustomPurchaseModalSelectTitleTotal = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: auto;
  margin-right: 0;
  @media (max-width: 500px) {
    display: none;
    &.mobile_total {
        display: flex;
        margin-left: 0;
    }
  }
`;

const CustomPurchaseModalSelectComponent = styled.div`
  display: flex;
  position: relative;
  width: ${pxIntoRem(183)};
  height: ${pxIntoRem(42)};
  background: transparent;
  padding: 1px;
  border-radius: ${pxIntoRem(10)};
  background: linear-gradient(180deg, rgba(45, 48, 66, 0.7) 5.42%, rgba(23, 24, 40, 1) 101.71%);
  @media (max-width: 500px) {
    margin-right: ${pxIntoRem(20)};
    margin-bottom: ${pxIntoRem(0)};
    width: 100%;
  }
`;

const CustomPurchaseModalInputActiveField = styled.div`
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

const CustomPurchaseModalInputField = styled.input`
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
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  &:focus-visible + ${CustomPurchaseModalInputActiveField} {
    display: block;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(16)};
  }
`;

const CustomPurchaseModalSelectBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(10)};
  background: #1F1F2E;
  width: 100%;
  display: flex;
`;

const CustomPurchaseModalSelectButtonIcon = styled.svg`
  width: ${pxIntoRem(10)};
  height: ${pxIntoRem(10)};
  fill: #79768B;
`;

const CustomPurchaseModalSelectUpperButtonBlock = styled.button`
  position: absolute;
  display: flex;
  top: ${pxIntoRem(8)};
  right: ${pxIntoRem(16)};
  background: transparent;
  transition: 0.3s;
  &:focus-visible {
    border-radius: ${pxIntoRem(2)};
    outline: 1px solid rgba(22, 131, 226, 1);
    outline-offset: -1px;
  }
  &:focus-visible ${CustomPurchaseModalSelectButtonIcon} {
    fill: #FFF;
    transition: 0.3s;
  }
  @media (min-width: 501px) {
    &:hover ${CustomPurchaseModalSelectButtonIcon} {
      fill: #FFF;
      transition: 0.3s;
    }
  }
`;

const CustomPurchaseModalSelectLowerButtonBlock = styled.button`
  position: absolute;
  display: flex;
  bottom: ${pxIntoRem(8)};
  right: ${pxIntoRem(16)};
  background: transparent;
  transition: 0.3s;
  &:focus-visible {
    border-radius: ${pxIntoRem(2)};
    outline: 1px solid rgba(22, 131, 226, 1);
    outline-offset: -1px;
  }
  &:focus-visible ${CustomPurchaseModalSelectButtonIcon} {
    fill: #FFF;
    transition: 0.3s;
  }
  @media (min-width: 501px) {
    &:hover ${CustomPurchaseModalSelectButtonIcon} {
      fill: #FFF;
      transition: 0.3s;
    }
  }
`;

const CustomPurchaseModalTooltipButton = styled.button`
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
  &:focus-visible ${TooltipIcon} {
    transition: 0.3s;
    fill: #1683E2;
  }
  @media (min-width: 501px) {
    &:hover ${TooltipIcon} {
      transition: 0.3s;
      fill: #1683E2;
    }
  }
`;

interface ITooltipBlockPositionType {
    $type: string;
}

const CustomPurchaseModalTooltipBlock = styled.div<ITooltipBlockPositionType>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(188)};
  padding: ${pxIntoRem(8)};
  background: #171828;
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #202230;
  top: ${({$type}) =>
    ($type === "Базовый" && `${pxIntoRem(193)}`) ||
    ($type === "Продвинутый" && `${pxIntoRem(184)}`)
  };
  left: ${pxIntoRem(194)};
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
    top: ${({$type}) =>
      ($type === "Базовый" && `${pxIntoRem(165)}`) ||
      ($type === "Продвинутый" && `${pxIntoRem(156)}`)
    };
    left: ${pxIntoRem(182)};
  }
`; 

const CustomPurchaseModalTooltipBlockText = styled.p`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  z-index: 9999;
`;

export {
  CustomPurchaseModalContent,
  CustomPurchaseModalTitle,
  CustomPurchaseModalLine,
  CustomPurchaseModalRateType,
  CustomPurchaseModalOptionBlock,
  CustomPurchaseModalOptionValue,
  CustomPurchaseModalOptionPrice,
  CustomPurchaseModalMainButton,
  CustomPurchaseModalSelectBlock,
  CustomPurchaseModalSelectRowBlock,
  CustomPurchaseModalSelectLabelMinutes,
  CustomPurchaseModalInputLabelRowWrapper,
  CustomPurchaseModalSelectTitleTotal,
  CustomPurchaseModalSelectComponent,
  CustomPurchaseModalInputField,
  CustomPurchaseModalInputActiveField,
  CustomPurchaseModalSelectBackgroundLayer,
  CustomPurchaseModalSelectUpperButtonBlock,
  CustomPurchaseModalSelectLowerButtonBlock,
  CustomPurchaseModalSelectButtonIcon,
  CustomPurchaseModalTooltipButton,
  CustomPurchaseModalTooltipBlock,
  CustomPurchaseModalTooltipBlockText
};