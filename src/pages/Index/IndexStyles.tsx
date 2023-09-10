import styled from "styled-components";
import { Link } from "react-router-dom";
import pxIntoRem from "../../utils/pxIntoRem";

const IndexBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const IndexGreetingBackgroundBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: ${pxIntoRem(745)};
  @media (max-width: 500px) {
    height: ${pxIntoRem(401)};
  }
`;

const IndexGreeting = styled.section`
  width: 100%;
`;

const IndexGreetingBody = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: ${pxIntoRem(244)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(114)};
  }
`;

const IndexGreetingBackground = styled.img`
  position: relative;
  top: ${pxIntoRem(-97)};
  width: ${pxIntoRem(978)};
  height: ${pxIntoRem(713)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(440)};
    height: ${pxIntoRem(321)};
    top: ${pxIntoRem(50)};
  }
`;

const IndexBlurredRectangle = styled.div`
  position: relative;
  z-index: 99999;
  top: 0;
  width: 100%;
  height: ${pxIntoRem(146)};
  flex-shrink: 0;
  background: #030512;
  filter: blur(42px);
  -webkit-transform: translate3d(0, 0, 0);
  @media (max-width: 500px) {
    display: none;
  }
`;

const IndexGreetingContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 99;
`;

const IndexGreetingTitleBox = styled.div`
  display: inline-block;
  width: ${pxIntoRem(105)};
  height: ${pxIntoRem(67)};
  padding-top: ${pxIntoRem(2.24)};
  margin-left: ${pxIntoRem(6)};
  border-radius: ${pxIntoRem(16)};
  background: #171828;
  backdrop-filter: blur(3px);
  -webkit-transform: translate3d(0, 0, 0);
  border: 1px solid #202230;
  @media (max-width: 500px) {
    width: ${pxIntoRem(56)};
    height: ${pxIntoRem(34)};
    border-radius: ${pxIntoRem(8.229)};
    padding-top: ${pxIntoRem(0)};
  }
`;

const IndexGreetingTitle = styled.h1`
  position: relative;
  top: ${pxIntoRem(-1)};
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: ${pxIntoRem(57)};
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  z-index: 99999;
  .mobile-break {
    display: none;
  }
  span {
    color: #1683E2;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(32)};
    .mobile-break {
      display: flex;
    }
  }
`;

const IndexGreetingText = styled.p`
  position: relative;
  margin-top: ${pxIntoRem(19)};
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(16)};
  line-height: 150%;
  text-align: center;
  color: #848097;
  .mobile-break {
    display: none;
  }
  .desktop-break {
    display: flex;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(14)};
    .mobile-break {
      display: flex;
    }
    .desktop-break {
      display: none;
    }
  }
`;

const IndexGreetingTryFreeButton = styled.button`
  width: ${pxIntoRem(251)};
  height: ${pxIntoRem(46)};
  background-color: #1683E2;
  border-radius: ${pxIntoRem(8)};
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: normal;
  color: #FFF;
  display: flex;
  position: relative;
  margin: ${pxIntoRem(24)};
  align-items: center;
  gap: ${pxIntoRem(10)};
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #1668E2;
    box-shadow: 0px 0px ${pxIntoRem(24)} 0px rgba(22, 104, 226, 0.50);
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    width: 90vw;
  }
`;

const IndexGreetingTelegramLinkIcon = styled.svg`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  fill: #FFF;
`;

const IndexGreetingTelegramLinkBlock = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(42)};
  height: ${pxIntoRem(42)};
  border-radius: 50%;
  background: #171828;
  margin-top: ${pxIntoRem(608)};
  right: 5%;
  z-index: 999999;
  transition: 0.3s;
  &:hover ${IndexGreetingTelegramLinkIcon} {
    fill: #1683E2;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const IndexGreetingEmailLinkIcon = styled.svg`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  fill: #FFF;
