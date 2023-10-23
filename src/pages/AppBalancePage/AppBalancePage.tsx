import { useEffect, useState } from "react";
import AppInterface from "layouts/App/AppInterface";
import { 
    AppBalancePageBlock,
    AppBalancePageCurrentBalanceBlock,
    AppBalancePageCurrentBalanceTitle,
    AppBalancePageCurrentBalanceWidget,
    AppBalancePageCurrentBalanceWidgetBackgroundLayer,
    AppBalancePageCurrentBalanceWidgetText,
    AppBalancePageCurrentBalanceWidgetMinutes,
    AppBalancePageRatesBlock,
    AppBalancePageRatesTitle,
    AppBalancePageRatesTablesBlock,
    AppBalancePageRatesTable,
    AppBalancePageRatesTableBackgroundLayer,
    AppBalancePageRatesTableTitleBlock,
    AppBalancePageRatesTableTitleIcon,
    AppBalancePageRatesTableTitleText,
    AppBalancePageRatesTableOverview,
    AppBalancePageRatesTableCallToAction,
    AppBalancePageRatesTableOptionsWrapper,
    AppBalancePageRatesTableOptionsBlock,
    AppBalancePageRatesTableOptionBlockHidden,
    AppBalancePageRatesTableOptionsContent,
    AppBalancePageRatesTableOptionsBackgroundLayer,
    AppBalancePageRatesTableOptionBlock,
    AppBalancePageRatesTableOptionValue,
    AppBalancePageRatesTableOptionPrice,
    AppBalancePageRatesTableOptionLine,
    AppBalancePageRatesTableOptionIcon,
    AppBalancePageRatesTableScrollbarTrack,
    AppBalancePageRatesTableScrollbarThumb,
    AppBalancePageContactsLinkBlock,
    AppBalancePageTelegramLinkIcon,
    AppBalancePageTelegramLinkBlock,
    AppBalancePageEmailLinkIcon,
    AppBalancePageEmailLinkBlock,
    AppBalancePageFeaturesBlock,
    AppBalancePageFeaturesBullet,
    AppBalancePageFeaturesTitle
} from "./AppBalancePageStyles";
import { numberWithCommas } from "utils/numberWithCommas";
import PurchaseModal from "components/Modals/PurchaseModal/PurchaseModal";
import CustomPurchaseModal from "components/Modals/CustomPurchaseModal/CustomPurchaseModal";
import PaymentModal from "components/Modals/PaymentModal/PaymentModal";
import useModal from "hooks/useModal";
import { useSelector } from "react-redux";
import { RootState } from "slices";

interface IPurchase {
    rate: string;
    value: string;
    price: string;
}

