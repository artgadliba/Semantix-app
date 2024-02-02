import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const IndexPaymentBackgroundBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: ${pxIntoRem(40)};
  padding: 0 ${pxIntoRem(35)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(40)};
    padding: 0;
    height: ${pxIntoRem(840)};
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
            mask:
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
  display: none;
  @media (max-width: 500px) {
    display: flex;
    width: 100%;
    filter: drop-shadow(0px ${pxIntoRem(24)} ${pxIntoRem(234)} rgba(0, 0, 0, 0.20));
    z-index: 99;
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
  filter: blur(${pxIntoRem(167)});
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
  opacity: 0.2;
  background: #1683E2;
  filter: blur(${pxIntoRem(167)});
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

const IndexPaymentOptionContent = styled.div`
  position: absolute;
  z-index: 99;
  width: 100%;
`;

const IndexPaymentOption = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 500px) {
    margin: 0 ${pxIntoRem(15)};
  }
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

const IndexPaymentOptionTitle = styled.h2`
  position: relative;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: ${pxIntoRem(38)};
  line-height: 100%;
  color: #ffffff;
  margin-top: ${pxIntoRem(95)};
  z-index: 999;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(24)};
    margin-top: ${pxIntoRem(40)};
    width: ${pxIntoRem(290)};
  }
`;

const IndexPaymentOptionBonusTitle = styled.p`
  color: #848097;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  width: ${pxIntoRem(419)};
  margin: ${pxIntoRem(20)} auto;
  span {
    color: #FFF;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(14)};
    margin-left: ${pxIntoRem(20)};
    margin-right: ${pxIntoRem(20)};
    width: auto;
  }
`;

const IndexPaymentOptionTables = styled.div`
  position: relative;
  display: flex;
  gap: ${pxIntoRem(20)};
  width: ${pxIntoRem(976)};
  justify-items: center;
  align-items: center;
  margin-top: ${pxIntoRem(40)};
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    margin-top: ${pxIntoRem(30)};
    gap: ${pxIntoRem(20)};
    width: 100%;
  }
`;

const IndexPaymentOptionTable = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(312)};
  height: ${pxIntoRem(280)};
  z-index: 999;
  position: relative;
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(54)} 0px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(${pxIntoRem(60)});
  -webkit-backdrop-filter: blur(${pxIntoRem(60)});
  border-radius: ${pxIntoRem(20)};
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
            mask: 
            linear-gradient(#fff 0 0) padding-box, 
            linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
  @media (max-width: 500px) {
    width: 100%;
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
  backdrop-filter: blur(${pxIntoRem(60)});
  @media (max-width: 500px) {
    width: calc(100% - 2px);
    height: calc(${pxIntoRem(227)} - 2px);
  }
`;

const IndexPaymentBlurredEllipseLeft = styled.div`
  position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
  filter: blur(${pxIntoRem(50)});
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
  filter: blur(${pxIntoRem(50)});
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
  filter: blur(${pxIntoRem(50)});
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

const IndexPaymentOptionTableName = styled.h3`
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

const IndexPaymentOptionPrice = styled.p`
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

const IndexPaymentOptionPriceText = styled.p`
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

const IndexPaymentOptionText = styled.p`
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

const IndexPaymentOptionPurchaseButton = styled.button`
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
  backdrop-filter: blur(${pxIntoRem(3)});
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: ${pxIntoRem(42)};
  transition: 0.3s;
  &:hover {
    background: rgba(22, 131, 226, 0.10);
    box-shadow: 0px 0px 9px 0px rgba(22, 131, 226, 0.50) inset;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    width: calc(100% - ${pxIntoRem(48)});
    margin: ${pxIntoRem(24)};
  }
`;

const IndexPaymentOptionClaimButton = styled.button`
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
  backdrop-filter: blur(${pxIntoRem(3)});
  background: transparent;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: ${pxIntoRem(52)};
  transition: 0.3s;
  &:hover {
    border: 1px solid #FFF;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    width: calc(100% - ${pxIntoRem(48)});
    margin: ${pxIntoRem(24)};
  }
`;

export {
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
  IndexPaymentOptionClaimButton
};