`;

const IndexGreetingEmailLinkBlock = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(42)};
  height: ${pxIntoRem(42)};
  margin-top: ${pxIntoRem(658)};
  border-radius: 50%;
  background: #171828;
  right: 5%;
  z-index: 999999;
  transition: 0.3s;
  &:hover ${IndexGreetingEmailLinkIcon} {
    fill: #1683E2;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const IndexUpperBackgroundBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: ${pxIntoRem(-29)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(5)};
    height: auto;
  }
`;

const IndexUpperBackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  z-index: 99;
  padding-left: ${pxIntoRem(35)};
  padding-right: ${pxIntoRem(35)};
  filter: drop-shadow(0px 24px 234px rgba(0, 0, 0, 0.20));
  @media (max-width: 500px) {
    display: none;
  }
`;

const IndexUpperMobileBackgroundImage = styled.svg`
  width: 100%;
  height: auto;
  z-index: 99;
  display: none;
  @media (max-width: 500px) {
    display: flex;
    filter: drop-shadow(0px 24px 234px rgba(0, 0, 0, 0.20));
    position: absolute;
  }
`;

const IndexUpperBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(100)};
  height: ${pxIntoRem(100)};
  top: 17%;
  right: ${pxIntoRem(-50)};
  border-radius: 50%;
  background: #1683E2;
  filter: blur(176.5px);
  -webkit-transform: translate3d(0, 0, 0);
`;

const IndexLowerBackgroundBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: ${pxIntoRem(805)};
  margin-top: ${pxIntoRem(23)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(100)};
    height: auto;
  }
`;

const IndexLowerBackgroundImage = styled.img`
  width: 100%;
  height: ${pxIntoRem(805)};
  position: absolute;
  padding-left: ${pxIntoRem(35)};
  padding-right: ${pxIntoRem(35)};
  z-index: 99;
  filter: drop-shadow(0px 24px 234px rgba(0, 0, 0, 0.20));
  @media (max-width: 500px) {
    display: none;
  }
`;

const IndexLowerMobileBackgroundImage = styled.img`
  width: 100%;
  height: ${pxIntoRem(279)};
  z-index: 99;
  display: none;
  @media (max-width: 500px) {
    display: flex;
    filter: drop-shadow(0px 24px 234px rgba(0, 0, 0, 0.20));
    bottom: 0px;
    height: auto;
    position: absolute;
  }
`;

const IndexLowerBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(100)};
  height: ${pxIntoRem(100)};
  top: 52%;
  right: ${pxIntoRem(-50)};
  border-radius: 50%;
  background: #1683E2;
  filter: blur(176.5px);
  -webkit-transform: translate3d(0, 0, 0);
`;

const IndexFeatures = styled.section`
  width: 100%;
`;

const IndexFeaturesBody = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const IndexFeaturesTitleContent = styled.div`
  z-index: 99;
`;

const IndexFeaturesTitle = styled.h2`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: ${pxIntoRem(38)};
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  margin-top: ${pxIntoRem(150)};
  @media (max-width: 500px) {
    margin-top: 7.5%;
    font-size: ${pxIntoRem(24)};
  }
`;

const IndexFeaturesTables = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-tempalte-rows: auto;
  grid-auto-flow: row;
  gap: ${pxIntoRem(20)};
  width: ${pxIntoRem(1300)};
  justify-items: center;
  align-items: center;
  margin-top: ${pxIntoRem(20)};
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin-top: ${pxIntoRem(30)};
    gap: ${pxIntoRem(16)};
  }
`;

const IndexFeaturesTableSide = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(54)} 0px rgba(0, 0, 0, 0.2);
  width: ${pxIntoRem(420)};
  height: ${pxIntoRem(272)};
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(20)};
    border: 1px solid transparent;
    background: linear-gradient(185.64deg, rgba(32, 34, 48, 0.7) 1.02%, rgba(32, 33, 41, 0) 128.15%) border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
  @media (max-width: 500px) {
    width: 90vw;
    height: auto;
  }
`;

