import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const AppControlBarBlock = styled.div`
  position: relative;
  width: calc(100% - ${pxIntoRem(256)});
  margin-left: auto;
  margin-right: 0;
  @media (max-width: 500px) {
    margin-left: ${pxIntoRem(15)};
    margin-right: ${pxIntoRem(15)};
    width: auto;
  }
`;

const AppControlBarBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
    width: auto;
  }
`;

const AppControlBarSearchAndFilterBlock = styled.div`
  position: relative;
  display: flex;
  @media (max-width: 500px) {
    display: none;
  }
`;

const AppControlBarSearchAndFilterMobileBlock = styled.div`
  position: relative;
  display: none;
  flex-direction: row;
  margin: ${pxIntoRem(23)} auto 0 auto;
  width: 100%;
  @media (max-width: 500px) {
    display: flex;
  }
`;

const AppControlBarSearchInputBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: ${pxIntoRem(32)};
  margin-left: ${pxIntoRem(40)};
  width: ${pxIntoRem(222)};
  height: ${pxIntoRem(42)};
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #2D3042;
  @media (max-width: 500px) {
    margin: 0 ${pxIntoRem(12)} 0 0;
    width: calc(100% - ${pxIntoRem(54)});
  }
`;

const AppControlBarSearchInput = styled.input`
  padding: ${pxIntoRem(11)} ${pxIntoRem(0)} ${pxIntoRem(10)} ${pxIntoRem(16)};
  width: 100%;
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  background: transparent;
  text-overflow: ellipsis;
  overflow: hidden;
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(16)};
  }
`;

const AppControlBarSearchInputIcon = styled.img`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  margin-left: auto;
  margin-right: ${pxIntoRem(16)};
`;

const AppControlBarFilterButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: ${pxIntoRem(32)};
  margin-left: ${pxIntoRem(20)};
  width: ${pxIntoRem(186)};
  height: ${pxIntoRem(42)};
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #2D3042;
  background: transparent;
  @media (max-width: 500px) {
    margin-top: 0;
    margin-left: ${pxIntoRem(12)};
  }
`;

const AppControlBarFilterIcon = styled.img`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  margin-left: ${pxIntoRem(16)};
  @media (max-width: 500px) {
    margin: 0 auto;
  }
`;

const AppControlBarFilterTitle = styled.h2`
  color: #79768B;
  font-family: Mulish;
  font-size: ${pxIntoRem(14)};
  font-style: normal;
  font-weight: 400;
  line-height: 150%; 
  margin-left: ${pxIntoRem(8)};
  white-space: nowrap;
  &.active {
    color: #FFF;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const AppControlBarFilterIconBlock = styled.div`
  width: ${pxIntoRem(18)};
  height: ${pxIntoRem(18)};
  margin-left: auto;
  margin-right: ${pxIntoRem(16)};
  align-items: center;
  justify-content: center;
  background-image: url("/images/folders-opened.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  &.active {
    background-image: url("/images/folders-closed.svg");
  }
`;

const AppControlBarFilterButtonMobile = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${pxIntoRem(42)};
  height: ${pxIntoRem(42)};
  border-radius: ${pxIntoRem(8)};
  border: 1px solid #2D3042;
  background: transparent;
  margin-left: auto;
  margin-right: ${pxIntoRem(0)};
`;

const AppControlBarUploadButton = styled.button`
  width: ${pxIntoRem(193)};
  height: ${pxIntoRem(42)};
  background-color: #1683E2;
  border-radius: ${pxIntoRem(8)};
  font-family: "Mulish";
  font-style: normal;
  font-weight: 500;
  font-size: ${pxIntoRem(14)};
  line-height: normal;
  color: #FFF;
  display: flex;
  position: relative;
  margin: ${pxIntoRem(32)} ${pxIntoRem(40)} auto auto;
  align-items: center;
  justify-content: center;
  gap: ${pxIntoRem(10)};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background: #1668E2;
    box-shadow: 0px 0px ${pxIntoRem(24)} 0px rgba(22, 104, 226, 0.50);
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    width: 100%;
    margin: 0;
  }
`;

export {
    AppControlBarBlock,
    AppControlBarBody,
    AppControlBarSearchInputBlock,
    AppControlBarSearchAndFilterBlock,
    AppControlBarSearchAndFilterMobileBlock,
    AppControlBarSearchInput,
    AppControlBarSearchInputIcon,
    AppControlBarFilterIcon,
    AppControlBarFilterIconBlock,
    AppControlBarFilterTitle,
    AppControlBarFilterButton,
    AppControlBarFilterButtonMobile,
    AppControlBarUploadButton
};