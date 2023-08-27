import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import pxIntoRem from "../../utils/pxIntoRem";

const HeaderBurgerBlock = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${pxIntoRem(21)};
  height: ${pxIntoRem(16)};
  cursor: pointer;
  background: transparent;
  @media (max-width: 500px) {
    display: flex;
    margin-right: ${pxIntoRem(15)};
  }
`;

const HeaderBurgerIcon = styled.img`
  width: ${pxIntoRem(21)};
  height: ${pxIntoRem(16)};
`;

const HeaderBurgerContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #040512;
  padding: ${pxIntoRem(24)} ${pxIntoRem(15)} ${pxIntoRem(24)};
  gap: ${pxIntoRem(140)};
  z-index: 999999999999999;
  @media (max-width: 500px) {
    display: flex;
  }
`;

const HeaderBurgerContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeaderBurgerContentLogoBlock = styled.div`
  margin-left: ${pxIntoRem(15)};
  width: ${pxIntoRem(116)};
  height: ${pxIntoRem(27)};
`;

const HeaderBurgerContentLogoIcon = styled.img`
  width: ${pxIntoRem(116)};
  height: ${pxIntoRem(27)};
`;

const HeaderBurgerContentClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(16.263)};
  height: ${pxIntoRem(16.263)};
  background: transparent;
  cursor: pointer;
`;

const LandingHeaderBlurredCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
  background: linear-gradient(44deg, #0781FE 0%, #00C7B4 100%);
  filter: blur(197px);
  @media (max-width: 500px) {
    width: ${pxIntoRem(80)};
    height: ${pxIntoRem(80)};
    top: ${pxIntoRem(77)};
    left: ${pxIntoRem(-40)};
    filter: blur(176.5px);
  }
`;

const HeaderBurgerContentCloseImage = styled.img`
  width: ${pxIntoRem(16.263)}
  height: ${pxIntoRem(16.263)};
`;

const HeaderBurgerContentNavigation = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const HeaderBurgerContentNavigationLink = styled(NavLink)`
  color: #848097;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: ${pxIntoRem(32)};
  &:first-of-type {
    margin-top: 0px;
  }
  &:active {
    color: #FFF;
    transition: 0.3s;
  }
  &:hover {
    color: #FFF;
    transition: 0.3s;
  }
`;

const HeaderBurgerContentIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${pxIntoRem(6)};
`;

const HeaderBurgerContentIconBlock = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(42)};
  height: ${pxIntoRem(42)};
  border-radius: 50%;
  background: #171828;
  margin-left: ${pxIntoRem(27)};
  &:first-of-type {
    margin-left: 0px;
  }
`;

const HeaderBurgerContentIcon = styled.svg`
  width: ${pxIntoRem(27)};
  fill: white;
  &:hover {
    fill: #1683E2;
    transition: 0.3s;
  }
  &:active {
    fill: #1683E2;
    transition: 0.3s;
  }
`;

const HeaderBurgerContentLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: ${pxIntoRem(20)};
`;

const HeaderBurgerContentLink = styled(Link)`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(18)};
  line-height: 172.52%;
  color: #874dec;
  margin-top: ${pxIntoRem(5)};
  &:first-of-type {
    margin-top: 0px;
  }
`;

const HeaderBurgerButton = styled(Link)`
  display: flex;
  margin-left: auto;
  margin-right: ${pxIntoRem(22)};
  align-items: center;
  justify-content: center;
  border: ${pxIntoRem(1)} solid #1683E2;
  border-radius: ${pxIntoRem(8)};
  background-color: transparent;
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  width: ${pxIntoRem(116)};
  gap: ${pxIntoRem(10)};
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(14)};
  line-height: normal;
  color: #ffffff;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background: rgba(22, 131, 226, 0.10);
    box-shadow: 0px 0px 9px 0px rgba(22, 131, 226, 0.50) inset;
  }
  @media (max-width: 500px) {
    width: ${pxIntoRem(76)};
    height: ${pxIntoRem(32)};
    font-size: ${pxIntoRem(12)};
  }
`;

export {
  HeaderBurgerBlock,
  HeaderBurgerIcon,
  HeaderBurgerContent,
  HeaderBurgerContentClose,
  HeaderBurgerContentHeader,
  HeaderBurgerContentCloseImage,
  HeaderBurgerContentLogoBlock,
  HeaderBurgerContentLogoIcon,
  LandingHeaderBlurredCircle,
  HeaderBurgerContentIcon,
  HeaderBurgerContentIconBlock,
  HeaderBurgerContentIcons,
  HeaderBurgerContentNavigation,
  HeaderBurgerContentNavigationLink,
  HeaderBurgerContentLinks,
  HeaderBurgerContentLink,
  HeaderBurgerButton
};
