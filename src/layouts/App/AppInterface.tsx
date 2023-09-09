import { FC, useState } from "react";
import { 
    AppInterfaceBlock,
    AppInterfaceContent,
    AppInterfaceBlurredCircleBottomLeft
} from "./AppInterfaceStyles";
import AppMenu from "./Components/AppMenu/AppMenu";
import AppHeader from "./Components/AppHeader/AppHeader";
import AppControlBar from "./Components/AppControlBar/AppControlBar";

interface IAppInterface {
    headerTitle: string;
    controlBar: boolean;
    children: React.ReactNode;
}

const AppInterface: FC<IAppInterface> = ({headerTitle, controlBar, children}) => {
    return (
        <AppInterfaceBlock>
            <AppHeader title={headerTitle} />
            <AppMenu />
            {controlBar && (<><AppControlBar /></>)}
            <AppInterfaceContent>{children}</AppInterfaceContent>
            <AppInterfaceBlurredCircleBottomLeft />
        </AppInterfaceBlock>
    );
}

export default AppInterface;