import styled from "styled-components";
import { Link } from "react-router-dom";
import pxIntoRem from "utils/pxIntoRem";

const AppBalancePageBlock = styled.div`
  position: relative;
  width: 100%;
`;

const AppBalancePageCurrentBalanceBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${pxIntoRem(40)};
  margin-left: ${pxIntoRem(40)};
  width: ${pxIntoRem(352)};
  @media (max-width: 500px) {
    margin: 0 ${pxIntoRem(15)} ${pxIntoRem(200)} ${pxIntoRem(15)};
    width: auto;
  }
`;

const AppBalancePageCurrentBalanceTitle = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  span {
    color: #FFF;
  }
`;

const AppBalancePageCurrentBalanceWidget = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: ${pxIntoRem(52)};
  margin-top: ${pxIntoRem(16)};
  width: 100%;
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(16)};
    border: 2px solid transparent;
    background: linear-gradient(181deg, rgba(32, 34, 48, 0.7) 1.02%, rgba(32, 33, 41, 0) 128.15%) border-box;
    -webkit-mask:
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
`;

const AppBalancePageCurrentBalanceWidgetBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: #0E0F1A;
  border-radius: ${pxIntoRem(16)};
`;

const AppBalancePageCurrentBalanceWidgetText = styled.p`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};;
  line-height: normal;
  font-style: normal;
  font-weight: 400;
  margin-left: ${pxIntoRem(16)};
  z-index: 9999;
`;

const AppBalancePageCurrentBalanceWidgetMinutes = styled.p`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: auto;
  margin-right: ${pxIntoRem(16)};
  z-index: 9999;
`;

const AppBalancePageRatesBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${pxIntoRem(40)};
  margin-left: ${pxIntoRem(40)};
  margin-right: ${pxIntoRem(40)};
  gap: ${pxIntoRem(16)};
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(15)};
    margin-right: ${pxIntoRem(15)};
    width: auto;
  }
`;

const AppBalancePageRatesTitle = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`; 

const AppBalancePageRatesTablesBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${pxIntoRem(24)};
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const AppBalancePageRatesTable = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  &.bottomBlock {
    flex-basis: auto;
    width: calc(50% - ${pxIntoRem(12)});
  }
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(16)};
    border: 1px solid transparent;
    background: linear-gradient(181deg, rgba(32, 34, 48, 0.7) 1.02%, rgba(32, 33, 41, 0) 128.15%) border-box;
    -webkit-mask:
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
  &.bottomBlock {
    margin-bottom: ${pxIntoRem(32)};
  }
  @media (max-width: 500px) {
    width: auto;
    &.bottomBlock {
        width: auto;
    }
  }
`;

const AppBalancePageRatesTableBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: #0E0F1A;
  border-radius: ${pxIntoRem(16)};
`;

const AppBalancePageRatesTableTitleBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: ${pxIntoRem(24)};
  margin-left: ${pxIntoRem(25)};
  gap: ${pxIntoRem(8)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(20)};
    margin-left: ${pxIntoRem(20)};
  }
`;

const AppBalancePageRatesTableTitleIcon = styled.img`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
`;

const AppBalancePageRatesTableTitleText = styled.h2`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`;

const AppBalancePageRatesTableOverview = styled.p`
  position: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: ${pxIntoRem(16)} ${pxIntoRem(25)} 0 ${pxIntoRem(25)};
  width: ${pxIntoRem(500)};
  @media (max-width: 500px) {
    margin: ${pxIntoRem(16)} ${pxIntoRem(20)} auto ${pxIntoRem(20)};
    width: auto;
  }
`;

const AppBalancePageRatesTableCallToAction = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  z-index: 9999;
  margin-left: ${pxIntoRem(25)};
  margin-top: ${pxIntoRem(24)};
`;

const AppBalancePageRatesTableOptionsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

const AppBalancePageRatesTableOptionsBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: ${pxIntoRem(256)} !important;
  margin: ${pxIntoRem(16)} auto ${pxIntoRem(24)} ${pxIntoRem(25)};
  border-radius: ${pxIntoRem(16)};
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(16)};
    border: 1px solid transparent;
    background: linear-gradient(181deg, rgba(32, 34, 48, 0.7) 1.02%, rgba(32, 33, 41, 0) 128.15%) border-box;
    -webkit-mask:
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 500px) {
    margin: ${pxIntoRem(16)} auto ${pxIntoRem(19)} ${pxIntoRem(20)};
    max-height: ${pxIntoRem(353)} !important;
  }
`;

const AppBalancePageRatesTableOptionsContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  position: relative;
  width: 100%;
  overflow: auto;
`;

const AppBalancePageRatesTableOptionsBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: #12131E;
  border-radius: ${pxIntoRem(16)};
`;

const AppBalancePageRatesTableOptionIcon = styled.svg`
  width: ${pxIntoRem(28)};
  height: ${pxIntoRem(28)};
  stroke: #2D3042;
  margin-left: auto;
  margin-right: ${pxIntoRem(20)};
  @media (max-width: 500px) {
    position: absolute;
    top: ${pxIntoRem(16)};
    right: 0;
  }
`;

const AppBalancePageRatesTableOptionBlock = styled.button`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: ${pxIntoRem(56)} !important;
  width: 100%;
  align-items: center;
  background: transparent;
  &:hover ${AppBalancePageRatesTableOptionIcon} {
    stroke: #1683E2;
  }
  &:hover {
    background: #181A2B;
  }
  &:active {
    background: #181A2B;
  }
  @media (max-width: 500px) {
    min-height: ${pxIntoRem(78)} !important;
    flex-direction: column;
    align-items: start;
  }
