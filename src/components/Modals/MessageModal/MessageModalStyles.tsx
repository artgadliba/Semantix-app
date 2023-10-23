import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const MessageModalBlock = styled.div`
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

const MessageModalContent = styled.div`
  display: flex;
  width: ${pxIntoRem(672)};
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

const MessageModalBackgroundLayer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${pxIntoRem(12)};
  background: #16161F;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const MessageModalIcon = styled.img`
  width: ${pxIntoRem(90)};
  height: ${pxIntoRem(90)};
  margin-top: ${pxIntoRem(40)};
`;

const MessageModalTitle = styled.h1`
  position: relative;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(24)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: ${pxIntoRem(10)};
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(18)};
  }
`;

const MessageModalText = styled.p`
  position: relative;
  color: #79768B;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(16)};
  span {
    color: #FFF;
  }
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(20)};
    margin-right: ${pxIntoRem(20)};
    width: auto;
  }
`;

const MessageModalMainButton = styled.button`
  position: relative;
  width: ${pxIntoRem(608)};
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
  @media (max-width: 500px) {
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const MessageModalClose = styled.button`
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

const MessageModalCloseIcon = styled.svg`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  stroke: #79768B;
  transition: 0.3s;
  &:hover {
    stroke: #FFF;
  } 
`;

export {
    MessageModalBlock,
    MessageModalContent,
    MessageModalBackgroundLayer,
    MessageModalIcon,
    MessageModalTitle,
    MessageModalText,
    MessageModalMainButton,
    MessageModalClose,
    MessageModalCloseIcon
}