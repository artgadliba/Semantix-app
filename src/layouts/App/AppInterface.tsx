import React, { FC, useState } from "react";
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
    const [query, setQuery] = useState<string>("");
    const [sortType, setSortType] = useState("ascending");
    const [sortByField, setSortByField] = useState("fileName");

    return (
        <AppInterfaceBlock>
            <AppHeader title={headerTitle} />
            <AppMenu />
            {controlBar && (<><AppControlBar setQuery={setQuery} setSortType={setSortType} setSortByField={setSortByField} /></>)}
            <AppInterfaceContent>
                {React.cloneElement(children as React.ReactElement<any>, { 
                    query: query,
                    sortType: sortType,
                    sortByField: sortByField
                })}
            </AppInterfaceContent>
            <AppInterfaceBlurredCircleBottomLeft />
        </AppInterfaceBlock>
    );
}

export default AppInterface;