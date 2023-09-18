import styled, { css } from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

interface ISmallComboBoxBlock {
  className: string;
}

const SmallComboBoxBlock = styled.div<ISmallComboBoxBlock>`
  position: absolute;
  width: ${pxIntoRem(173)};
  height: ${pxIntoRem(102)};
  ${props => props.className === 'filelist-box' && css`
    top: ${pxIntoRem(82)};
    right: ${pxIntoRem(22)};
  `}
  ${props => props.className === 'header-box' && css`
    top: ${pxIntoRem(71)};
    right: ${pxIntoRem(39)};
  `}
  ${props => props.className === 'filter-box' && css`
    top: ${pxIntoRem(82)};
    left: ${pxIntoRem(282)};
    width: ${pxIntoRem(228)};
    height: ${pxIntoRem(184)};
  `}
  @media (max-width: 500px) {
    ${props => props.className === 'filelist-box' && css`
      top: ${pxIntoRem(132)};
      right: ${pxIntoRem(20)};
    `}
    ${props => props.className === 'header-box' && css`
      top: ${pxIntoRem(62)};
      right: ${pxIntoRem(60)};
    `}
    ${props => props.className === 'filter-box' && css`
      top: ${pxIntoRem(50)};
      left: auto;
      right: ${pxIntoRem(0)};
      width: ${pxIntoRem(228)};
      height: ${pxIntoRem(184)};
    `}
  }
`;

const SmallComboBoxBackground = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  position: relative;
  width: 100%;
  height: 100%;
  padding: ${pxIntoRem(10)};
  box-shadow: 0px 4px 40px 0px #00000026;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(10)};
    background: linear-gradient(90.77deg, rgba(45, 48, 66, 0.7) 5.42%, rgba(23, 24, 40, 1) 101.71%) border-box;
    border: 2px solid transparent;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
`;

const SmallComboBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  position: relative;
  width: 100%;
  overflow: auto;
`;

const SmallComboBoxBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border-radius: ${pxIntoRem(10)};
  background: #1F1F2E;
`;

const SmallComboBoxOptionBlock = styled.div`
  position: relative;
  display: flex;
  min-height: ${pxIntoRem(41)};
  align-items: center;
`;

const SmallComboBoxOptionActiveBackground = styled.div`
  position: absolute;
  display: none;
  border-radius: ${pxIntoRem(10)};
  background: #2D2D43;
  width: 100%;
  height: ${pxIntoRem(41)};
`;

const SmallComboBoxOptionButton= styled.button`
  position: relative;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  z-index: 9999999;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  background: transparent;
  cursor: pointer;
  margin-left: ${pxIntoRem(16)};
  &:hover + ${SmallComboBoxOptionActiveBackground} {
    display: flex;
  }
`;

export {
  SmallComboBoxBlock,
  SmallComboBoxBackground,
  SmallComboBoxContent,
  SmallComboBoxBackgroundLayer,
  SmallComboBoxOptionBlock,
  SmallComboBoxOptionActiveBackground,
  SmallComboBoxOptionButton
};