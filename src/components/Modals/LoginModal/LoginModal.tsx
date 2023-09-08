import { FC, SyntheticEvent, useState } from "react";
import { 
    LoginModalBlock,
    LoginModalContent,
    LoginModalBackgroundLayer,
    LoginModalTitle,
    LoginModalInputBlock,
    LoginModalInputTitle,
    LoginModalInputComponent,
    LoginModalInputBackgroundLayer,
    LoginModalInputField,
    LoginModalMainButton,
    LoginModalLoginLink,
    LoginModalClose,
    LoginModalCloseIcon,
    LoginModalForgotPasswordButtonBlock,
    LoginModalForgotPasswordButton,
    LoginModalInputButton,
    LoginModalInputButtonIcon
} from "./LoginModalStyles";

interface ILoginModal {
    onClose(): any;
}

const LoginModal: FC<ILoginModal> =  ({onClose}) => {
    const [activeButton,  setActiveButton] = useState<boolean>(false);
    const togglePassword = (e: SyntheticEvent<HTMLElement>) => {
        const elem = document.querySelector("#psswd_input");
        const type = elem.getAttribute('type') === 'password' ? 'text' : 'password';
        elem.setAttribute('type', type);
        setActiveButton(current => !current);
    }
    return (
        <LoginModalBlock onClick={onClose}>
            <LoginModalContent onClick={(e) => e.stopPropagation()}>
                <LoginModalClose onClick={onClose}>
                    <LoginModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </LoginModalCloseIcon>
                </LoginModalClose>
                <LoginModalBackgroundLayer />
                <LoginModalTitle>Войти в аккаунт</LoginModalTitle>
                <LoginModalInputBlock>
                    <LoginModalInputTitle>Email</LoginModalInputTitle>
                    <LoginModalInputComponent>
                        <LoginModalInputBackgroundLayer />
                        <LoginModalInputField type="text" />
                    </LoginModalInputComponent>
                </LoginModalInputBlock>
                <LoginModalInputBlock>
                    <LoginModalInputTitle>Пароль</LoginModalInputTitle>
                    <LoginModalInputComponent>
                        <LoginModalInputBackgroundLayer />
                        <LoginModalInputField id="psswd_input" type="password" />
                        <LoginModalInputButton onClick={togglePassword}>
                            {activeButton == true ? (
                                <LoginModalInputButtonIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99999 11.6667C10.9205 11.6667 11.6667 10.9205 11.6667 10C11.6667 9.07955 10.9205 8.33335 9.99999 8.33335C9.07952 8.33335 8.33332 9.07955 8.33332 10C8.33332 10.9205 9.07952 11.6667 9.99999 11.6667Z" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
                                    <path d="M18.3333 10C16.1108 13.8892 13.3333 15.8334 9.99999 15.8334C6.66666 15.8334 3.88916 13.8892 1.66666 10C3.88916 6.11085 6.66666 4.16669 9.99999 4.16669C13.3333 4.16669 16.1108 6.11085 18.3333 10Z" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
                                </LoginModalInputButtonIcon>
                            ) : (
                                <LoginModalInputButtonIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.49999 2.5L17.5 17.5M8.81999 8.82248C8.50725 9.13499 8.33147 9.55894 8.33131 10.0011C8.33116 10.4432 8.50664 10.8672 8.81915 11.18C9.13167 11.4927 9.55561 11.6685 9.99773 11.6687C10.4398 11.6688 10.8639 11.4933 11.1767 11.1808M7.80249 4.47083C8.517 4.26643 9.25682 4.16403 9.99999 4.16667C13.3333 4.16667 16.1108 6.11083 18.3333 10C17.685 11.1342 16.99 12.1033 16.2475 12.9067M14.4642 14.4575C13.105 15.3742 11.6183 15.8333 9.99999 15.8333C6.66666 15.8333 3.88916 13.8892 1.66666 10C2.80749 8.00416 4.09416 6.52083 5.52666 5.54917" stroke-linecap="round" strokeLinejoin="round" />
                                </LoginModalInputButtonIcon>
                            )}
                        </LoginModalInputButton>
                    </LoginModalInputComponent>
                </LoginModalInputBlock>
                <LoginModalForgotPasswordButtonBlock>
                    <LoginModalForgotPasswordButton>Забыли пароль?</LoginModalForgotPasswordButton>
                </LoginModalForgotPasswordButtonBlock>
                <LoginModalMainButton to="/main">Войти</LoginModalMainButton>
                <LoginModalLoginLink>Нет аккаунта? <a href="">Зарегистрироваться</a></LoginModalLoginLink>
            </LoginModalContent>
        </LoginModalBlock>
    );
}

export default LoginModal;