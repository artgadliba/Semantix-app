import { FC, SyntheticEvent, useEffect, useState } from "react";
import { 
    RegistrationModalBlock,
    RegistrationModalContent,
    RegistrationModalBackgroundLayer,
    RegistrationModalTitle,
    RegistrationModalInputBlock,
    RegistrationModalInputLabel,
    RegistrationModalInputLabelRowWrapper,
    RegistrationModalInputComponent,
    RegistrationModalInputBackgroundLayer,
    RegistrationModalInputField,
    RegistrationModalCheckboxBlock,
    RegistrationModalCheckboxInput,
    RegistrationModalCheckboxText,
    RegistrationModalMainButton,
    RegistrationModalLoginLink,
    RegistrationModalLoginButton,
    RegistrationModalClose,
    RegistrationModalCloseIcon,
    RegistrationModalInputButton,
    RegistrationModalInputButtonIcon,
    RegistrationModalInputError,
    RegistrationModalPasswordStrength,
    RegistrationModalShowPassword,
    RegistrationModalTooltipButton,
    RegistrationModalTooltipIcon,
    RegistrationModalTooltipBlock,
    RegistrationModalTooltipBlockText
} from "./RegistrationModalStyles";
import { 
    LoginModalBlock,
    LoginModalContent,
    LoginModalBackgroundLayer,
    LoginModalTitle,
    LoginModalInputBlock,
    LoginModalInputLabel,
    LoginModalInputComponent,
    LoginModalInputBackgroundLayer,
    LoginModalInputField,
    LoginModalMainButton,
    LoginModalLoginLink,
    LoginModalLoginLinkButton,
    LoginModalClose,
    LoginModalCloseIcon,
    LoginModalForgotPasswordButtonBlock,
    LoginModalForgotPasswordButton,
    LoginModalInputButton,
    LoginModalInputButtonIcon,
    LoginModalBottomError
} from "./LoginModalStyles";
import ModalOutsideClose from "../ModalOutsideCloseBlockStyles";
import validateEmail from "utils/validateEmail";
import axios from "axios";

interface IRegistrationModal {
    onClose(): any;
    openRecModal(): any;
    openMessModal(): any;
    modalType: string;
}

