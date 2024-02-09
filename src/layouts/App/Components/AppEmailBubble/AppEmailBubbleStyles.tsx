import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const AppEmailBubbleBlock = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  width: ${pxIntoRem(753)};
  height: ${pxIntoRem(95)};
  left: ${pxIntoRem(296)};
  bottom: ${pxIntoRem(30)};
  z-index: 999;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(12)};
    border: 2px solid transparent;
    background: linear-gradient(181deg, rgba(32, 34, 48, 0.7) 1.02%, rgba(32, 33, 41, 0) 128.15%) border-box;
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
    left: ${pxIntoRem(15)};
    right: ${pxIntoRem(15)};
    bottom: ${pxIntoRem(20)};
    width: auto;
    height: auto;
  }
`;

const AppEmailBubbleBlockBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: #171828;
  border-radius: ${pxIntoRem(12)};
`;

const AppEmailBubbleIcon = styled.img`
  width: ${pxIntoRem(19)};
  height: ${pxIntoRem(19)};
  margin-top: ${pxIntoRem(16)};
  margin-left: ${pxIntoRem(16)};
  z-index: 999;
`;

const AppEmailBubbleText = styled.p`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: ${pxIntoRem(16)} ${pxIntoRem(20)} ${pxIntoRem(16)} ${pxIntoRem(16)};
  z-index: 999;
  span {
    color: #FFF;
  }
`;

const AppEmailBubbleClose = styled.button`
  position: absolute;
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  top: ${pxIntoRem(10)};
  right: ${pxIntoRem(10)};
  background: transparent;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const AppEmailBubbleCloseIcon = styled.svg`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  stroke: #79768B;
  transition: 0.3s;
  @media (min-width: 501px) {
    &:hover {
      stroke: #FFF;
    }
  }
`;

export {
  AppEmailBubbleBlock,
  AppEmailBubbleBlockBackgroundLayer,
  AppEmailBubbleIcon,
  AppEmailBubbleText,
  AppEmailBubbleClose,
  AppEmailBubbleCloseIcon
};