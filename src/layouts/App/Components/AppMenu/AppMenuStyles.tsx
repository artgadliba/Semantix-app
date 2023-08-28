import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const AppMenuBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(256)};
  height: 100%;
  z-index: 999999998;
`;

const AppMenuBackgroundBlock = styled.div`
  position: relative;
  width: ${pxIntoRem(256)};
  height: 100%;
  box-shadow: ${pxIntoRem(10)} 0px ${pxIntoRem(64)} 0px #00000040;
  border-radius: 0px ${pxIntoRem(24)} ${pxIntoRem(24)} 0px;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 0px ${pxIntoRem(24)} ${pxIntoRem(24)} 0px;
    border: 1px solid transparent;
    background: linear-gradient(185.64deg, rgba(32, 34, 48, 0.7) 1.02%, rgba(32, 33, 41, 0) 128.15%); border-box;
    -webkit-mask:
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
`;

const AppMenuBackgroundLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 0px ${pxIntoRem(24)} ${pxIntoRem(24)} 0px;
  backdrop-filter: blur(102px);
  background: linear-gradient(245deg, rgba(36, 37, 46, 0.30) 0%, rgba(36, 36, 36, 0.13) 100%);
  z-index: 1;
`;

const AppMenuLogoBlock = styled.div`
  width: ${pxIntoRem(138)};
  height: ${pxIntoRem(31)};
  margin-left: ${pxIntoRem(24)};
  margin-top: ${pxIntoRem(24)};
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

export {
    AppMenuBlock,
    AppMenuBackgroundBlock,
    AppMenuBackgroundLayer,
    AppMenuLogoBlock,
    AppMenuLogo
};