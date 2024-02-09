import React, { FC, useState, useEffect } from "react";
import { AppInterfaceBlock, AppInterfaceContent, AppInterfaceBlurredCircleBottomLeft } from "./AppInterfaceStyles";
import AppEmailBubble from "./Components/AppEmailBubble/AppEmailBubble";
import AppMenu from "./Components/AppMenu/AppMenu";
import AppHeader from "./Components/AppHeader/AppHeader";
import AppControlBar from "./Components/AppControlBar/AppControlBar";

interface IAppInterface {
    headerTitle: string;
    controlBar: boolean;
    children: React.ReactNode;
}

const AppInterface: FC<IAppInterface> = ({headerTitle, controlBar, children}) => {
    const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

    useEffect(() => {
        function updateHeight() {
            if (window.innerWidth <= 500) {
                setWindowHeight(window.innerHeight);
            }
        }
        window.addEventListener('resize', updateHeight);
        return () => { 
            window.removeEventListener('resize', updateHeight)
        };
    }, []);

    return (
        <AppInterfaceBlock id="app_interface" $windowHeight={windowHeight}>
            <AppHeader title={headerTitle} />
            <AppMenu />
            {controlBar && <AppControlBar />}
            <AppInterfaceContent>
                {children}
            </AppInterfaceContent>
            <AppEmailBubble />
            <AppInterfaceBlurredCircleBottomLeft />
        </AppInterfaceBlock>
    );
}

export default AppInterface;