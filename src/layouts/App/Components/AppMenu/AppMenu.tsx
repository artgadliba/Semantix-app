import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { 
    AppMenuBlock,
    AppMenuBackgroundBlock,
    AppMenuBackgroundLayer,
    AppMenuLogoBlock,
    AppMenuLogo,
    AppMenuSectionsBlock,
    AppMenuSectionLinkBlock,
    AppMenuSectionFilesLinkButton,
    AppMenuSectionIcon,
    AppMenuSectionTitle,
    AppMenuSectionExpandIconClosed,
    AppMenuSectionExpandIconOpened,
    AppMenuSectionExpandWrapper,
    AppMenuActiveBlock,
    AppMenuActiveBackgroundLayer,
    AppMenuActiveBlurredCircle,
    AppMenuBalanceBlock,
    AppMenuBalanceBackground,
    AppMenuBalanceBackgroundLayer,
    AppMenuBalanceBlurredCircle,
    AppMenuBalanceRateBlock,
    AppMenuBalanceRateIcon,
    AppMenuBalanceRateTitle,
    AppMenuBalanceRateText,
    AppMenuBalanceRateCounter,
    AppMenuBalanceAddButton,
    AppMenuContactLink,
    AppMenuContactLinkTitle,
    AppMenuContactsLinkBlock,
    AppMenuTelegramLinkIcon,
    AppMenuTelegramLinkBlock,
    AppMenuEmailLinkIcon,
    AppMenuEmailLinkBlock
} from "./AppMenuStyles";
import AppMenuFolders from "../AppMenuFolders/AppMenuFolders";
import useModal from "hooks/useModal";
import CreateNewFolderModal from "components/Modals/CreateNewFolderModal/CreateNewFolderModal";
import { numberWithCommas } from "utils/numberWithCommas";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "slices/balanceSlice";
import { setRate } from "slices/rateSlice";
import { RootState } from "slices";
import BaseRateIcon from "../../../../assets/base-rate-icon.svg";
import ProRateIcon from "../../../../assets/pro-rate-icon.svg";
import BusinessRateIcon from "../../../../assets/business-rate-icon.svg";
import axios from "axios";
import { setUpdateFolderList } from "slices/updateFolderListSlice";

interface IAppFolderObj {
    id: number;
    name: string;
}

