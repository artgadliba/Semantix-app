import { FC, useEffect, useState } from "react";
import {
    CustomPurchaseModalContent,
    CustomPurchaseModalTitle,
    CustomPurchaseModalLine,
    CustomPurchaseModalRateType,
    CustomPurchaseModalOptionBlock,
    CustomPurchaseModalOptionValue,
    CustomPurchaseModalOptionPrice,
    CustomPurchaseModalMainButton,
    CustomPurchaseModalSelectBlock,
    CustomPurchaseModalSelectRowBlock,
    CustomPurchaseModalSelectLabelMinutes,
    CustomPurchaseModalInputLabelRowWrapper,
    CustomPurchaseModalSelectTitleTotal,
    CustomPurchaseModalSelectComponent,
    CustomPurchaseModalInputField,
    CustomPurchaseModalInputActiveField,
    CustomPurchaseModalSelectBackgroundLayer,
    CustomPurchaseModalSelectUpperButtonBlock,
    CustomPurchaseModalSelectLowerButtonBlock,
    CustomPurchaseModalSelectButtonIcon,
    CustomPurchaseModalTooltipButton,
    CustomPurchaseModalTooltipBlock,
    CustomPurchaseModalTooltipBlockText
} from "./CustomPurchaseModalStyles";
import { ModalCloseComponent } from "components/ModalCloseComponent/ModalCloseComponent";
import { numberWithCommas } from "utils/numberWithCommas";
import { ModalOutsideClose, ModalExternalBlock, ModalBackgroundLayer } from "components/Mixins/Mixins";
import { TooltipIconSVG } from "components/SvgComponents/TooltipIconSVG";
import FocusTrap from "focus-trap-react";

interface ICustomPurchase {
    onClose(): any;
    openPayModal(): any;
    purchaseOption: {
        rate: string;
        value: string;
        price: string;
    }
}

