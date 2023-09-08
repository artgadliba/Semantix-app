import { FC, SyntheticEvent, useState } from "react";
import { 
    RegistrationModalBlock,
    RegistrationModalContent,
    RegistrationModalBackgroundLayer,
    RegisterModalTitle,
    RegisterModalInputBlock,
    RegisterModalInputTitle,
    RegisterModalInputComponent,
    RegistrationModalInputBackgroundLayer,
    RegistrationModalInputField,
    RegistrationModalCheckboxBlock,
    RegistrationModalCheckboxInput,
    RegistrationModalCheckboxText,
    RegistrationModalMainButton,
    RegistrationModalLoginLink,
    RegistrationModalClose,
    RegistrationModalCloseIcon,
    RegistrationModalInputButton,
  RegistrationModalInputButtonIcon
} from "./RegistrationModalStyles";

interface IRegistrationModal {
    onClose(): any;
}

const RegistrationModal: FC<IRegistrationModal> =  ({onClose}) => {
    const [activeFirstButton, setActiveFirstButton] = useState<boolean>(false);
    const [activeSecondButton, setActiveSecondButton] = useState<boolean>(false);
    const togglePassword = (e: SyntheticEvent<HTMLElement>) => {
        const button = e.target as Element;
        console.log(button)
        if (button.classList.contains("button-second") == true) {
            const elem = document.querySelector("#psswd_repeat");
            const type = elem.getAttribute('type') === 'password' ? 'text' : 'password';
            elem.setAttribute('type', type);
            setActiveSecondButton(current => !current);

        } else {
            const elem = document.querySelector("#psswd_input");
            const type = elem.getAttribute('type') === 'password' ? 'text' : 'password';
            elem.setAttribute('type', type);
            setActiveFirstButton(current => !current);
        }
    }
    return (
        <RegistrationModalBlock onClick={onClose}>
            <RegistrationModalContent onClick={(e) => e.stopPropagation()}>
                <RegistrationModalClose onClick={onClose}>
                    <RegistrationModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </RegistrationModalCloseIcon>
                </RegistrationModalClose>
                <RegistrationModalBackgroundLayer />
                <RegisterModalTitle>Регистрация</RegisterModalTitle>
                <RegisterModalInputBlock>
                    <RegisterModalInputTitle>Имя пользователя</RegisterModalInputTitle>
                    <RegisterModalInputComponent>
                        <RegistrationModalInputBackgroundLayer />
                        <RegistrationModalInputField type="text" />
                    </RegisterModalInputComponent>
                </RegisterModalInputBlock>
                <RegisterModalInputBlock>
                    <RegisterModalInputTitle>Email</RegisterModalInputTitle>
                    <RegisterModalInputComponent>
                        <RegistrationModalInputBackgroundLayer />
                        <RegistrationModalInputField type="text" />
                    </RegisterModalInputComponent>
                </RegisterModalInputBlock>
                <RegisterModalInputBlock>
                    <RegisterModalInputTitle>Пароль</RegisterModalInputTitle>
                    <RegisterModalInputComponent>
                        <RegistrationModalInputBackgroundLayer />
                        <RegistrationModalInputField id="psswd_input" type="password" />
                        <RegistrationModalInputButton onClick={togglePassword}>
                            {activeFirstButton == true ? (
                                <RegistrationModalInputButtonIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99999 11.6667C10.9205 11.6667 11.6667 10.9205 11.6667 10C11.6667 9.07955 10.9205 8.33335 9.99999 8.33335C9.07952 8.33335 8.33332 9.07955 8.33332 10C8.33332 10.9205 9.07952 11.6667 9.99999 11.6667Z" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
                                    <path d="M18.3333 10C16.1108 13.8892 13.3333 15.8334 9.99999 15.8334C6.66666 15.8334 3.88916 13.8892 1.66666 10C3.88916 6.11085 6.66666 4.16669 9.99999 4.16669C13.3333 4.16669 16.1108 6.11085 18.3333 10Z" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
                                </RegistrationModalInputButtonIcon>
                            ) : (
                                <RegistrationModalInputButtonIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.49999 2.5L17.5 17.5M8.81999 8.82248C8.50725 9.13499 8.33147 9.55894 8.33131 10.0011C8.33116 10.4432 8.50664 10.8672 8.81915 11.18C9.13167 11.4927 9.55561 11.6685 9.99773 11.6687C10.4398 11.6688 10.8639 11.4933 11.1767 11.1808M7.80249 4.47083C8.517 4.26643 9.25682 4.16403 9.99999 4.16667C13.3333 4.16667 16.1108 6.11083 18.3333 10C17.685 11.1342 16.99 12.1033 16.2475 12.9067M14.4642 14.4575C13.105 15.3742 11.6183 15.8333 9.99999 15.8333C6.66666 15.8333 3.88916 13.8892 1.66666 10C2.80749 8.00416 4.09416 6.52083 5.52666 5.54917" stroke-linecap="round" strokeLinejoin="round" />
                                </RegistrationModalInputButtonIcon>
                            )}
                        </RegistrationModalInputButton>
                    </RegisterModalInputComponent>
                </RegisterModalInputBlock>
                <RegisterModalInputBlock>
                    <RegisterModalInputTitle>Повторите пароль</RegisterModalInputTitle>
                    <RegisterModalInputComponent>
                        <RegistrationModalInputBackgroundLayer />
                        <RegistrationModalInputField id="psswd_repeat" type="password" />
                        <RegistrationModalInputButton className="button-second" onClick={togglePassword}>
                            {activeSecondButton == true ? (
                                <RegistrationModalInputButtonIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99999 11.6667C10.9205 11.6667 11.6667 10.9205 11.6667 10C11.6667 9.07955 10.9205 8.33335 9.99999 8.33335C9.07952 8.33335 8.33332 9.07955 8.33332 10C8.33332 10.9205 9.07952 11.6667 9.99999 11.6667Z" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
                                    <path d="M18.3333 10C16.1108 13.8892 13.3333 15.8334 9.99999 15.8334C6.66666 15.8334 3.88916 13.8892 1.66666 10C3.88916 6.11085 6.66666 4.16669 9.99999 4.16669C13.3333 4.16669 16.1108 6.11085 18.3333 10Z" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
                                </RegistrationModalInputButtonIcon>
                            ) : (
                                <RegistrationModalInputButtonIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.49999 2.5L17.5 17.5M8.81999 8.82248C8.50725 9.13499 8.33147 9.55894 8.33131 10.0011C8.33116 10.4432 8.50664 10.8672 8.81915 11.18C9.13167 11.4927 9.55561 11.6685 9.99773 11.6687C10.4398 11.6688 10.8639 11.4933 11.1767 11.1808M7.80249 4.47083C8.517 4.26643 9.25682 4.16403 9.99999 4.16667C13.3333 4.16667 16.1108 6.11083 18.3333 10C17.685 11.1342 16.99 12.1033 16.2475 12.9067M14.4642 14.4575C13.105 15.3742 11.6183 15.8333 9.99999 15.8333C6.66666 15.8333 3.88916 13.8892 1.66666 10C2.80749 8.00416 4.09416 6.52083 5.52666 5.54917" stroke-linecap="round" strokeLinejoin="round" />
                                </RegistrationModalInputButtonIcon>
                            )}
                        </RegistrationModalInputButton>
                    </RegisterModalInputComponent>
                </RegisterModalInputBlock>
                <RegistrationModalCheckboxBlock>
                    <RegistrationModalCheckboxInput type="checkbox" />
                    <RegistrationModalCheckboxText>Настоящим подтверждаю, что ознакомлен с текстом согласия на <a href="">обработку персональных данных</a> и принимаю его условия</RegistrationModalCheckboxText>
                </RegistrationModalCheckboxBlock>
                <RegistrationModalMainButton>Зарегистрироваться</RegistrationModalMainButton>
                <RegistrationModalLoginLink>Уже есть аккаунт? <a href="">Войти</a></RegistrationModalLoginLink>
            </RegistrationModalContent>
        </RegistrationModalBlock>
    );
}

export default RegistrationModal;