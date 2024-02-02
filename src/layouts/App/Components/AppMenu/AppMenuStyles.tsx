import styled from "styled-components";
import { Link } from "react-router-dom";
import pxIntoRem from "utils/pxIntoRem";

const AppMenuBlock = styled.div`
  position: fixed;
  width: ${pxIntoRem(256)};
  background: #040512;
  overflow: auto;
  overflow-x: hidden;
  height: 100%;
  @media (max-width: 500px) {
    display: none;
  }
`;

const AppMenuBackgroundBlock = styled.div`
  position: relative;
  width: ${pxIntoRem(256)};
  height: auto;
  min-height: calc(100% - 1px);
  box-shadow: ${pxIntoRem(10)} 0px ${pxIntoRem(64)} 0px #00000040;
  border-radius: 0px ${pxIntoRem(24)} ${pxIntoRem(24)} 0px;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 0px ${pxIntoRem(24)} ${pxIntoRem(24)} 0px;
    border: 1px solid transparent;
    border-left: none;
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
`;

const AppMenuBackgroundLayer = styled.div`
  position: absolute;
  width: calc(${pxIntoRem(256)} - 1px);
  height: calc(100% - 1px);
  margin-top: 1px;
  border-radius: 0px ${pxIntoRem(24)} ${pxIntoRem(24)} 0px;
  backdrop-filter: blur(${pxIntoRem(102)});
  background: linear-gradient(245deg, rgba(36, 37, 46, 0.30) 0%, rgba(36, 36, 36, 0.13) 100%);
  z-index: 1;
`;

const AppMenuUpperBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const AppMenuLogoBlock = styled.div`
  width: ${pxIntoRem(138)};
  height: ${pxIntoRem(31)};
  margin-left: ${pxIntoRem(24)};
  margin-top: ${pxIntoRem(24)};
  z-index: 1;
  @media (max-width: 500px) {
    width: ${pxIntoRem(116)};
    height: ${pxIntoRem(27)};
    margin-left: ${pxIntoRem(15)};
  }
`;

const AppMenuLogo = styled.img`
  width: ${pxIntoRem(138)};
  height: ${pxIntoRem(31)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(116)};
    height: ${pxIntoRem(27)};
  }
`;

const AppMenuSectionsBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${pxIntoRem(53)};
  margin-left: ${pxIntoRem(24)};
  gap: ${pxIntoRem(32)};
  width: fit-content;
`;

const AppMenuSectionIcon = styled.svg`
  width: ${pxIntoRem(21)};
  height: ${pxIntoRem(21)};
  stroke: #79768B;
  z-index: 99999999;
`;

const AppMenuSectionTitle = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(15)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: ${pxIntoRem(1)};
  margin-left: ${pxIntoRem(14)};
  white-space: nowrap;
  z-index: 99999999;
`;

const AppMenuActiveBlock = styled.div`
  position: absolute;
  width: ${pxIntoRem(208)};
  height: ${pxIntoRem(47)};
  margin-left: ${pxIntoRem(-16)};
  overflow: hidden;
  z-index: 999;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(12)};
    border: ${pxIntoRem(1)} solid transparent;
    background: linear-gradient(181deg, rgba(32, 34, 48, 1) 1.02%, rgba(32, 33, 41, 0) 128.15%) border-box;
    -webkit-mask:
                linear-gradient(#fff 0 0) padding-box, 
                linear-gradient(#fff 0 0);
            mask:
                linear-gradient(#fff 0 0) padding-box, 
                linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
  display: none;
`;

const AppMenuSectionExpandIcon = styled.img`
  margin-left: ${pxIntoRem(36)};
  margin-top: ${pxIntoRem(2)};
  width: ${pxIntoRem(19)};
  height: ${pxIntoRem(19)};
  z-index: 999;
`;

const AppMenuSectionExpandWrapper = styled.div`
  display: none;
`;

const AppMenuSectionLinkBlock = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: ${pxIntoRem(16)};
  &.active {
    pointer-events: none;
  }
  &:hover ${AppMenuSectionTitle} {
    color: #FFF;
  }
  &:hover ${AppMenuSectionIcon} {
    stroke: #1683E2;
  }
  &.active ${AppMenuSectionTitle} {
    color: #FFF;
  }
  &.active ${AppMenuSectionIcon} {
    stroke: #1683E2;
  }
  &.active ${AppMenuActiveBlock} {
    display: flex;
  }
`;

const AppMenuSectionFilesLinkButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-left: ${pxIntoRem(16)};
  background: transparent;
  &.folders_menu_active {
    pointer-events: none;
  }
  &.folders_menu_active ~ ${AppMenuSectionExpandWrapper} {
    display: flex;
  }
  &:hover ${AppMenuSectionTitle} {
    color: #FFF;
  }
  &:hover ${AppMenuSectionIcon} {
    stroke: #1683E2;
  }
  &.folders_menu_active ${AppMenuSectionTitle} {
    color: #FFF;
  }
  &.folders_menu_active ${AppMenuSectionIcon} {
    stroke: #1683E2;
  }
  &.folders_menu_active ${AppMenuActiveBlock} {
    display: flex;
  }
`;

const AppMenuActiveBackgroundLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${pxIntoRem(12)};
  background: rgba(28, 29, 40, 0.40);
  overflow: hidden;
