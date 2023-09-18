import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const AudioPlayerBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: ${pxIntoRem(39)};
  margin-left: ${pxIntoRem(40)};
  width: ${pxIntoRem(916)};
  height: ${pxIntoRem(80)};
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: ${pxIntoRem(16)};
    border: 2px solid transparent;
    background: linear-gradient(181deg, rgba(32, 34, 48, 0.7) 1.02%, rgba(32, 33, 41, 0) 128.15%) border-box;
    -webkit-mask:
        linear-gradient(#fff 0 0) padding-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
            mask-composite: exclude;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    width: auto;
    height: ${pxIntoRem(93)};
    margin-left: ${pxIntoRem(15)};
    margin-right: ${pxIntoRem(15)};
    margin-top: ${pxIntoRem(81)};
  }
`;

const AudioPlayerBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: #0E0F1A;
  border-radius: ${pxIntoRem(16)};
`;

const AudioPlayerControlsBlock = styled.div`
  position: relative;
  margin: ${pxIntoRem(24)} 0 ${pxIntoRem(24)} ${pxIntoRem(16)};
  @media (max-width: 500px) {
    margin: auto ${pxIntoRem(16)};
  }
`;

const AudioPlayerControlsButton = styled.button`
  width: ${pxIntoRem(32)};
  height: ${pxIntoRem(32)};
  padding: ${pxIntoRem(8)};
  border-radius: ${pxIntoRem(8)};
  background: #1683E2;
  transition: 0.3s;
  &:hover {
    background: #1668E2;
    transition: 0.3s;
  }
`;

const AudioControlsIcon = styled.img`
  display: flex;
  width: 100%;
  heigh: 100%;
`;

const AudioPlayerTimecode = styled.div`
  position: relative;
  display: flex;
  color: #FFF;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: ${pxIntoRem(16)};
  margin-top: ${pxIntoRem(-1)};
  white-space: nowrap;
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(16)};
  }
`;

const TrackStyles = `
  height: ${pxIntoRem(8)};
  border-radius: ${pxIntoRem(8)};
  background: #1B1D2C;
`;

const ThumbStyles = `
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  outline: 2.6px solid #0E0F1A;
  outline-offset: -2px;
  border-radius: 50%;
  background: #FFF;
`;

const ProgressStyles = `
  background: #1683E2;
  height: ${pxIntoRem(8)};
  border-radius: ${pxIntoRem(8)} ${pxIntoRem(3)} ${pxIntoRem(3)} ${pxIntoRem(8)};
`;

const AudioPlayerTimeScale = styled.input`
  -webkit-appearance: none;
  position: absolute;
  width: 100%;
  height: ${pxIntoRem(8)};
  border-radius: ${pxIntoRem(8)};
  background: #1B1D2C;
  cursor: pointer;
  z-index: 9999;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    ${ThumbStyles}
  }
  &::-moz-range-thumb {
    ${ThumbStyles}
  }
  &::-moz-range-track {
    ${TrackStyles}
  }
  &::-moz-range-progress {
    ${ProgressStyles}
  }
  &::ms-track {
    color: transparent; 
    border: none;
    ${TrackStyles}
  }
  &::-ms-fill-lower {
    ${ProgressStyles}
  }
  &::-ms-thumb {
    ${ThumbStyles}
  }
`;

const AudioPlayerTimeScalePseudo = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: ${pxIntoRem(8)};
  margin: 0 ${pxIntoRem(16)} 0 ${pxIntoRem(13.92)};
  border-radius: ${pxIntoRem(8)};
  background: transparent;
  outline: none;
  align-items: center;
  z-index: 1;
  @media (max-width: 500px) {
    display: none;
    &.mobile-player {
      display: flex;
      width: calc(100% - ${pxIntoRem(30)});
      margin: ${pxIntoRem(13)} ${pxIntoRem(15)} ${pxIntoRem(16)} ${pxIntoRem(15)};
    }
  }
`;

const AudioPlayerSymbolIcon = styled.img`
  position: relative;
  width: ${pxIntoRem(24)};
  height: ${pxIntoRem(24)};
  margin-left: auto;
  margin-right: ${pxIntoRem(16)};
`;

const AudioPlayerMobileRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  @media (max-width: 500px) {
    display: flex;
    flex-direction: row;
    margin-top: ${pxIntoRem(8)};
    height: ${pxIntoRem(48)};
  }
`;

export {
  AudioPlayerBlock,
  AudioPlayerBackgroundLayer,
  AudioPlayerControlsBlock,
  AudioPlayerControlsButton,
  AudioControlsIcon,
  AudioPlayerTimecode,
  AudioPlayerTimeScale,
  AudioPlayerTimeScalePseudo,
  AudioPlayerSymbolIcon,
  AudioPlayerMobileRowWrapper
};