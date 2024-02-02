import styled, {keyframes} from "styled-components";
import { Link } from "react-router-dom";
import pxIntoRem from "utils/pxIntoRem";

const IndexWidgetBody = styled.div`
  position: relative;
  display: block;
  width: 100%;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const IndexWidgetBlock = styled.div`
  position: relative;
  width: ${pxIntoRem(640)};
  height: ${pxIntoRem(440)};
  border-radius: ${pxIntoRem(16)};
  border: 1px solid #202230;
  background: linear-gradient(180deg, rgba(4, 6, 19, 0.00) 0%, rgba(9, 11, 23, 0.00) 93.94%);
  backdrop-filter: blur(${pxIntoRem(3)});
  margin: ${pxIntoRem(70)} ${pxIntoRem(70)} auto auto;
  @media (max-width: 500px) {
    width: calc(100% - ${pxIntoRem(30)});
    height: ${pxIntoRem(440)};
    margin: ${pxIntoRem(41)} ${pxIntoRem(15)} auto ${pxIntoRem(15)};
  }
  z-index: 9;
`;

const IndexWidgetBlockAnimation = styled.div`
  position: absolute;
  padding: 1px;
  margin: -1px;
  -webkit-mask: linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
          mask-composite: xor;
          mask-composite: exclude;
  inset: 0;
  z-index: -1;
  border-radius: inherit;
`;

const AnimationLine = keyframes`
  0% {
    transform: translateZ(0) translate(0, 0);
  }
  8% {
    transform: translateZ(0) translate(0, ${pxIntoRem(-140)}); 
  }
  9% {
    transform: translateZ(0) translate(${pxIntoRem(7)}, ${pxIntoRem(-174)}) rotate(45deg);
  }
  38% {
    transform: translateZ(0) translate(${pxIntoRem(583)}, ${pxIntoRem(-197)}) rotate(90deg);
  }
  39% {
    transform: translateZ(0) translate(${pxIntoRem(617)}, ${pxIntoRem(-174)}) rotate(135deg);
  }
  58% {
    transform: translateZ(0) translate(${pxIntoRem(640)}, ${pxIntoRem(186)}) rotate(180deg);
  }
  59% {
    transform: translateZ(0) translate(${pxIntoRem(617)}, ${pxIntoRem(220)}) rotate(225deg);
  }
  88% {
    transform: translateZ(0) translate(${pxIntoRem(57)}, ${pxIntoRem(243)}) rotate(270deg);
  }
  89% {
    transform: translateZ(0) translate(${pxIntoRem(30)}, ${pxIntoRem(235)}) rotate(315deg);
  }
  100% {
    transform: translateZ(0) translate(0, 0) rotate(360deg);
  }
`;

const AnimationLineSecond = keyframes`
  0% {
    transform: translateZ(0) translate(0, 0);
  }
  6% {
    transform: translateZ(0) translate(${pxIntoRem(87)}, ${pxIntoRem(-19)}); 
  }
  7% {
    transform: translateZ(0) translate(${pxIntoRem(129)}, ${pxIntoRem(15)}) rotate(45deg);
  }
  26% {
    transform: translateZ(0) translate(${pxIntoRem(163)}, ${pxIntoRem(347)}) rotate(90deg);
  }
  27% {
    transform: translateZ(0) translate(${pxIntoRem(129)}, ${pxIntoRem(389)}) rotate(135deg);
  }
  56% {
    transform: translateZ(0) translate(${pxIntoRem(-403)}, ${pxIntoRem(423)}) rotate(180deg);
  }
  57% {
    transform: translateZ(0) translate(${pxIntoRem(-445)}, ${pxIntoRem(389)}) rotate(225deg);
  }
  76% {
    transform: translateZ(0) translate(${pxIntoRem(-479)}, ${pxIntoRem(57)}) rotate(270deg);
  }
  77% {
    transform: translateZ(0) translate(${pxIntoRem(-445)}, ${pxIntoRem(15)}) rotate(315deg);
  }
  100% {
    transform: translateZ(0) translate(0, 0) rotate(360deg);
  }
