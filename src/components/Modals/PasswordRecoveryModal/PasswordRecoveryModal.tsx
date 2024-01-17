import { FC, SyntheticEvent, useEffect, useState } from "react";
import {
    PasswordRecoveryModalContent,
    PasswordRecoveryModalTitle,
    PasswordRecoveryModalInstruction,
    PasswordRecoveryModalInputBlock,
    PasswordRecoveryModalInputLabelRowWrapper,
    PasswordRecoveryModalInputLabel,
    PasswordRecoveryModalInputComponent,
    PasswordRecoveryModalInputBackgroundLayer,
    PasswordRecoveryModalInputField,
    PasswordRecoveryModalInputActiveField,
    PasswordRecoveryModalInputButtonIcon,
    PasswordRecoveryModalInputButton,
    PasswordRecoveryModalMainButton,
    PasswordRecoveryModalBottomError,
    PasswordRecoveryModalInputError,
    PasswordRecoveryModalPasswordStrength,
    PasswordRecoveryModalShowPassword,
    PasswordRecoveryModalTooltipButton,
    PasswordRecoveryModalTooltipBlock,
    PasswordRecoveryModalTooltipBlockText
} from "./PasswordRecoveryModalStyles";
import { ModalCloseComponent } from "components/ModalCloseComponent/ModalCloseComponent";
import validateEmail from "utils/validateEmail";
import axios from "axios";
import { ModalOutsideClose, ModalExternalBlock, ModalBackgroundLayer } from "components/Mixins/Mixins";
import { TooltipIconSVG } from "components/SvgComponents/TooltipIconSVG";
import FocusTrap from "focus-trap-react";

interface IPasswordRecoveryModal {
    onClose(): any;
    openMessageModal?(): any;
    modalType: string;
}