const AppMenu = () => {
    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const updateFolderList = useSelector((state: RootState) => state.updateFolderList.value);
    const [folderList, setFolderList] = useState<Array<IAppFolderObj>>([]);
    const [filesButtonActive, setFilesButtonActive] = useState<boolean>(false);
    const [rateState, setRateState] = useState<string>("Бизнес");
    const [balanceState, setBalanceState] =useState<number>(120000);
    const RATE_ICON = rateState === "Бизнес" ? BusinessRateIcon : (rateState === "Продвинутый" ? ProRateIcon : BaseRateIcon);
    
    const {
        closeModal: closeModal,
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
                if (list) {
                    setFolderList(list);
                }
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

    useEffect(() => {
        if (updateFolderList === true) {
            const list = JSON.parse(localStorage.getItem("folders"));
            if (list) {
                setFolderList(list);
                dispatch(setUpdateFolderList(false));
            }
        }
    }, [updateFolderList]);

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem("folders"));
        if (list) {
            setFolderList(list);
        } 
    }, []);
    
    useEffect(() => {
        const mainLink = document.getElementById("MainLink");
        const balanceLink = document.getElementById("BalanceLink");
        const faqLink = document.getElementById("FaqLink");
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

    useEffect(() => {
        dispatch(setBalance(balanceState));
        dispatch(setRate(rateState));
    }, []);
    
    return (
        <AppMenuBlock>
            <AppMenuBackgroundBlock>
                <AppMenuBackgroundLayer>
                    <AppMenuLogoBlock>
                        <AppMenuLogo alt="logo" src="/images/main-logo.svg" />
                    </AppMenuLogoBlock>
                    <AppMenuSectionsBlock>
                        <AppMenuSectionLinkBlock 
                            to="/app/main" 
                            onClick={() => { setFilesButtonActive(false); }}
                            id="MainLink"
                        >
                            <AppMenuActiveBlock>
                                <AppMenuActiveBackgroundLayer>
                                    <AppMenuActiveBlurredCircle />
                                </AppMenuActiveBackgroundLayer>
                            </AppMenuActiveBlock>
                            <AppMenuSectionIcon width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.25 5.25C12.25 4.2835 13.0335 3.5 14 3.5H15.75C16.7165 3.5 17.5 4.2835 17.5 5.25V7C17.5 7.9665 16.7165 8.75 15.75 8.75H14C13.0335 8.75 12.25 7.9665 12.25 7V5.25Z" />
                                <path d="M3.5 14C3.5 13.0335 4.2835 12.25 5.25 12.25H7C7.9665 12.25 8.75 13.0335 8.75 14V15.75C8.75 16.7165 7.9665 17.5 7 17.5H5.25C4.2835 17.5 3.5 16.7165 3.5 15.75V14Z" />
                                <path d="M3.5 5.25C3.5 4.2835 4.2835 3.5 5.25 3.5H7C7.9665 3.5 8.75 4.2835 8.75 5.25V7C8.75 7.9665 7.9665 8.75 7 8.75H5.25C4.2835 8.75 3.5 7.9665 3.5 7V5.25Z" />
                                <path d="M12.25 14C12.25 13.0335 13.0335 12.25 14 12.25H15.75C16.7165 12.25 17.5 13.0335 17.5 14V15.75C17.5 16.7165 16.7165 17.5 15.75 17.5H14C13.0335 17.5 12.25 16.7165 12.25 15.75V14Z" />
                            </AppMenuSectionIcon>
                            <AppMenuSectionTitle>Главная</AppMenuSectionTitle>
                        </AppMenuSectionLinkBlock>
                        <AppMenuSectionFilesLinkButton 
                            className={filesButtonActive ? "foldersMenuActive" : ""}
                            onClick={() => { handleRequestUserFolders(); setFilesButtonActive(true); }}
                        >
                            <AppMenuActiveBlock>
                                <AppMenuActiveBackgroundLayer>
                                    <AppMenuActiveBlurredCircle />
                                </AppMenuActiveBackgroundLayer>
                            </AppMenuActiveBlock>
                            <AppMenuSectionIcon width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.25 14.875V8.75C19.25 6.817 17.683 5.25 15.75 5.25H13.4167C12.6594 5.25 11.9225 5.00438 11.3167 4.55L9.68333 3.325C9.0775 2.87062 8.34063 2.625 7.58333 2.625H5.25C3.317 2.625 1.75 4.192 1.75 6.125V14.875C1.75 16.808 3.317 18.375 5.25 18.375H15.75C17.683 18.375 19.25 16.808 19.25 14.875Z" strokeLinecap="round" strokeLinejoin="round"/>
                            </AppMenuSectionIcon>
                            <AppMenuSectionTitle>Мои файлы</AppMenuSectionTitle>
                            <AppMenuSectionExpandIconClosed alt="closed" src="/images/folders-closed.svg" />
                            <AppMenuSectionExpandIconOpened alt="closed" src="/images/folders-opened.svg" />
                        </AppMenuSectionFilesLinkButton>
                        <AppMenuSectionExpandWrapper className="expanding menu">
                            <AppMenuFolders openModal={openModal} folderList={folderList} />
                        </AppMenuSectionExpandWrapper>
                        <AppMenuSectionLinkBlock 
                            to="/app/balance" 
                            onClick={() => { setFilesButtonActive(false); }}
                            id="BalanceLink"
                        >
                            <AppMenuActiveBlock>
                                <AppMenuActiveBackgroundLayer>
                                    <AppMenuActiveBlurredCircle />
                                </AppMenuActiveBackgroundLayer>
                            </AppMenuActiveBlock>
                            <AppMenuSectionIcon width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.75745 10.2276C5.57414 7.77758 7.86697 6.125 10.4496 6.125H10.5504C13.133 6.125 15.4259 7.77758 16.2425 10.2276L16.6175 11.3526C17.9126 15.2378 15.0208 19.25 10.9254 19.25H10.0746C5.97921 19.25 3.08739 15.2378 4.38246 11.3526L4.75745 10.2276Z" strokeLinejoin="round"/>
                                <path d="M12.3252 6.125L8.67485 6.125L7.4489 4.71884C6.24714 3.34042 7.64912 1.2801 9.40369 1.84612L10.2155 2.108C10.4003 2.16762 10.5997 2.16762 10.7845 2.108L11.5963 1.84612C13.3509 1.2801 14.7529 3.34042 13.5511 4.71884L12.3252 6.125Z" strokeLinejoin="round"/>
                                <path d="M7.875 14.875C9.84759 16.0254 11.0056 16.0514 13.125 14.875" strokeLinecap="round"/>
                            </AppMenuSectionIcon>
                            <AppMenuSectionTitle>Баланс</AppMenuSectionTitle>
                        </AppMenuSectionLinkBlock>
                        <AppMenuSectionLinkBlock  
                            to="/app/faq" 
                            onClick={() => { setFilesButtonActive(false); }}
                            id="FaqLink"
                        >
                            <AppMenuActiveBlock>
                                <AppMenuActiveBackgroundLayer>
                                    <AppMenuActiveBlurredCircle />
                                </AppMenuActiveBackgroundLayer>
                            </AppMenuActiveBlock>
                            <AppMenuSectionIcon width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.875 7.875C7.875 6.42525 9.05025 5.25 10.5 5.25C11.9497 5.25 13.125 6.42525 13.125 7.875C13.125 9.02385 12.387 10.0003 11.3592 10.3562C10.9025 10.5143 10.5 10.8918 10.5 11.375V12.25M19.25 10.5C19.25 15.3325 15.3325 19.25 10.5 19.25C5.66751 19.25 1.75 15.3325 1.75 10.5C1.75 5.66751 5.66751 1.75 10.5 1.75C15.3325 1.75 19.25 5.66751 19.25 10.5Z" strokeLinecap="round"/>
                                <circle cx="10.5" cy="14.875" r="0.875" fill="#79768B"/>
                            </AppMenuSectionIcon>
                            <AppMenuSectionTitle>FAQ</AppMenuSectionTitle>
                        </AppMenuSectionLinkBlock>
                    </AppMenuSectionsBlock>
                    <AppMenuBalanceBlock>
                        <AppMenuBalanceBackground>
                            <AppMenuBalanceBackgroundLayer>
                                <AppMenuBalanceBlurredCircle />
                                <AppMenuBalanceRateBlock>
                                    <AppMenuBalanceRateIcon alt="star" src={RATE_ICON} />
                                    <AppMenuBalanceRateTitle>Бизнес</AppMenuBalanceRateTitle>
                                </AppMenuBalanceRateBlock>
                                <AppMenuBalanceRateBlock>
                                    <AppMenuBalanceRateText>Осталось:</AppMenuBalanceRateText>
                                    {balanceState >= 1000000 ? (
                                        <AppMenuBalanceRateCounter>999,999+ мин</AppMenuBalanceRateCounter>
                                    ) : (
                                        <AppMenuBalanceRateCounter>{numberWithCommas(balanceState)+" мин"}</AppMenuBalanceRateCounter>
                                    )}
                                </AppMenuBalanceRateBlock>
                                <AppMenuBalanceAddButton to="/app/balance">Пополнить</AppMenuBalanceAddButton>
                            </AppMenuBalanceBackgroundLayer>
                        </AppMenuBalanceBackground>
                    </AppMenuBalanceBlock>
                    <AppMenuContactLink>
                        <AppMenuContactLinkTitle>Связаться с нами</AppMenuContactLinkTitle>
                    </AppMenuContactLink>
                    <AppMenuContactsLinkBlock>
                        <AppMenuTelegramLinkBlock to="https://t.me/semantix_one">
                            <AppMenuTelegramLinkIcon width="20" height="20" viewBox="0 0 20 20"><g clipPath="url(#a)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.48 3.692a1.25 1.25 0 0 1 1.72 1.355L16.31 16.51c-.184 1.106-1.397 1.74-2.412 1.189a48.711 48.711 0 0 1-3.241-1.912c-.567-.37-2.303-1.558-2.09-2.403.184-.723 3.1-3.438 4.767-5.052.654-.634.356-1-.416-.416-1.92 1.448-4.999 3.65-6.017 4.27-.898.547-1.367.64-1.927.547-1.021-.17-1.969-.433-2.742-.754-1.045-.433-.994-1.87-.001-2.288l14.25-6Z" /></g><defs><clipPath id="a">
                                <path d="M0 0h20v20H0z"/></clipPath></defs>
                            </AppMenuTelegramLinkIcon>
                        </AppMenuTelegramLinkBlock>
                        <AppMenuEmailLinkBlock to="mailto:hello@semantix.one">
                            <AppMenuEmailLinkIcon width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M1.667 5.833A3.333 3.333 0 0 1 5 2.5h10a3.333 3.333 0 0 1 3.333 3.333v8.334A3.333 3.333 0 0 1 15 17.5H5a3.333 3.333 0 0 1-3.333-3.333V5.833Z" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.48 6.32a.625.625 0 0 1 .867-.173l3.15 2.1c.91.607 2.096.607 3.005 0l3.151-2.1a.625.625 0 0 1 .694 1.04l-3.151 2.1a3.959 3.959 0 0 1-4.392 0l-3.15-2.1a.625.625 0 0 1-.174-.867Z" fill="#131520"/>
                            </AppMenuEmailLinkIcon>
                        </AppMenuEmailLinkBlock>
                    </AppMenuContactsLinkBlock>
                </AppMenuBackgroundLayer>
            </AppMenuBackgroundBlock>
            {createNewFolderModalModal}
        </AppMenuBlock>
    );
}

export default AppMenu;