import { useState, useEffect } from "react";
import {
    AppEmailBubbleBlock,
    AppEmailBubbleBlockBackgroundLayer,
    AppEmailBubbleIcon,
    AppEmailBubbleText,
    AppEmailBubbleClose,
    AppEmailBubbleCloseIcon
} from "./AppEmailBubbleStyles";

const AppEmailBubble = () => {
    const [email, setEmail] = useState<string>("");
    const [bubbleMessageState, setBubbleMessageState] = useState<boolean>(null);

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

    const handleBubbleMessageClose = () => {
        localStorage.setItem("bubbleMessage", "false");
        setBubbleMessageState(false);
    }
    if (bubbleMessageState) {
        return (
            <AppEmailBubbleBlock>
                <AppEmailBubbleBlockBackgroundLayer />
                <AppEmailBubbleIcon alt="info" src="/images/info-icon.svg" />
                <AppEmailBubbleText>
                    Для получения доступа к бесплатным минутам расшифровки пройдите верификацию вашего электронного адреса:  <span>{email}</span>, перейдя по ссылке из письма от нашего робота. Мы обещаем никогда не отправлять вам рекламную рассылку без вашего согласия.
                </AppEmailBubbleText>
                
                <AppEmailBubbleClose onClick={handleBubbleMessageClose}>
                    <AppEmailBubbleCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </AppEmailBubbleCloseIcon>
                </AppEmailBubbleClose>
            </AppEmailBubbleBlock>
        );
    }
}

export default AppEmailBubble;