const PasswordRecoveryModal: FC<IPasswordRecoveryModal> =  ({onClose, openMessageModal, modalType}) => {
    const [tooltipActive, setTooltipActive] = useState<boolean>(false);
    const [activeFirstButton, setActiveFirstButton] = useState<boolean>(false);
    const [activeSecondButton, setActiveSecondButton] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [emailInput, setEmailInput] = useState<string>("");
    const [passwordInput, setPasswordInput] = useState<string>("");
    const [passwordRepeatInput, setPasswordRepeatInput] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>(null);
    const [passwordStrength, setPasswordStrength] = useState<string>(null);

    useEffect(() => {
        if (emailInput) {
            if (!validateEmail(emailInput)) {
                setEmailError(true);
            } else {
                setEmailError(false);
            }
        }
        if (emailInput === ""){
            setEmailError(false);
        }
    }, [emailInput]);

    useEffect(() => {
        if (passwordInput && passwordRepeatInput) {
            if (passwordInput !== passwordRepeatInput) {
                setPasswordError(true);
            } else if (passwordInput === passwordRepeatInput) {
                setPasswordError(false);
            }
        }
        if (passwordRepeatInput === "") {
            setPasswordError(false);
        }
        if (passwordRepeatInput === "" || passwordInput === "") {
            setPasswordError(false);
            setPasswordStrength(null);
        }
        if (passwordInput) {
            const exp = RegExp(
                ".*([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+).*"
            );
            if (!exp.test(passwordInput) || passwordInput.trim().length < 8 || passwordInput.trim().length > 50) {
                setPasswordStrength("Слабый");
            } else if (exp.test(passwordInput) && passwordInput.trim().length >= 8 && passwordInput.trim().length <= 50) {
                setPasswordStrength("Сильный");
            }
        }
    },[passwordInput, passwordRepeatInput]);

    const togglePassword = (e: SyntheticEvent<HTMLElement>) => {
        const button = e.target as Element;
        if (button.classList.contains("button_second") == true) {
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

    const handleChangePassword = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
        e.preventDefault();
        if (passwordInput != "" && passwordRepeatInput != "" && passwordError === false) {
            if (localStorage.getItem("jwt-tokens")) {
                const userObj = JSON.parse(localStorage.getItem("username"));
                const updatedUserObj = { ...userObj, password: passwordRepeatInput };
                axios.put("/api/users/current/update", updatedUserObj, {
                    headers: {
                        "jwt-tokens": localStorage.getItem("jwt-tokens")
                    }
                })
                .then((res) => {
                    if (res.data.hasOwnProperty("login")) {
                        localStorage.setItem("username", JSON.stringify(res.data));
                    }
                    if (res.headers && "jwt-tokens" in res.headers) {
                        localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
                    }
                    openMessageModal();
                    onClose();
                })
                .catch((err) => {
                    if (err.headers && "jwt-tokens" in err.headers) {
                        localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                    }
                    setErrorMessage(err);
                    console.log(err);
                })
            } 
        }
    }

    const showTipOnClick = () => {
        setTooltipActive(true);
        setTimeout(() => {
            hideTip();
        }, 5000);
    };

    const showTip = () => {
        setTooltipActive(true);
    };
    
    const hideTip = () => {
        setTooltipActive(false);
    };
    
    if (modalType === "request") {
        return (
            <FocusTrap focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
                <ModalExternalBlock>
                    <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                    <PasswordRecoveryModalContent>
                        <ModalBackgroundLayer>
                            <PasswordRecoveryModalTitle>Смена пароля</PasswordRecoveryModalTitle>
                            <PasswordRecoveryModalInstruction>
                                Введите свой email указанный при регистрации
                            </PasswordRecoveryModalInstruction>
                            <form>
                                <PasswordRecoveryModalInputBlock>
                                    <PasswordRecoveryModalInputLabel htmlFor="email_input">
                                        Email
                                    </PasswordRecoveryModalInputLabel>
                                    <PasswordRecoveryModalInputComponent>
                                        <PasswordRecoveryModalInputBackgroundLayer>
                                            <PasswordRecoveryModalInputField 
                                                id="email_input" 
                                                type="email"
                                                onChange={(e) => {setEmailInput(e.target.value)}} 
                                            />
                                            <PasswordRecoveryModalInputActiveField />
                                        </PasswordRecoveryModalInputBackgroundLayer>
                                    </PasswordRecoveryModalInputComponent>
                                    {emailError === true && (
                                        <PasswordRecoveryModalInputError>
                                            Неверный формат email
                                        </PasswordRecoveryModalInputError>
                                    )}
                                </PasswordRecoveryModalInputBlock>
                                <PasswordRecoveryModalMainButton disabled={!emailInput || emailError} type="submit">
                                    Далее
                                </PasswordRecoveryModalMainButton>
                            </form>
                            {errorMessage && (
                                <PasswordRecoveryModalBottomError>{errorMessage}</PasswordRecoveryModalBottomError>
                            )}
                        </ModalBackgroundLayer>
                        <ModalCloseComponent onClose={onClose} />
                    </PasswordRecoveryModalContent>
                </ModalExternalBlock>
            </FocusTrap>
        );
    } else if (modalType === "resetPassword") {
        return (
            <FocusTrap focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
                <ModalExternalBlock>
                    <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                    <PasswordRecoveryModalContent>
                        {tooltipActive === true && (
                            <PasswordRecoveryModalTooltipBlock>
                                <PasswordRecoveryModalTooltipBlockText>
                                    Пароль должен быть длиной от 8 до 50 символов, содержать одну заглавную, одну прописную букву и цифру. Все символы должны быть латинскими
                                </PasswordRecoveryModalTooltipBlockText>
                            </PasswordRecoveryModalTooltipBlock>
                        )}
                        <ModalBackgroundLayer>
                            <PasswordRecoveryModalTitle>Смена пароля</PasswordRecoveryModalTitle>
                            <PasswordRecoveryModalInstruction>
                                Придумайте новый пароль
                            </PasswordRecoveryModalInstruction>
                            <form onClick={(e) => { handleChangePassword(e); }}>
                                <PasswordRecoveryModalInputBlock>
                                    <PasswordRecoveryModalInputLabelRowWrapper>
                                        <PasswordRecoveryModalInputLabel htmlFor="psswd_input">
                                            Пароль
                                        </PasswordRecoveryModalInputLabel>
                                        <PasswordRecoveryModalPasswordStrength 
                                            className={passwordStrength === "Сильный" ? "pass_strong" : ""}
                                        >
                                            {passwordStrength}
                                        </PasswordRecoveryModalPasswordStrength>
                                        {passwordStrength && (
                                            <PasswordRecoveryModalTooltipButton 
                                                onMouseEnter={showTip} 
                                                onMouseLeave={hideTip}
                                                onClick={(e) => { e.preventDefault(); showTipOnClick(); }}
                                            >
                                                <TooltipIconSVG />
                                            </PasswordRecoveryModalTooltipButton>
                                        )}
                                    </PasswordRecoveryModalInputLabelRowWrapper>
                                    <PasswordRecoveryModalInputComponent>
                                        <PasswordRecoveryModalInputBackgroundLayer>
                                            <PasswordRecoveryModalInputField 
                                                id="psswd_input" 
                                                type="password"
                                                autoComplete="new-password"
                                                onChange={(e) => {setPasswordInput(e.target.value)}} 
                                            />
                                            <PasswordRecoveryModalInputActiveField />
                                            <PasswordRecoveryModalInputButton onClick={togglePassword}>
                                                {activeFirstButton == true ? (
                                                    <PasswordRecoveryModalInputButtonIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.99999 11.6667C10.9205 11.6667 11.6667 10.9205 11.6667 10C11.6667 9.07955 10.9205 8.33335 9.99999 8.33335C9.07952 8.33335 8.33332 9.07955 8.33332 10C8.33332 10.9205 9.07952 11.6667 9.99999 11.6667Z" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
                                                        <path d="M18.3333 10C16.1108 13.8892 13.3333 15.8334 9.99999 15.8334C6.66666 15.8334 3.88916 13.8892 1.66666 10C3.88916 6.11085 6.66666 4.16669 9.99999 4.16669C13.3333 4.16669 16.1108 6.11085 18.3333 10Z" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
                                                    </PasswordRecoveryModalInputButtonIcon>
                                                ) : (
                                                    <PasswordRecoveryModalInputButtonIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.49999 2.5L17.5 17.5M8.81999 8.82248C8.50725 9.13499 8.33147 9.55894 8.33131 10.0011C8.33116 10.4432 8.50664 10.8672 8.81915 11.18C9.13167 11.4927 9.55561 11.6685 9.99773 11.6687C10.4398 11.6688 10.8639 11.4933 11.1767 11.1808M7.80249 4.47083C8.517 4.26643 9.25682 4.16403 9.99999 4.16667C13.3333 4.16667 16.1108 6.11083 18.3333 10C17.685 11.1342 16.99 12.1033 16.2475 12.9067M14.4642 14.4575C13.105 15.3742 11.6183 15.8333 9.99999 15.8333C6.66666 15.8333 3.88916 13.8892 1.66666 10C2.80749 8.00416 4.09416 6.52083 5.52666 5.54917" stroke-linecap="round" strokeLinejoin="round" />
                                                    </PasswordRecoveryModalInputButtonIcon>
                                                )}
                                            </PasswordRecoveryModalInputButton>
                                            <PasswordRecoveryModalShowPassword>
                                                Показать пароль
                                            </PasswordRecoveryModalShowPassword>
                                        </PasswordRecoveryModalInputBackgroundLayer>
                                    </PasswordRecoveryModalInputComponent>
                                </PasswordRecoveryModalInputBlock>
                                <PasswordRecoveryModalInputBlock>
                                    <PasswordRecoveryModalInputLabelRowWrapper>
                                        <PasswordRecoveryModalInputLabel htmlFor="psswd_repeat">
                                            Повторите пароль
                                        </PasswordRecoveryModalInputLabel>
                                        {passwordInput && passwordRepeatInput && (
                                            <PasswordRecoveryModalPasswordStrength 
                                                className={passwordError ? "pass_not_match" : "pass_match"}
                                            >
                                                {passwordError ? "Не совпадает" : "Совпадает"} 
                                            </PasswordRecoveryModalPasswordStrength>
                                        )}
                                    </PasswordRecoveryModalInputLabelRowWrapper>
                                    <PasswordRecoveryModalInputComponent>
                                        <PasswordRecoveryModalInputBackgroundLayer>
                                            <PasswordRecoveryModalInputField 
                                                id="psswd_repeat" 
                                                type="password"
                                                autoComplete="new-password"
                                                onChange={(e) => {setPasswordRepeatInput(e.target.value)}} 
                                            />
                                            <PasswordRecoveryModalInputActiveField />
                                            <PasswordRecoveryModalInputButton className="button_second" onClick={togglePassword}>
                                                {activeSecondButton == true ? (
                                                    <PasswordRecoveryModalInputButtonIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.99999 11.6667C10.9205 11.6667 11.6667 10.9205 11.6667 10C11.6667 9.07955 10.9205 8.33335 9.99999 8.33335C9.07952 8.33335 8.33332 9.07955 8.33332 10C8.33332 10.9205 9.07952 11.6667 9.99999 11.6667Z" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
                                                        <path d="M18.3333 10C16.1108 13.8892 13.3333 15.8334 9.99999 15.8334C6.66666 15.8334 3.88916 13.8892 1.66666 10C3.88916 6.11085 6.66666 4.16669 9.99999 4.16669C13.3333 4.16669 16.1108 6.11085 18.3333 10Z" stroke="white" stroke-linecap="round" strokeLinejoin="round"/>
                                                    </PasswordRecoveryModalInputButtonIcon>
                                                ) : (
                                                    <PasswordRecoveryModalInputButtonIcon width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.49999 2.5L17.5 17.5M8.81999 8.82248C8.50725 9.13499 8.33147 9.55894 8.33131 10.0011C8.33116 10.4432 8.50664 10.8672 8.81915 11.18C9.13167 11.4927 9.55561 11.6685 9.99773 11.6687C10.4398 11.6688 10.8639 11.4933 11.1767 11.1808M7.80249 4.47083C8.517 4.26643 9.25682 4.16403 9.99999 4.16667C13.3333 4.16667 16.1108 6.11083 18.3333 10C17.685 11.1342 16.99 12.1033 16.2475 12.9067M14.4642 14.4575C13.105 15.3742 11.6183 15.8333 9.99999 15.8333C6.66666 15.8333 3.88916 13.8892 1.66666 10C2.80749 8.00416 4.09416 6.52083 5.52666 5.54917" stroke-linecap="round" strokeLinejoin="round" />
                                                    </PasswordRecoveryModalInputButtonIcon>
                                                )}
                                            </PasswordRecoveryModalInputButton>
                                            <PasswordRecoveryModalShowPassword>
                                                Показать пароль
                                            </PasswordRecoveryModalShowPassword>
                                        </PasswordRecoveryModalInputBackgroundLayer>
                                    </PasswordRecoveryModalInputComponent>
                                </PasswordRecoveryModalInputBlock>
                                <PasswordRecoveryModalMainButton 
                                    disabled={passwordInput === "" || passwordRepeatInput === "" || passwordError === true}
                                    type="submit"
                                >
                                    Сменить
                                </PasswordRecoveryModalMainButton>
                            </form>
                            {errorMessage && (
                                <PasswordRecoveryModalBottomError>{errorMessage}</PasswordRecoveryModalBottomError>
                            )}
                        </ModalBackgroundLayer>
                        <ModalCloseComponent onClose={onClose} />
                    </PasswordRecoveryModalContent>
                </ModalExternalBlock>
            </FocusTrap>
        );
    }
}

export default PasswordRecoveryModal;