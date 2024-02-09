import styled from "styled-components";
import { Link } from "react-router-dom";
import pxIntoRem from "utils/pxIntoRem";

const LandingFaqPageBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LandingFaqPageContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(860)};
  margin-top: ${pxIntoRem(40)};
  margin-bottom: ${pxIntoRem(70)};
  @media (max-width: 500px) {
    margin: ${pxIntoRem(40)} ${pxIntoRem(15)};
    width: auto;
  }
`;

const LandingFaqNavigationBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: ${pxIntoRem(5)};
  margin-left: 0px;
`;

const LandingFaqNavigationBlockTitle = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const LandingFaqNavigationBlockSection = styled.button`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: ${pxIntoRem(24)};
  background: transparent;
  transition: 0.3s;
  &.active_section {
    color: #1683E2;
  }
  @media (min-width: 501px) {
    &:hover {
      color: #1683E2;
    }
  }
`;

const LandingFaqNavigationMobileBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90vw;
  justify-content: center;
  height: auto;
  border-bottom: solid 1px #171A27;
  background: transparent;
`;

const LandingFaqNavigationMobileButton = styled.button`
  width: 100%;
  height: ${pxIntoRem(55)};
  background: transparent;
  text-align: start;
`;

const LandingFaqNavigationMobileBlockTitle = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: ${pxIntoRem(16)} 0;
`;

const LandingFaqNavigationMobileExpandIcon = styled.img`
  position: absolute;
  right: 0;
  top: ${pxIntoRem(18)};
  width: ${pxIntoRem(19)};
  height: ${pxIntoRem(19)};
  z-index: 999;
`;

const LandingFaqMainBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  @media (max-width: 500px) {
    margin-left: 0;
  }
`;

const LandingFaqQuestionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: auto;
  margin-right: 0;
  @media (max-width: 500px) {
    margin-left: 0;
  }
`;

const LandingFaqSearchInputBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: ${pxIntoRem(860)};
  height: ${pxIntoRem(42)};
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #2D3042;
  margin-bottom: ${pxIntoRem(20)};
  @media (max-width: 500px) {
    width: 100%;
  }
`;

const LandingFaqSearchInput = styled.input`
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
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(16)};
  }
`;

const LandingFaqSearchInputIcon = styled.img`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  margin-left: auto;
  margin-right: ${pxIntoRem(16)};
`;

const LandingFaqQuestionElementIcon = styled.svg`
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

const LandingFaqQuestionsBlockTitle = styled.h3`
  position: relative;
  display: block;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: ${pxIntoRem(24)};
  align-items: start;
`;

const LandingFaqQuestionElement = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(640)};
  margin-bottom: ${pxIntoRem(16)};
  padding: ${pxIntoRem(25)} ${pxIntoRem(24)};
  background: transparent;
  transition: 0.3s;
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
            mask:
                linear-gradient(#fff 0 0) padding-box, 
                linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
  @media (min-width: 501px) {
    &:hover ${LandingFaqQuestionElementIcon} {
      stroke: #1683E2;
      path {
        stroke: #1683E2;
      }
      transition: 0.3s;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    padding: ${pxIntoRem(20)};
    min-height: ${pxIntoRem(78)};
  }
`;

const LandingFaqQuestionElementBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: rgba(28, 29, 40, 0.25);
  border-radius: ${pxIntoRem(16)};
`;

const LandingFaqQuestionElementTitle = styled.h2`
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

const LandingFaqQuestionElementText = styled.p`
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
  &.visible_text {
    display: inline;
  }
  span {
    color: FFF;
  }
`;

const LandingFaqQuestionElementInnerLink = styled(Link)`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(25)};
  text-align: start;
  z-index: 9;
  @media (min-width: 501px) {
    &:hover {
      color: #1683E2;
    }
  }
`;

const LandingFaqGreetingBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${pxIntoRem(75)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(40)};
  }
`;

const LandingFaqGreetingTitle = styled.h1`
  color: #FFF;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(38)};
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(32)};
    width: 90vw;
  }
`;

const LandingFaqGreetingCallToAction = styled.p`
  color: #79768B;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(20)};
  span {
    margin-left: ${pxIntoRem(2)};
    color: #FFF;
  }
  @media (max-width: 500px) {
    width: 80vw;
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
  @media (min-width: 501px) {
    &:hover ${LandingFaqTelegramLinkIcon} {
      fill: #1683E2;
      transition: 0.3s;
    }
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
  @media (min-width: 501px) {
    &:hover ${LandingFaqEmailLinkIcon} {
      fill: #1683E2;
      transition: 0.3s;
    }
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
  LandingFaqNavigationMobileBlock,
  LandingFaqNavigationMobileButton,
  LandingFaqNavigationMobileBlockTitle,
  LandingFaqNavigationMobileExpandIcon,
  LandingFaqMainBlock,
  LandingFaqQuestionsBlock,
  LandingFaqQuestionsBlockTitle,
  LandingFaqSearchInputBlock,
  LandingFaqSearchInput,
  LandingFaqSearchInputIcon,
  LandingFaqQuestionElement,
  LandingFaqQuestionElementBackgroundLayer,
  LandingFaqQuestionElementTitle,
  LandingFaqQuestionElementIcon,
  LandingFaqQuestionElementText,
  LandingFaqQuestionElementInnerLink,
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