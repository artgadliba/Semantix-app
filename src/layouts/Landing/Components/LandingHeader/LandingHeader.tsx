import HeaderBurger from "../HeaderBurger/HeaderBurger";
import {
    LandingHeaderBlock,
    LandingHeaderBody,
    LandingHeaderButton,
    LandingHeaderLogoBlock,
    LandingHeaderLogo,
    LandingHeaderBlurredCircle,
    LandingHeaderNavigation,
    LandingHeaderNavigationLink,
} from "./LandingHeaderStyles";
import axios from "axios";
import useModal from "hooks/useModal";
import RegistrationModal from "components/Modals/RegistrationModal/RegistrationModal";
import PasswordRecoveryModal from "components/Modals/PasswordRecoveryModal/PasswordRecoveryModal";
import MessageModal from "components/Modals/MessageModal/MessageModal";

const LandingHeader = () => {
    const {
        closeModal: closeRecModal,
        openModal: openRecModal,
        modal: passwordRecoveryModal
    } = useModal(PasswordRecoveryModal, { modalType: "request" }); 
    const {
        closeModal: closeMessModal,
        openModal: openMessModal,
        modal: messageModal
    } = useModal(MessageModal, { modalType: "messageModal", message: "Регистрация прошла успешно!" });
    const {
        closeModal: closeRegModal,
        openModal: openRegModal,
        modal: registrationModal
    } = useModal(RegistrationModal, { openRecModal, openMessModal, modalType: "login" });

    const handleOpenLoginModal = () => {
        if (localStorage.getItem("jwt-tokens")) {
            axios.get("/api/users/current", {
                headers: {
                    "jwt-tokens": localStorage.getItem("jwt-tokens")
                }
            })
            .then(res => {
                if (res.data.hasOwnProperty("login")) {
                    localStorage.setItem("username", JSON.stringify(res.data));
                }
                if (res.headers && "jwt-tokens" in res.headers) {
                    localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
                }
                localStorage.setItem("bubbleMessage", "true");
                window.location.href = "/app/main";
                })
            .catch(err => {
                if (err.response.status === 403) {
                    openRegModal();
                } else if (err.response.status === 500) {
                    console.log("Ошибка сервера.");
                }
                if (err.headers && "jwt-tokens" in err.headers) {
                    localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                }
            })
        } else {
            openRegModal();
        }
    }

    return (
        <LandingHeaderBlock>
            <LandingHeaderBody>
            <LandingHeaderBlurredCircle />
            <LandingHeaderLogoBlock to="/">
                <LandingHeaderLogo alt="Semantix logo" src="/images/main-logo.svg" />
            </LandingHeaderLogoBlock>
                <LandingHeaderNavigation>
                <LandingHeaderNavigationLink to={"/#features"} >
                    Возможности
                </LandingHeaderNavigationLink>
                <LandingHeaderNavigationLink to={"/#howitworks"} >
                    Как это работает
                </LandingHeaderNavigationLink>
                <LandingHeaderNavigationLink to={"/#payment"} >
                    Стоимость
                </LandingHeaderNavigationLink>
                <LandingHeaderNavigationLink to={"/faq"} >
                    FAQ
                </LandingHeaderNavigationLink>
                <LandingHeaderNavigationLink to={"/#contacts"} >
                    Контакты
                </LandingHeaderNavigationLink>
                </LandingHeaderNavigation>
            <LandingHeaderButton onClick={handleOpenLoginModal}>Войти</LandingHeaderButton>
            <HeaderBurger />
            </LandingHeaderBody>
            {registrationModal}
            {passwordRecoveryModal}
            {messageModal}
        </LandingHeaderBlock>
    );
}

export default LandingHeader;
