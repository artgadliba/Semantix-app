import styled from "styled-components";
import pxIntoRem from "utils/pxIntoRem";

const IndexGreetingBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${pxIntoRem(770)};
  @media (max-width: 500px) {
    width: auto;
  }
`;

const IndexGreeting = styled.section`
  width: 100%;
`;

const IndexGreetingContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 99;
  margin-left: ${pxIntoRem(70)};
  margin-right: ${pxIntoRem(180)};;
  @media (max-width: 500px) {
    margin-left: 0;
    margin-right: 0;
    align-items: center;
  }
`;

const IndexGreetingBackground = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: ${pxIntoRem(782)};
  height: ${pxIntoRem(478)};
`;

const IndexGreetingTitle = styled.h1`
  position: relative;
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: ${pxIntoRem(57)};
  line-height: 100%;
  text-align: start;
  color: #ffffff;
  margin-top: ${pxIntoRem(64)};
  z-index: 99999;
  span {
    display: inline-block;
    width: ${pxIntoRem(105)};
    height: ${pxIntoRem(67)};
    padding-top: ${pxIntoRem(2.24)};
    padding-left: ${pxIntoRem(8)};
    margin-left: ${pxIntoRem(-6)};
    border-radius: ${pxIntoRem(16)};
    background: #171828;
    color: #1683E2;
    backdrop-filter: blur(${pxIntoRem(3)});
    border: 1px solid #202230;
    @media (max-width: 500px) {
        width: ${pxIntoRem(56)};
        height: ${pxIntoRem(34)};
        border-radius: ${pxIntoRem(8.229)};
        padding-top: ${pxIntoRem(0)};
        padding-left: 0;
    }
  }
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(32)};
    width: 90vw;
    margin-top: ${pxIntoRem(20)};
    text-align: center;
  }
`;

const IndexGreetingText = styled.h2`
  position: relative;
  margin-top: ${pxIntoRem(19)};
  font-family: "Mulish";
  font-style: normal;
  font-weight: 400;
  font-size: ${pxIntoRem(16)};
  line-height: 150%;
  text-align: start;
  color: #848097;
  width: ${pxIntoRem(410)};
  @media (max-width: 500px) {
    font-size: ${pxIntoRem(14)};
    width: ${pxIntoRem(290)};
    margin: ${pxIntoRem(17)} ${pxIntoRem(15)} auto ${pxIntoRem(15)};
    text-align: center;
  }
`;

const IndexGreetingMainButton = styled.button`
  display: block;
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
  margin-top: ${pxIntoRem(24)};
  transition: 0.3s;
  &:hover {
    background: #1668E2;
    box-shadow: 0px 0px ${pxIntoRem(24)} 0px rgba(22, 104, 226, 0.50);
    transition: 0.3s;
  }
  @media (max-width: 500px) {
    width: calc(100% - ${pxIntoRem(30)});
    margin-top: ${pxIntoRem(32)};
  }
`;

const IndexGreetingBlurredCircle = styled.div`
  position: absolute;
  width: ${pxIntoRem(80)};
  height: ${pxIntoRem(80)};
  top: ${pxIntoRem(3)};
  left: ${pxIntoRem(-40)};
  background: #1683E2;
  border-radius: 50%;
  filter: blur(${pxIntoRem(176.5)});
`;

export {
  IndexGreetingBlock,
  IndexGreetingBackground, 
  IndexGreeting,
  IndexGreetingContent,
  IndexGreetingTitle,
  IndexGreetingText,
  IndexGreetingMainButton,
  IndexGreetingBlurredCircle
};