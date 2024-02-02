import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const AppHeaderBurgerBlock = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${pxIntoRem(21)};
  height: ${pxIntoRem(16)};
  background: transparent;
  @media (max-width: 500px) {
    display: flex;
    margin-left: ${pxIntoRem(15)};
    margin-right: ${pxIntoRem(15)};
  }
`;

const AppHeaderBurgerIcon = styled.img`
  width: ${pxIntoRem(21)};
  height: ${pxIntoRem(16)};
`;

const AppHeaderBurgerContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #040512;
  z-index: 99999;
  overflow-x: hidden;
  @media (max-width: 500px) {
    display: block;
  }
`;

const AppHeaderBurgerContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${pxIntoRem(74)};
`;

const AppHeaderBurgerContentLogoBlock = styled.div`
  width: ${pxIntoRem(116)};
  height: ${pxIntoRem(27)};
  margin-left: ${pxIntoRem(15)};
`;

const AppHeaderBurgerContentLogoIcon = styled.img`
  width: ${pxIntoRem(116)};
  height: ${pxIntoRem(27)};
`;

const AppHeaderBurgerContentClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(16.263)};
  height: ${pxIntoRem(16.263)};
  background: transparent;
  margin-left: ${pxIntoRem(0)};
  margin-right: ${pxIntoRem(17.37)};
`;

const AppHeaderBurgerContentCloseImage = styled.img`
  width: ${pxIntoRem(16.263)};
  height: ${pxIntoRem(16.263)};
`;

const AppHeaderBurgerUsernameButton = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: ${pxIntoRem(26.37)};
  align-items: center;
  background: transparent;
`;

const AppHeaderBurgerUsernameIcon = styled.div`
  display: flex;
  width: ${pxIntoRem(34)};
  height: ${pxIntoRem(34)};
  border-radius: 50%;
  background: #1B1D2C;
  margin-left: auto;
  margin-right: ${pxIntoRem(4)};
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.30);
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const AppHeaderBurgerMenuButton = styled.button`
  position: relative;
  width: ${pxIntoRem(16)};
  height: ${pxIntoRem(16)};
  background: transparent;
  margin-top: ${pxIntoRem(2)};
`;

const AppHeaderBurgerMenuButtonIcon = styled.img`
  width: ${pxIntoRem(16)};
  height: ${pxIntoRem(16)};
`;

const AppHeaderBurgerSectionsBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${pxIntoRem(20)} ${pxIntoRem(15)} 0 ${pxIntoRem(15)};
  gap: ${pxIntoRem(32)};
`;

const AppHeaderBurgerSectionIcon = styled.svg`
  width: ${pxIntoRem(21)};
  height: ${pxIntoRem(21)};
  stroke: #79768B;
  z-index: 99999999;
  margin-left: ${pxIntoRem(16)};
`;

const AppHeaderBurgerSectionTitle = styled.h2`
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

const AppHeaderBurgerActiveBlock = styled.div`
  position: absolute;
  width: 100%;
  height: ${pxIntoRem(47)};
  overflow: hidden;
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
  display: none;
`;

const AppHeaderBurgerSectionExpandIcon = styled.img`
  margin: ${pxIntoRem(2)} ${pxIntoRem(15)} 0 auto;
  width: ${pxIntoRem(19)};
  height: ${pxIntoRem(19)};
  z-index: 999;
`;

const AppHeaderBurgerSectionExpandWrapper = styled.div`
  display: none;
`;

const AppHeaderBurgerSectionLinkBlock = styled(NavLink)`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  &.active {
    pointer-events: none;
  }
  &:hover ${AppHeaderBurgerSectionTitle} {
    color: #FFF;
  }
  &:hover ${AppHeaderBurgerSectionIcon} {
    stroke: #1683E2;
  }
  &.active ${AppHeaderBurgerSectionTitle} {
    color: #FFF;
  }
  &.active ${AppHeaderBurgerSectionIcon} {
    stroke: #1683E2;
  }
  &.active ${AppHeaderBurgerActiveBlock} {
    display: flex;
  }
`;

const AppHeaderBurgerSectionLinkButton = styled.button`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background: transparent;
  &.folders_menu_active {
    pointer-events: none;
  }
  &.folders_menu_active ~ ${AppHeaderBurgerSectionExpandWrapper} {
    display: flex;
  }
  &:hover ${AppHeaderBurgerSectionTitle} {
    color: #FFF;
  }
  &:hover ${AppHeaderBurgerSectionIcon} {
    stroke: #1683E2;
  }
  &.folders_menu_active ${AppHeaderBurgerSectionTitle} {
    color: #FFF;
  }
  &.folders_menu_active ${AppHeaderBurgerSectionIcon} {
    stroke: #1683E2;
  }
  &.folders_menu_active ${AppHeaderBurgerActiveBlock} {
    display: flex;
  }
`;

const AppHeaderBurgerActiveBackgroundLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${pxIntoRem(12)};
  background: rgba(28, 29, 40, 0.40);
  backdrop-filter: blur(${pxIntoRem(47)});
  overflow: hidden;