const IndexFeaturesTableBackground = styled.div`
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  border-radius: ${pxIntoRem(20)};
  background: rgba(28, 29, 40, 0.25);
  overflow: hidden;
`;

const IndexFeaturesTableCenter = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(54)} 0px rgba(0, 0, 0, 0.2);
  width: ${pxIntoRem(420)};
  height: ${pxIntoRem(272)};
  top: ${pxIntoRem(104)};
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(20)};
    border: 1px solid transparent;
    background: linear-gradient(185.64deg, rgba(32, 34, 48, 0.7) 1.02%, rgba(32, 33, 41, 0) 128.15%) border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
  @media (max-width: 500px) {
    width: 90vw;
    height: auto;
    top: ${pxIntoRem(0)};
  }
`;

const IndexFeaturesTablePattern = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IndexFeaturesTableIcon = styled.img`
  display: flex;
  width: ${pxIntoRem(40)};
  height: ${pxIntoRem(40)};
  margin: ${pxIntoRem(32)} ${pxIntoRem(24)};
  justify-content: center;
  align-items: center;
  z-index: 99999;
  @media (max-width: 500px) {
    width: ${pxIntoRem(32)};
    height: ${pxIntoRem(32)};
    margin: ${pxIntoRem(24)} ${pxIntoRem(24)};
  }
`;

const IndexFeaturesTableTitle = styled.h2`
  margin: ${pxIntoRem(16)} ${pxIntoRem(24)};
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(26)};
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  span {
    color: #1683E2;
  }
  z-index: 999;
  .mobile-break {
    display: none;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(20)};
    margin: ${pxIntoRem(0)} ${pxIntoRem(24)};
    .mobile-break {
      display: flex;
    }
  }
`;

const IndexFeaturesTableText = styled.p`
  margin: ${pxIntoRem(0)} ${pxIntoRem(24)};
  color: #848097;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  span {
    color: #FFF;
  }
  z-index: 999;
  .mobile-break {
    display: none;
  }
  .desktop-break {
    display: flex;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(14)};
    margin-top: ${pxIntoRem(16)};
    margin-left: ${pxIntoRem(24)};
    margin-bottom: ${pxIntoRem(24)};
    .mobile-break {
      display: flex;
    }
    .desktop-break {
      display: none;
    }
  }
`;

const IndexHowItWorks = styled.section`
  width: 100%;
`;

const IndexHowItWorksBody = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const IndexHowItWorksContent = styled.div`
  position: relative;
  z-index: 99;
`;

const IndexHowItWorksTitle = styled.h2`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: ${pxIntoRem(38)};
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  margin-top: ${pxIntoRem(251)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(0)};
    font-size: ${pxIntoRem(24)};
  }
`;

const IndexHowItWorksTables = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-tempalte-rows: auto;
  grid-auto-flow: row;
  gap: ${pxIntoRem(20)};
  width: ${pxIntoRem(1300)};
  justify-items: center;
  align-items: center;
  margin-top: ${pxIntoRem(59)};
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: ${pxIntoRem(0)};
    margin-top: ${pxIntoRem(0)};
  }
`;

const IndexHowItWorksTable = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(420)};
  height: ${pxIntoRem(311)};
  z-index: 999;
  position: relative;
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(54)} 0px rgba(0, 0, 0, 0.2);
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(20)};
    border: 2px solid transparent;
    background: linear-gradient(185.64deg, rgba(32, 34, 48, 0.7) 1.02%, rgba(32, 33, 41, 0) 128.15%) border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const IndexHowItWorksTableBackground = styled.div`
  position: absolute;
  margin-top: ${pxIntoRem(1)};
  margin-left: ${pxIntoRem(1)};
  width: ${pxIntoRem(418)};
  height: ${pxIntoRem(309)};
  border-radius: ${pxIntoRem(20)};
  background: #0B0D19;
  @media (max-width: 500px) {
    display:  none;
  }
`;

