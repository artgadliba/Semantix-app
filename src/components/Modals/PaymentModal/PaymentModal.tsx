import { FC } from "react";
import { 
    PaymentModalBlock,
    PaymentModalContent,
    PaymentModalBackgroundLayer,
    PaymentModalTitle,
    PaymentModalClose,
    PaymentModalCloseIcon,
    PaymentModalInstruction,
    PaymentModalOptionsBlock,
    PaymentModalOptionButton,
    PaymentModalOptionElementLogo,
    PaymentModalOptionElementTitle,
    PaymentModalOptionElementArrow,
    PaymentModalLine
} from "./PaymentModalStyles";
import ModalOutsideClose from "../ModalOutsideCloseBlockStyles";

interface IPaymentModal {
    onClose(): any;
}

const PaymentModal: FC<IPaymentModal> = ({onClose}) => {
    return (
        <PaymentModalBlock>
            <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
            <PaymentModalContent>
                <PaymentModalClose onClick={onClose}>
                    <PaymentModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </PaymentModalCloseIcon>
                </PaymentModalClose>
                <PaymentModalBackgroundLayer>
                    <PaymentModalTitle>Способ оплаты</PaymentModalTitle>
                    <PaymentModalInstruction>Выберите удобный для вас способ оплаты</PaymentModalInstruction>
                    <PaymentModalOptionsBlock>
                        <PaymentModalOptionButton>
                            <PaymentModalOptionElementLogo alt="U-kassa" src="/images/u-kassa.svg" />
                            <PaymentModalOptionElementTitle>ЮКасса</PaymentModalOptionElementTitle>
                            <PaymentModalOptionElementArrow width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke-linecap="round" stroke-linejoin="round"/>
                            </PaymentModalOptionElementArrow>
                        </PaymentModalOptionButton>
                        <PaymentModalOptionButton>
                            <PaymentModalOptionElementLogo alt="Cloudpayments" src="/images/cloud-payments.svg" />
                            <PaymentModalOptionElementTitle>Cloudpayments</PaymentModalOptionElementTitle>
                            <PaymentModalOptionElementArrow width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke-linecap="round" stroke-linejoin="round"/>
                            </PaymentModalOptionElementArrow>
                        </PaymentModalOptionButton>
                        <PaymentModalLine />
                        <PaymentModalOptionButton>
                            <PaymentModalOptionElementTitle>
                                Счет на оплату для ИП или юридических лиц
                            </PaymentModalOptionElementTitle>
                            <PaymentModalOptionElementArrow width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 6L15 12L9 18" stroke-linecap="round" stroke-linejoin="round"/>
                            </PaymentModalOptionElementArrow>
                        </PaymentModalOptionButton>
                    </PaymentModalOptionsBlock>
                </PaymentModalBackgroundLayer>
            </PaymentModalContent>
        </PaymentModalBlock>
    );
}

export default PaymentModal;