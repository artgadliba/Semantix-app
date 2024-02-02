import { 
    IndexCallToActionBackgroundBlock,
    IndexCallToActionBackgroundImage,
    IndexCallToAction,
    IndexCallToActionContent,
    IndexCallToActionBody,
    IndexCallToActionContentTitle,
    IndexCallToActionContentText,
    IndexCallToActionLogoBlock 
} from "./IndexCallToActionStyles";
import { IndexMainButton } from "components/Mixins/Mixins";
import useModal from "hooks/useModal";
import RegistrationModal from "components/Modals/RegistrationModal/RegistrationModal";
import PasswordRecoveryModal from "components/Modals/PasswordRecoveryModal/PasswordRecoveryModal";
import MessageModal from "components/Modals/MessageModal/MessageModal";

const IndexCallToActionComponent = () => {
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
        <IndexCallToActionBackgroundBlock>
                <IndexCallToActionBackgroundImage 
                    alt="background"
                    src="/images/bottom-pattern.webp"
                />
                <IndexCallToActionContent>
                    <IndexCallToAction id="contacts">
                        <IndexCallToActionBody>
                            <IndexCallToActionLogoBlock alt="logo" src="/images/flash-logo.svg" />
                            <IndexCallToActionContentTitle>
                                Оцените качество расшифровки
                            </IndexCallToActionContentTitle>
                            <IndexCallToActionContentText>
                                Пройдите регистрацию и получите <span>тестовые минуты</span>
                            </IndexCallToActionContentText>
                            <IndexMainButton id="bottom_button" onClick={openRegModal}>
                                Попробовать бесплатно
                            </IndexMainButton>
                        </IndexCallToActionBody>
                    </IndexCallToAction>
                </IndexCallToActionContent>
                {registrationModal}
                {passwordRecoveryModal}
                {messageModal}
        </IndexCallToActionBackgroundBlock>
    );
}

export default IndexCallToActionComponent;