const IndexHowItWorksInnerFrame = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  margin: auto;
  border: 2px solid transparent;
  width: ${pxIntoRem(400)};
  height: ${pxIntoRem(291)};
  border-radius: ${pxIntoRem(12)};
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(44)} 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(56.913185119628906px);
  -webkit-transform: translate3d(0, 0, 0);
  @media (max-width: 500px) {
    display:  none;
  }
`;

const IndexHowItWorksImage = styled.img`
  width: 100%;
  height: 100%;
  @media (max-width: 500px) {
    display: none;
  }
`;

const IndexHowItWorksMobileImage = styled.img`
  width: 90vw;
  heigth: auto;
  display: none;
  @media (max-width: 500px) {
    display: flex;
    margin-top: ${pxIntoRem(30)};
  }
`;

const IndexHowItWorksText = styled.div`
  display: flex;
  color: #FFF;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  margin-top: ${pxIntoRem(9)};
  @media (max-width: 500px) {
    display: none;
    margin-top: ${pxIntoRem(0)};
  }
`;

const IndexHowItWorksMobileText = styled.div`
  display: none;
  color: #FFF;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  margin-top: ${pxIntoRem(16)};
  @media (max-width: 500px) {
    display: flex;
    &:nth-of-type(5) {
      margin-bottom: ${pxIntoRem(40)};
    }
  }
`;

const IndexPaymentBackgroundBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: ${pxIntoRem(40)};
  padding-left: ${pxIntoRem(35)};
  padding-right: ${pxIntoRem(35)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(40)};
    padding-left: ${pxIntoRem(0)};
    padding-right: ${pxIntoRem(0)};
    height: ${pxIntoRem(820)};
  }
`;

const IndexPaymentBackground = styled.div`
  width: 100%;
  height: ${pxIntoRem(598)};
  filter: drop-shadow(0px ${pxIntoRem(24)} ${pxIntoRem(234)} rgba(0, 0, 0, 0.20));
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(54)} 0px rgba(0, 0, 0, 0.20);
  position: relative;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(35)};
    border: 1px solid transparent;
    background: linear-gradient(185.64deg, rgba(32, 34, 48, 0.7) 1.02%, rgba(32, 33, 41, 0) 128.15%) border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const IndexPaymentMobileBackground = styled.img`
  width: 100%;
  filter: drop-shadow(0px ${pxIntoRem(24)} ${pxIntoRem(234)} rgba(0, 0, 0, 0.20));
  z-index: 99;
  display: none;
  @media (max-width: 500px) {
    display: flex;
  }
`;

const IndexPaymentBackgroundLayer = styled.div`
  position: absolute;
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(16, 17, 29, 0.50) 0%, rgba(16, 17, 29, 0.50) 100%);
  border-radius: ${pxIntoRem(35)};
  overflow: hidden;
  justify-content: center;
  align-items: center;
`;

const IndexPaymentUpperBlurredEllipse = styled.div`
  position: absolute;
  width: ${pxIntoRem(1170)};
  height: ${pxIntoRem(170)};
  top: ${pxIntoRem(-169)};
  text-align: center;
  border-radius: ${pxIntoRem(1170)};
  opacity: 0.3;
  background: #1683E2;
  filter: blur(167px);
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  @media (max-width: 500px) {
    margin: ${pxIntoRem(-150)} auto;
  }
`;

const IndexPaymentLowerBlurredEllipse = styled.div`
  position: absolute;
  width: ${pxIntoRem(1170)};
  height: ${pxIntoRem(170)};
  bottom: ${pxIntoRem(-169)};
  border-radius: ${pxIntoRem(1170)};
  opacity: 0.3;
  background: #1683E2;
  filter: blur(167px);
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
  margin-top: ${pxIntoRem(770)};
  @media (max-width: 500px) {
    margin: ${pxIntoRem(990)} auto;
  }
