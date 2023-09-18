import styled from "styled-components";
import pxIntoRem from "../../utils/pxIntoRem";

interface IContainerBlock {
  $maxwidth?: number;
}

const ContainerBlock = styled.div<IContainerBlock>`
  max-width: ${({ $maxwidth }) => `${$maxwidth ?? 1290}px`};
  width: 100%;
  height: auto;
  // flex-grow: 1;
  // flex-shrink: 0;
  margin: 0 auto;
  position: relative;
  @media (max-width: ${({ $maxwidth }) => `${($maxwidth ?? 1290) + 60}px`}) {
    padding: 0px ${pxIntoRem(0)};
  }
`;

export { ContainerBlock };
