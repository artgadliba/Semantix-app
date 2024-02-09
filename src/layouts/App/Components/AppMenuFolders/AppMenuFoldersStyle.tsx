import styled from "styled-components";
import { NavLink } from "react-router-dom";
import pxIntoRem from "utils/pxIntoRem";

const AppMenuFoldersBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 9;
  width: 100%;
`;

const AppMenuFoldersAddNewFolderIcon = styled.svg`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  stroke: #1683E2;
`;

const AppMenuFoldersAddNewFolderTitle = styled.h2`
  color: #1683E2;
  font-family: Mulish;
  font-size: ${pxIntoRem(15)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: ${pxIntoRem(15.5)};
`;

const AppMenuFoldersAddNewFolderButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 ${pxIntoRem(17.5)} ${pxIntoRem(17)} ${pxIntoRem(17.5)};
  background: transparent;
  @media (min-width: 501px) {
    &:hover ${AppMenuFoldersAddNewFolderIcon} {
      stroke: #1668E2;
    }
    &:hover ${AppMenuFoldersAddNewFolderTitle} {
      color: #1668E2;
    }
  }
`;

const AppMenuFoldersLine = styled.div`
  position: relative;
  width: ${pxIntoRem(256)};
  height: ${pxIntoRem(1)};
  margin-left: ${pxIntoRem(-24)};
  background: #171A27;
  @media (max-width: 500px) {
    width: 110vw;
  }
`;

const AppMenuFoldersContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-height: ${pxIntoRem(156)};
  overflow: scroll;
  overflow-x: hidden;
  overscroll-behavior: contain;
  @media (max-width: 500px) {
    max-height: ${pxIntoRem(120)};
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const AppMenuFoldersContentFolderIcon = styled.svg`
  width: ${pxIntoRem(6)};
  height: ${pxIntoRem(6)};
  fill: #79768B;
`;

const AppMenuFoldersContentFolderTitle = styled.h1`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(15)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: ${pxIntoRem(14)};
  white-space: nowrap;
`;

const AppMenuFoldersContentFolderLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  margin-left: ${pxIntoRem(30)};
  height: ${pxIntoRem(19)};
  margin-top: ${pxIntoRem(16)};
  &.active ${AppMenuFoldersContentFolderTitle} {
    color: #FFF;
  }
  &.active ${AppMenuFoldersContentFolderIcon} {
    fill: #1683E2;
  }
  &:last-of-type {
    margin-bottom: ${pxIntoRem(17.5)};
  }
  @media (min-width: 501px) {
    &:hover ${AppMenuFoldersContentFolderTitle} {
      color: #FFF;
    }
    &:hover ${AppMenuFoldersContentFolderIcon} {
      fill: #1683E2;
    }
  }
`;

const AppMenuFoldersScrollbarTrack = styled.div`
  display: none;
  position: absolute;
  width: ${pxIntoRem(6)};
  height: ${pxIntoRem(104)};
  background: transparent;
  bottom: ${pxIntoRem(8)};
  right: ${pxIntoRem(6)};
  border-radius: ${pxIntoRem(10)};
  @media (max-width: 500px) {
    display: unset;
  }
`;

const AppMenuFoldersScrollbarThumb = styled.div`
  position: relative;
  width: ${pxIntoRem(6)};
  background: rgba(37, 38, 55);
  border-radius: ${pxIntoRem(10)};
  transform: translate3d(0px, 0px, 0px);
`;

export {
  AppMenuFoldersBlock,
  AppMenuFoldersAddNewFolderButton,
  AppMenuFoldersAddNewFolderIcon,
  AppMenuFoldersAddNewFolderTitle,
  AppMenuFoldersLine,
  AppMenuFoldersContent,
  AppMenuFoldersContentFolderLink,
  AppMenuFoldersContentFolderIcon,
  AppMenuFoldersContentFolderTitle,
  AppMenuFoldersScrollbarTrack,
  AppMenuFoldersScrollbarThumb
};