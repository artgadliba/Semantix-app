import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const AppFolderPageBlock = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const AppFolderPageFoldersBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: ${pxIntoRem(40)};
  &:last-of-type {
    margin-bottom: ${pxIntoRem(40)};
  }
`;

const AppFolderPageFoldersBlockTitle = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: ${pxIntoRem(40)};
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(15)};
  }
`;

const AppFolderPageLineBlock = styled.div`
  position: relative;
  width: auto;
  margin-top: ${pxIntoRem(20)};
`;

const AppFolderPageLine = styled.div`
  position: relative;
  width: auto;
  height: ${pxIntoRem(1)};
  margin: 0 ${pxIntoRem(40)} ${pxIntoRem(0)} ${pxIntoRem(40)};
  background: #171A27;
  @media (max-width: 500px) {
    margin: 0 ${pxIntoRem(15)} ${pxIntoRem(0)} ${pxIntoRem(15)};
  }
`;

const AppFolderPageEmptyContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - ${pxIntoRem(155)});
  @media (max-width: 500px) {
    height: calc(100vh - ${pxIntoRem(254)});
  }
`;

const AppFolderPageEmptyOutputBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxIntoRem(20)};
  @media (max-width: 500px) {
    gap: ${pxIntoRem(10)};
    width: 100vw;
  }
`;

const AppFolderPageEmptyOutputIcon = styled.img`
  width: ${pxIntoRem(62)};
  height: ${pxIntoRem(84)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(44)};
    height: ${pxIntoRem(61)};
  }
`;

const AppFolderPageEmptyOutputText = styled.p`
  color: #79768B;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  span {
    color: #FFF;
  }
  &.additional_text_field {
    margin-top: ${pxIntoRem(-8)};
    font-size: ${pxIntoRem(14)};
    font-weight: 400;
    line-height: 150%;
    width: ${pxIntoRem(401)};
  }
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(15)};
    margin-right: ${pxIntoRem(15)};
    width: auto;
    &.additional_text_field {
      margin-left: ${pxIntoRem(15)};
      margin-right: ${pxIntoRem(15)};
      width: auto;
      margin-top: ${pxIntoRem(6)};
    }
  }
`;

export {
    AppFolderPageBlock,
    AppFolderPageFoldersBlock,
    AppFolderPageFoldersBlockTitle,
    AppFolderPageLineBlock,
    AppFolderPageLine,
    AppFolderPageEmptyContent,
    AppFolderPageEmptyOutputBlock,
    AppFolderPageEmptyOutputIcon,
    AppFolderPageEmptyOutputText
};