import { FC } from "react";
import { 
    PurchaseModalBlock,
    PurchaseModalContent,
    PurchaseModalBackgroundLayer,
    PurchaseModalTitle,
    PurchaseModalLine,
    PurchaseModalRateType,
    PurchaseModalOptionBlock,
    PurchaseModalOptionValue,
    PurchaseModalOptionPrice,
    PurchaseModalMainButton,
    PurchaseModalClose,
    PurchaseModalCloseIcon
} from "./PurchaseModalStyles";
import ModalOutsideClose from "../ModalOutsideCloseBlockStyles";

interface IPurchaseModal {
    onClose(): any;
    openPayModal(): any;
    purchaseOption: {
        rate: string;
        value: string;
        price: string;
    }
}

const PurchaseModal: FC<IPurchaseModal> = ({onClose, openPayModal, purchaseOption}) => {
    return (
        <PurchaseModalBlock>
            <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
            <PurchaseModalContent>
                <PurchaseModalClose onClick={onClose}>
                    <PurchaseModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </PurchaseModalCloseIcon>
                </PurchaseModalClose>
                <PurchaseModalBackgroundLayer>
                    <PurchaseModalTitle>Оформление покупки</PurchaseModalTitle>
                    <PurchaseModalLine />
                    <PurchaseModalRateType>{purchaseOption.rate}</PurchaseModalRateType>
                    <PurchaseModalOptionBlock>
                        <PurchaseModalOptionValue>{purchaseOption.value} <span>мин</span></PurchaseModalOptionValue>
                        <PurchaseModalOptionPrice>{purchaseOption.price}</PurchaseModalOptionPrice>
                    </PurchaseModalOptionBlock>
                    <PurchaseModalLine />
                    <form onSubmit={() => { openPayModal(); onClose(); }}>
                        <PurchaseModalMainButton type="submit">Купить</PurchaseModalMainButton> 
                    </form>
                </PurchaseModalBackgroundLayer>
            </PurchaseModalContent>
        </PurchaseModalBlock>
    );
}

export default PurchaseModal;