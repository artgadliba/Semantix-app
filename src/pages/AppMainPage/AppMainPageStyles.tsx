import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const AppMainPageBlock = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: ${pxIntoRem(40)};
`;

const AppMainPageTitle = styled.h1`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: ${pxIntoRem(40)};
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(15)};
  }
`;

const AppMainPageText = styled.p`
  width: ${pxIntoRem(779)};
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(16)};
  margin-left: ${pxIntoRem(40)};
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(15)};
    margin-right: ${pxIntoRem(15)};
    width: auto;
  }
`;

const AppMainPageBottomLineBlock = styled.div`
  position: relative;
  width: auto;
  margin-top: ${pxIntoRem(24)};
  margin-bottom: ${pxIntoRem(40)};
`;

const AppMainPageBottomLine = styled.div`
  position: relative;
  margin-left: ${pxIntoRem(40)};
  margin-right: ${pxIntoRem(40)};
  width: auto;
  height: ${pxIntoRem(1)};
  background: linear-gradient(270deg, rgba(23, 26, 39, 0.00) 0%, #171A27 50.01%, rgba(23, 26, 39, 0.00) 100%);
  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const AppMainPageEmptyContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${pxIntoRem(155)});
  @media (max-width: 500px) {
    height: calc(100vh - ${pxIntoRem(254)});
  }
`;

const AppMainPageEmptyOutputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxIntoRem(20)};
  @media (max-width: 500px) {
    gap: ${pxIntoRem(10)};
    width: 100vw;
  }
`;

const AppMainPageEmptyOutputIcon = styled.img`
  width: ${pxIntoRem(62)};
  height: ${pxIntoRem(84)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(44)};
    height: ${pxIntoRem(61)};
  }
`;

const AppMainPageEmptyOutputText = styled.p`
  color: #79768B;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  span {
    color: #FFF;
  }
  &.additional_text_field {
    margin-top: ${pxIntoRem(-8)};
    font-size: ${pxIntoRem(14)};
    font-weight: 400;
    line-height: 150%;
    width: ${pxIntoRem(401)};
  }
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(15)};
    margin-right: ${pxIntoRem(15)};
    width: auto;
    &.additional_text_field {
      margin-left: ${pxIntoRem(15)};
      margin-right: ${pxIntoRem(15)};
      width: auto;
      margin-top: ${pxIntoRem(6)};
    }
  }
`;

export {
    AppMainPageBlock,
    AppMainPageTitle,
    AppMainPageText,
    AppMainPageBottomLineBlock,
    AppMainPageBottomLine,
    AppMainPageEmptyContent,
    AppMainPageEmptyOutputBlock,
    AppMainPageEmptyOutputIcon,
    AppMainPageEmptyOutputText
};