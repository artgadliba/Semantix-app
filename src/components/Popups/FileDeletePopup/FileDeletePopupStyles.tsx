import styled from "styled-components";
import pxIntoRem from "../../../utils/pxIntoRem";

const FileDeletePopupContent = styled.div`
  display: flex;
  width: ${pxIntoRem(450)};
  height:  ${pxIntoRem(205)};
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

const FileDeletePopupBackgroundLayer = styled.div`
  border-radius: ${pxIntoRem(12)};
  background: #16161F;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FileDeletePopupTitle = styled.h1`
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

const FileDeletePopupMessage = styled.p`
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
  .mobile_break {
    display: none;
  }
  @media (max-width: 500px) {
    width: 80vw;
    .mobile-break {
      display: flex;
    }
  }
`;

const FileDeletePopupButtonsBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${pxIntoRem(12)};
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const FileDeletePopupButton = styled.button`
  display: flex;
  position: relative;
  width: ${pxIntoRem(187)};
  height: ${pxIntoRem(42)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(8)};
  background: transparent;
  border: 1px solid #2D3042;
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
    border: 1px solid #FFF;
    transition: 0.3s;
  }
  &:focus {
    border: 1px solid #FFF;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} 0 ${pxIntoRem(20)};
    width: 80vw;
    &:last-of-type {
      margin-top: ${pxIntoRem(0)};
      margin-bottom: ${pxIntoRem(24)};
    }
  }
`;

export {
  FileDeletePopupContent,
  FileDeletePopupBackgroundLayer,
  FileDeletePopupTitle,
  FileDeletePopupMessage,
  FileDeletePopupButtonsBlock,
  FileDeletePopupButton
};