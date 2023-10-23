import { FC, useEffect, useState } from "react";
import { 
    CustomPurchaseModalBlock,
    CustomPurchaseModalContent,
    CustomPurchaseModalBackgroundLayer,
    CustomPurchaseModalTitle,
    CustomPurchaseModalLine,
    CustomPurchaseModalRateType,
    CustomPurchaseModalOptionBlock,
    CustomPurchaseModalOptionValue,
    CustomPurchaseModalOptionPrice,
    CustomPurchaseModalMainButton,
    CustomPurchaseModalClose,
    CustomPurchaseModalCloseIcon,
    CustomPurchaseModalSelectBlock,
    CustomPurchaseModalSelectRowBlock,
    CustomPurchaseModalSelectLabelMinutes,
    CustomPurchaseModalInputLabelRowWrapper,
    CustomPurchaseModalSelectTitleTotal,
    CustomPurchaseModalSelectComponent,
    CustomPurchaseModalInputField,
    CustomPurchaseModalSelectBackgroundLayer,
    CustomPurchaseModalSelectUpperButtonBlock,
    CustomPurchaseModalSelectLowerButtonBlock,
    CustomPurchaseModalSelectButtonIcon,
    CustomPurchaseModalTooltipButton,
    CustomPurchaseModalTooltipIcon,
    CustomPurchaseModalTooltipBlock,
    CustomPurchaseModalTooltipBlockText
} from "./CustomPurchaseModalStyles";
import { numberWithCommas } from "utils/numberWithCommas";
import ModalOutsideClose from "../ModalOutsideCloseBlockStyles";

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
            setMaxValue(11000);
            setTooltipText('Лимиты приобретения для "Базового" тарифа составляют: от 1000 до 11,000 минут');
        } else if (purchaseOption.rate === "Продвинутый") {
            setInputValue(11000);
            setMinValue(11000);
            setMaxValue(1000000000);
            setTooltipText('Лимиты приобретения для "Продвинутого" тарифа составляют: любое количество свыше 11,000 минут');
        }
    },[purchaseOption]);

    useEffect(() => {
        const price = inputValue * Number(purchaseOption.price.slice(0, -5));
        const formattedPrice = String(numberWithCommas(price)) + "₽";
        setTotalPrice(formattedPrice);
    },[inputValue]);

    const handleIncreaseInput = () => {
        if (inputValue + 1000 <= maxValue) {
            setInputValue(inputValue + 1000);
        }
    }
    const handleDecreaseInput = () => {
        if (inputValue - 1000 >= minValue) {
            setInputValue(inputValue - 1000);
        }
    }

    const showTip = () => {
        setTooltipActive(true);
      };
    
    const hideTip = () => {
        setTooltipActive(false);
    };

    return (
        <CustomPurchaseModalBlock>
            <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
            <CustomPurchaseModalContent>
                {tooltipActive === true && (
                    <CustomPurchaseModalTooltipBlock $type={purchaseOption.rate}>
                        <CustomPurchaseModalTooltipBlockText>
                            {tooltipText}
                        </CustomPurchaseModalTooltipBlockText>
                    </CustomPurchaseModalTooltipBlock>
                )}
                <CustomPurchaseModalClose onClick={onClose}>
                    <CustomPurchaseModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </CustomPurchaseModalCloseIcon>
                </CustomPurchaseModalClose>
                <CustomPurchaseModalBackgroundLayer>
                    <CustomPurchaseModalTitle>Оформление покупки</CustomPurchaseModalTitle>
                    <CustomPurchaseModalLine />
                    <CustomPurchaseModalRateType>{purchaseOption.rate}</CustomPurchaseModalRateType>
                    <CustomPurchaseModalOptionBlock>
                        <CustomPurchaseModalOptionValue>Любое количество<br className="mobile-break"></br><span>минут</span></CustomPurchaseModalOptionValue>
                        <CustomPurchaseModalOptionPrice>{purchaseOption.price}</CustomPurchaseModalOptionPrice>
                    </CustomPurchaseModalOptionBlock>
                    <CustomPurchaseModalLine />
                    <form onSubmit={() => { openPayModal(); onClose(); }}>
                        <CustomPurchaseModalSelectBlock>
                            <CustomPurchaseModalSelectRowBlock>
                                <CustomPurchaseModalInputLabelRowWrapper>
                                    <CustomPurchaseModalSelectLabelMinutes htmlFor="QuantityInput">
                                        Количество минут
                                    </CustomPurchaseModalSelectLabelMinutes>
                                    <CustomPurchaseModalTooltipButton 
                                        type="button"
                                        onMouseEnter={showTip} 
                                        onMouseLeave={hideTip}
                                        onClick={(e) => { e.preventDefault(); }}
                                    >
                                        <CustomPurchaseModalTooltipIcon width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9" cy="9" r="9" />
                                            <path d="M8.492 13.484V7.116H9.52v6.368H8.492ZM8.365 5.67V4.516h1.269V5.67H8.365Z" fill="#fff"/>
                                        </CustomPurchaseModalTooltipIcon>
                                    </CustomPurchaseModalTooltipButton>
                                </CustomPurchaseModalInputLabelRowWrapper>
                                <CustomPurchaseModalSelectTitleTotal>Итого</CustomPurchaseModalSelectTitleTotal>
                            </CustomPurchaseModalSelectRowBlock>
                            <CustomPurchaseModalSelectRowBlock>
                                <CustomPurchaseModalSelectComponent>
                                    <CustomPurchaseModalSelectBackgroundLayer>
                                        <CustomPurchaseModalInputField 
                                            type="number" 
                                            id="QuantityInput"
                                            min={minValue} 
                                            max={maxValue}
                                            value={inputValue}
                                            onChange={(e) => { setInputValue(Number(e.target.value)); }}
                                        />
                                        <CustomPurchaseModalSelectUpperButtonBlock onClick={handleIncreaseInput}>
                                            <CustomPurchaseModalSelectButtonIcon width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 0L9.33013 7.5H0.669873L5 0Z" />
                                            </CustomPurchaseModalSelectButtonIcon>
                                        </CustomPurchaseModalSelectUpperButtonBlock>
                                        <CustomPurchaseModalSelectLowerButtonBlock onClick={handleDecreaseInput}>
                                        <CustomPurchaseModalSelectButtonIcon width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 8L0.669873 0.5L9.33013 0.500001L5 8Z" />
                                        </CustomPurchaseModalSelectButtonIcon>
                                        </CustomPurchaseModalSelectLowerButtonBlock>
                                    </CustomPurchaseModalSelectBackgroundLayer>
                                </CustomPurchaseModalSelectComponent>
                                <CustomPurchaseModalOptionPrice className="lowerPriceBlock">{totalPrice}</CustomPurchaseModalOptionPrice>
                                <CustomPurchaseModalSelectRowBlock className="mobileBlock">
                                    <CustomPurchaseModalSelectTitleTotal className="mobileTotal">Итого</CustomPurchaseModalSelectTitleTotal>
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
                </CustomPurchaseModalBackgroundLayer>
            </CustomPurchaseModalContent>
        </CustomPurchaseModalBlock>
    );
}

export default CustomPurchaseModal;