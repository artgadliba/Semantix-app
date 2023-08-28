import { FC, PropsWithChildren } from "react";
import { 
    ApplicationBlock,
    ApplicationContent
} from "./MainStyles";
import AppMenu from "../App/Components/AppMenu/AppMenu";

const Application: FC<PropsWithChildren> = ({children}) => {
    return (
        <ApplicationBlock>
            <AppMenu />
            <ApplicationContent>{children}</ApplicationContent>
        </ApplicationBlock>
    );
}

export default Application;