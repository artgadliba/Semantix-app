import { FC, PropsWithChildren } from "react";
import LandingHeader from "./Components/LandingHeader/LandingHeader";
import LandingFooter from "./Components/LandingFooter/LandingFooter";
import { LandingBlock, LandingContent } from "./LandingStyles";

const Landing:FC <PropsWithChildren> = ({ children }) => {
    return (
        <LandingBlock>
            <LandingHeader />
                <LandingContent>
                    {children}
                </LandingContent>
            <LandingFooter />
        </LandingBlock>
    );
}

export default Landing;