const CustomPurchaseModal: FC<ICustomPurchase> = ({onClose, openPayModal, purchaseOption}) => {
    const [tooltipActive, setTooltipActive] = useState<boolean>(false);
    const [tooltipText, setTooltipText] = useState<string>(null);
    const [inputValue, setInputValue] = useState<number>();
    const [minValue, setMinValue] = useState<number>();
    const [maxValue, setMaxValue] = useState<number>();
    const [totalPrice, setTotalPrice] = useState<string>();

    useEffect(() => {
        if (purchaseOption.rate === "Базовый") {
            setInputValue(1000);
            setMinValue(1000);
            setMaxValue(100000);
            setTooltipText('Лимиты приобретения для "Базового" тарифа составляют: от 1,000 до 100,000 минут');
        } else if (purchaseOption.rate === "Продвинутый") {
            setInputValue(100000);
            setMinValue(100000);
            setMaxValue(1000000000);
            setTooltipText('Лимиты приобретения для "Продвинутого" тарифа составляют: любое количество свыше 100,000 минут');
        }
    },[purchaseOption]);

    useEffect(() => {
        const price = inputValue * Number(purchaseOption.price.slice(0, -5));
        const formattedPrice = String(numberWithCommas(price)) + "₽";
        setTotalPrice(formattedPrice);
    },[inputValue, purchaseOption]);

    const handleIncreaseInput = () => {
        if (inputValue + 1000 <= maxValue) {
            setInputValue(inputValue + 1000);
        }
    };
    const handleDecreaseInput = () => {
        if (inputValue - 1000 >= minValue) {
            setInputValue(inputValue - 1000);
        }
    };

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

    return (
        <FocusTrap focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
            <ModalExternalBlock>
                <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                <CustomPurchaseModalContent>
                    {tooltipActive === true && (
                        <CustomPurchaseModalTooltipBlock $type={purchaseOption.rate}>
                            <CustomPurchaseModalTooltipBlockText>
                                {tooltipText}
                            </CustomPurchaseModalTooltipBlockText>
                        </CustomPurchaseModalTooltipBlock>
                    )}
                    <ModalBackgroundLayer>
                        <CustomPurchaseModalTitle>Оформление покупки</CustomPurchaseModalTitle>
                        <CustomPurchaseModalLine />
                        <CustomPurchaseModalRateType>{purchaseOption.rate}</CustomPurchaseModalRateType>
                        <CustomPurchaseModalOptionBlock>
                            <CustomPurchaseModalOptionValue>Любое количество<br className="mobile_break"></br><span>минут</span></CustomPurchaseModalOptionValue>
                            <CustomPurchaseModalOptionPrice>{purchaseOption.price}</CustomPurchaseModalOptionPrice>
                        </CustomPurchaseModalOptionBlock>
                        <CustomPurchaseModalLine />
                        <form onSubmit={() => { openPayModal(); onClose(); }}>
                            <CustomPurchaseModalSelectBlock>
                                <CustomPurchaseModalSelectRowBlock>
                                    <CustomPurchaseModalInputLabelRowWrapper>
                                        <CustomPurchaseModalSelectLabelMinutes htmlFor="quantity_input">
                                            Количество минут
                                        </CustomPurchaseModalSelectLabelMinutes>
                                        <CustomPurchaseModalTooltipButton 
                                            type="button"
                                            onMouseEnter={showTip} 
                                            onMouseLeave={hideTip}
                                            onClick={(e) => { e.preventDefault(); showTipOnClick(); }}
                                        >
                                            <TooltipIconSVG />
                                        </CustomPurchaseModalTooltipButton>
                                    </CustomPurchaseModalInputLabelRowWrapper>
                                    <CustomPurchaseModalSelectTitleTotal>Итого</CustomPurchaseModalSelectTitleTotal>
                                </CustomPurchaseModalSelectRowBlock>
                                <CustomPurchaseModalSelectRowBlock>
                                    <CustomPurchaseModalSelectComponent>
                                        <CustomPurchaseModalSelectBackgroundLayer>
                                            <CustomPurchaseModalInputField 
                                                type="number" 
                                                id="quantity_input"
                                                min={minValue} 
                                                max={maxValue}
                                                value={inputValue}
                                                onChange={(e) => { setInputValue(Number(e.target.value)); }}
                                            />
                                            <CustomPurchaseModalInputActiveField />
                                            <CustomPurchaseModalSelectUpperButtonBlock 
                                                type="button" 
                                                onClick={handleIncreaseInput}
                                            >
                                                <CustomPurchaseModalSelectButtonIcon width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 0L9.33013 7.5H0.669873L5 0Z" />
                                                </CustomPurchaseModalSelectButtonIcon>
                                            </CustomPurchaseModalSelectUpperButtonBlock>
                                            <CustomPurchaseModalSelectLowerButtonBlock 
                                                type="button" 
                                                onClick={handleDecreaseInput}
                                            >
                                                <CustomPurchaseModalSelectButtonIcon width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5 8L0.669873 0.5L9.33013 0.500001L5 8Z" />
                                                </CustomPurchaseModalSelectButtonIcon>
                                            </CustomPurchaseModalSelectLowerButtonBlock>
                                        </CustomPurchaseModalSelectBackgroundLayer>
                                    </CustomPurchaseModalSelectComponent>
                                    <CustomPurchaseModalOptionPrice className="lower_price_block">{totalPrice}</CustomPurchaseModalOptionPrice>
                                    <CustomPurchaseModalSelectRowBlock className="mobile_block">
                                        <CustomPurchaseModalSelectTitleTotal className="mobile_total">Итого</CustomPurchaseModalSelectTitleTotal>
                                        <CustomPurchaseModalOptionPrice>{totalPrice}</CustomPurchaseModalOptionPrice>
                                    </CustomPurchaseModalSelectRowBlock>
                                </CustomPurchaseModalSelectRowBlock>
                            </CustomPurchaseModalSelectBlock>
                            <CustomPurchaseModalLine />
                            <CustomPurchaseModalMainButton
                                disabled={inputValue < minValue || inputValue > maxValue}
                                type="submit"
                            >
                                Купить</CustomPurchaseModalMainButton>
                        </form>
                    </ModalBackgroundLayer>
                    <ModalCloseComponent onClose={onClose} />
                </CustomPurchaseModalContent>
            </ModalExternalBlock>
        </FocusTrap>
    );
}

export default CustomPurchaseModal;