import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const AppInterfaceBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;

const AppInterfaceContent = styled.main`
  position: relative;
  width: calc(100% - ${pxIntoRem(256)});
  height: auto;
  margin-left: auto;
  margin-right: 0;
  z-index: 999;
  @media (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }
`;

const AppInterfaceBlurredCircleBottomLeft = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: ${pxIntoRem(228)};
  height: ${pxIntoRem(228)};
  background: linear-gradient(44deg, #0781FE 0%, #00C7B4 100%);
  opacity: 0.2;
  border-radius: 50%;
  filter: blur(197px);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
`;

export {
  AppInterfaceBlock,
  AppInterfaceContent,
  AppInterfaceBlurredCircleBottomLeft
};