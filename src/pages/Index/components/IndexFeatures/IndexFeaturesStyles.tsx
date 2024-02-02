import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";
import { TooltipIcon } from "components/Mixins/Mixins";

const IndexFeaturesContent = styled.div`
  position: relative;
  z-index: 99;
  width: 100%;
`;

const IndexFeaturesBody = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin: 0 ${pxIntoRem(15)};
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
  z-index: 9999;
  @media (max-width: 500px) {
    margin-top: 22%;
    font-size: ${pxIntoRem(24)};
  }
`;

const IndexFeaturesTables = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto;
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
    width: auto;
  }
`;

const IndexFeaturesTableSide = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(54)} 0px rgba(0, 0, 0, 0.2);
  width: ${pxIntoRem(420)};
  height: ${pxIntoRem(272)};
  overflow: hidden;
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
`;

const IndexFeaturesTableCenter = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(54)} 0px rgba(0, 0, 0, 0.2);
  width: ${pxIntoRem(420)};
  height: ${pxIntoRem(272)};
  top: ${pxIntoRem(104)};
  overflow: hidden;
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
    height: auto;
    top: ${pxIntoRem(0)};
  }
`;

const IndexFeaturesTablePattern = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const IndexFeaturesTablePicture = styled.picture`
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

const IndexFeaturesTableIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const IndexFeaturesTableTitle = styled.h3`
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
  .mobile_break {
    display: none;
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(20)};
    margin: ${pxIntoRem(0)} ${pxIntoRem(24)};
    .mobile_break {
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
  .mobile_break {
    display: none;
  }
  .desktop_break {
    display: flex;
  }
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(16)};
    margin-left: ${pxIntoRem(24)};
    margin-bottom: ${pxIntoRem(24)};
    .mobile_break {
      display: flex;
    }
    .desktop_break {
      display: none;
    }
  }
`;

const IndexFeaturesTooltipButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  background: transparent;
  top: ${pxIntoRem(160)};
  left: ${pxIntoRem(155)};
  z-index: 9999;
  transition: 0.3s;
  &:hover ${TooltipIcon} {
    transition: 0.3s;
    fill: #1683E2;
  }
  @media (max-width: 500px) {
    top: ${pxIntoRem(110)};
    left: ${pxIntoRem(126)};
  }
`;

const IndexFeaturesTooltipBlock = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(188)};
  padding: ${pxIntoRem(12)};
  background: #171828;
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #202230;
  top: ${pxIntoRem(47)};
  left: ${pxIntoRem(70)};
  z-index: 99999999;
  filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.15));
  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: ${pxIntoRem(10)} solid transparent;
    border-top-color: #202230;
    border-bottom: 0;
    margin-left: ${pxIntoRem(-10)};
    margin-bottom: ${pxIntoRem(-10)};
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: ${pxIntoRem(10)} solid transparent;
    border-top-color: #171828;
    border-bottom: 0;
    margin-left: ${pxIntoRem(-10)};
    margin-bottom: ${pxIntoRem(-9)};
  }
  @media (max-width: 500px) {
    height: auto;
    width: ${pxIntoRem(250)};
    top: ${pxIntoRem(15)};
    left: ${pxIntoRem(10)};
  }
`; 

const IndexFeaturesTooltipBlockText = styled.p`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  z-index: 9999;
`;

export {
  IndexFeaturesContent,
  IndexFeaturesTitle,
  IndexFeaturesBody,
  IndexFeaturesTables,
  IndexFeaturesTableSide,
  IndexFeaturesTableCenter,
  IndexFeaturesTableBackground,
  IndexFeaturesTablePattern,
  IndexFeaturesTablePicture,
  IndexFeaturesTableIcon,
  IndexFeaturesTableTitle,
  IndexFeaturesTableText,
  IndexFeaturesTooltipButton,
  IndexFeaturesTooltipBlock,
  IndexFeaturesTooltipBlockText
};