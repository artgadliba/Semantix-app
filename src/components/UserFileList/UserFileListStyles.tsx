import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import pxIntoRem from "utils/pxIntoRem";

const UserFileListBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
  margin-top: ${pxIntoRem(8)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(16)};
  }
`;

const UserFileListBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  margin-left: ${pxIntoRem(40)};
  margin-right: ${pxIntoRem(40)};
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(15)};
    margin-right: ${pxIntoRem(15)};
  }
`;

const UserFileListItem = styled.div`
  position: relative;
  width: 100%;
  height: ${pxIntoRem(114)};
  margin-top: ${pxIntoRem(16)};
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
      -webkit-mask-composite: xor;
              mask-composite: exclude;
  }
  @media (max-width: 500px) {
    height: auto;
  }
`;

const UserFileListItemBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: #0E0F1A;
  border-radius: ${pxIntoRem(12)};
`;

const UserFileListItemContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const UserFileListItemIcon = styled.img`
  width: ${pxIntoRem(48)};
  height: ${pxIntoRem(66)};
  margin-top: ${pxIntoRem(24)};
  margin-left: ${pxIntoRem(24)};
  @media (max-width: 500px) {
    display: none;
  }
`;

const UploadingAnimation = keyframes`
  0% { fill-opacity: 1; r: 3; }
  16.666% { fill-opacity: 0.9; r: 2.9; }
  16.667% { fill-opacity: 0.8; r: 2.8; }
  33.333% { fill-opacity: 0.7; r: 2.7; }
  50% { fill-opacity: 0.6; r: 2.6; }
  66.666% { fill-opacity: 0.5; r: 2.5; }
  66.666% { fill-opacity: 0.4; r: 2.4; }
  83.333% { fill-opacity: 0.3; r: 2.3; }
  100% { fill-opacity: 0.2; r: 2.2; }
`;

const UserFileListItemSVG = styled.svg`
  width: ${pxIntoRem(48)};
  height: ${pxIntoRem(66)};
  margin-top: ${pxIntoRem(24)};
  margin-left: ${pxIntoRem(24)};
  .UploadCircle1 {
    animation: ${UploadingAnimation} 1.5s infinite;
  }
  .UploadCircle2 {
    animation: ${UploadingAnimation} 1.5s infinite 0.25s;
  }
  .UploadCircle3 {
    animation: ${UploadingAnimation} 1.5s infinite 0.5s;
  }
  .UploadCircle4 {
    animation: ${UploadingAnimation} 1.5s infinite 0.75s;
  }
  .UploadCircle5 {
    animation: ${UploadingAnimation} 1.5s infinite 1s;
  }
  .UploadCircle6 {
    animation: ${UploadingAnimation} 1.5s infinite 1.25s;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const UserFileListItemMobileIcon = styled.img`
  display: none;
  width: ${pxIntoRem(34)};
  height: ${pxIntoRem(46)};
  @media (max-width: 500px) {
    display: flex;
  }
`;

const UserFileListItemMobileSVG = styled.svg`
  display: none;
  width: ${pxIntoRem(38)};
  height: ${pxIntoRem(50)};
  .UploadCircle1 {
    animation: ${UploadingAnimation} 1.5s infinite;
  }
  .UploadCircle2 {
    animation: ${UploadingAnimation} 1.5s infinite 0.25s;
  }
  .UploadCircle3 {
    animation: ${UploadingAnimation} 1.5s infinite 0.5s;
  }
  .UploadCircle4 {
    animation: ${UploadingAnimation} 1.5s infinite 0.75s;
  }
  .UploadCircle5 {
    animation: ${UploadingAnimation} 1.5s infinite 1s;
  }
  .UploadCircle6 {
    animation: ${UploadingAnimation} 1.5s infinite 1.25s;
  }
  @media (max-width: 500px) {
    display: block;
  }
`;

const UserFileListItemInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${pxIntoRem(24)};
  margin-left: ${pxIntoRem(24)};
  @media (max-width: 500px) {
    flex-direction: row;
    margin: ${pxIntoRem(20)} ${pxIntoRem(20)} auto ${pxIntoRem(20)};
  }
`;

const UserFileListItemInfoColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
  }
`;

const UserFileListItemInfoRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
    flex-direction: row;
  }
`;

const UserFileListItemFilenameBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${pxIntoRem(6)};
  align-items: center;
`;

const UserFileListItemFilename = styled.h2`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(15)};
    margin-left: ${pxIntoRem(14)};
  }
`;

const UserFileListItemFilenameEdited = styled.img`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
`;

