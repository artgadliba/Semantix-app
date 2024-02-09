import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const IndexPaymentBlock = styled.div`
  position: relative;
  width: 100%;
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
  filter: drop-shadow(0px ${pxIntoRem(24)} ${pxIntoRem(234)} #00000033);
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(54)} 0px #00000033;
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
  display: none;
  @media (max-width: 500px) {
    display: block;
    width: 100%;
    filter: drop-shadow(0px ${pxIntoRem(24)} ${pxIntoRem(234)} #00000033);
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
  filter: blur(${pxIntoRem(176)});
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
  opacity: 0.2;
  background: #1683E2;
  filter: blur(${pxIntoRem(176)});
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
  width: 100vw;
`;

const IndexPaymentOptionTitle = styled.h2`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: ${pxIntoRem(38)};
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  margin-top: ${pxIntoRem(95)};
  z-index: 99999;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(24)};
    margin-top: ${pxIntoRem(40)};
    width: ${pxIntoRem(290)};
  }
`;

const IndexPaymentOptionTables = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
  grid-auto-flow: row;
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
  }
`;

const IndexPaymentOptionTable = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(312)};
  height: ${pxIntoRem(280)};
  z-index: 999;
  position: relative;
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(54)} 0px #00000033;
  backdrop-filter: blur(${pxIntoRem(60)});
  -webkit-backdrop-filter: blur(${pxIntoRem(60)});
  -webkit-transform: translate3d(0, 0, 0);
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
  backdrop-filter: blur(${pxIntoRem(60)});
  -webkit-backdrop-filter: blur(${pxIntoRem(60)});
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
  filter: blur(${pxIntoRem(50)});
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
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
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
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
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden;
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
  -webkit-backdrop-filter: blur(${pxIntoRem(3)});
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
  @media (min-width: 501px) {
    &:hover {
      background: rgba(22, 131, 226, 0.10);
      box-shadow: 0px 0px 9px 0px rgba(22, 131, 226, 0.50) inset;
      transition: 0.3s;
    }
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
  backdrop-filter: blur(${pxIntoRem(3)});
  -webkit-backdrop-filter: blur(${pxIntoRem(3)});
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
  @media (min-width: 501px) {
    &:hover {
      border: 1px solid #FFF;
      transition: 0.3s;
    }
  }
  @media (max-width: 500px) {
    width: 80vw;
    margin-top: ${pxIntoRem(22)};
    padding: 0px;
  }
`;

export {
  IndexPaymentBlock,
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