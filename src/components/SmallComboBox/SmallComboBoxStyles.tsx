import styled, { css } from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

interface ISmallComboBoxBlock {
  className: string;
}

const SmallComboBoxBlock = styled.div<ISmallComboBoxBlock>`
  position: absolute;
  width: ${pxIntoRem(173)};
  height: ${pxIntoRem(102)};
  ${props => props.className === 'filelist_box' && css`
    top: ${pxIntoRem(82)};
    right: ${pxIntoRem(22)};
  `}
  ${props => props.className === 'header_box' && css`
    top: ${pxIntoRem(71)};
    right: ${pxIntoRem(39)};
  `}
  ${props => props.className === 'filter_box' && css`
    top: ${pxIntoRem(82)};
    left: ${pxIntoRem(282)};
    width: ${pxIntoRem(228)};
    height: ${pxIntoRem(184)};
  `}
  @media (max-width: 500px) {
    ${props => props.className === 'filelist_box' && css`
      top: ${pxIntoRem(132)};
      right: ${pxIntoRem(20)};
    `}
    ${props => props.className === 'header_box' && css`
      top: ${pxIntoRem(62)};
      right: ${pxIntoRem(60)};
    `}
    ${props => props.className === 'filter_box' && css`
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
  padding: 1px;
  border-radius: ${pxIntoRem(10)};
  background: linear-gradient(180deg, rgba(45, 48, 66, 1) 5.42%, rgba(23, 24, 40, 1) 101.71%);
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
  border-radius: ${pxIntoRem(10)};
  background: #1F1F2E;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${pxIntoRem(10)};
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