const UserFileListItemFileLength = styled.p`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: ${pxIntoRem(6)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(12)};
    margin-left: ${pxIntoRem(14)};
    &.UploadingItem {
      margin-top: ${pxIntoRem(8)};
    }
  }
`;

const UserFileListItemFileDate = styled.p`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: ${pxIntoRem(7)};
  @media (max-width: 500px) {
    margin: ${pxIntoRem(12)} ${pxIntoRem(20)} 0 auto;
    &.UploadingItem {
        margin-top: ${pxIntoRem(8)};
    }
  }
`;

const UserFileListItemFolderName = styled(Link)`
  display: inline-flex;
  height: ${pxIntoRem(23)};
  padding: ${pxIntoRem(4)} ${pxIntoRem(8)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(4)};
  border: 1px solid #2D3042;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  margin-left: ${pxIntoRem(12)};
  margin-top: ${pxIntoRem(24)};
  &:hover {
    color: #FFF;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const UserFileListItemMobileFolderName = styled(Link)`
  position: relative;
  display: none;
  height: ${pxIntoRem(23)};
  padding: ${pxIntoRem(4)} ${pxIntoRem(8)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(4)};
  border: 1px solid #2D3042;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: ${pxIntoRem(16)} auto ${pxIntoRem(16)} ${pxIntoRem(16)};
  &:hover {
    color: #FFF;
  }
  @media (max-width: 500px) {
    display: inline-flex;
  }
`;

const UserFileListItemInfoButtonsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: ${pxIntoRem(24)};
  @media (max-width: 500px) {
    display: flex;
    margin: ${pxIntoRem(20)};
  }
`;

const UserFileListItemOpenButton = styled(Link)`
  display: flex;
  width: ${pxIntoRem(131)};
  height: ${pxIntoRem(38)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(51)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #1683E2;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: auto;
  margin: ${pxIntoRem(38)} 0 ${pxIntoRem(38)} auto;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: rgba(22, 131, 226, 0.10);
    box-shadow: 0px 0px 9px 0px rgba(22, 131, 226, 0.50) inset;
    transition: 0.3s;
  }
  &.isProcessing {
    border: 1px solid #2D3042;
    pointer-events: none;
  }
  @media (max-width: 500px) {
    width: auto;
    flex: 1;
    margin: 0 auto;
  }
`;

const UserFileListItemOptionsButtonIcon = styled.svg`
  position: absolute;
  width: ${pxIntoRem(38)};
  height: ${pxIntoRem(38)};
  &.circle {
    fill: #79768B;
    stroke: none;
  }
`;

const UserFileListItemOptionsButton = styled.button`
  display: flex;
  background: transparent;
  width: ${pxIntoRem(38)};
  height: ${pxIntoRem(38)};
  border: 1px solid #2D3042;
  border-radius: ${pxIntoRem(8)};
  margin: ${pxIntoRem(38)} 0 ${pxIntoRem(38)} ${pxIntoRem(12)};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover ${UserFileListItemOptionsButtonIcon} {
    transition: 0.3s;
    &.circle {
      fill: #FFF;
      stroke: none;
    }
  }
  &:hover {
    transition: 0.3s;
    border: 1px solid #1683E2;
  }
  &:active {
    transition: 0.3s;
    border: 1px solid #1683E2;
  }
  &.isProcessing {
    pointer-events: none;
  }
  &.isUploading {
    pointer-events: none;
  }
  @media (max-width: 500px) {
    margin: 0 0 0 ${pxIntoRem(12)};
  }
`;

const UserFileListItemMobileLine = styled.div`
  display: none;
  position: relative;
  width: 100%;
  height: 1px;
  background: #1A1C28;
  @media (max-width: 500px) {
    display: flex;
  }
`;

export {
  UserFileListBody,
  UserFileListBlock,
  UserFileListItem,
  UserFileListItemBackgroundLayer,
  UserFileListItemContent,
  UserFileListItemIcon,
  UserFileListItemSVG,
  UserFileListItemMobileIcon,
  UserFileListItemMobileSVG,
  UserFileListItemInfoBlock,
  UserFileListItemInfoColumnWrapper,
  UserFileListItemInfoRowWrapper,
  UserFileListItemFilenameBlock,
  UserFileListItemFilename,
  UserFileListItemFilenameEdited,
  UserFileListItemFileLength,
  UserFileListItemFileDate,
  UserFileListItemFolderName,
  UserFileListItemMobileFolderName,
  UserFileListItemInfoButtonsWrapper,
  UserFileListItemOpenButton,
  UserFileListItemOptionsButton,
  UserFileListItemOptionsButtonIcon,
  UserFileListItemMobileLine
};