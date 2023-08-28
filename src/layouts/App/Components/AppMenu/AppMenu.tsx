import { FC, useEffect } from "react";
import { 
    AppMenuBlock,
    AppMenuBackgroundBlock,
    AppMenuBackgroundLayer,
    AppMenuLogoBlock,
    AppMenuLogo
} from "./AppMenuStyles";

const AppMenu: FC = () => {
    return (
        <AppMenuBlock>
            <AppMenuBackgroundBlock>
                <AppMenuBackgroundLayer />
                <AppMenuLogoBlock>
                    <AppMenuLogo alt="logo" src="/images/main-logo.svg" />
                </AppMenuLogoBlock>
            </AppMenuBackgroundBlock>
        </AppMenuBlock>
    );
}

export default AppMenu;