import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const PaymentModalContent = styled.div`
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

const PaymentModalTitle = styled.h1`
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
    margin-bottom: ${pxIntoRem(20)};
  }
`;

const PaymentModalInstruction = styled.p`
  color: #79768B;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(16)};
`;

const PaymentModalOptionsBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${pxIntoRem(24)} ${pxIntoRem(32)} ${pxIntoRem(32)} ${pxIntoRem(32)};
  gap: ${pxIntoRem(12)};
  @media (max-width: 500px) {
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
  }
`;

const PaymentModalOptionElementArrow = styled.svg`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  margin-left: auto;
  margin-right: ${pxIntoRem(16)};
  stroke: #FFF;
`;

const PaymentModalOptionButton = styled.button`
  display: flex;
  flex-direction: row;
  width: ${pxIntoRem(386)};
  height: ${pxIntoRem(64)};
  border-radius: ${pxIntoRem(8)};
  align-items: center;
  background: #232335;
  padding: ${pxIntoRem(16)};
  transition: 0.3s;
  &:focus-visible ${PaymentModalOptionElementArrow} {
    transition: 0.3s;
    stroke: #1683E2;
  }
  &:focus-visible {
    transition: 0.3s;
    background: #2F2F48;
  }
  @media (min-width: 501px) {
    &:hover ${PaymentModalOptionElementArrow} {
      transition: 0.3s;
      stroke: #1683E2;
    }
    &:hover {
      transition: 0.3s;
      background: #2F2F48;
    }
  }
  @media (max-width: 500px) {
    width: auto;
  }
`;

const PaymentModalOptionElementLogo = styled.img`
  width: ${pxIntoRem(40)};
  height: ${pxIntoRem(28)};
`;

const PaymentModalOptionElementTitle = styled.h2`
  color: #FFF;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: ${pxIntoRem(12)};
  width: ${pxIntoRem(260)};
  text-align: start;
  @media (max-width: 500px) {
    width: ${pxIntoRem(192)};
  }
`;

const PaymentModalLine = styled.div`
  position: relative;
  display: block;
  margin: ${pxIntoRem(12)} 0 ${pxIntoRem(12)} 0;
  width: ${pxIntoRem(386)};
  height: 1px;
  background: #1D1E29;
  @media (max-width: 500px) {
    margin: ${pxIntoRem(4)} 0 ${pxIntoRem(4)} 0;
    width: auto;
  }
`;

export {
  PaymentModalContent,
  PaymentModalTitle,
  PaymentModalInstruction,
  PaymentModalOptionsBlock,
  PaymentModalOptionButton,
  PaymentModalOptionElementLogo,
  PaymentModalOptionElementTitle,
  PaymentModalOptionElementArrow,
  PaymentModalLine
};