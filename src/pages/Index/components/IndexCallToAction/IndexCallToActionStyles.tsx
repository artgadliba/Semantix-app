import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const IndexCallToActionBackgroundBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: ${pxIntoRem(523)};
  overflow: hidden;
  @media (max-width: 500px) {
    height: ${pxIntoRem(466)};
  }
`;

const IndexCallToActionBackgroundImage = styled.img`
  position: absolute;
  width: ${pxIntoRem(1359.832)};
  left: ${pxIntoRem(120)};
  top: ${pxIntoRem(-132)};
  z-index: 1;
  @media (max-width: 500px) {
    width: 200%;
    left: ${pxIntoRem(-220)};
    top: ${pxIntoRem(-50)};
  }
`;

const IndexCallToActionContent = styled.div`
  position: absolute;
  z-index: 99;
  width: 100%;
`;

const IndexCallToAction = styled.section`
  width: 100%;
`;

const IndexCallToActionBody = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin: 0 ${pxIntoRem(15)};
`;

const IndexCallToActionContentTitle = styled.h2`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: ${pxIntoRem(42)};
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  z-index: 999;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(24)};
    width: ${pxIntoRem(290)};
  }
`;

const IndexCallToActionContentText = styled.h3`
  color: #848097;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(20)};
  z-index: 99999;
  span {
    color: #ffffff;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(14)};
    margin-top: ${pxIntoRem(16)};
    width: ${pxIntoRem(240)};
  }
`;

const IndexCallToActionLogoBlock = styled.img`
  display: flex;
  align-items: center;
  margin-top: ${pxIntoRem(26)};
  margin-bottom: ${pxIntoRem(24)};
  width: ${pxIntoRem(129)};
  height: ${pxIntoRem(187)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(20)};
  }
`;

export {
  IndexCallToActionBackgroundBlock,
  IndexCallToActionBackgroundImage,
  IndexCallToAction,
  IndexCallToActionContent,
  IndexCallToActionBody,
  IndexCallToActionContentTitle,
  IndexCallToActionContentText,
  IndexCallToActionLogoBlock
};