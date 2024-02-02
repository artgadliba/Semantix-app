import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";
import { ModalMainButtonStyles } from "components/Mixins/Mixins";

const PurchaseModalContent = styled.div`
  display: flex;
  width: ${pxIntoRem(450)};
  height:  ${pxIntoRem(283)};
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

const PurchaseModalTitle = styled.h1`
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

const PurchaseModalLine = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background: #1D2132;
  z-index: 999999999;
`;

const PurchaseModalRateType = styled.h2`
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

const PurchaseModalOptionBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: ${pxIntoRem(6)} ${pxIntoRem(32)} ${pxIntoRem(12)} ${pxIntoRem(32)};
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(20)};
    margin-right: ${pxIntoRem(20)};
  }
`;

const PurchaseModalOptionValue = styled.div`
  color: #2499FF;
  font-family: Mulish;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  span {
    color: #FFF;
  }
`;

const PurchaseModalOptionPrice = styled.div`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-left: auto;
  margin-right: 0;
`;

const PurchaseModalMainButton = styled.button`
  ${ModalMainButtonStyles}
  @media (max-width: 500px) {
    margin: ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

export {
  PurchaseModalContent,
  PurchaseModalTitle,
  PurchaseModalLine,
  PurchaseModalRateType,
  PurchaseModalOptionBlock,
  PurchaseModalOptionValue,
  PurchaseModalOptionPrice,
  PurchaseModalMainButton
};