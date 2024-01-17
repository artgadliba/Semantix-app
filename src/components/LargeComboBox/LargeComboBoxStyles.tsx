import styled, { css } from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const LargeComboBoxBlock = styled.div`
  position: absolute;
  width: 100%;
  top: ${pxIntoRem(60)};
`;

const LargeComboBoxBackground = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  position: relative;
  width: 100%;
  margin-top: ${pxIntoRem(8)};
  box-shadow: 0px 4px 40px 0px #00000026;
  padding: 1px;
  border-radius: ${pxIntoRem(10)};
  background: linear-gradient(180deg, rgba(45, 48, 66, 0.8) 5.42%, rgba(23, 24, 40, 1) 101.71%);
  ::-webkit-scrollbar {
    width: ${pxIntoRem(6)};
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb { 
    border-radius: ${pxIntoRem(10)};
    background: #1683E2;
    height: ${pxIntoRem(74)};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #1668E2;
  }
`;

const LargeComboBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  position: relative;
  width: 100%;
  overflow: auto;
`;

interface IAddFolder {
  $addFolderActive: boolean;
}

const LargeComboBoxBackgroundLayer = styled.div<IAddFolder>`
  border-radius: ${pxIntoRem(10)};
  background: #1F1F2E;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: ${pxIntoRem(10)};
  max-height: ${pxIntoRem(189)};
  ${props => props.$addFolderActive === true && css`
    max-height: ${pxIntoRem(242)}; 
  `}
  &.empty_content {
    padding: 0;
  }
`;

interface IScrollable {
  $isScrollable: boolean;
}

const LargeComboBoxOptionBlock = styled.div<IScrollable>`
  position: relative;
  display: flex;
  min-height: ${pxIntoRem(42)} !important;
  align-items: center;
  ${props => props.$isScrollable === true && css`
    margin-right: ${pxIntoRem(10)}; 
  `}
`;

const LargeComboBoxOptionActiveBackground = styled.div`
  position: absolute;
  display: none;
  border-radius: ${pxIntoRem(10)};
  background: #2D2D43;
  width: 100%;
  height: ${pxIntoRem(42)};
`;

const LargeComboBoxOptionButton= styled.button`
  position: relative;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  z-index: 9999999;
  width: 100%;
  text-align: left;
  background: transparent;
  cursor: pointer;
  margin-left: ${pxIntoRem(16)};
  &:hover + ${LargeComboBoxOptionActiveBackground} {
    display: flex;
  }
  &:focus + ${LargeComboBoxOptionActiveBackground} {
    display: flex;
  }
`;

const LargeComboBoxOptionAddFolderBlock = styled.div`
  position: relative;
  width: auto;
  height: ${pxIntoRem(43)};
  margin-top: ${pxIntoRem(10)};
  &.empty_content__block {
    margin-top: 0;
  }
`;

const LargeComboBoxOptionAddFolderButtonIcon = styled.svg`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  stroke: #1683E2;
  margin-left: ${pxIntoRem(16)};
`;

const LargeComboBoxOptionAddFolderButtonTitle = styled.p`
  color: #1683E2;
  font-family: Mulish;
  font-size: ${pxIntoRem(15)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: ${pxIntoRem(9.5)};
`;

const LargeComboBoxOptionAddFolderButtonBlock = styled.button`
  display: flex;
  width: 100%;
  height: ${pxIntoRem(33)};
  margin-top: ${pxIntoRem(10)};
  background: transparent;
  align-items: center;
  transition: 0.3s;
  &:hover ${LargeComboBoxOptionAddFolderButtonIcon} {
    stroke: #1668E2;
    transition: 0.3s;
  }
  &:hover ${LargeComboBoxOptionAddFolderButtonTitle} {
    color: #1668E2;
    transition: 0.3s;
  }
  &:focus ${LargeComboBoxOptionAddFolderButtonIcon} {
    stroke: rgba(22, 131, 226, 1);
    transition: 0.3s;
  }
  &:focus ${LargeComboBoxOptionAddFolderButtonTitle} {
    color: rgba(22, 131, 226, 1);
    transition: 0.3s;
  }
  &:focus {
    border-radius: ${pxIntoRem(4)};
    outline: 1px solid rgba(22, 131, 226, 1);
    outline-offset: -1px;
  }
  &.empty_content__block__button {
    margin-top: 0;
    height: 100%;
  }
`;

const LargeComboBoxOptionAddFolderBlockLine = styled.div`
  position: absolute;
  bottom: ${pxIntoRem(53)};
  left: ${pxIntoRem(1)};
  width: calc(100% - ${pxIntoRem(2)});
  height: 1px;
  background: #2A2A39;
  z-index: 99999;
`;

export {
  LargeComboBoxBlock,
  LargeComboBoxBackground,
  LargeComboBoxContent,
  LargeComboBoxBackgroundLayer,
  LargeComboBoxOptionBlock,
  LargeComboBoxOptionActiveBackground,
  LargeComboBoxOptionButton,
  LargeComboBoxOptionAddFolderBlock,
  LargeComboBoxOptionAddFolderButtonBlock,
  LargeComboBoxOptionAddFolderButtonIcon,
  LargeComboBoxOptionAddFolderButtonTitle,
  LargeComboBoxOptionAddFolderBlockLine
};