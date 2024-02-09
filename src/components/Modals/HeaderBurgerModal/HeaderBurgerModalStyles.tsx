import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const HeaderBurgerModalBlock = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: -600px;
  display: flex;
  justify-content: center;
  background-color: #040512;
  z-index: 9999999999;
`;

interface IHeaderBurgerModalContent {
    $windowHeight: number;
}
 
const HeaderBurgerModalContent = styled.div<IHeaderBurgerModalContent>`
  position: relative;
  margin-top: 0;
  display: none;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #040512;
  gap: ${pxIntoRem(140)};
  overflow: hidden;
  z-index: 99999999999;
  @media (max-width: 500px) {
    display: flex;
    height: ${({ $windowHeight }) => `${pxIntoRem($windowHeight)}`};
  }
`;

const HeaderBurgerModalContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${pxIntoRem(74)};
`;

const HeaderBurgerModalContentLogoLink = styled(Link)`
  width: ${pxIntoRem(116)};
  height: ${pxIntoRem(27)};
  margin-left: ${pxIntoRem(15)};
`;

const HeaderBurgerModalContentLogo = styled.img`
  width: ${pxIntoRem(138)};
  height: ${pxIntoRem(31)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(116)};
    height: ${pxIntoRem(27)};
  }
`;

const HeaderBurgerModalContentClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(35)};
  height: ${pxIntoRem(35)};
  background: transparent;
  margin-left: 0;
  margin-right: ${pxIntoRem(15)};
`;

const LandingHeaderBlurredCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
  background: linear-gradient(44deg, #0781FE 0%, #00C7B4 100%);
  filter: blur(${pxIntoRem(197)});
  -webkit-transform: translate3d(0, 0, 0);
  -webkit-backface-visibility: hidden; 
  @media (max-width: 500px) {
    width: ${pxIntoRem(80)};
    height: ${pxIntoRem(80)};
    top: ${pxIntoRem(77)};
    left: ${pxIntoRem(-40)};
    filter: blur(${pxIntoRem(176.5)});
  }
  @supports (-moz-appearance: none) {
    opacity: 0.05;
  }
`;

const HeaderBurgerModalContentCloseImage = styled.img`
  width: ${pxIntoRem(16.263)};
  height: ${pxIntoRem(16.263)};
`;

const HeaderBurgerModalContentNavigation = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const HeaderBurgerModalContentNavigationLink = styled(NavLink)`
  color: #848097;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: ${pxIntoRem(32)};
  transition: 0.3s;
  &:first-of-type {
    margin-top: 0px;
  }
  &:active {
    color: #FFF;
    transition: 0.3s;
  }
  @media (min-width: 501px) {
    &:hover {
      color: #FFF;
      transition: 0.3s;
    }
  }
`;

const HeaderBurgerModalContentIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: ${pxIntoRem(24)};
`;

const HeaderBurgerModalContentIcon = styled.svg`
  width: ${pxIntoRem(27)};
  fill: white;
`;

const HeaderBurgerModalContentIconBlock = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(42)};
  height: ${pxIntoRem(42)};
  border-radius: 50%;
  background: #171828;
  margin-left: ${pxIntoRem(12)};
  transition: 0.3s;
  &:first-of-type {
    margin-left: 0px;
  }
  &:active ${HeaderBurgerModalContentIcon} {
    fill: #1683E2;
    transition: 0.3s;
  }
  @media (min-width: 501px) {
    &:hover ${HeaderBurgerModalContentIcon} {
      fill: #1683E2;
      transition: 0.3s;
    }
  }
`;

const HeaderBurgerModalLoginButton = styled.button`
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
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(14)};
  line-height: normal;
  color: #ffffff;
  transition: 0.5s;
  @media (min-width: 501px) {
    &:hover {
      background: rgba(22, 131, 226, 0.10);
      box-shadow: 0px 0px 9px 0px rgba(22, 131, 226, 0.50) inset;
    }
  }
  @media (max-width: 500px) {
    width: ${pxIntoRem(76)};
    height: ${pxIntoRem(32)};
    font-size: ${pxIntoRem(12)};
    margin: ${pxIntoRem(21)} ${pxIntoRem(21)}  ${pxIntoRem(21)} auto;
  }
`;

export {
  HeaderBurgerModalBlock,
  HeaderBurgerModalContent,
  HeaderBurgerModalContentClose,
  HeaderBurgerModalContentHeader,
  HeaderBurgerModalContentCloseImage,
  HeaderBurgerModalContentLogoLink,
  HeaderBurgerModalContentLogo,
  HeaderBurgerModalContentIcon,
  HeaderBurgerModalContentIconBlock,
  HeaderBurgerModalContentIcons,
  HeaderBurgerModalContentNavigation,
  HeaderBurgerModalContentNavigationLink,
  HeaderBurgerModalLoginButton,
  LandingHeaderBlurredCircle
};