`;

const AppHeaderBurgerActiveBlurredCircle = styled.div`
  position: relative;
  margin-left: ${pxIntoRem(7)};
  margin-top: ${pxIntoRem(14)};
  width: ${pxIntoRem(19)};
  height: ${pxIntoRem(19)};
  border-radius: 50%;
  background: linear-gradient(90deg, #2499FF 0%, #7124FF 100%);
  filter: blur(${pxIntoRem(26)});
  z-index: -1;
`;

const AppHeaderBurgerBalanceBlock = styled.div`
  position: relative;
  width: auto;
  height: ${pxIntoRem(150)};
  margin: ${pxIntoRem(40)} ${pxIntoRem(15)} auto ${pxIntoRem(15)};
`;

const AppHeaderBurgerBalanceBackground = styled.div`
  width: ${pxIntoRem(158)};
  height: ${pxIntoRem(150)};
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
  @media (max-width: 500px) {
    width: 90vw;
  }
`;

const AppHeaderBurgerBalanceBackgroundLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: ${pxIntoRem(12)};
  background: rgba(28, 29, 40, 0.40);
  backdrop-filter: blur(${pxIntoRem(42)});
  overflow: hidden;
`;

const AppHeaderBurgerBalanceBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(28)};
  height: ${pxIntoRem(28)};
  border-radius: 50%;
  background: linear-gradient(90deg, #2499FF 0%, #7124FF 100%);
  filter: blur(${pxIntoRem(25.5)});
  margin-top: ${pxIntoRem(3)};
  margin-left: ${pxIntoRem(4)};
  z-index: -1;
`;

const AppHeaderBurgerBalanceRateBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${pxIntoRem(16)};
  margin-left: ${pxIntoRem(16)};
  align-items: center;
`;

const AppHeaderBurgerBalanceRateIcon = styled.img`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
`;

const AppHeaderBurgerBalanceRateTitle = styled.h2`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: ${pxIntoRem(10)};
  margin-top: ${pxIntoRem(1)};
`;

const AppHeaderBurgerBalanceRateText = styled.p`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: ${pxIntoRem(-2)};
`;

const AppHeaderBurgerBalanceRateCounter = styled.p`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: auto;
  margin-right: ${pxIntoRem(16)};
  margin-top: ${pxIntoRem(-4)};
`;

const AppHeaderBurgerBalanceAddButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${pxIntoRem(38)};
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #1683E2;
  margin: ${pxIntoRem(24)} ${pxIntoRem(15)} ${pxIntoRem(15)} ${pxIntoRem(16)};
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

const AppHeaderBurgerContactLink = styled.div`
  position: relative;
  display: flex;
  margin-top: ${pxIntoRem(24)};
  margin-left: ${pxIntoRem(19)};
`;

const AppHeaderBurgerContactLinkTitle = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AppHeaderBurgerContactsLinkBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: ${pxIntoRem(12)} auto ${pxIntoRem(32)} ${pxIntoRem(19)};
  gap: ${pxIntoRem(12)};
`;

const AppHeaderBurgerTelegramLinkIcon = styled.svg`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  fill: #FFF;
`;

const AppHeaderBurgerTelegramLinkBlock = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(42)};
  height: ${pxIntoRem(42)};
  border-radius: 50%;
  background: #171828;
  z-index: 999999;
  transition: 0.3s;
`;

const AppHeaderBurgerEmailLinkIcon = styled.svg`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  fill: #FFF;
`;

const AppHeaderBurgerEmailLinkBlock = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(42)};
  height: ${pxIntoRem(42)};
  border-radius: 50%;
  background: #171828;
  z-index: 999999;
  transition: 0.3s;
`;

export {
  AppHeaderBurgerBlock,
  AppHeaderBurgerIcon,
  AppHeaderBurgerContent,
  AppHeaderBurgerContentClose,
  AppHeaderBurgerContentHeader,
  AppHeaderBurgerContentCloseImage,
  AppHeaderBurgerContentLogoBlock,
  AppHeaderBurgerContentLogoIcon,
  AppHeaderBurgerUsernameButton,
  AppHeaderBurgerUsernameIcon,
  AppHeaderBurgerMenuButton,
  AppHeaderBurgerMenuButtonIcon,
  AppHeaderBurgerSectionsBlock,
  AppHeaderBurgerSectionLinkBlock,
  AppHeaderBurgerSectionLinkButton,
  AppHeaderBurgerActiveBackgroundLayer,
  AppHeaderBurgerBalanceBlurredCircle,
  AppHeaderBurgerBalanceBlock,
  AppHeaderBurgerBalanceBackground,
  AppHeaderBurgerBalanceRateBlock,
  AppHeaderBurgerActiveBlurredCircle,
  AppHeaderBurgerBalanceRateIcon,
  AppHeaderBurgerBalanceRateTitle,
  AppHeaderBurgerBalanceRateText,
  AppHeaderBurgerBalanceRateCounter,
  AppHeaderBurgerBalanceAddButton,
  AppHeaderBurgerContactLink,
  AppHeaderBurgerContactLinkTitle,
  AppHeaderBurgerActiveBlock,
  AppHeaderBurgerSectionIcon,
  AppHeaderBurgerSectionTitle,
  AppHeaderBurgerSectionExpandIcon,
  AppHeaderBurgerBalanceBackgroundLayer,
  AppHeaderBurgerSectionExpandWrapper,
  AppHeaderBurgerContactsLinkBlock,
  AppHeaderBurgerTelegramLinkIcon,
  AppHeaderBurgerTelegramLinkBlock,
  AppHeaderBurgerEmailLinkIcon,
  AppHeaderBurgerEmailLinkBlock
};
