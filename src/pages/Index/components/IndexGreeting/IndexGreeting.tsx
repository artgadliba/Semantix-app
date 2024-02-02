import { FC } from "react";
import {
    IndexGreetingBlock,
    IndexGreetingBackground, 
    IndexGreeting,
    IndexGreetingContent,
    IndexGreetingTitle,
    IndexGreetingText,
    IndexGreetingMainButton,
    IndexGreetingBlurredCircle
} from "./IndexGreetingStyles";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import useModal from "hooks/useModal";
import RegistrationModal from "components/Modals/RegistrationModal/RegistrationModal";
import PasswordRecoveryModal from "components/Modals/PasswordRecoveryModal/PasswordRecoveryModal";
import MessageModal from "components/Modals/MessageModal/MessageModal";

const IndexGreetingComponent = () => {
    const widgetFileState = useSelector((state: RootState) => state.widgetFile.value);

    const {
        openModal: openRecModal,
        modal: passwordRecoveryModal
    } = useModal(PasswordRecoveryModal, { modalType: "request" });
    const {
        openModal: openMessModal,
        modal: messageModal
    } = useModal(MessageModal, { modalType: "messageModal", message: "Регистрация прошла успешно!" });
    const {
        openModal: openRegModal,
        modal: registrationModal
    } = useModal(RegistrationModal, { openRecModal, openMessModal, modalType: "registration" });

    return (
        <IndexGreetingBlock>
            <IndexGreetingBlurredCircle />
            {window.innerWidth > 500 && (
                <IndexGreetingBackground alt="background" src="/images/main-background.svg" />
            )}
            <IndexGreeting>
                <IndexGreetingContent>
                    <IndexGreetingTitle>
                        Транскрибация<br />на базе <span>ИИ</span>
                    </IndexGreetingTitle>
                    <IndexGreetingText>
                        Конвертируйте аудио и видео в текст или субтитры с высокой точностью
                    </IndexGreetingText>
                    {widgetFileState && (
                        <IndexGreetingMainButton onClick={openRegModal}>
                            Полная версия
                        </IndexGreetingMainButton>
                    )}
                </IndexGreetingContent>
            </IndexGreeting>
            {registrationModal}
            {passwordRecoveryModal}
            {messageModal}
        </IndexGreetingBlock>
    );
}

export default IndexGreetingComponent;