`;

const IndexPaymentTopBackgroundImage = styled.img`
  position: absolute;
  width: ${pxIntoRem(395)};
  height: auto;
  top: 0;
  right: 0;
`;

const IndexPaymentBottomBackgroundImage = styled.img`
  position: absolute;
  width: ${pxIntoRem(220)};
  height: auto;
  bottom: 0;
  left: 0;
`;

const IndexPaymentOption = styled.section`
  width: 100%;
`;

const IndexPaymentOptionBody = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const IndexPaymentOptionContent = styled.div`
  position: absolute;
  z-index: 99;
`;

const IndexPaymentOptionTitle = styled.h2`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: ${pxIntoRem(38)};
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  margin-top: ${pxIntoRem(110)};
  z-index: 99999;
  .mobile-break {
    display: none;
  } 
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(24)};
    margin-top: ${pxIntoRem(40)};
    width: auto;
    .mobile-break {
      display: flex;
    }
  }
`;

const IndexPaymentOptionTables = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-tempalte-rows: auto;
  grid-auto-flow: row;
  gap: ${pxIntoRem(20)};
  width: ${pxIntoRem(976)};
  justify-items: center;
  align-items: center;
  margin-top: ${pxIntoRem(60)};
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin-top: ${pxIntoRem(30)};
    gap: ${pxIntoRem(20)};
  }
`;

const IndexPaymentOptionTable = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(312)};
  height: ${pxIntoRem(280)};
  z-index: 999;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(20)};
    border: 1px solid transparent;
    background: linear-gradient(185.64deg, rgba(32, 34, 48, 0.7) 1.02%, rgba(32, 33, 41, 0) 128.15%) border-box;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
  @media (max-width: 500px) {
    width: 90vw;
    height: ${pxIntoRem(227)};
  }
`;

const IndexPaymentOptionTableBackground = styled.div`
  position: absolute;
  margin-top: ${pxIntoRem(1)};
  margin-left: ${pxIntoRem(1)};
  width: ${pxIntoRem(310)};
  height: ${pxIntoRem(278)};
  border-radius: ${pxIntoRem(20)};
  background: rgba(23, 24, 36, 0.25);
  overflow: hidden;
  backdrop-filter: blur(60px);
  -webkit-transform: translate3d(0, 0, 0);
  @media (max-width: 500px) {
    width: calc(90vw - 2px);
    height: calc(${pxIntoRem(227)} - 2px);
  }
`;

const IndexPaymentBlurredEllipseLeft = styled.div`
  position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  filter: blur(50px);
  -webkit-transform: translate3d(0, 0, 0);
  width: ${pxIntoRem(172)};
  height: ${pxIntoRem(58)};
  border-radius: ${pxIntoRem(172)};
  opacity: 0.6;
  background: #1683E2;
  @media (max-width: 500px) {
    width: ${pxIntoRem(140)};
    height: ${pxIntoRem(47)};
  }
`;

const IndexPaymentBlurredEllipseMiddle = styled.div`
  position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  filter: blur(50px);
  -webkit-transform: translate3d(0, 0, 0);
  width: ${pxIntoRem(172)};
  height: ${pxIntoRem(58)};
  border-radius: ${pxIntoRem(172)};
  opacity: 0.6;
  background: #1683E2;
  @media (max-width: 500px) {
    width: ${pxIntoRem(140)};
    height: ${pxIntoRem(47)};
  }
`;

const IndexPaymentBlurredEllipseRight = styled.div`
  position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  filter: blur(50px);
  -webkit-transform: translate3d(0, 0, 0);
  width: ${pxIntoRem(172)};
  height: ${pxIntoRem(58)};
  border-radius: ${pxIntoRem(172)};
  opacity: 0.6;
  background: #D33229;
  @media (max-width: 500px) {
    width: ${pxIntoRem(140)};
    height: ${pxIntoRem(47)};
  }
