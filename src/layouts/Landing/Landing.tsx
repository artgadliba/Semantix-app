import { FC, PropsWithChildren } from "react";
import { LandingBlock } from "./LandingStyles";
import LandingHeader from "./Components/LandingHeader/LandingHeader";
import LandingFooter from "./Components/LandingFooter/LandingFooter";

const Landing:FC <PropsWithChildren> = ({ children }) => {
    return (
        <LandingBlock>
            <LandingHeader />
            <main>
                {children}
            </main>
            <LandingFooter />
        </LandingBlock>
    );
}

export default Landing;
