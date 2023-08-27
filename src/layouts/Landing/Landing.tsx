import { FC, PropsWithChildren } from "react";
// import Footer from "../../components/Footer/Footer";
import LandingHeader from "./LandingHeader/LandingHeader";
import LandingFooter from "./LandingFooter/LandingFooter";
import { LandingBlock, LandingContent } from "./LandingStyles";

const Landing: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LandingBlock>
      <LandingHeader />
      <LandingContent>{children}</LandingContent>
      <LandingFooter />
    </LandingBlock>
  );
}

export default Landing;
