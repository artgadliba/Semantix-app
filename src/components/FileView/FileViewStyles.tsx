import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import pxIntoRem from "utils/pxIntoRem";

const FileViewBlock = styled.div`
  position: absolute;
  width: 100%;
`;

const FileViewTranscriptionBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: ${pxIntoRem(16)};
  margin-left: ${pxIntoRem(40)};
  width: ${pxIntoRem(916)};
  padding: ${pxIntoRem(24)};
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
  margin-bottom: ${pxIntoRem(40)};
  @media (max-width: 500px) {
    margin: ${pxIntoRem(20)} ${pxIntoRem(15)} ${pxIntoRem(24)} ${pxIntoRem(15)};
    padding: ${pxIntoRem(20)};
    width: auto;
  }
`;

const FileViewTranscriptionBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: #0E0F1A;
  border-radius: ${pxIntoRem(12)};
`;

const FileViewTranscriptionTextBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: ${pxIntoRem(16)};
  &:last-of-type {
    margin-bottom: ${pxIntoRem(0)};
  }
  @media (max-width: 500px) {
    flex-direction: column;
    margin-bottom: ${pxIntoRem(24)};
  }
`;

const FileViewTranscriptionTextBlockTimestamp = styled.button`
  display: flex;
  width: ${pxIntoRem(65)};
  height: ${pxIntoRem(23)};
  border-radius: ${pxIntoRem(4)};
  background: #1B1D2C;
  padding: ${pxIntoRem(4)} ${pxIntoRem(8)} ${pxIntoRem(4)} ${pxIntoRem(8)};
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-items: center;
  justify-content: center;
`;

const FileViewTranscriptionTextBlockParagraph = styled.span`
  position: relative;
  display: inline-block;
  flex-direction: row;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: ${pxIntoRem(32)};
  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: ${pxIntoRem(10)};
  }
`;

const FileViewTranscriptionTextBlockHighlight = styled.span`
  display: inline-block;
  padding: 0 ${pxIntoRem(2)};
  &.active-text {
    color: #FFF;
  }
  &.active-word {
    background-color: rgba(22, 131, 226, 0.20);
    border-radius: ${pxIntoRem(3)};
    color: #1683E2;
    padding: 0 ${pxIntoRem(2)};
  }
`;

export {
  FileViewBlock,
  FileViewTranscriptionBlock,
  FileViewTranscriptionBackgroundLayer,
  FileViewTranscriptionTextBlock,
  FileViewTranscriptionTextBlockTimestamp,
  FileViewTranscriptionTextBlockParagraph,
  FileViewTranscriptionTextBlockHighlight
};