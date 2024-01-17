import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const AppFilePageBlock = styled.div`
  position: relative;
  width: 100%;
`;

const AppFilePagePathBlock = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin-top: ${pxIntoRem(16)};
  margin-left: ${pxIntoRem(40)};
  @media (max-width: 500px) {
    display: none;
  }
`;

const AppFilePagePathFolderTitle = styled.h2`
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AppFilePagePathArrow = styled.img`
  width: ${pxIntoRem(14)};
  height: ${pxIntoRem(14)};
  margin-left: ${pxIntoRem(4)};
  margin-top: ${pxIntoRem(1)};
`;

const AppFilePagePathFileTitle = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(12)};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: ${pxIntoRem(4)};
`;

const AppFilePageControlBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: ${pxIntoRem(40)};
  margin-left: ${pxIntoRem(40)};
  width: ${pxIntoRem(916)};
  gap: ${pxIntoRem(10)};
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(15)};
    margin-right: ${pxIntoRem(15)};
    width: auto;
    gap: ${pxIntoRem(12)};
  }
`;

const AppFilePageControlButton = styled.button`
  display: flex;
  width: ${pxIntoRem(125)};
  height: ${pxIntoRem(38)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #2D3042;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: 0.3s;
  &.left_button {
    margin-left: auto;
    margin-right: 0;
  }
  &:hover {
    transition: 0.3s;
    border: 1px solid #FFF;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const AppFilePageControlButtonMobile = styled.button`
  display: none;
  width: ${pxIntoRem(38)};
  height: ${pxIntoRem(38)};
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #2D3042;
  @media (max-width: 500px) {
    display: flex;
    &:last-of-type {
      margin-left: auto;
      margin-right: 0;
    }
  }
`;

const AppFilePageControlButtonMobileIcon = styled.img`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
`;

const AppFileEditControlBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: ${pxIntoRem(40)};
  margin-left: ${pxIntoRem(40)};
  width: ${pxIntoRem(916)};
  gap: ${pxIntoRem(10)};
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(15)};
    margin-right: ${pxIntoRem(15)};
    width: auto;
  }
`;

const AppFileEditControlButtonSave = styled.div`
  display: flex;
  width: ${pxIntoRem(183)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  border-radius: ${pxIntoRem(8)};
  background: #1683E2;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #1668E2;
    box-shadow: 0px 0px ${pxIntoRem(24)} 0px rgba(22, 104, 226, 0.50);
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    width: calc(100% - ${pxIntoRem(107)});
  }
`; 

const AppFileEditControlButtonCancel = styled.div`
  display: flex;
  width: ${pxIntoRem(125)};
  height: ${pxIntoRem(38)};
  padding: ${pxIntoRem(10)} ${pxIntoRem(50)};
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #2D3042;
  color: #FFF;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: auto;
  margin-right: ${pxIntoRem(0)};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    border: 1px solid #FFF;
  }
  @media (max-width: 500px) {
    margin-left: auto;
    margin-right: 0;
    width: ${pxIntoRem(95)};
  }
`;

const AppFilePageTranscriptionBlock = styled.div`
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
  @media (max-width: 500px) {
    margin: ${pxIntoRem(20)} ${pxIntoRem(15)} 0 ${pxIntoRem(15)};
    width: auto;
  }
`;

const AppFilePageTranscriptionBackgroundLayer = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  background: #0E0F1A;
  border-radius: ${pxIntoRem(12)};
`;

const AppFilePageTranscriptionTextBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-bottom: ${pxIntoRem(16)};
`;

const AppFilePageTranscriptionTextBlockTimestamp = styled.div`
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

const AppFilePageTranscriptionTextBlockParagraph = styled.p`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-left: ${pxIntoRem(32)};
`;

export {
  AppFilePageBlock,
  AppFilePagePathBlock,
  AppFilePagePathFolderTitle,
  AppFilePagePathArrow,
  AppFilePagePathFileTitle,
  AppFilePageControlBlock,
  AppFilePageControlButton,
  AppFilePageControlButtonMobile,
  AppFilePageControlButtonMobileIcon,
  AppFileEditControlBlock,
  AppFileEditControlButtonSave,
  AppFileEditControlButtonCancel,
  AppFilePageTranscriptionBlock,
  AppFilePageTranscriptionBackgroundLayer,
  AppFilePageTranscriptionTextBlock,
  AppFilePageTranscriptionTextBlockTimestamp,
  AppFilePageTranscriptionTextBlockParagraph
}