const AppBalancePage = () => {
    const [windowWidth, setWindowWidth] = useState<number>(null);
    const [purchaseOption, setPurchaseOption] = useState<IPurchase>(null);
    const balance = useSelector((state: RootState) => state.balance.value);
    const rate = useSelector((state: RootState) => state.rate.value);

    const {
        closeModal: closePayModal,
        openModal: openPayModal,
        modal: paymentModal
    } = useModal(PaymentModal, {});
    const {
        closeModal: closePurchaseModal,
        openModal: openPurchaseModal,
        modal: purchaseModal
    } = useModal(PurchaseModal, { openPayModal, purchaseOption });
    const {
        closeModal: closeCustomPurchaseModal,
        openModal: openCustomPurchaseModal,
        modal: customPurchaseModal
    } = useModal(CustomPurchaseModal, { openPayModal, purchaseOption });

    const basePackages = [
        {
            value: "Любое кол-во",
            price: "2.5₽/мин"
        },
        {
            value: "2,000",
            price: "5,000₽"
        },
        {
            value: "4,000",
            price: "10,000₽"
        },
        {
            value: "6,000",
            price: "15,000₽"
        },
        {
            value: "8,000",
            price: "20,000₽"
        },
        {
            value: "10,000",
            price: "25,000₽"
        }
    ];
    const proPackages = [
        {
            value: "Любое кол-во",
            price: "1.5₽/мин"
        },
        {
            value: "15,000",
            price: "22,500₽"
        },
        {
            value: "20,000",
            price: "30,000₽"
        },
        {
            value: "25,000",
            price: "37,500₽"
        },
        {
            value: "30,000",
            price: "45,000₽"
        },
        {
            value: "35,000",
            price: "52,500₽"
        }
    ];

    useEffect(() => {
        const optionHeight = document.getElementById("optionBlock").offsetHeight;
        const trackHeight = document.getElementById("scrollbarTrack").offsetHeight;
        const visibleHeight = document.getElementById("visibleBaseBlock").offsetHeight;
        const baseHeight = basePackages.length * optionHeight;
        const proHeight = proPackages.length * optionHeight;
        const thumbHeightFirst = trackHeight * (visibleHeight / baseHeight);
        const thumbHeightSecond = trackHeight / (proHeight / visibleHeight);
        document.getElementById("optionsThumbFirst").style.height = `${thumbHeightFirst}px`;
        document.getElementById("optionsThumbSecond").style.height = `${thumbHeightSecond}px`;
        const elemFirst = document.getElementById("baseOptionsContent");
        const elemSecond = document.getElementById("proOptionsContent");
        const optionBase = document.getElementsByClassName("optionBaseElement");
        const optionPro = document.getElementsByClassName("optionProElement");
        elemFirst.addEventListener("scroll", () => {
            const value = elemFirst.scrollTop / (baseHeight / trackHeight);
            document.getElementById("optionsThumbFirst").style.transform = `translate3d(0px, ${value}px, 0px`;
            for (let i = 0; i < optionBase.length; i ++) {
                const optionBottom = optionBase[i].getBoundingClientRect();
                const visibleBlock = document.getElementById("visibleBaseBlock").getBoundingClientRect();
                const hiddenBlocks = document.getElementsByClassName("hiddenBaseBlock");
                if (optionBottom.bottom >= visibleBlock.bottom) {
                    hiddenBlocks[i].classList.add("activeHidden");
                } else if (optionBottom.bottom <= visibleBlock.bottom) {
                    hiddenBlocks[i].classList.remove("activeHidden");
                }
                if (i == optionBase.length - 1) {
                    if (optionBottom.bottom == visibleBlock.bottom) {
                        hiddenBlocks[i].classList.remove("activeHidden");
                    }
                }
            }
        });
        elemSecond.addEventListener("scroll", () => {
            const value = elemSecond.scrollTop / (proHeight / trackHeight);
            document.getElementById("optionsThumbSecond").style.transform = `translate3d(0px, ${value}px, 0px`;
            for (let i = 0; i < optionPro.length; i ++) {
                const optionBottom = optionPro[i].getBoundingClientRect();
                const visibleBlock = document.getElementById("visibleProBlock").getBoundingClientRect();
                const hiddenBlocks = document.getElementsByClassName("hiddenProBlock");
                if (optionBottom.bottom >= visibleBlock.bottom) {
                    hiddenBlocks[i].classList.add("activeHidden");
                } else if (optionBottom.bottom <= visibleBlock.bottom) {
                    hiddenBlocks[i].classList.remove("activeHidden");
                }
                if (i == optionPro.length - 1) {
                    if (optionBottom.bottom == visibleBlock.bottom) {
                        hiddenBlocks[i].classList.remove("activeHidden");
                    }
                }
            }
        });
    },[windowWidth]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        });
    }, []);

    useEffect(() => {
        const optionBase = document.getElementsByClassName("optionBaseElement");
        for (let i = 0; i < optionBase.length; i ++) {
            const optionBottom = optionBase[i].getBoundingClientRect();
            const visibleBlock = document.getElementById("visibleBaseBlock").getBoundingClientRect();
            const hiddenBlocks = document.getElementsByClassName("hiddenBaseBlock");
            if (optionBottom.bottom >= visibleBlock.bottom) {
                hiddenBlocks[i].classList.add("activeHidden");
            } else {
                hiddenBlocks[i].classList.remove("activeHidden");
            }
        }
        const optionPro = document.getElementsByClassName("optionProElement");
        for (let i = 0; i < optionPro.length; i ++) {
            const optionBottom = optionPro[i].getBoundingClientRect();
            const visibleBlock = document.getElementById("visibleProBlock").getBoundingClientRect();
            const hiddenBlocks = document.getElementsByClassName("hiddenProBlock");
            if (optionBottom.bottom >= visibleBlock.bottom) {
                hiddenBlocks[i].classList.add("activeHidden");
            } else {
                hiddenBlocks[i].classList.remove("activeHidden");
            }
        }
    },[]);

    const handlePurchase = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        var rate: string;
        if (e.currentTarget.classList[2] === "optionBaseElement") {
            rate = "Базовый";
        } else if (e.currentTarget.classList[2] === "optionProElement") {
            rate = "Продвинутый";
        }
        setPurchaseOption({
            rate: rate,
            value: e.currentTarget.children[0].textContent.slice(0, -5),
            price: e.currentTarget.children[1].textContent
        });
        if (e.currentTarget.children[0].textContent === "Любое кол-во минут") {
            openCustomPurchaseModal();
        } else {
            openPurchaseModal();
        }
    };

    const getBlockSize = (): number => {
        const elem = document.getElementById("rateTable");
        return elem.offsetWidth;
    }
    
    return (
        <AppInterface headerTitle="Баланс" controlBar={false}>
            <AppBalancePageBlock>
                <AppBalancePageCurrentBalanceBlock>
                    <AppBalancePageCurrentBalanceTitle>Текущий тариф: <span>{rate}</span></AppBalancePageCurrentBalanceTitle>
                    <AppBalancePageCurrentBalanceWidget>
                        <AppBalancePageCurrentBalanceWidgetBackgroundLayer />
                        <AppBalancePageCurrentBalanceWidgetText>Осталось:</AppBalancePageCurrentBalanceWidgetText>
                        <AppBalancePageCurrentBalanceWidgetMinutes>{numberWithCommas(balance)+" мин"}</AppBalancePageCurrentBalanceWidgetMinutes>
                    </AppBalancePageCurrentBalanceWidget>
                </AppBalancePageCurrentBalanceBlock>
                <AppBalancePageRatesBlock>
                    <AppBalancePageRatesTitle>Основные тарифы</AppBalancePageRatesTitle>
                    <AppBalancePageRatesTablesBlock>
                        <AppBalancePageRatesTable>
                            <AppBalancePageRatesTableBackgroundLayer />
                            <AppBalancePageRatesTableTitleBlock>
                                <AppBalancePageRatesTableTitleIcon alt="base" src="/images/base-rate-icon.svg" />
                                <AppBalancePageRatesTableTitleText>Базовый</AppBalancePageRatesTableTitleText>
                            </AppBalancePageRatesTableTitleBlock>
                            <AppBalancePageRatesTableOverview>
                                Стартовый тариф для обработки небольших объемов данных. Цена действительна при приобретении до 10,000 минут включительно.
                            </AppBalancePageRatesTableOverview>
                            <AppBalancePageRatesTableCallToAction>Выберите подходящий пакет</AppBalancePageRatesTableCallToAction>
                            <AppBalancePageRatesTableOptionsWrapper>
                                <AppBalancePageRatesTableOptionsBlock id="visibleBaseBlock">
                                    <AppBalancePageRatesTableOptionsBackgroundLayer />
                                    <AppBalancePageRatesTableOptionsContent id="baseOptionsContent">
                                        {basePackages.map((pack, idx) => {
                                            return (
                                                <AppBalancePageRatesTableOptionBlock 
                                                    className="optionBaseElement" 
                                                    id="optionBlock" 
                                                    key={idx}
                                                    onClick={(e) => {handlePurchase(e)}}
                                                >
                                                    <AppBalancePageRatesTableOptionValue>{pack.value}<span> минут</span></AppBalancePageRatesTableOptionValue>
                                                    <AppBalancePageRatesTableOptionPrice>{(pack.price)}</AppBalancePageRatesTableOptionPrice>
                                                    {idx < basePackages.length - 1 && (
                                                        <AppBalancePageRatesTableOptionLine />
                                                    )}
                                                    <AppBalancePageRatesTableOptionIcon width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.6667 15L10.3333 15M19.6667 15L15.6667 19M19.6667 15L15.6667 11" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <rect x="1" y="1" width="28" height="28" rx="8" />
                                                    </AppBalancePageRatesTableOptionIcon>
                                                    <AppBalancePageRatesTableOptionBlockHidden className="hiddenBaseBlock" />
                                                </AppBalancePageRatesTableOptionBlock>
                                            );
                                        })}
                                    </AppBalancePageRatesTableOptionsContent>
                                </AppBalancePageRatesTableOptionsBlock>
                                <AppBalancePageRatesTableScrollbarTrack id="scrollbarTrack">
                                    <AppBalancePageRatesTableScrollbarThumb id="optionsThumbFirst" />
                                </AppBalancePageRatesTableScrollbarTrack>
                            </AppBalancePageRatesTableOptionsWrapper>
                        </AppBalancePageRatesTable>
                        <AppBalancePageRatesTable>
                            <AppBalancePageFeaturesBlock>
                                <AppBalancePageFeaturesBullet />
                                <AppBalancePageFeaturesTitle>
                                    Затраченное количество минут на расшифровку файла рассчитывается исходя из <span>фактического времени</span> звучания речи. 
                                </AppBalancePageFeaturesTitle>
                            </AppBalancePageFeaturesBlock>
                            <AppBalancePageFeaturesBlock>
                                <AppBalancePageFeaturesBullet />
                                <AppBalancePageFeaturesTitle>
                                    Оплаченные минуты сохраняются на балансе <span>бессрочно</span>
                                </AppBalancePageFeaturesTitle>
                            </AppBalancePageFeaturesBlock>
                            <AppBalancePageRatesTableBackgroundLayer />
                            <AppBalancePageRatesTableTitleBlock>
                                <AppBalancePageRatesTableTitleIcon alt="pro" src="/images/pro-rate-icon.svg" />
                                <AppBalancePageRatesTableTitleText>Продвинутый</AppBalancePageRatesTableTitleText>
                            </AppBalancePageRatesTableTitleBlock>
                            <AppBalancePageRatesTableOverview>
                                Основной тариф для обработки средних объемов данных. Цена действительна при приобретении свыше 10,000 минут.
                            </AppBalancePageRatesTableOverview>
                            <AppBalancePageRatesTableCallToAction>Выберите подходящий пакет</AppBalancePageRatesTableCallToAction>
                            <AppBalancePageRatesTableOptionsWrapper>
                                <AppBalancePageRatesTableOptionsBlock id="visibleProBlock">
                                    <AppBalancePageRatesTableOptionsBackgroundLayer />
                                    <AppBalancePageRatesTableOptionsContent id="proOptionsContent">
                                        {proPackages.map((pack, idx) => {
                                            return (
                                                <AppBalancePageRatesTableOptionBlock 
                                                    className="optionProElement" 
                                                    id="optionBlock" 
                                                    key={idx}
                                                    onClick={(e) => {handlePurchase(e)}}
                                                >
                                                    <AppBalancePageRatesTableOptionValue>{pack.value}<span> минут</span></AppBalancePageRatesTableOptionValue>
                                                    <AppBalancePageRatesTableOptionPrice>{pack.price}</AppBalancePageRatesTableOptionPrice>
                                                    {idx < basePackages.length - 1 && (
                                                        <AppBalancePageRatesTableOptionLine />
                                                    )}
                                                    <AppBalancePageRatesTableOptionIcon width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.6667 15L10.3333 15M19.6667 15L15.6667 19M19.6667 15L15.6667 11" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <rect x="1" y="1" width="28" height="28" rx="8" />
                                                    </AppBalancePageRatesTableOptionIcon>
                                                    <AppBalancePageRatesTableOptionBlockHidden className="hiddenProBlock" />
                                                </AppBalancePageRatesTableOptionBlock>
                                            );
                                        })}
                                    </AppBalancePageRatesTableOptionsContent>
                                </AppBalancePageRatesTableOptionsBlock>
                                <AppBalancePageRatesTableScrollbarTrack id="scrollbarTrack" className="proRateScrollbar">
                                    <AppBalancePageRatesTableScrollbarThumb id="optionsThumbSecond" />
                                </AppBalancePageRatesTableScrollbarTrack>
                            </AppBalancePageRatesTableOptionsWrapper>
                        </AppBalancePageRatesTable>
                    </AppBalancePageRatesTablesBlock>
                </AppBalancePageRatesBlock>
                <AppBalancePageRatesBlock>
                    <AppBalancePageRatesTitle>Корпоративные тарифы</AppBalancePageRatesTitle>
                    <AppBalancePageRatesTablesBlock>
                        <AppBalancePageRatesTable className="bottomBlock">
                            <AppBalancePageRatesTableBackgroundLayer />
                            <AppBalancePageRatesTableTitleBlock>
                                <AppBalancePageRatesTableTitleIcon alt="business" src="/images/business-rate-icon.svg" />
                                <AppBalancePageRatesTableTitleText>Бизнес</AppBalancePageRatesTableTitleText>
                            </AppBalancePageRatesTableTitleBlock>
                            <AppBalancePageRatesTableOverview>
                                Свяжитесь с нами и мы предложим специальные условия под ваши задачи
                            </AppBalancePageRatesTableOverview>
                            <AppBalancePageContactsLinkBlock>
                                <AppBalancePageTelegramLinkBlock to="">
                                    <AppBalancePageTelegramLinkIcon width="20" height="20" viewBox="0 0 20 20"><g clipPath="url(#a)">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.48 3.692a1.25 1.25 0 0 1 1.72 1.355L16.31 16.51c-.184 1.106-1.397 1.74-2.412 1.189a48.711 48.711 0 0 1-3.241-1.912c-.567-.37-2.303-1.558-2.09-2.403.184-.723 3.1-3.438 4.767-5.052.654-.634.356-1-.416-.416-1.92 1.448-4.999 3.65-6.017 4.27-.898.547-1.367.64-1.927.547-1.021-.17-1.969-.433-2.742-.754-1.045-.433-.994-1.87-.001-2.288l14.25-6Z" /></g><defs><clipPath id="a">
                                        <path d="M0 0h20v20H0z"/></clipPath></defs>
                                    </AppBalancePageTelegramLinkIcon>
                                </AppBalancePageTelegramLinkBlock>
                                <AppBalancePageEmailLinkBlock to="">
                                    <AppBalancePageEmailLinkIcon width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M1.667 5.833A3.333 3.333 0 0 1 5 2.5h10a3.333 3.333 0 0 1 3.333 3.333v8.334A3.333 3.333 0 0 1 15 17.5H5a3.333 3.333 0 0 1-3.333-3.333V5.833Z" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M4.48 6.32a.625.625 0 0 1 .867-.173l3.15 2.1c.91.607 2.096.607 3.005 0l3.151-2.1a.625.625 0 0 1 .694 1.04l-3.151 2.1a3.959 3.959 0 0 1-4.392 0l-3.15-2.1a.625.625 0 0 1-.174-.867Z" fill="#131520"/>
                                    </AppBalancePageEmailLinkIcon>
                                </AppBalancePageEmailLinkBlock>
                            </AppBalancePageContactsLinkBlock>
                        </AppBalancePageRatesTable>
                    </AppBalancePageRatesTablesBlock>
                </AppBalancePageRatesBlock>
                {purchaseModal}
                {customPurchaseModal}
                {paymentModal}
            </AppBalancePageBlock>
        </AppInterface>
    );
}

export default AppBalancePage;