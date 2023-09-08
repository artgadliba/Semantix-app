import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import pxIntoRem from "utils/pxIntoRem";

const AppFolderPageBlock = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const AppFolderPageDecryptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: ${pxIntoRem(40)};
`;

const AppFolderPageDecryptionTitle = styled.h2`
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

const AppFolderPageTranscriptedBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: ${pxIntoRem(40)};
  margin-bottom: ${pxIntoRem(40)};
`;

const AppFolderPageTranscriptedTitle = styled.div`
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

export {
    AppFolderPageBlock,
    AppFolderPageDecryptionBlock,
    AppFolderPageDecryptionTitle,
    AppFolderPageLineBlock,
    AppFolderPageLine,
    AppFolderPageTranscriptedBlock,
    AppFolderPageTranscriptedTitle
};