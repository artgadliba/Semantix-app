import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import pxIntoRem from "utils/pxIntoRem";

const AppHeaderBlock = styled.header`
  position: relative;
  width: calc(100% - ${pxIntoRem(256)});
  height: ${pxIntoRem(81)};
  margin-left: auto;
  margin-right: 0;
  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
    height: ${pxIntoRem(74)};
  }
`;

const AppHeaderBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  @media (max-width: 500px) {
    text-align: left;
  }
`;

const AppHeaderSectionTitle = styled.h1`
  position: relative;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: ${pxIntoRem(40)};
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(-116)};
    margin-top: ${pxIntoRem(147)};
  }
`;

const AppHeaderUsernameBlock = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: ${pxIntoRem(40)};
  align-items: center;
  @media (max-width: 500px) {
    margin-right: ${pxIntoRem(9)};
  }
`;

const AppHeaderUsernameTitle = styled.h2`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-left: auto;
  margin-right: ${pxIntoRem(12)};
  @media (max-width: 500px) {
    display: none;
  }
`;

const AppHeaderUsernameButtonWrapper = styled.button`
  position: relative;
  display: flex;
  background: transparent;
  align-items: center;
`;

const AppHeaderUsernameIcon = styled.img`
  width: ${pxIntoRem(45)};
  height: ${pxIntoRem(45)};
  margin-left: auto;
  margin-right: ${pxIntoRem(6)};
  box-shadow: 0px 12px 24px 0px rgba(0, 0, 0, 0.30);
  @media (max-width: 500px) {
    width: ${pxIntoRem(34)};
    height: ${pxIntoRem(34)};
    margin-right: ${pxIntoRem(4)};
  }
`;

const AppHeaderMenuButton = styled.div`
  width: ${pxIntoRem(19)};
  height: ${pxIntoRem(19)};
  background: transparent;
  margin-top: ${pxIntoRem(2)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(16)};
    height: ${pxIntoRem(16)};
  }
`;

const AppHeaderMenuButtonIcon = styled.img`
  width: ${pxIntoRem(19)};
  height: ${pxIntoRem(19)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(16)};
    height: ${pxIntoRem(16)};
  }
`;

const AppHeaderBottomLineBlock = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  @media (max-width: 500px) {
    display: none;
  }
`;

const AppHeaderBottomLine = styled.div`
  position: relative;
  margin-left: ${pxIntoRem(40)};
  margin-right: ${pxIntoRem(40)};
  width: auto;
  height: ${pxIntoRem(1)};
  background: linear-gradient(270deg, rgba(23, 26, 39, 0.00) 0%, #171A27 50.01%, rgba(23, 26, 39, 0.00) 100%);
`;

const AppHeaderMobileLogoBlock = styled.div`
  display: none;
  position: relative;
  width: ${pxIntoRem(116)};
  height: ${pxIntoRem(27)};
  margin-left: ${pxIntoRem(15)};
  @media (max-width: 500px) {
    display: flex;
  }
`;

const AppHeaderMobileLogo = styled.img`
  width: ${pxIntoRem(116)};
  height: ${pxIntoRem(27)};
`;

export {
    AppHeaderBlock,
    AppHeaderBody,
    AppHeaderSectionTitle,
    AppHeaderUsernameBlock,
    AppHeaderUsernameTitle,
    AppHeaderUsernameButtonWrapper,
    AppHeaderUsernameIcon,
    AppHeaderMenuButton,
    AppHeaderMenuButtonIcon,
    AppHeaderBottomLineBlock,
    AppHeaderBottomLine,
    AppHeaderMobileLogoBlock,
    AppHeaderMobileLogo
};