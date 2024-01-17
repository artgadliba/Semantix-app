import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import {
  AppHeaderBurgerBlock,
  AppHeaderBurgerContent,
  AppHeaderBurgerContentClose,
  AppHeaderBurgerContentCloseImage,
  AppHeaderBurgerContentHeader,
  AppHeaderBurgerContentLogoBlock,
  AppHeaderBurgerContentLogoIcon,
  AppHeaderBurgerIcon,
  AppHeaderBurgerUsernameBlock,
  AppHeaderBurgerUsernameIcon,
  AppHeaderBurgerMenuButton,
  AppHeaderBurgerMenuButtonIcon,
  AppHeaderBurgerSectionsBlock,
  AppHeaderBurgerSectionLinkBlock,
  AppHeaderBurgerSectionLinkButton,
  AppHeaderBurgerActiveBackgroundLayer,
  AppHeaderBurgerBalanceBlurredCircle,
  AppHeaderBurgerBalanceBlock,
  AppHeaderBurgerBalanceBackground,
  AppHeaderBurgerBalanceRateBlock,
  AppHeaderBurgerActiveBlurredCircle,
  AppHeaderBurgerBalanceRateIcon,
  AppHeaderBurgerBalanceRateTitle,
  AppHeaderBurgerBalanceRateText,
  AppHeaderBurgerBalanceRateCounter,
  AppHeaderBurgerBalanceAddButton,
  AppHeaderBurgerContactLink,
  AppHeaderBurgerContactLinkTitle,
  AppHeaderBurgerActiveBlock,
  AppHeaderBurgerSectionIcon,
  AppHeaderBurgerSectionTitle,
  AppHeaderBurgerSectionExpandIcon,
  AppHeaderBurgerBalanceBackgroundLayer,
  AppHeaderBurgerSectionExpandWrapper,
  AppHeaderBurgerContactsLinkBlock,
  AppHeaderBurgerTelegramLinkIcon,
  AppHeaderBurgerTelegramLinkBlock,
  AppHeaderBurgerEmailLinkIcon,
  AppHeaderBurgerEmailLinkBlock
} from "./AppHeaderBurgerStyles";
import AppMenuFolders from "layouts/App/Components/AppMenuFolders/AppMenuFolders";
import useModal from "hooks/useModal";
import CreateNewFolderModal from "components/Modals/CreateNewFolderModal/CreateNewFolderModal";
import { numberWithCommas } from "utils/numberWithCommas";
import { useSelector } from "react-redux";
import { RootState } from "slices";
import BaseRateIcon from "../../../../assets/base-rate-icon.svg";
import ProRateIcon from "../../../../assets/pro-rate-icon.svg";
import BusinessRateIcon from "../../../../assets/business-rate-icon.svg";
import axios from "axios";

