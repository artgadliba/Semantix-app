import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const PurchaseModalBlock = styled.div`
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

const PurchaseModalBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(12)};
  background: #16161F;
  width: 100%;
  height: 100%;
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
  postion: relative;
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
  position: relative;
  width: ${pxIntoRem(386)};
  height: ${pxIntoRem(42)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(8)};
  background: #1683E2;
  margin-top: ${pxIntoRem(24)};
  margin-left: ${pxIntoRem(32)};
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
    margin: ${pxIntoRem(20)} !important;
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const PurchaseModalClose = styled.button`
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

const PurchaseModalCloseIcon = styled.svg`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  stroke: #79768B;
  transition: 0.3s;
  &:hover {
    stroke: #FFF;
  } 
`;

export {
  PurchaseModalBlock,
  PurchaseModalContent,
  PurchaseModalBackgroundLayer,
  PurchaseModalTitle,
  PurchaseModalLine,
  PurchaseModalRateType,
  PurchaseModalOptionBlock,
  PurchaseModalOptionValue,
  PurchaseModalOptionPrice,
  PurchaseModalMainButton,
  PurchaseModalClose,
  PurchaseModalCloseIcon
};