`;

const IndexPaymentOptionTableName = styled.div`
  color: #FFF;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(24)};
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-top: ${pxIntoRem(24)};
  .advanced-type {
    color: #1683E2;
  }
  .business-type {
    color: #FF7D75;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(20)};
  }
`;

const IndexPaymentOptionPrice = styled.div`
  color: #FFF;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(42)};
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin-top: ${pxIntoRem(42)};
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(32)};
    margin-top: ${pxIntoRem(24)};
  }
`;

const IndexPaymentOptionPriceText = styled.div`
  color: #848097;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(10)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(8)};
  }
`;

const IndexPaymentOptionText = styled.div`
  color: #848097;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(42)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(24)};
  }
`;

const IndexPaymentOptionPurchaseButton = styled.div`
  display: flex;
  width: ${pxIntoRem(264)};
  height: ${pxIntoRem(46)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: ${pxIntoRem(10)};
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #1683E2;
  background: rgba(22, 131, 226, 0.05);
  backdrop-filter: blur(3px);
  -webkit-transform: translate3d(0, 0, 0);
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: ${pxIntoRem(42)};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: rgba(22, 131, 226, 0.10);
    box-shadow: 0px 0px 9px 0px rgba(22, 131, 226, 0.50) inset;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    width: 80vw;
    margin-top: ${pxIntoRem(24)};
  }
`;

const IndexPaymentOptionClaimButton = styled.div`
  display: flex;
  width: ${pxIntoRem(264)};
  height: ${pxIntoRem(46)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  gap: ${pxIntoRem(10)};
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #2D3042;
  backdrop-filter: blur(3px);
  -webkit-transform: translate3d(0, 0, 0);
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: ${pxIntoRem(52)};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    border: 1px solid #FFF;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    width: 80vw;
    margin-top: ${pxIntoRem(22)};
    padding: 0px;
  }
`;

const IndexCallToActionBackgroundBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: ${pxIntoRem(523)};
  margin-top: ${pxIntoRem(0)};
  overflow: hidden;
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(24)};
    height: ${pxIntoRem(486)};
  }
`;

const IndexCallToActionBackgroundImage = styled.img`
  position: absolute;
  width: ${pxIntoRem(1359.832)};
  heigth: auto;
  left: ${pxIntoRem(120)};
  top: ${pxIntoRem(-132)};
  z-index: 1;
  @media (max-width: 500px) {
    width: 200%;
    left: ${pxIntoRem(-220)};
    top: ${pxIntoRem(-50)};
  }
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
  width: 100%;
  height: 100%;
`;

const IndexCallToActionContent = styled.div`
  position: absolute;
  z-index: 99;
`;

const IndexCallToActionContentTitle = styled.h2`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: ${pxIntoRem(42)};
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  margin-top: ${pxIntoRem(24)};
  z-index: 99999;
  .mobile-break {
    display: none;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(24)};
    .mobile-break {
      display: flex;
    }
  }
`;

const IndexCallToActionContentText = styled.h2`
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
  }
`;

const IndexCallToActionLogoBlock = styled.div`
  display: flex;
  align-items: center;
  width: ${pxIntoRem(129)};
  height: ${pxIntoRem(187)};
  margin-top: ${pxIntoRem(26)};
`;

const IndexBottomLeftBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(100)};
  height: ${pxIntoRem(100)};
  top: 91%;
  left: ${pxIntoRem(-50)};
  border-radius: 50%;
  background: #1683E2;
  filter: blur(176.5px);
  -webkit-transform: translate3d(0, 0, 0);
  @media (max-width: 500px) {
    width: ${pxIntoRem(80)};
    height: ${pxIntoRem(80)};
    top: ${pxIntoRem(1630)};
    left: ${pxIntoRem(-40)};
    filter: blur(176.5px);
  }