const RegistrationModal: FC<IRegistrationModal> =  ({onClose, openRecModal, openMessModal, modalType}) => {
    const [tooltipActive, setTooltipActive] = useState<boolean>(false);
    const [activeFirstButton, setActiveFirstButton] = useState<boolean>(false);
    const [activeSecondButton, setActiveSecondButton] = useState<boolean>(false);
    const [emailError, setEmailError] = useState<boolean>(false);
    const [emailInputChanged, setEmailInputChanged] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [registrationButtonDisabled, setRegistrationButtonDisabled] = useState<boolean>(true);
    const [checkboxActive, setCheckboxActive] = useState<boolean>(false);
    const [modalTypeState, setModalTypeState] = useState<string>(modalType);
    const [loginInput, setLoginInput] = useState<string>(null);
    const [emailInput, setEmailInput] = useState<string>(null);
    const [passwordInput, setPasswordInput] = useState<string>(null);
    const [passwordRepeatInput, setPasswordRepeatInput] = useState<string>(null);
    const [errorMessage, setErrorMessage] = useState<string>(null);
    const [passwordStrength, setPasswordStrength] = useState<string>(null);
    
    const togglePassword = (e: SyntheticEvent<HTMLElement>) => {
        e.preventDefault();
        const button = e.target as Element;
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

    const handleValidateEmail = () => {
        setEmailInputChanged(true);
        if (!validateEmail(emailInput)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
        if (emailInput === ""){
            setEmailError(false);
        }
    }

    const toggleModals = () => {
        if (modalTypeState === "registration") {
            setModalTypeState("login");
        } else if (modalTypeState === "login") {
            setModalTypeState("registration");
        }
    }

    const handleRegistration = (e) => {
        e.preventDefault();
        if (passwordError === false && emailError === false) {
            axios.post("/api/users/reg", {
                login: loginInput,
                email: emailInput,
                password: passwordInput
            })
            .then((res) => {
                if (res.headers && "jwt-tokens" in res.headers) {
                    localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
                }
                onClose();
                openMessModal();
            })
            .catch((err) => {
                if (err.response.status === 403) {
                    setErrorMessage("Нет доступа.");
                } else if (err.response.status === 500) {
                    setErrorMessage("Ошибка сервера.");
                } else if (err.response.data.includes("Имя пользователя")) {
                    setErrorMessage("Имя пользователя уже используется");
                } else if (err.response.data.includes("Email")) {
                    setErrorMessage("Указанный email неверен или уже используется");
                }
                if (err.headers && "jwt-tokens" in err.headers) {
                    localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                }
                console.log(err);
            })
        }
    }

    const handleAuth = (e) => {
        e.preventDefault();
        if (loginInput && passwordInput) {
            const login = loginInput.trim();
            const psswd = passwordInput.trim();
            axios.post("/api/auth", {
                login: login,
                password: psswd
            })
            .then(res => {
                if (res.headers && "jwt-tokens" in res.headers) {
                    localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
                }
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
                    localStorage.setItem("userObj", res.data);
                    window.location.href = "/app/main";
                })
                .catch(err => {
                    if (err.response.status === 403) {
                        setErrorMessage("Нет доступа.");
                    } else if (err.response.status === 500) {
                        setErrorMessage("Ошибка сервера.");
                    }
                    if (err.headers && "jwt-tokens" in err.headers) {
                        localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                    }
                })
            })
            .catch(err => {
                if (err.response.status === 401) {
                    setErrorMessage("Неверный логин или пароль");
                } else if (err.response.status === 500) {
                    setErrorMessage("Ошибка сервера.");
                }
                if (err.headers && "jwt-tokens" in err.headers) {
                    localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                }
                console.log(err);
            })
        }
    }

    const showTip = () => {
        setTooltipActive(true);
      };
    
    const hideTip = () => {
        setTooltipActive(false);
    };

    useEffect(() => {
        if (emailInput === "") {
            setEmailError(false);
        }
        if (passwordInput && passwordRepeatInput) {
            if (passwordInput !== passwordRepeatInput) {
                setPasswordError(true);
            } else if (passwordInput === passwordRepeatInput) {
                setPasswordError(false);
            }
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
    },[passwordInput, passwordRepeatInput, emailInput]);

    useEffect(() => {
        if (loginInput && emailInput && passwordInput && passwordRepeatInput
            && !emailError && !passwordError && checkboxActive && passwordStrength === "Сильный") {
                setRegistrationButtonDisabled(false);
            } else {
                setRegistrationButtonDisabled(true);
            }
    }, [loginInput, emailInput, passwordInput, passwordRepeatInput, emailError, passwordError, checkboxActive]);

    useEffect(() => {
        const input = document.getElementById("EmailInput");
        if (input) {
            input.addEventListener("change", handleValidateEmail);
        }
        if (emailInput && emailInputChanged) {
            if (!validateEmail(emailInput)) {
                setEmailError(true);
            } else {
                setEmailError(false);
            }
        } else if (!emailInput) {
            setEmailInputChanged(false);
        }
    }, [emailInput]);
    
    if (modalTypeState === "registration") {
        return (
            <RegistrationModalBlock>
                <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                <RegistrationModalContent>
                    {tooltipActive === true && (
                        <RegistrationModalTooltipBlock>
                            <RegistrationModalTooltipBlockText>
                                Пароль должен быть длиной от 8 до 50 символов, содержать одну заглавную, одну прописную букву и цифру. Все символы должны быть латинскими
                            </RegistrationModalTooltipBlockText>
                        </RegistrationModalTooltipBlock>
                    )}
                    <RegistrationModalClose type="button" onClick={onClose}>
                        <RegistrationModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                        </RegistrationModalCloseIcon>
                    </RegistrationModalClose>
                    <RegistrationModalBackgroundLayer>
                        <form onSubmit={(e) => { handleRegistration(e); }}>
                            <RegistrationModalTitle>Регистрация</RegistrationModalTitle>
                            <RegistrationModalInputBlock>
                                <RegistrationModalInputLabel>
                                    Имя пользователя
                                    <RegistrationModalInputComponent 
                                        className={errorMessage === "Имя пользователя уже используется" ? "error" : ""}
                                    >
                                        <RegistrationModalInputBackgroundLayer>
                                            <RegistrationModalInputField 
                                                type="text" 
                                                onChange={(e) => { setLoginInput(e.target.value); }} 
                                            />
                                        </RegistrationModalInputBackgroundLayer>
                                    </RegistrationModalInputComponent>
                                </RegistrationModalInputLabel>
                            </RegistrationModalInputBlock>
                            <RegistrationModalInputBlock>
                                <RegistrationModalInputLabel htmlFor="email_input">Email</RegistrationModalInputLabel>
                                <RegistrationModalInputComponent className={!emailInput && passwordInput ? "error" : ""}>
                                    <RegistrationModalInputBackgroundLayer>
                                        <RegistrationModalInputField
                                            id="email_input"
                                            type="email"
                                            autoComplete="email"
                                            onChange={(e) => { setEmailInput(e.target.value); }} 
                                        />
                                    </RegistrationModalInputBackgroundLayer>
                                </RegistrationModalInputComponent>
                                {emailError === true && (
                                    <RegistrationModalInputError>
                                        Неверный формат e-mail
                                    </RegistrationModalInputError>
                                )}
                            </RegistrationModalInputBlock>
                            <RegistrationModalInputBlock>
                                <RegistrationModalInputLabelRowWrapper>
                                    <RegistrationModalInputLabel htmlFor="psswd_input">Пароль</RegistrationModalInputLabel>
                                    <RegistrationModalPasswordStrength 
                                        className={passwordStrength === "Сильный" ? "StrongPassword" : ""}
                                    >
                                        {passwordStrength}
                                    </RegistrationModalPasswordStrength>
                                    {passwordStrength && (
                                        <RegistrationModalTooltipButton 
                                            type="button"
                                            onMouseEnter={showTip} 
                                            onMouseLeave={hideTip}
                                            onClick={(e) => { e.preventDefault(); }}
                                        >
                                            <RegistrationModalTooltipIcon width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="9" cy="9" r="9" />
                                                <path d="M8.492 13.484V7.116H9.52v6.368H8.492ZM8.365 5.67V4.516h1.269V5.67H8.365Z" fill="#fff"/>
                                            </RegistrationModalTooltipIcon>
                                        </RegistrationModalTooltipButton>
                                    )}
                                </RegistrationModalInputLabelRowWrapper>
                                <RegistrationModalInputComponent>
                                    <RegistrationModalInputBackgroundLayer>
                                        <RegistrationModalInputField 
                                            id="psswd_input" 
                                            type="password" 
                                            autoComplete="new-password"
                                            onChange={(e) => { setPasswordInput(e.target.value); }}
                                        />
                                        <RegistrationModalInputButton onClick={togglePassword} type="button">
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
                                        <RegistrationModalShowPassword>
                                            Показать пароль
                                        </RegistrationModalShowPassword>
                                    </RegistrationModalInputBackgroundLayer>
                                </RegistrationModalInputComponent>
                            </RegistrationModalInputBlock>
                            <RegistrationModalInputBlock>
                                <RegistrationModalInputLabelRowWrapper>
                                    <RegistrationModalInputLabel htmlFor="psswd_repeat">Повторите пароль</RegistrationModalInputLabel>
                                    {passwordInput && passwordRepeatInput && passwordError === false && (
                                        <RegistrationModalPasswordStrength 
                                            className="RepeatPassword"
                                        >
                                            Совпадает
                                        </RegistrationModalPasswordStrength>
                                    )}
                                </RegistrationModalInputLabelRowWrapper>
                                <RegistrationModalInputComponent>
                                    <RegistrationModalInputBackgroundLayer>
                                        <RegistrationModalInputField 
                                            id="psswd_repeat" 
                                            type="password"
                                            autoComplete="new-password"
                                            onChange={(e) => { setPasswordRepeatInput(e.target.value); }} 
                                        />
                                        <RegistrationModalInputButton 
                                            type="button"
                                            className="button-second" 
                                            onClick={togglePassword}
                                        >
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
                                        <RegistrationModalShowPassword>
                                            Показать пароль
                                        </RegistrationModalShowPassword>
                                    </RegistrationModalInputBackgroundLayer>
                                </RegistrationModalInputComponent>
                            </RegistrationModalInputBlock>
                            <label>
                                <RegistrationModalCheckboxBlock>
                                    <RegistrationModalCheckboxInput 
                                        type="checkbox"
                                        onChange={() => { setCheckboxActive(current => !current); }}
                                    />
                                    <RegistrationModalCheckboxText>Настоящим подтверждаю, что ознакомлен с текстом согласия на <a href="">обработку персональных данных</a> и принимаю его условия</RegistrationModalCheckboxText>
                                </RegistrationModalCheckboxBlock>
                            </label>
                            <RegistrationModalMainButton
                                disabled={registrationButtonDisabled}
                                type="submit"
                            >
                                Зарегистрироваться
                            </RegistrationModalMainButton>
                            {errorMessage && (
                                <LoginModalBottomError>{errorMessage}</LoginModalBottomError>
                            )}
                            <RegistrationModalLoginLink>
                                Уже есть аккаунт? 
                                <RegistrationModalLoginButton type="button" onClick={toggleModals}>
                                    Войти
                                </RegistrationModalLoginButton>
                            </RegistrationModalLoginLink>
                        </form>
                    </RegistrationModalBackgroundLayer>
                </RegistrationModalContent>
            </RegistrationModalBlock>
        );
    } else if (modalTypeState === "login") {
        return (
            <LoginModalBlock>
                <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                <LoginModalContent>
                    <LoginModalClose type="button" onClick={onClose}>
                        <LoginModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                        </LoginModalCloseIcon>
                    </LoginModalClose>
                    <LoginModalBackgroundLayer>
                        <form onSubmit={(e) => { handleAuth(e); }}>
                            <LoginModalTitle>Войти в аккаунт</LoginModalTitle>
                            <LoginModalInputBlock>
                                <LoginModalInputLabel htmlFor="username_input">
                                    Имя пользователя
                                    <LoginModalInputComponent>
                                        <LoginModalInputBackgroundLayer>
                                            <LoginModalInputField 
                                                type="text"
                                                id="username_input"
                                                autoComplete="username"
                                                onChange={(e) => { setLoginInput(e.target.value); }} 
                                            />
                                        </LoginModalInputBackgroundLayer>
                                    </LoginModalInputComponent>
                                </LoginModalInputLabel>
                            </LoginModalInputBlock>
                            <LoginModalInputBlock>
                                <LoginModalInputLabel htmlFor="psswd_input">
                                    Пароль
                                    <LoginModalInputComponent>
                                        <LoginModalInputBackgroundLayer>
                                            <LoginModalInputField 
                                                id="psswd_input" 
                                                type="password"
                                                autoComplete="current-password"
                                                onChange={(e) => { setPasswordInput(e.target.value); }} 
                                            />
                                            <LoginModalInputButton type="button" onClick={togglePassword}>
                                                {activeFirstButton == true ? (
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
                                            <RegistrationModalShowPassword>
                                                Показать пароль
                                            </RegistrationModalShowPassword>
                                        </LoginModalInputBackgroundLayer>
                                    </LoginModalInputComponent>
                                </LoginModalInputLabel>
                            </LoginModalInputBlock>
                            <LoginModalForgotPasswordButtonBlock>
                                <LoginModalForgotPasswordButton type="button" onClick={() => { openRecModal(); onClose(); }}>
                                    Забыли пароль?
                                </LoginModalForgotPasswordButton>
                            </LoginModalForgotPasswordButtonBlock>
                            <LoginModalMainButton 
                                disabled={!loginInput || !passwordInput}
                                type="submit"
                            >
                                Войти
                            </LoginModalMainButton>
                        </form>
                        {errorMessage && (
                            <LoginModalBottomError>{errorMessage}</LoginModalBottomError>
                        )}
                        <LoginModalLoginLink>
                            Нет аккаунта? 
                            <LoginModalLoginLinkButton type="button" onClick={toggleModals}>
                                Зарегистрироваться
                            </LoginModalLoginLinkButton>
                        </LoginModalLoginLink>
                    </LoginModalBackgroundLayer>
                </LoginModalContent>
            </LoginModalBlock>
        );
    }
}

export default RegistrationModal;