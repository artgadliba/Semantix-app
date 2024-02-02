import { Link } from "react-router-dom";
import styled from "styled-components";
import pxIntoRem from "../../../../utils/pxIntoRem";

const LandingFooterBlock = styled.footer`
  position: relative;
  width: 100%;
  height: ${pxIntoRem(69)};
  z-index: 9;
  margin-top: auto;
  @media (max-width: 500px) {
    height: auto;
  }
`;

const LandingFooterBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding-top: ${pxIntoRem(24)};
  padding-bottom: ${pxIntoRem(24)};
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const LandingFooterTop = styled.div`
  position: absolute;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  height: ${pxIntoRem(1)};
  background: linear-gradient(270deg, rgba(23, 26, 39, 0.00) 0%, #171A27 50.01%, rgba(23, 26, 39, 0.00) 100%);
`;

const LandingFooterStampWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${pxIntoRem(10)};
`;

const LandingFooterStamp = styled.div`
  color: #848097;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: ${pxIntoRem(70)};
  @media (max-width: 500px) {
    margin: ${pxIntoRem(24)} auto;
  }
`;

const LandingFooterDocumentsNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  position: absolute;
  margin: 0 auto;
  gap: ${pxIntoRem(32)};
  @media (max-width: 500px) {
    position: relative;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    gap: ${pxIntoRem(10)};
  }
`;

const LandingFooterDocumentLink = styled(Link)`
  color: #848097;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  transition: 0.3s;
  &:hover {
    color: #FFF;
    transition: 0.3s;
  }
`;

const LandingFooterContactsBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: ${pxIntoRem(70)};
  margin-left: auto;
  width: auto;
  height: auto;
  gap: ${pxIntoRem(46)};
  @media (max-width: 500px) {
    margin: ${pxIntoRem(30)} auto;
    flex-direction: column;
    align-items: center;
    gap: ${pxIntoRem(16)};
    margin-bottom: ${pxIntoRem(24)};
  }
`;

const LandingFooterTelegramIcon = styled.svg`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  fill: #FFF;
`;

const LandingFooterTelegramTitle = styled.div`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const LandingFooterContactTelegramBlock = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: ${pxIntoRem(10)};
  transition: 0.3s;
  &:hover ${LandingFooterTelegramIcon} {
    fill: #1683E2;
    transition: 0.3s;
  }
  &:hover ${LandingFooterTelegramTitle} {
    color: #1683E2;
    transition: 0.3s;
  }
  &:active ${LandingFooterTelegramIcon} {
    fill: #1683E2;
    transition: 0.3s;
  }
  &:active ${LandingFooterTelegramTitle} {
    color: #1683E2;
    transition: 0.3s;
  }
`;

const LandingFooterEmailIcon = styled.svg`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  fill: #FFF;
`;

const LandingFooterEmailTitle = styled.div`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const LandingFooterContactEmailBlock = styled(Link)`
  display: flex;
  flex-direction: row;
  gap: ${pxIntoRem(10)};
  transition: 0.3s;
  &:hover ${LandingFooterEmailIcon} {
    fill: #1683E2;
    transition: 0.3s;
  }
  &:hover ${LandingFooterEmailTitle} {
    color: #1683E2;
    transition: 0.3s;
  }
  &:active ${LandingFooterEmailIcon} {
    fill: #1683E2;
    transition: 0.3s;
  }
  &:active ${LandingFooterEmailTitle} {
    color: #1683E2;
    transition: 0.3s;
  }
`;

export {
    LandingFooterBlock,
    LandingFooterBody,
    LandingFooterTop,
    LandingFooterStampWrapper,
    LandingFooterStamp,
    LandingFooterDocumentsNavigation,
    LandingFooterDocumentLink,
    LandingFooterContactsBlock,
    LandingFooterContactTelegramBlock,
    LandingFooterTelegramIcon,
    LandingFooterTelegramTitle,
    LandingFooterContactEmailBlock,
    LandingFooterEmailIcon,
    LandingFooterEmailTitle
};