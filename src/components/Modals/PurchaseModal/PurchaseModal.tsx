import { FC } from "react";
import {
    PurchaseModalContent,
    PurchaseModalTitle,
    PurchaseModalLine,
    PurchaseModalRateType,
    PurchaseModalOptionBlock,
    PurchaseModalOptionValue,
    PurchaseModalOptionPrice,
    PurchaseModalMainButton
} from "./PurchaseModalStyles";
import { ModalCloseComponent } from "components/ModalCloseComponent/ModalCloseComponent";
import { ModalOutsideClose, ModalExternalBlock, ModalBackgroundLayer } from "components/Mixins/Mixins";
import FocusTrap from "focus-trap-react";

interface IPurchaseModal {
    onClose: () => void;
    openPayModal(): any;
    purchaseOption: {
        rate: string;
        value: string;
        price: string;
    }
}

const PurchaseModal: FC<IPurchaseModal> = ({onClose, openPayModal, purchaseOption}) => {
    return (
        <FocusTrap focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
            <ModalExternalBlock>
                <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                <PurchaseModalContent>
                    <ModalBackgroundLayer>
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
                    </ModalBackgroundLayer>
                    <ModalCloseComponent onClose={onClose} />
                </PurchaseModalContent>
            </ModalExternalBlock>
        </FocusTrap>
    );
}

export default PurchaseModal;