const AppHeaderBurger = () => {
    const { pathname } = useLocation();
    const rate = useSelector((state: RootState) => state.rate.value);
    const [folderList, setFolderList] = useState([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [filesButtonActive, setFilesButtonActive] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("");
    const RATE_ICON = rate === "Бизнес" ? BusinessRateIcon : (rate === "Продвинутый" ? ProRateIcon : BaseRateIcon);

    useEffect(() => {
        if (pathname.includes("/app/folders/")) {
            setIsOpen(true);
            setFilesButtonActive(true);
        } else {
            setFilesButtonActive(false);
        }
    }, []);

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem("folders"));
        if (list) {
            setFolderList(list);
        }
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("username"));
        if (data) {
            if ("login" in data) {
                setUsername(data.login);
            }
        }
    }, []);

    useEffect(() => {
        const mainLink = document.getElementById("main_link");
        const balanceLink = document.getElementById("balance_link");
        const faqLink = document.getElementById("faq_link");
        if (pathname.includes("/app/main")) {
            mainLink.classList.add("active");
        } else if (pathname.includes("/app/balance")) {
            balanceLink.classList.add("active");
        } else if (pathname.includes("/app/faq")) {
            faqLink.classList.add("active");
        } 
        if (filesButtonActive === true) {
            mainLink.classList.remove("active");
            balanceLink.classList.remove("active");
            faqLink.classList.remove("active");
        }
    },[filesButtonActive]);
    
    const {
        openModal: openModal,
        modal: createNewFolderModalModal
    } = useModal(CreateNewFolderModal, {}); 

    const handleRequestUserFolders = () => {
        if (localStorage.getItem("jwt-tokens")) {
            axios.get("/api/folders/0,0", {
                headers: {
                    "jwt-tokens": localStorage.getItem("jwt-tokens")
                }
            })
            .then((res) => {
                if (res.headers && "jwt-tokens" in res.headers) {
                    localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
                }
                const list = res.data;
                localStorage.setItem("folders", JSON.stringify(list));
            })
            .catch((err) => {
                if (err.headers && "jwt-tokens" in err.headers) {
                    localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                }
                console.log(err);
            })
        }
    }

    return (
        <div>
            <AppHeaderBurgerBlock onClick={() => setIsOpen(true)}>
                <AppHeaderBurgerIcon alt="menu" src="/images/burger.svg" />
            </AppHeaderBurgerBlock>
            {createNewFolderModalModal}
            {isOpen && (
                <AppHeaderBurgerContent>
                    <AppHeaderBurgerContentHeader>
                        <AppHeaderBurgerContentLogoBlock>
                        <AppHeaderBurgerContentLogoIcon alt="logo" src="/images/main-logo.svg" />
                        </AppHeaderBurgerContentLogoBlock>
                        <AppHeaderBurgerUsernameBlock>
                            {username && (
                                <AppHeaderBurgerUsernameIcon>
                                    {username.slice(0, 1).toUpperCase()}
                                </AppHeaderBurgerUsernameIcon>
                            )}
                            <AppHeaderBurgerMenuButton>
                                <AppHeaderBurgerMenuButtonIcon alt="open" src="/images/folders-closed.svg" />
                            </AppHeaderBurgerMenuButton>
                        </AppHeaderBurgerUsernameBlock>
                        <AppHeaderBurgerContentClose onClick={() => setIsOpen(false)}>
                        <AppHeaderBurgerContentCloseImage alt="close" src="/images/header-close.svg" />
                        </AppHeaderBurgerContentClose>
                    </AppHeaderBurgerContentHeader>
                    <AppHeaderBurgerSectionsBlock>
                        <AppHeaderBurgerSectionLinkBlock 
                            to="/app/main"
                            onClick={() => { setFilesButtonActive(false); }}
                            id="main_link"
                        >
                            <AppHeaderBurgerActiveBlock>
                                <AppHeaderBurgerActiveBackgroundLayer>
                                    <AppHeaderBurgerActiveBlurredCircle />
                                </AppHeaderBurgerActiveBackgroundLayer>
                            </AppHeaderBurgerActiveBlock>
                            <AppHeaderBurgerSectionIcon width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.25 5.25C12.25 4.2835 13.0335 3.5 14 3.5H15.75C16.7165 3.5 17.5 4.2835 17.5 5.25V7C17.5 7.9665 16.7165 8.75 15.75 8.75H14C13.0335 8.75 12.25 7.9665 12.25 7V5.25Z" />
                                <path d="M3.5 14C3.5 13.0335 4.2835 12.25 5.25 12.25H7C7.9665 12.25 8.75 13.0335 8.75 14V15.75C8.75 16.7165 7.9665 17.5 7 17.5H5.25C4.2835 17.5 3.5 16.7165 3.5 15.75V14Z" />
                                <path d="M3.5 5.25C3.5 4.2835 4.2835 3.5 5.25 3.5H7C7.9665 3.5 8.75 4.2835 8.75 5.25V7C8.75 7.9665 7.9665 8.75 7 8.75H5.25C4.2835 8.75 3.5 7.9665 3.5 7V5.25Z" />
                                <path d="M12.25 14C12.25 13.0335 13.0335 12.25 14 12.25H15.75C16.7165 12.25 17.5 13.0335 17.5 14V15.75C17.5 16.7165 16.7165 17.5 15.75 17.5H14C13.0335 17.5 12.25 16.7165 12.25 15.75V14Z" />
                            </AppHeaderBurgerSectionIcon>
                            <AppHeaderBurgerSectionTitle>Главная</AppHeaderBurgerSectionTitle>
                        </AppHeaderBurgerSectionLinkBlock>
                        <AppHeaderBurgerSectionLinkButton 
                            className={filesButtonActive ? "folders_menu_active" : ""}
                            onClick={() => { handleRequestUserFolders(); setFilesButtonActive(true); }}
                        >
                            <AppHeaderBurgerActiveBlock>
                                <AppHeaderBurgerActiveBackgroundLayer>
                                    <AppHeaderBurgerActiveBlurredCircle />
                                </AppHeaderBurgerActiveBackgroundLayer>
                            </AppHeaderBurgerActiveBlock>
                            <AppHeaderBurgerSectionIcon width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.25 14.875V8.75C19.25 6.817 17.683 5.25 15.75 5.25H13.4167C12.6594 5.25 11.9225 5.00438 11.3167 4.55L9.68333 3.325C9.0775 2.87062 8.34063 2.625 7.58333 2.625H5.25C3.317 2.625 1.75 4.192 1.75 6.125V14.875C1.75 16.808 3.317 18.375 5.25 18.375H15.75C17.683 18.375 19.25 16.808 19.25 14.875Z" strokeLinecap="round" strokeLinejoin="round"/>
                            </AppHeaderBurgerSectionIcon>
                            <AppHeaderBurgerSectionTitle>Мои файлы</AppHeaderBurgerSectionTitle>
                            <AppHeaderBurgerSectionExpandIcon 
                                alt="closed" 
                                src={filesButtonActive ? "/images/folders-opened.svg" : "/images/folders-closed.svg"}
                            />
                        </AppHeaderBurgerSectionLinkButton>
                        <AppHeaderBurgerSectionExpandWrapper className="expanding_menu">
                            <AppMenuFolders openModal={openModal} setIsOpen={setIsOpen} folderList={folderList} />
                        </AppHeaderBurgerSectionExpandWrapper>
                        <AppHeaderBurgerSectionLinkBlock 
                            to="/app/balance"
                            onClick={() => { setFilesButtonActive(false); }}
                            id="balance_link"
                        >
                            <AppHeaderBurgerActiveBlock>
                                <AppHeaderBurgerActiveBackgroundLayer>
                                    <AppHeaderBurgerActiveBlurredCircle />
                                </AppHeaderBurgerActiveBackgroundLayer>
                            </AppHeaderBurgerActiveBlock>
                            <AppHeaderBurgerSectionIcon width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.75745 10.2276C5.57414 7.77758 7.86697 6.125 10.4496 6.125H10.5504C13.133 6.125 15.4259 7.77758 16.2425 10.2276L16.6175 11.3526C17.9126 15.2378 15.0208 19.25 10.9254 19.25H10.0746C5.97921 19.25 3.08739 15.2378 4.38246 11.3526L4.75745 10.2276Z" strokeLinejoin="round"/>
                                <path d="M12.3252 6.125L8.67485 6.125L7.4489 4.71884C6.24714 3.34042 7.64912 1.2801 9.40369 1.84612L10.2155 2.108C10.4003 2.16762 10.5997 2.16762 10.7845 2.108L11.5963 1.84612C13.3509 1.2801 14.7529 3.34042 13.5511 4.71884L12.3252 6.125Z" strokeLinejoin="round"/>
                                <path d="M7.875 14.875C9.84759 16.0254 11.0056 16.0514 13.125 14.875" strokeLinecap="round"/>
                            </AppHeaderBurgerSectionIcon>
                            <AppHeaderBurgerSectionTitle>Баланс</AppHeaderBurgerSectionTitle>
                        </AppHeaderBurgerSectionLinkBlock>
                        <AppHeaderBurgerSectionLinkBlock  
                            to="/app/faq"
                            onClick={() => { setFilesButtonActive(false); }}
                            id="faq_link"
                        >
                            <AppHeaderBurgerActiveBlock>
                                <AppHeaderBurgerActiveBackgroundLayer>
                                    <AppHeaderBurgerActiveBlurredCircle />
                                </AppHeaderBurgerActiveBackgroundLayer>
                            </AppHeaderBurgerActiveBlock>
                            <AppHeaderBurgerSectionIcon width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.875 7.875C7.875 6.42525 9.05025 5.25 10.5 5.25C11.9497 5.25 13.125 6.42525 13.125 7.875C13.125 9.02385 12.387 10.0003 11.3592 10.3562C10.9025 10.5143 10.5 10.8918 10.5 11.375V12.25M19.25 10.5C19.25 15.3325 15.3325 19.25 10.5 19.25C5.66751 19.25 1.75 15.3325 1.75 10.5C1.75 5.66751 5.66751 1.75 10.5 1.75C15.3325 1.75 19.25 5.66751 19.25 10.5Z" strokeLinecap="round"/>
                                <circle cx="10.5" cy="14.875" r="0.875" fill="#79768B"/>
                            </AppHeaderBurgerSectionIcon>
                            <AppHeaderBurgerSectionTitle>FAQ</AppHeaderBurgerSectionTitle>
                        </AppHeaderBurgerSectionLinkBlock>
                    </AppHeaderBurgerSectionsBlock>
                    <AppHeaderBurgerBalanceBlock>
                        <AppHeaderBurgerBalanceBackground>
                            <AppHeaderBurgerBalanceBackgroundLayer>
                                <AppHeaderBurgerBalanceBlurredCircle />
                                <AppHeaderBurgerBalanceRateBlock>
                                    <AppHeaderBurgerBalanceRateIcon alt="rate icon" src={RATE_ICON} />
                                    <AppHeaderBurgerBalanceRateTitle>{rate}</AppHeaderBurgerBalanceRateTitle>
                                </AppHeaderBurgerBalanceRateBlock>
                                <AppHeaderBurgerBalanceRateBlock>
                                    <AppHeaderBurgerBalanceRateText>Осталось:</AppHeaderBurgerBalanceRateText>
                                    <AppHeaderBurgerBalanceRateCounter>{numberWithCommas(10000)+" мин"}</AppHeaderBurgerBalanceRateCounter>
                                </AppHeaderBurgerBalanceRateBlock>
                                <AppHeaderBurgerBalanceAddButton to="/app/balance">Пополнить</AppHeaderBurgerBalanceAddButton>
                            </AppHeaderBurgerBalanceBackgroundLayer>
                        </AppHeaderBurgerBalanceBackground>
                    </AppHeaderBurgerBalanceBlock>
                    <AppHeaderBurgerContactLink>
                        <AppHeaderBurgerContactLinkTitle>Связаться с нами</AppHeaderBurgerContactLinkTitle>
                    </AppHeaderBurgerContactLink>
                    <AppHeaderBurgerContactsLinkBlock>
                        <AppHeaderBurgerTelegramLinkBlock to="https://t.me/semantix_one">
                            <AppHeaderBurgerTelegramLinkIcon width="20" height="20" viewBox="0 0 20 20"><g clipPath="url(#a)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.48 3.692a1.25 1.25 0 0 1 1.72 1.355L16.31 16.51c-.184 1.106-1.397 1.74-2.412 1.189a48.711 48.711 0 0 1-3.241-1.912c-.567-.37-2.303-1.558-2.09-2.403.184-.723 3.1-3.438 4.767-5.052.654-.634.356-1-.416-.416-1.92 1.448-4.999 3.65-6.017 4.27-.898.547-1.367.64-1.927.547-1.021-.17-1.969-.433-2.742-.754-1.045-.433-.994-1.87-.001-2.288l14.25-6Z" /></g><defs><clipPath id="a">
                                <path d="M0 0h20v20H0z"/></clipPath></defs>
                            </AppHeaderBurgerTelegramLinkIcon>
                        </AppHeaderBurgerTelegramLinkBlock>
                        <AppHeaderBurgerEmailLinkBlock to="mailto:hello@semantix.one">
                            <AppHeaderBurgerEmailLinkIcon width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M1.667 5.833A3.333 3.333 0 0 1 5 2.5h10a3.333 3.333 0 0 1 3.333 3.333v8.334A3.333 3.333 0 0 1 15 17.5H5a3.333 3.333 0 0 1-3.333-3.333V5.833Z" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.48 6.32a.625.625 0 0 1 .867-.173l3.15 2.1c.91.607 2.096.607 3.005 0l3.151-2.1a.625.625 0 0 1 .694 1.04l-3.151 2.1a3.959 3.959 0 0 1-4.392 0l-3.15-2.1a.625.625 0 0 1-.174-.867Z" fill="#131520"/>
                            </AppHeaderBurgerEmailLinkIcon>
                        </AppHeaderBurgerEmailLinkBlock>
                    </AppHeaderBurgerContactsLinkBlock>
                </AppHeaderBurgerContent>
            )}
        </div>
    );
}

export default AppHeaderBurger;