`;

const IndexWidgetBlockAnimationLine = styled.div`
  width: ${pxIntoRem(110)};
  height: ${pxIntoRem(110)};
  position: absolute;
  animation: ${AnimationLine} 17s linear infinite;
  top: ${pxIntoRem(142)};
  left: ${pxIntoRem(-55)};
  background-image: linear-gradient(180deg, rgba(22, 131, 226, 0.00) 1.2%, #1683E2 47.19%, rgba(22, 131, 226, 0.00) 87.51%);
  &.second_line {
    width: ${pxIntoRem(146)};
    height: ${pxIntoRem(146)};
    top: ${pxIntoRem(-55)};
    left: ${pxIntoRem(405)};
    animation: ${AnimationLineSecond} 17s linear infinite;
    background-image: linear-gradient(90deg, rgba(22, 131, 226, 0.00) 1.2%, #1683E2 47.19%, rgba(22, 131, 226, 0.00) 87.51%);
  }
  @media (max-width: 500px) {
    animation: none;
    &.second_line {
        left: ${pxIntoRem(150)};
        animation: none;
    }
  }
`;

const IndexWidgetBackground = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(612)};
  height: ${pxIntoRem(410)};
  border-radius: ${pxIntoRem(16)};
  background: linear-gradient(180deg, #111320 0%, rgba(9, 11, 23, 0.00) 93.1%);
  backdrop-filter: blur(${pxIntoRem(5)});
  margin: ${pxIntoRem(15)} ${pxIntoRem(14)};
  align-items: center;
  @media (max-width: 500px) {
    width: auto;
    height: ${pxIntoRem(410)};
    margin: ${pxIntoRem(8)} ${pxIntoRem(8)} ${pxIntoRem(22)} ${pxIntoRem(8)};
  }
`;

const IndexWidgetPattern = styled.img`
  position: absolute;
  width: ${pxIntoRem(930)};
  height: ${pxIntoRem(530)};
  margin-top: ${pxIntoRem(7)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(465)};
    height: ${pxIntoRem(265)};
  }
`;

const IndexWidgetForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const IndexWidgetInputFileField = styled.input`
  display: none;
`;

const IndexWidgetTitle = styled.p`
  width: ${pxIntoRem(410)};
  color: #FFF;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(17)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(43)};
  @media (max-width: 500px) {
    width: ${pxIntoRem(234)};
    margin: ${pxIntoRem(24)} ${pxIntoRem(20)} 0 ${pxIntoRem(20)};
    font-size: ${pxIntoRem(14)};
  }
`;

const IndexWidgetMainButton = styled.button`
  display: flex;
  position: relative;
  width: ${pxIntoRem(251)};
  height: ${pxIntoRem(46)};
  background-color: #1683E2;
  border-radius: ${pxIntoRem(8)};
  font-family: "Mulish";
  font-style: normal;
  font-weight: 600;
  font-size: ${pxIntoRem(16)};
  line-height: normal;
  color: #FFF;
  margin-top: ${pxIntoRem(39)};
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  &:hover {
    background: #1668E2;
    box-shadow: 0px 0px ${pxIntoRem(24)} 0px rgba(22, 104, 226, 0.50);
    transition: 0.3s;
  }
  &:disabled {
    border: 1px solid #2D3042;
    color: #2D3042;
    background: transparent;
    pointer-events: none;
  }
  @media (max-width: 500px) {
    width: calc(100% - ${pxIntoRem(40)});
    margin: ${pxIntoRem(47)} ${pxIntoRem(20)} auto ${pxIntoRem(20)};
    &.processing_button {
      margin-top: auto;
      margin-bottom: ${pxIntoRem(182)};
    }
  }
`;

const IndexWidgetText = styled.p`
  color: #79768B;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: ${pxIntoRem(16)} auto;
`;

const IndexWidgetInputBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${pxIntoRem(251)};
  height: ${pxIntoRem(46)};
  border-radius: ${pxIntoRem(10)};
  background: #141625;
  z-index: 99;
  @media (max-width: 500px) {
    width: calc(100% - ${pxIntoRem(40)});
  }
`;

const IndexWidgetInput = styled.input`
  width: ${pxIntoRem(251)};
  height: ${pxIntoRem(46)};
  border-radius: ${pxIntoRem(10)};
  background: #141625;
  padding: ${pxIntoRem(11)} ${pxIntoRem(10)} ${pxIntoRem(10)} ${pxIntoRem(16)};
  text-overflow: ellipsis;
  color: var(--White, #FFF);
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%; 
`;

const IndexWidgetInputButtonIcon = styled.svg`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  stroke: #2D3042;
  &.active  {
    stroke: #FFF;
  }
`;

const IndexWidgetInputButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(52)};
  height: ${pxIntoRem(46)};
  margin-left: auto;
  margin-right: 0;
  background: transparent;
  &:disabled {
    pointer-events: none;
  }
  &:hover ${IndexWidgetInputButtonIcon} {
    stroke: #1683E2;
  }
`;

const IndexWidgetFile = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: ${pxIntoRem(4)};
  border: 1px solid #2D3042;
  padding: ${pxIntoRem(4)} ${pxIntoRem(8)};
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: ${pxIntoRem(43)};
  align-items: center;
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(24)};
  }
`;

const IndexWidgetDeleteButton = styled.button`
  width: ${pxIntoRem(15)};
  height: ${pxIntoRem(15)};
  background: transparent;
  background-image: url("/images/small-close.svg");
  background-position: center;
  background-size: contain;
  margin-left: ${pxIntoRem(4)};
  z-index: 999;
`;

const IndexWidgetMainDeleteButton = styled.button`
  display: flex;
  position: relative;
  width: ${pxIntoRem(251)};
  height: ${pxIntoRem(46)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(8)};
  background: transparent;
  border: 1px solid #2D3042;
  margin-top: ${pxIntoRem(47)};
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: 0.3s;
  &:hover {
    border: 1px solid #FFF;
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    width: calc(100% - ${pxIntoRem(40)});
    margin: auto ${pxIntoRem(20)} ${pxIntoRem(182)} ${pxIntoRem(20)};
  }
`;

const IndexWidgetCheckboxBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: ${pxIntoRem(24)};
  margin-left: ${pxIntoRem(32)};
  @media (max-width: 500px) {
    width: calc(100% - ${pxIntoRem(40)});
    margin-left: ${pxIntoRem(20)};
    margin-right: ${pxIntoRem(20)};
  }
`;

const IndexWidgetCheckboxInput = styled.input`
  width: ${pxIntoRem(20)};
  height: ${pxIntoRem(20)};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 1px solid #2D3042;
  border-radius: ${pxIntoRem(4)};
  cursor: pointer;
  &:checked {
    background: url("/images/checkbox-active.svg");
    background-position: center;
  }
  &:focus-visible {
    border: 1px solid rgba(22, 131, 226, 1);
  }
`;

const IndexWidgetCheckboxText = styled.p`
  position: relative;
  width: ${pxIntoRem(439)};
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: ${pxIntoRem(8)};
  @media (max-width: 500px) {
    width: calc(100% - ${pxIntoRem(28)});
    font-size: ${pxIntoRem(14)};
  }
`;

const IndexWidgetCheckboxLink = styled(Link)`
  position: relative;
  width: ${pxIntoRem(358)};
  color: #FFF;
  text-decoration-line: underline;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: ${pxIntoRem(6)};
  margin-right: ${pxIntoRem(6)};
  &:focus-visible {
    color: rgba(22, 131, 226, 1);
  }
  &:hover  {
    color: rgba(22, 131, 226, 1);
  }
`;

const ProgressAnimation = keyframes`
  0% { stroke: #2499FF; stroke-opacity: 1; }
  33.333% { stroke: #FFF; stroke-opacity: 0.1 }
`;

const IndexWidgetProgressBar = styled.progress`
  position: relative;
  -webkit-appearance: none;
  appearance: none;
  width: ${pxIntoRem(386)};
  height: ${pxIntoRem(8)};
  &::-webkit-progress-bar {
    border-radius: ${pxIntoRem(8)};
    background: #1B1D2C;
  }
  &::-webkit-progress-value {
    border-radius: ${pxIntoRem(8)};
    background: #1683E2;
  }
  @media (max-width: 500px) {
    width: calc(100% - ${pxIntoRem(40)});
    margin: 0 ${pxIntoRem(20)} 0 ${pxIntoRem(20)};
  }
`;

const IndexWidgetProcessingBlock = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  gap: ${pxIntoRem(30)};
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const IndexWidgetProcessingFileIcon = styled.img`
  width: ${pxIntoRem(68)};
  height: ${pxIntoRem(92.875)};
  @media (max-width: 400px) {
    width: ${pxIntoRem(46)};
    height: ${pxIntoRem(63)};
  }
`;

const IndexWidgetProcessingIcon = styled.svg`
  width: ${pxIntoRem(76)};
  height: ${pxIntoRem(38)};
  .firstArrow {
    stroke: #FFF;
    stroke-opacity: 0.1;
    animation: ${ProgressAnimation} 1.8s infinite;
  }
  .secondArrow {
    stroke: #FFF;
    stroke-opacity: 0.1;
    animation: ${ProgressAnimation} 1.8s infinite 0.6s;
  }
  .thirdArrow {
    stroke: #FFF;
    stroke-opacity: 0.1;
    animation: ${ProgressAnimation} 1.8s infinite 1.2s;
  }
  @media (max-width: 400px) {
    width: ${pxIntoRem(49)};
    height: ${pxIntoRem(23)};
  }
`;

const IndexWidgetTrancriptionContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: start;
  overflow: auto;
  z-index: 9999999;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const IndexWidgetTranscriptionBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${pxIntoRem(20)} ${pxIntoRem(32)} auto ${pxIntoRem(20)};
  @media (max-width: 500px) {
    margin: ${pxIntoRem(20)} ${pxIntoRem(24)} auto ${pxIntoRem(20)};
  }
`;

const IndexWidgetTranscriptionTimestamp = styled.div`
  display: block;
  width: ${pxIntoRem(65)};
  height: ${pxIntoRem(23)};
  border-radius: ${pxIntoRem(4)};
  background: #1B1D2C;
  padding: ${pxIntoRem(4)} ${pxIntoRem(8)};
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-items: center;
  justify-content: center;
`;

const IndexWidgetTranscriptionParagraph = styled.div`
  position: relative;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-top: ${pxIntoRem(16)};
  &:last-of-type {
    margin-bottom: ${pxIntoRem(20)};
  }
`;

const IndexWidgetTranscriptionWord = styled.p`
  display: inline-block;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  padding: 0 ${pxIntoRem(2)};
  white-space: normal;
`;

const IndexWidgetTranscriptionScrollbarTrack = styled.div`
  position: absolute;
  height: ${pxIntoRem(370)};
  width: ${pxIntoRem(6)};
  background: transparent;
  top: ${pxIntoRem(20)};
  right: ${pxIntoRem(10)};
  border-radius: ${pxIntoRem(10)};
  @media (max-width: 500px) {
    height: ${pxIntoRem(370)};
    right: ${pxIntoRem(6)};
  }

`;

const IndexWidgetTranscriptionScrollbarThumb = styled.div`
  position: relative;
  width: ${pxIntoRem(6)};
  background: #1668E2;
  border-radius: ${pxIntoRem(10)};
  transform: translate3d(0px, 0px, 0px);
`;

const IndexWidgetControlBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  gap: ${pxIntoRem(12)};
  width: fit-content;
  margin-left: auto;
  margin-right: ${pxIntoRem(592)};
  z-index: 99999;
  @media (max-width: 500px) {
    width: auto;
    margin-left: 0;
    margin-right: 0;
    justify-content: center;
  }
`;

const IndexWidgetControlBarButton = styled.button`
  position: relative;
  display: flex;
  width: ${pxIntoRem(46)};
  height: ${pxIntoRem(46)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #2D304299;
  background: transparent;
  z-index: 99999;
  &:hover {
    border: 1px solid #FFF;
  }
`;

const IndexWidgetControlBarButtonIcon = styled.img`
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
`;

const IndexWidgetBlurredRectangle = styled.div`
  position: absolute;
  bottom: ${pxIntoRem(140)};
  width: 100%;
  height: ${pxIntoRem(60)};
  background: #030512;
  filter: blur(${pxIntoRem(20)});
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 999;
  @media (max-width: 500px) {
    display: none;
  }
`;

export {
  IndexWidgetBody,
  IndexWidgetBlock,
  IndexWidgetBlockAnimation,
  IndexWidgetBlockAnimationLine,
  IndexWidgetBackground,
  IndexWidgetPattern,
  IndexWidgetForm,
  IndexWidgetInputFileField,
  IndexWidgetTitle,
  IndexWidgetMainButton,
  IndexWidgetMainDeleteButton,
  IndexWidgetText,
  IndexWidgetInputBlock,
  IndexWidgetInput,
  IndexWidgetInputButton,
  IndexWidgetInputButtonIcon,
  IndexWidgetFile,
  IndexWidgetDeleteButton,
  IndexWidgetCheckboxBlock,
  IndexWidgetCheckboxInput,
  IndexWidgetCheckboxText,
  IndexWidgetCheckboxLink,
  IndexWidgetProgressBar,
  IndexWidgetProcessingBlock,
  IndexWidgetProcessingFileIcon,
  IndexWidgetProcessingIcon,
  IndexWidgetTrancriptionContent,
  IndexWidgetTranscriptionBlock,
  IndexWidgetTranscriptionTimestamp,
  IndexWidgetTranscriptionParagraph,
  IndexWidgetTranscriptionWord,
  IndexWidgetTranscriptionScrollbarTrack,
  IndexWidgetTranscriptionScrollbarThumb,
  IndexWidgetControlBar,
  IndexWidgetControlBarButton,
  IndexWidgetControlBarButtonIcon,
  IndexWidgetBlurredRectangle
};