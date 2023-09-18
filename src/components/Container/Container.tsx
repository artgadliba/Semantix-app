import { FC, PropsWithChildren } from "react";
import { ContainerBlock } from "./ContainerStyles";

interface IContainer {
  maxwidth?: number;
}

const Container: FC<PropsWithChildren<IContainer>> = ({ children, maxwidth }) => {
  return <ContainerBlock $maxwidth={maxwidth}>{children}</ContainerBlock>;
}

export default Container;
