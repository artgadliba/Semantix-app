import styled from "styled-components";
import { Link } from "react-router-dom";
import pxIntoRem from "utils/pxIntoRem";

const LandingFaqPageBlock = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LandingFaqPageContentBlock = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: ${pxIntoRem(40)};
  margin-bottom: ${pxIntoRem(112)};
  justify-content: center;
  @media (max-width: 500px) {
    margin: ${pxIntoRem(73)} ${pxIntoRem(15)} auto ${pxIntoRem(15)};
    width: auto;
  }
`;

// block created for further needs
const LandingFaqNavigationBlock = styled.div`
  postion: relative;
  display: none;
  flex-direction: column;
  align-items: start;
`;

const LandingFaqNavigationBlockTitle = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: ${pxIntoRem(73)};
`;

const LandingFaqNavigationBlockSection = styled.button`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: ${pxIntoRem(24)};
  gap: ${pxIntoRem(16)};
  background: transparent;
  transition: 0.3s;
  &:hover {
    color: #1683E2;
  }
`;

const LandingFaqMainBlock = styled.div`
  postion: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LandingFaqMainBlockSearchInputBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  width: ${pxIntoRem(728)};
  height: ${pxIntoRem(42)};
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #2D3042;
  margin-bottom: ${pxIntoRem(20)};
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const LandingFaqMainBlockSearchInput = styled.input`
  padding: ${pxIntoRem(11)} ${pxIntoRem(0)} ${pxIntoRem(10)} ${pxIntoRem(16)};
  width: 100%;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  background: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const LandingFaqMainBlockSearchInputIcon = styled.img`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  margin-left: auto;
  margin-right: ${pxIntoRem(16)};
`;

const LandingFaqMainBlockQuestionElementIcon = styled.svg`
  position: absolute;
  width: ${pxIntoRem(32)};
  height: ${pxIntoRem(32)};
  top: ${pxIntoRem(20)};
  right: ${pxIntoRem(24)};
  stroke: #2D3042;
  path {
    stroke: #FFF;
  }
  @media (max-width: 500px) {
    top: ${pxIntoRem(20)};
    right: ${pxIntoRem(20)};
  }
`;

const LandingFaqMainBlockQuestionElement = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(728)};
  margin-bottom: ${pxIntoRem(16)};
  padding: ${pxIntoRem(25)} ${pxIntoRem(24)};
  background: transparent;
  transition: 0.3s;
  &:hover ${LandingFaqMainBlockQuestionElementIcon} {
    stroke: #1683E2;
    path {
        stroke: #1683E2;
    }
    transition: 0.3s;
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
  @media (max-width: 500px) {
    width: 100%;
    padding: ${pxIntoRem(20)};
    min-height: ${pxIntoRem(78)};
  }
`;

const LandingFaqMainBlockQuestionElementBackgroundLayer = styled.button`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: rgba(28, 29, 40, 0.25);
  border-radius: ${pxIntoRem(16)};
`;

const LandingFaqMainBlockQuestionElementTitle = styled.h2`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  z-index: 999;
  text-align: start;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(16)};
    margin-right: ${pxIntoRem(72)};
  }
`;

const LandingFaqMainBlockQuestionElementText = styled.p`
  display: none;
  position: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(25)};
  text-align: start;
  z-index: 9;
  &.visibleText {
    display: inline;
  }
  span {
    color: FFF;
  }
`;

const LandingFaqMainBlockQuestionElementInnerLink = styled(Link)`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(25)};
  text-align: start;
  z-index: 9;
  &:hover {
    color: #1683E2;
  }
`;

const LandingFaqGreetingBlock = styled.div`
  postion: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: ${pxIntoRem(75)};
`;

const LandingFaqGreetingTitle = styled.h1`
  color: #FFF;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(38)};
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;

const LandingFaqGreetingCallToAction = styled.h2`
  color: #79768B;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(20)};
  span {
    color: #FFF;
  }
`;

const LandingFaqContactsLinkBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: ${pxIntoRem(16)};
  gap: ${pxIntoRem(12)};
`;

const LandingFaqTelegramLinkIcon = styled.svg`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  fill: #FFF;
`;

const LandingFaqTelegramLinkBlock = styled(Link)`
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
  &:hover ${LandingFaqTelegramLinkIcon} {
    fill: #1683E2;
    transition: 0.3s;
  }
`;

const LandingFaqEmailLinkIcon = styled.svg`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  fill: #FFF;
`;

const LandingFaqEmailLinkBlock = styled(Link)`
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
  &:hover ${LandingFaqEmailLinkIcon} {
    fill: #1683E2;
    transition: 0.3s;
  }
`;

const LandingFaqHighlight = styled.span`
  background-color: rgba(22, 131, 226, 0.20);
  border-radius: ${pxIntoRem(3)};
  color: #1683E2;
  padding-bottom: ${pxIntoRem(3)};
`;

export {
  LandingFaqPageBlock,
  LandingFaqPageContentBlock,
  LandingFaqNavigationBlock,
  LandingFaqNavigationBlockTitle,
  LandingFaqNavigationBlockSection,
  LandingFaqMainBlock,
  LandingFaqMainBlockSearchInputBlock,
  LandingFaqMainBlockSearchInput,
  LandingFaqMainBlockSearchInputIcon,
  LandingFaqMainBlockQuestionElement,
  LandingFaqMainBlockQuestionElementBackgroundLayer,
  LandingFaqMainBlockQuestionElementTitle,
  LandingFaqMainBlockQuestionElementIcon,
  LandingFaqMainBlockQuestionElementText,
  LandingFaqMainBlockQuestionElementInnerLink,
  LandingFaqGreetingBlock,
  LandingFaqGreetingTitle,
  LandingFaqGreetingCallToAction,
  LandingFaqContactsLinkBlock,
  LandingFaqTelegramLinkIcon,
  LandingFaqTelegramLinkBlock,
  LandingFaqEmailLinkIcon,
  LandingFaqEmailLinkBlock,
  LandingFaqHighlight
};