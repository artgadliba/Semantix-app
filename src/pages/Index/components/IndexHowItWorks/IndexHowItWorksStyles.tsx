import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const IndexHowItWorksContent = styled.div`
  position: relative;
  z-index: 99;
  width: 100%;
`;

const IndexHowItWorksBody = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  margin: 0 ${pxIntoRem(15)} ${pxIntoRem(40)} ${pxIntoRem(15)};
`;

const IndexHowItWorksTitle = styled.h2`
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: ${pxIntoRem(38)};
  line-height: 100%;
  text-align: center;
  color: #ffffff;
  margin-top: ${pxIntoRem(251)};
  @media (max-width: 500px) {
    margin-top: ${pxIntoRem(0)};
    font-size: ${pxIntoRem(24)};
  }
`;

const IndexHowItWorksTables = styled.div`
  position: relative;
  display: flex;
  gap: ${pxIntoRem(20)};
  width: ${pxIntoRem(1300)};
  margin-top: ${pxIntoRem(59)};
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    gap: ${pxIntoRem(0)};
    margin-top: ${pxIntoRem(0)};
    width: auto;
  }
`;

const IndexHowItWorksTableBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxIntoRem(20)};
  align-items: center;
  @media (max-width: 500px) {
    gap: ${pxIntoRem(16)};
  }
`;

const IndexHowItWorksPicture = styled.picture`
  width: ${pxIntoRem(420)};
  height: ${pxIntoRem(311)};
  box-shadow: 0px 4px 54px 0px rgba(0, 0, 0, 0.20);
  @media (max-width: 500px) {
    width: 100%;
    height: auto;
    margin-top: ${pxIntoRem(30)};
  }
`;

const IndexHowItWorksImage = styled.img`
  width: 100%;
  height: 100%;
`;

const IndexHowItWorksText = styled.h3`
  display: flex;
  color: #FFF;
  text-align: center;
  font-family: Mulish;
  font-size: ${pxIntoRem(18)};
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;

export {
  IndexHowItWorksBody,
  IndexHowItWorksContent,
  IndexHowItWorksTitle,
  IndexHowItWorksTables,
  IndexHowItWorksTableBlock,
  IndexHowItWorksPicture,
  IndexHowItWorksImage,
  IndexHowItWorksText
};