import { Link } from "react-router-dom";
import styled from "styled-components";
import pxIntoRem from "../../../../utils/pxIntoRem";

const LandingHeaderBlock = styled.header`
  width: 100%;
  z-index: 9999;
`;

const LandingHeaderBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: ${pxIntoRem(74)};
`;

const LandingHeaderLogoBlock = styled.div`
  width: ${pxIntoRem(138)};
  height: ${pxIntoRem(31)};
  margin: ${pxIntoRem(24)} 0 ${pxIntoRem(24)} ${pxIntoRem(30)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(116)};
    height: ${pxIntoRem(27)};
    margin: ${pxIntoRem(24)} 0 ${pxIntoRem(24)} ${pxIntoRem(15)};
  }
`;

const LandingHeaderLogo = styled.img`
  width: ${pxIntoRem(138)};
  height: ${pxIntoRem(31)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(116)};
    height: ${pxIntoRem(27)};
  }
`;

const LandingHeaderBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(218)};
  height: ${pxIntoRem(218)};
  border-radius: 50%;
  opacity: 0.4;
  top: ${pxIntoRem(-64)};
  left: ${pxIntoRem(-70)};
  background: linear-gradient(44deg, #0781FE 0%, #00C7B4 100%);
  filter: blur(197px);
  -webkit-transform: translate3d(0, 0, 0);
  @supports (-moz-appearance:none) {
    position: absolute;
    top: ${pxIntoRem(-64)};
    left: ${pxIntoRem(-70)};
    background-image: url(/images/blurred-circle-header.svg);
  }
  @media (max-width: 500px) {
    width: ${pxIntoRem(80)};
    height: ${pxIntoRem(80)};
    top: ${pxIntoRem(77)};
    left: ${pxIntoRem(-40)};
    filter: blur(176.5px);
  }
`;

const LandingHeaderNavigation = styled.nav`
  position: absolute;
  margin: 0 auto;
  @media (max-width: 500px) {
    display: none;
  }
`;

const LandingHeaderNavigationLink = styled(Link)`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(14)};
  height: 100px;
  line-height: 100px;
  color: #79768B;
  text-align: center;
  margin-left: ${pxIntoRem(32)};
  transition: 0.3s;
  &:first-of-type {
    margin-left: 0px;
  }
  &:hover {
    color: #FFF;
    transition: 0.3s;
  }
`;

const LandingHeaderButton = styled.button`
  display: flex;
  margin: ${pxIntoRem(24)} ${pxIntoRem(30)} ${pxIntoRem(24)} auto;
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
  font-weight: 500;
  font-size: ${pxIntoRem(14)};
  line-height: normal;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: rgba(22, 131, 226, 0.10);
    box-shadow: 0px 0px 9px 0px rgba(22, 131, 226, 0.50) inset;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    width: ${pxIntoRem(76)};
    height: ${pxIntoRem(32)};
    font-size: ${pxIntoRem(12)};
    margin: ${pxIntoRem(22)} ${pxIntoRem(20)} ${pxIntoRem(22)} auto;
  }
`;

export { LandingHeaderBlock, LandingHeaderBody, LandingHeaderLogoBlock, LandingHeaderLogo, LandingHeaderBlurredCircle, LandingHeaderNavigation, LandingHeaderNavigationLink, LandingHeaderButton };
