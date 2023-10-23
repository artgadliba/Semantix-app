import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const FileEditBlock = styled.div`
  position: absolute;
  width: 100%;
`;

const FileEditTranscriptionBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: ${pxIntoRem(20)};
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
  &:last-of-type {
    margin-bottom: ${pxIntoRem(40)};
  }
  @media (max-width: 500px) {
    margin: ${pxIntoRem(20)} ${pxIntoRem(15)} ${pxIntoRem(20)} ${pxIntoRem(15)};
    padding: ${pxIntoRem(20)};
    width: auto;
    &:last-of-type {
      margin-bottom: ${pxIntoRem(24)};
    }
  }
`;

const FileEditTranscriptionBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: #0E0F1A;
  border-radius: ${pxIntoRem(12)};
`;

const FileEditTranscriptionTextBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const FileEditTranscriptionTextBlockTimestamp = styled.div`
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

const FileEditTranscriptionTextBlockParagraph = styled.div`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: ${pxIntoRem(32)};
  background: transparent;
  width: 100%;
  resize: none;
  overflow: hidden;
  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: ${pxIntoRem(10)};
  }
`;

const FileEditMessageBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${pxIntoRem(6)};
  margin-top: ${pxIntoRem(20)};
  margin-left: ${pxIntoRem(41)};
  align-items: center;
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(15)};
    margin-right: ${pxIntoRem(30)};
    width: auto;
    align-items: start;
  }
`;

const FileEditMessageIcon = styled.img`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
`;

const FileEditMessageText = styled.p`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export {
    FileEditBlock,
    FileEditTranscriptionBlock,
    FileEditTranscriptionBackgroundLayer,
    FileEditTranscriptionTextBlock,
    FileEditTranscriptionTextBlockTimestamp,
    FileEditTranscriptionTextBlockParagraph,
    FileEditMessageBlock,
    FileEditMessageIcon,
    FileEditMessageText
};