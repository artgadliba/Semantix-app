import { FC, PropsWithChildren } from "react";
import { LandingBlock, LandingBody } from "./LandingStyles";
import LandingHeader from "./Components/LandingHeader/LandingHeader";
import LandingFooter from "./Components/LandingFooter/LandingFooter";

const Landing: FC<PropsWithChildren> = ({ children }) => {
    return (
        <LandingBlock id="landing_block">
            <LandingBody>
                <LandingHeader />
                <main>
                    {children}
                </main>
                <LandingFooter />
            </LandingBody>
        </LandingBlock>
    );
}

export default Landing;
