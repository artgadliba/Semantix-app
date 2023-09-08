import styled, { css } from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const LargeComboBoxBlock = styled.div`
  position: absolute;
  width: 100%;
  top: ${pxIntoRem(60)};
`;

interface IAddFolder {
    addFolderActive: boolean;
}

const LargeComboBoxBackground = styled.div<IAddFolder>`
  display: flex;
  flex-direction: column;
  z-index: 9999;
  position: relative;
  width: 100%;
  padding: ${pxIntoRem(10)};
  margin-top: ${pxIntoRem(8)};
  max-height: ${pxIntoRem(189)};
  ${props => props.addFolderActive === true && css`
    max-height: ${pxIntoRem(242)}; 
  `}
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(10)};
    background: linear-gradient(181deg, rgba(32, 34, 48, 0.7) 1.02%, rgba(32, 33, 41, 0) 128.15%) border-box;
    border: 2px solid transparent;
    -webkit-mask:
      linear-gradient(#fff 0 0) padding-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
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

const LargeComboBoxBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border-radius: ${pxIntoRem(10)};
  background: #1F1F2E;
`;

interface IScrollable {
  isScrollable: boolean;
}

const LargeComboBoxOptionBlock = styled.div<IScrollable>`
  position: relative;
  display: flex;
  min-height: ${pxIntoRem(42)} !important;
  align-items: center;
  ${props => props.isScrollable === true && css`
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
`;

const LargeComboBoxOptionAddFolderBlock = styled.div`
  position: relative;
  width: fit-content;
  height: ${pxIntoRem(43)};
  margin-top: ${pxIntoRem(10)};
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