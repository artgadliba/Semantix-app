import { FC } from "react";
import {
    PaymentModalContent,
    PaymentModalTitle,
    PaymentModalInstruction,
    PaymentModalOptionsBlock,
    PaymentModalOptionButton,
    PaymentModalOptionElementLogo,
    PaymentModalOptionElementTitle,
    PaymentModalOptionElementArrow,
    PaymentModalLine
} from "./PaymentModalStyles";
import { ModalCloseComponent } from "components/ModalCloseComponent/ModalCloseComponent";
import { ModalOutsideClose, ModalExternalBlock, ModalBackgroundLayer } from "components/Mixins/Mixins";
import FocusTrap from "focus-trap-react";

interface IPaymentModal {
    onClose: () => void;
}

const PaymentModal: FC<IPaymentModal> = ({onClose}) => {
    return (
        <FocusTrap focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
            <ModalExternalBlock>
                <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                <PaymentModalContent>
                    <ModalBackgroundLayer>
                        <PaymentModalTitle>Способ оплаты</PaymentModalTitle>
                        <PaymentModalInstruction>Выберите удобный для вас способ оплаты</PaymentModalInstruction>
                        <PaymentModalOptionsBlock>
                            <PaymentModalOptionButton>
                                <PaymentModalOptionElementLogo alt="U-kassa" src="/images/u-kassa.svg" />
                                <PaymentModalOptionElementTitle>ЮКасса</PaymentModalOptionElementTitle>
                                <PaymentModalOptionElementArrow width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" strokeLinecap="round" strokeLinejoin="round"/>
                                </PaymentModalOptionElementArrow>
                            </PaymentModalOptionButton>
                            <PaymentModalOptionButton>
                                <PaymentModalOptionElementLogo alt="Cloudpayments" src="/images/cloud-payments.svg" />
                                <PaymentModalOptionElementTitle>Cloudpayments</PaymentModalOptionElementTitle>
                                <PaymentModalOptionElementArrow width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" strokeLinecap="round" strokeLinejoin="round"/>
                                </PaymentModalOptionElementArrow>
                            </PaymentModalOptionButton>
                            <PaymentModalLine />
                            <PaymentModalOptionButton>
                                <PaymentModalOptionElementTitle>
                                    Счет на оплату для ИП или юридических лиц
                                </PaymentModalOptionElementTitle>
                                <PaymentModalOptionElementArrow width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 6L15 12L9 18" strokeLinecap="round" strokeLinejoin="round"/>
                                </PaymentModalOptionElementArrow>
                            </PaymentModalOptionButton>
                        </PaymentModalOptionsBlock>
                    </ModalBackgroundLayer>
                    <ModalCloseComponent onClose={onClose} />
                </PaymentModalContent>
            </ModalExternalBlock>
        </FocusTrap>
    );
}

export default PaymentModal;