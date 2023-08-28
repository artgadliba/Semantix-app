import styled from "styled-components";

const ApplicationBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
`;


const ApplicationContent = styled.main`
  width: 100%;
  z-index: 999;
`;

export {
  ApplicationBlock,
  ApplicationContent
};