`;

const IndexBottomRightBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(100)};
  height: ${pxIntoRem(100)};
  top: 92%;
  right: ${pxIntoRem(-50)};
  border-radius: 50%;
  background: #1683E2;
  filter: blur(176.5px);
  -webkit-transform: translate3d(0, 0, 0);
  @media (max-width: 500px) {
    width: ${pxIntoRem(80)};
    height: ${pxIntoRem(80)};
    top: ${pxIntoRem(1630)};
    right: ${pxIntoRem(-40)};
    filter: blur(176.5px);
  }
`;

export {
  IndexBlock,
  IndexGreetingBackgroundBlock,
  IndexGreetingBody,
  IndexBlurredRectangle,
  IndexGreeting,
  IndexGreetingTryFreeButton,
  IndexGreetingTelegramLinkBlock,
  IndexGreetingEmailLinkBlock,
  IndexGreetingTelegramLinkIcon,
  IndexGreetingEmailLinkIcon,
  IndexUpperBackgroundBlock,
  IndexUpperBackgroundImage,
  IndexUpperMobileBackgroundImage,
  IndexUpperBlurredCircle,
  IndexLowerBackgroundBlock,
  IndexLowerBackgroundImage,
  IndexLowerMobileBackgroundImage,
  IndexLowerBlurredCircle,
  IndexPaymentBackgroundBlock,
  IndexPaymentBackground,
  IndexPaymentBackgroundLayer,
  IndexPaymentBlurredEllipseLeft,
  IndexPaymentBlurredEllipseMiddle,
  IndexPaymentBlurredEllipseRight,
  IndexPaymentUpperBlurredEllipse,
  IndexPaymentLowerBlurredEllipse,
  IndexPaymentTopBackgroundImage,
  IndexPaymentBottomBackgroundImage,
  IndexPaymentMobileBackground,
  IndexGreetingContent,
  IndexGreetingText,
  IndexGreetingTitleBox,

  IndexGreetingTitle,
  IndexGreetingBackground,
  IndexFeaturesBody,
  IndexFeatures,
  IndexFeaturesTitle,
  IndexFeaturesTitleContent,
  IndexFeaturesTables,
  IndexFeaturesTableSide,
  IndexFeaturesTableCenter,
  IndexFeaturesTableBackground,
  IndexFeaturesTablePattern,
  IndexFeaturesTableIcon,
  IndexFeaturesTableTitle,
  IndexFeaturesTableText,
  IndexHowItWorks,
  IndexHowItWorksBody,
  IndexHowItWorksContent,
  IndexHowItWorksTitle,
  IndexHowItWorksTables,
  IndexHowItWorksTable,
  IndexHowItWorksTableBackground,
  IndexHowItWorksInnerFrame,
  IndexHowItWorksImage,
  IndexHowItWorksMobileImage,
  IndexHowItWorksText,
  IndexHowItWorksMobileText,
  IndexPaymentOption,
  IndexPaymentOptionBody,
  IndexPaymentOptionContent,
  IndexPaymentOptionTitle,
  IndexPaymentOptionTables,
  IndexPaymentOptionTable,
  IndexPaymentOptionTableBackground,
  IndexPaymentOptionTableName,
  IndexPaymentOptionPrice,
  IndexPaymentOptionPriceText,
  IndexPaymentOptionText,
  IndexPaymentOptionPurchaseButton,
  IndexPaymentOptionClaimButton,
  IndexCallToActionBackgroundBlock,
  IndexCallToActionBackgroundImage,
  IndexCallToAction,
  IndexCallToActionContent,
  IndexCallToActionBody,
  IndexCallToActionContentTitle,
  IndexCallToActionContentText,
  IndexCallToActionLogoBlock,
  IndexBottomLeftBlurredCircle,
  IndexBottomRightBlurredCircle
};