`;

const AppMenuActiveBlurredCircle = styled.div`
  position: relative;
  margin-left: ${pxIntoRem(16)};
  margin-top: ${pxIntoRem(13)};
  width: ${pxIntoRem(21)};
  height: ${pxIntoRem(21)};
  border-radius: 50%;
  background: linear-gradient(90deg, #2499FF 0%, #7124FF 100%);
  filter: blur(${pxIntoRem(23)});
  z-index: 99;
`;

interface IMenuHeight {
    $height: number;
}

const AppMiddleBlock = styled.div<IMenuHeight>`
  position: relative;
  display: block;
  height: ${props => `${props.$height}px`};
`;

const AppMenuBottomBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: ${pxIntoRem(318)};
`;

const AppMenuBalanceBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(208)};
  height: ${pxIntoRem(150)};
  margin-left: ${pxIntoRem(24)};
  margin-bottom: ${pxIntoRem(24)};
`;

const AppMenuBalanceBackground = styled.div`
  width: ${pxIntoRem(208)};
  height: ${pxIntoRem(150)};
  box-shadow: 10px 0px 64px 0px rgba(0, 0, 0, 0.25);
  z-index: 999;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(12)};
    border: ${pxIntoRem(1)} solid transparent;
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
`;

const AppMenuBalanceBackgroundLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${pxIntoRem(12)};
  background: rgba(28, 29, 40, 0.40);
  overflow: hidden;
`;

const AppMenuBalanceBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(28)};
  height: ${pxIntoRem(28)};
  border-radius: 50%;
  background: linear-gradient(90deg, #2499FF 0%, #7124FF 100%);
  top: ${pxIntoRem(11)};
  left: ${pxIntoRem(10)};
  filter: blur(${pxIntoRem(21.5)});
  margin-top: ${pxIntoRem(3)};
  margin-left: ${pxIntoRem(4)};
  z-index: -1;
`;

const AppMenuBalanceRateBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${pxIntoRem(16)};
  margin-left: ${pxIntoRem(16)};
  align-items: center;
`;

const AppMenuBalanceRateIcon = styled.img`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
`;

const AppMenuBalanceRateTitle = styled.h2`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: ${pxIntoRem(10)};
  margin-top: ${pxIntoRem(1)};
`;

const AppMenuBalanceRateText = styled.p`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: ${pxIntoRem(-2)};
`;

const AppMenuBalanceRateCounter = styled.p`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(15)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: auto;
  margin-right: ${pxIntoRem(16)};
  margin-top: ${pxIntoRem(-4)};
`;

const AppMenuBalanceAddButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(176)};
  height: ${pxIntoRem(38)};
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #1683E2;
  margin: ${pxIntoRem(24)} ${pxIntoRem(16)} ${pxIntoRem(16)} ${pxIntoRem(16)};
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: 0.3s;
  &:hover {
    background: rgba(22, 131, 226, 0.10);
    box-shadow: 0px 0px 9px 0px rgba(22, 131, 226, 0.50) inset;
    transition: 0.3s;
  }
`;

const AppMenuContactLink = styled.div`
  position: relative;
  display: flex;
  margin-left: ${pxIntoRem(24)};
  margin-bottom: ${pxIntoRem(12)};
  z-index: 1;
`;

const AppMenuContactLinkTitle = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AppMenuContactsLinkBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-left: ${pxIntoRem(24)};
  margin-bottom: ${pxIntoRem(32)};
  gap: ${pxIntoRem(12)};
`;

const AppMenuTelegramLinkIcon = styled.svg`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  fill: #FFF;
`;

const AppMenuTelegramLinkBlock = styled(Link)`
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
  &:hover ${AppMenuTelegramLinkIcon} {
    fill: #1683E2;
    transition: 0.3s;
  }
`;

const AppMenuEmailLinkIcon = styled.svg`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  fill: #FFF;
`;

const AppMenuEmailLinkBlock = styled(Link)`
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
  &:hover ${AppMenuEmailLinkIcon} {
    fill: #1683E2;
    transition: 0.3s;
  }
`;

export {
  AppMenuBlock,
  AppMenuBackgroundBlock,
  AppMenuBackgroundLayer,
  AppMenuUpperBlock,
  AppMenuLogoBlock,
  AppMenuLogo,
  AppMenuSectionsBlock,
  AppMenuSectionLinkBlock,
  AppMenuSectionFilesLinkButton,
  AppMenuSectionIcon,
  AppMenuSectionTitle,
  AppMenuSectionExpandIcon,
  AppMenuSectionExpandWrapper,
  AppMenuActiveBlock,
  AppMenuActiveBackgroundLayer,
  AppMenuActiveBlurredCircle,
  AppMiddleBlock,
  AppMenuBottomBlock,
  AppMenuBalanceBlock,
  AppMenuBalanceBackground,
  AppMenuBalanceBackgroundLayer,
  AppMenuBalanceBlurredCircle,
  AppMenuBalanceRateBlock,
  AppMenuBalanceRateIcon,
  AppMenuBalanceRateTitle,
  AppMenuBalanceRateText,
  AppMenuBalanceRateCounter,
  AppMenuBalanceAddButton,
  AppMenuContactLink,
  AppMenuContactLinkTitle,
  AppMenuContactsLinkBlock,
  AppMenuTelegramLinkIcon,
  AppMenuTelegramLinkBlock,
  AppMenuEmailLinkIcon,
  AppMenuEmailLinkBlock
};