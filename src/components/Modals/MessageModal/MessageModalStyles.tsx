import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";
import { ModalMainButtonStyles } from "components/Mixins/Mixins";

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
  ${ModalMainButtonStyles}
  @media (max-width: 500px) {
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} ${pxIntoRem(20)} ${pxIntoRem(20)};
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

export {
    MessageModalContent,
    MessageModalBackgroundLayer,
    MessageModalIcon,
    MessageModalTitle,
    MessageModalText,
    MessageModalMainButton
};