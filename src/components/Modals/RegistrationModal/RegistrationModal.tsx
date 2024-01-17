import { FC, SyntheticEvent, useEffect, useState, useRef } from "react";
import {
    RegistrationModalContent,
    RegistrationModalTitle,
    RegistrationModalInputBlock,
    RegistrationModalInputLabel,
    RegistrationModalInputLabelRowWrapper,
    RegistrationModalInputComponent,
    RegistrationModalInputBackgroundLayer,
    RegistrationModalInputField,
    RegistrationModalInputActiveField,
    RegistrationModalCheckboxBlock,
    RegistrationModalCheckboxInput,
    RegistrationModalCheckboxText,
    RegistrationModalCheckboxLink,
    RegistrationModalMainButton,
    RegistrationModalLoginLink,
    RegistrationModalLoginButton,
    RegistrationModalInputButton,
    RegistrationModalInputError,
    RegistrationModalPasswordStrength,
    RegistrationModalShowPassword,
    RegistrationModalTooltipButton,
    RegistrationModalTooltipBlock,
    RegistrationModalTooltipBlockText
} from "./RegistrationModalStyles";
import {
    LoginModalContent,
    LoginModalTitle,
    LoginModalInputBlock,
    LoginModalInputLabel,
    LoginModalInputComponent,
    LoginModalInputBackgroundLayer,
    LoginModalInputField,
    LoginModalInputActiveField,
    LoginModalMainButton,
    LoginModalLoginLink,
    LoginModalLoginLinkButton,
    LoginModalForgotPasswordButtonBlock,
    LoginModalForgotPasswordButton,
    LoginModalInputButton,
    LoginModalBottomError
} from "./LoginModalStyles";
import { ModalCloseComponent } from "components/ModalCloseComponent/ModalCloseComponent";
import { ModalOutsideClose, ModalExternalBlock, ModalBackgroundLayer } from "components/Mixins/Mixins";
import { TooltipIconSVG } from "components/SvgComponents/TooltipIconSVG";
import { InputButtonIconSVG } from "components/SvgComponents/InputButtonIconSVG";
import validateEmail from "utils/validateEmail";
import axios from "axios";
import FocusTrap from "focus-trap-react";

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
    const [key, setKey] = useState<number>(0);

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
        if (!passwordRepeatInput || !passwordInput) {
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
        const input = document.getElementById("email_input");
        if (input) {
            input.addEventListener("change", handleValidateEmail);
            return () => input.removeEventListener("change", handleValidateEmail);
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

    useEffect(() => {
        setActiveFirstButton(false);
        setActiveSecondButton(false);
    }, [modalTypeState]);
    
    const togglePasswordVisibility = (e: SyntheticEvent<HTMLElement>) => {
        e.preventDefault();
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
        setPasswordInput(null);
        setPasswordStrength(null);
        if (modalTypeState === "registration") {
            handleOpenLoginModal();
            setKey(1);
        } else if (modalTypeState === "login") {
            setModalTypeState("registration");
            setKey(2);
        }
    }

    const handleRegistration = (e: React.FormEvent<HTMLFormElement>) => {
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

    const handleAuth = (e: React.FormEvent<HTMLFormElement>) => {
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
                    setModalTypeState("login");
                } else if (err.response.status === 500) {
                    console.log("Ошибка сервера.");
                }
                if (err.headers && "jwt-tokens" in err.headers) {
                    localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                }
            })
        } else {
            setModalTypeState("login");
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
    
    if (modalTypeState === "registration") {
        return (
            <FocusTrap key={key} focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
                <ModalExternalBlock>
                    <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                    <RegistrationModalContent>
                        {tooltipActive === true && (
                            <RegistrationModalTooltipBlock>
                                <RegistrationModalTooltipBlockText>
                                    Пароль должен быть длиной от 8 до 50 символов, содержать одну заглавную, одну прописную букву и цифру. Все символы должны быть латинскими
                                </RegistrationModalTooltipBlockText>
                            </RegistrationModalTooltipBlock>
                        )}
                        <ModalBackgroundLayer>
                            <form onSubmit={(e) => { handleRegistration(e); }}>
                                <RegistrationModalTitle>Регистрация</RegistrationModalTitle>
                                <RegistrationModalInputBlock>
                                    <RegistrationModalInputLabel htmlFor="username_input">
                                        Имя пользователя
                                    </RegistrationModalInputLabel>
                                    <RegistrationModalInputComponent 
                                        className={errorMessage === "Имя пользователя уже используется" ? "error" : ""}
                                    >
                                        <RegistrationModalInputBackgroundLayer>
                                            <RegistrationModalInputField
                                                id="username_input"
                                                type="text" 
                                                onChange={(e) => { setLoginInput(e.target.value); }} 
                                            />
                                            <RegistrationModalInputActiveField />
                                        </RegistrationModalInputBackgroundLayer>
                                    </RegistrationModalInputComponent>
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
                                            <RegistrationModalInputActiveField />
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
                                            className={passwordStrength === "Сильный" ? "pass_strong" : ""}
                                        >
                                            {passwordStrength}
                                        </RegistrationModalPasswordStrength>
                                        {passwordStrength && (
                                            <RegistrationModalTooltipButton 
                                                type="button"
                                                onMouseEnter={showTip} 
                                                onMouseLeave={hideTip}
                                                onClick={(e) => { e.preventDefault(); showTipOnClick(); }}
                                            >
                                                <TooltipIconSVG />
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
                                            <RegistrationModalInputActiveField />
                                            <RegistrationModalInputButton onClick={togglePasswordVisibility} type="button">
                                                <InputButtonIconSVG active={activeFirstButton} />
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
                                        {passwordInput && passwordRepeatInput && (
                                            <RegistrationModalPasswordStrength 
                                                className={passwordError ? "pass_not_match" : "pass_match"}
                                            >
                                                {passwordError ? "Не совпадает" : "Совпадает"} 
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
                                            <RegistrationModalInputActiveField />
                                            <RegistrationModalInputButton 
                                                type="button"
                                                className="button_second" 
                                                onClick={togglePasswordVisibility}
                                            >
                                                <InputButtonIconSVG active={activeSecondButton} />
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
                                        <RegistrationModalCheckboxText>
                                            Настоящим подтверждаю, что ознакомлен с текстом согласия на 
                                            <RegistrationModalCheckboxLink to="">обработку персональных данных</RegistrationModalCheckboxLink>
                                            и принимаю его условия
                                        </RegistrationModalCheckboxText>
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
                        </ModalBackgroundLayer>
                        <ModalCloseComponent onClose={onClose} />
                    </RegistrationModalContent>
                </ModalExternalBlock>
            </FocusTrap>
        );
    } else if (modalTypeState === "login") {
        return (
            <FocusTrap key={key} focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
                <ModalExternalBlock>
                    <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                    <LoginModalContent>
                        <ModalBackgroundLayer>
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
                                                <LoginModalInputActiveField />
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
                                                <LoginModalInputActiveField />
                                                <LoginModalInputButton type="button" onClick={togglePasswordVisibility}>
                                                    <InputButtonIconSVG active={activeFirstButton} />
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
                        </ModalBackgroundLayer>
                        <ModalCloseComponent onClose={onClose} />
                    </LoginModalContent>
                </ModalExternalBlock>
            </FocusTrap>
        );
    }
}

export default RegistrationModal;