`;

const AppBalancePageRatesTableOptionBlockHidden = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(182deg, rgba(18, 19, 30, 0.50) 24.37%, #12131E 136.53%);
  &.activeHidden {
    display: flex;
  }
`;

const AppBalancePageRatesTableOptionValue = styled.div`
  color: #2499FF;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-left: ${pxIntoRem(20)};
  span {
    color: #FFF;
  }
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(16)};
    margin-left: ${pxIntoRem(16)};
    font-size: ${pxIntoRem(14)};
  }
`;

const AppBalancePageRatesTableOptionPrice = styled.div`
  position: absolute;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  left: 55%;
  @media (max-width: 500px) {
    position: relative;
    margin-top: ${pxIntoRem(4)};
    margin-left: ${pxIntoRem(16)};
    left: 0;
    font-size: ${pxIntoRem(14)};
  }
`;

const AppBalancePageRatesTableOptionLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #1A1B27;
`;

const AppBalancePageRatesTableScrollbarTrack = styled.div`
  position: relative;
  height: ${pxIntoRem(228)};
  width: ${pxIntoRem(6)};
  background: transparent;
  margin: ${pxIntoRem(30)} ${pxIntoRem(15)} auto ${pxIntoRem(10)};
  border-radius: ${pxIntoRem(10)};
  @media (max-width: 500px) {
    height: ${pxIntoRem(325)};
    margin: ${pxIntoRem(30)} ${pxIntoRem(10)} auto ${pxIntoRem(10)};
  }
`;

const AppBalancePageRatesTableScrollbarThumb = styled.div`
  position: relative;
  width: ${pxIntoRem(6)};
  background: #1668E2;
  border-radius: ${pxIntoRem(10)};
  transform: translate3d(0px, 0px, 0px);
`;

const AppBalancePageContactsLinkBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: ${pxIntoRem(20)} auto ${pxIntoRem(24)} ${pxIntoRem(24)};
  gap: ${pxIntoRem(12)};
`;

const AppBalancePageTelegramLinkIcon = styled.svg`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  fill: #FFF;
`;

const AppBalancePageTelegramLinkBlock = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(42)};
  height: ${pxIntoRem(42)};
  border-radius: 50%;
  background: #171828;
  z-index: 999999;
  transition: 0.3s;
  &:hover ${AppBalancePageTelegramLinkIcon} {
    fill: #1683E2;
    transition: 0.3s;
  }
`;

const AppBalancePageEmailLinkIcon = styled.svg`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  fill: #FFF;
`;

const AppBalancePageEmailLinkBlock = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(42)};
  height: ${pxIntoRem(42)};
  border-radius: 50%;
  background: #171828;
  z-index: 999999;
  transition: 0.3s;
  &:hover ${AppBalancePageEmailLinkIcon} {
    fill: #1683E2;
    transition: 0.3s;
  }
`;

const AppBalancePageFeaturesBlock = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: ${pxIntoRem(548)};
  align-items: center;
  top: ${pxIntoRem(-166)};
  &:nth-of-type(2) {
    top: ${pxIntoRem(-102)};
  }
  @media (max-width: 500px) {
    top: ${pxIntoRem(-776)};
    &:nth-of-type(2) {
        top: ${pxIntoRem(-696)};
    }
    width: auto;
  }
`;

const AppBalancePageFeaturesBullet = styled.div`
  position: absolute;
  width: ${pxIntoRem(8)};
  height: ${pxIntoRem(8)};
  border-radius: 50%;
  background: #1683E2;
  top: ${pxIntoRem(8)};
  left: ${pxIntoRem(12)};
  @media (max-width: 500px) {
    left: 0;
  }
`;

const AppBalancePageFeaturesTitle = styled.h2`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: ${pxIntoRem(30)};
  span {
    color: #1683E2;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(14)};
    margin-left: ${pxIntoRem(18)};
  }
`;

export {
  AppBalancePageBlock,
  AppBalancePageCurrentBalanceBlock,
  AppBalancePageCurrentBalanceTitle,
  AppBalancePageCurrentBalanceWidget,
  AppBalancePageCurrentBalanceWidgetBackgroundLayer,
  AppBalancePageCurrentBalanceWidgetText,
  AppBalancePageCurrentBalanceWidgetMinutes,
  AppBalancePageRatesBlock,
  AppBalancePageRatesTitle,
  AppBalancePageRatesTablesBlock,
  AppBalancePageRatesTable,
  AppBalancePageRatesTableBackgroundLayer,
  AppBalancePageRatesTableTitleBlock,
  AppBalancePageRatesTableTitleIcon,
  AppBalancePageRatesTableTitleText,
  AppBalancePageRatesTableOverview,
  AppBalancePageRatesTableCallToAction,
  AppBalancePageRatesTableOptionsWrapper,
  AppBalancePageRatesTableOptionsBlock,
  AppBalancePageRatesTableOptionBlockHidden,
  AppBalancePageRatesTableOptionsContent,
  AppBalancePageRatesTableOptionsBackgroundLayer,
  AppBalancePageRatesTableOptionBlock,
  AppBalancePageRatesTableOptionValue,
  AppBalancePageRatesTableOptionPrice,
  AppBalancePageRatesTableOptionLine,
  AppBalancePageRatesTableOptionIcon,
  AppBalancePageRatesTableScrollbarTrack,
  AppBalancePageRatesTableScrollbarThumb,
  AppBalancePageContactsLinkBlock,
  AppBalancePageTelegramLinkIcon,
  AppBalancePageTelegramLinkBlock,
  AppBalancePageEmailLinkIcon,
  AppBalancePageEmailLinkBlock,
  AppBalancePageFeaturesBlock,
  AppBalancePageFeaturesBullet,
  AppBalancePageFeaturesTitle
};