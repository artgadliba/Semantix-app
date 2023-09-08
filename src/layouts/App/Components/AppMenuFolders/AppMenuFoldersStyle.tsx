import styled from "styled-components";
import { NavLink } from "react-router-dom";
import pxIntoRem from "utils/pxIntoRem";

const AppMenuFoldersBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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
  width: fit-content;
  margin-left: ${pxIntoRem(17.5)};
  background: transparent;
  &:hover ${AppMenuFoldersAddNewFolderIcon} {
    stroke: #1668E2;
  }
  &:hover ${AppMenuFoldersAddNewFolderTitle} {
    color: #1668E2;
  }
`;

const AppMenuFoldersLine = styled.div`
  position: relative;
  width: ${pxIntoRem(256)};
  height: ${pxIntoRem(1)};
  margin-top: ${pxIntoRem(17)};
  margin-left: ${pxIntoRem(-24)};
  background: #171A27;
  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const AppMenuFoldersContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
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

const AppMenuFoldersContentFolderBlock = styled(NavLink)`
  display: flex;
  flex-direction: row;
  width: fit-content;
  align-items: center;
  margin-left: ${pxIntoRem(30)};
  height: ${pxIntoRem(19)};
  margin-top: ${pxIntoRem(16)};
  &:hover ${AppMenuFoldersContentFolderTitle} {
    color: #FFF;
  }
  &:hover ${AppMenuFoldersContentFolderIcon} {
    fill: #1683E2;
  }
  &.active ${AppMenuFoldersContentFolderTitle} {
    color: #FFF;
  }
  &.active ${AppMenuFoldersContentFolderIcon} {
    fill: #1683E2;
  }
`;

export {
    AppMenuFoldersBlock,
    AppMenuFoldersAddNewFolderButton,
    AppMenuFoldersAddNewFolderIcon,
    AppMenuFoldersAddNewFolderTitle,
    AppMenuFoldersLine,
    AppMenuFoldersContent,
    AppMenuFoldersContentFolderBlock,
    AppMenuFoldersContentFolderIcon,
    AppMenuFoldersContentFolderTitle,
};