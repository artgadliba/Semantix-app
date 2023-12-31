import React, { FC, useEffect, useState } from "react";
import { 
    AppInterfaceBlock,
    AppInterfaceContent,
    AppInterfaceBlurredCircleBottomLeft,
    AppInterfaceEmailVerificationBlock,
    AppInterfaceEmailVerificationBlockBackgroundLayer,
    AppInterfaceEmailVerificationIcon,
    AppInterfaceEmailVerificationText,
    AppInterfaceEmailVerificationClose,
    AppInterfaceEmailVerificationCloseIcon
} from "./AppInterfaceStyles";
import AppMenu from "./Components/AppMenu/AppMenu";
import AppHeader from "./Components/AppHeader/AppHeader";
import AppControlBar from "./Components/AppControlBar/AppControlBar";

interface IAppInterface {
    headerTitle: string;
    controlBar: boolean;
    children: React.ReactNode;
}

interface IFolderList {
    id: number;
    name: string;
}

const AppInterface: FC<IAppInterface> = ({headerTitle, controlBar, children}) => {
    const [query, setQuery] = useState<string>("");
    const [sortType, setSortType] = useState<string>("ascending");
    const [sortByField, setSortByField] = useState<string>("fileName");
    const [email, setEmail] = useState<string>("example@gmail.com");
    const [bubbleMessageState, setBubbleMessageState] = useState<boolean>(null);


    const handleBubbleMessageClose = () => {
        localStorage.setItem("bubbleMessage", "false");
        setBubbleMessageState(false);
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("username"));
        if (data) {
            if ("email" in data) {
                const email = data.email;
                setEmail(email);
            }
        }
    }, []);

    useEffect(() => {
        if (!bubbleMessageState) {
            if (localStorage.getItem("bubbleMessage") === "true") {
                setBubbleMessageState(true);
            }
        }
    },[]);
    
    return (
        <AppInterfaceBlock>
            <AppHeader title={headerTitle} />
            <AppMenu />
            {controlBar && (<><AppControlBar setQuery={setQuery} setSortType={setSortType} setSortByField={setSortByField} /></>)}
            <AppInterfaceContent>
                {React.cloneElement(children as React.ReactElement<any>, { 
                    query,
                    sortType: sortType,
                    sortByField: sortByField
                })}
            </AppInterfaceContent>
            <AppInterfaceBlurredCircleBottomLeft />
            {bubbleMessageState === true && (
                <AppInterfaceEmailVerificationBlock>
                    <AppInterfaceEmailVerificationBlockBackgroundLayer />
                    <AppInterfaceEmailVerificationIcon alt="info" src="/images/info-icon.svg" />
                    <AppInterfaceEmailVerificationText>
                        Для получения доступа к бесплатным минутам расшифровки пройдите верификацию вашего электронного адреса:  <span>{email}</span>, перейдя по ссылке из письма от нашего робота. Мы обещаем никогда не отправлять вам рекламную рассылку без вашего согласия.
                    </AppInterfaceEmailVerificationText>
                    
                    <AppInterfaceEmailVerificationClose onClick={handleBubbleMessageClose}>
                        <AppInterfaceEmailVerificationCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                        </AppInterfaceEmailVerificationCloseIcon>
                    </AppInterfaceEmailVerificationClose>
                </AppInterfaceEmailVerificationBlock>  
            )}
        </AppInterfaceBlock>
    );
}

export default AppInterface;