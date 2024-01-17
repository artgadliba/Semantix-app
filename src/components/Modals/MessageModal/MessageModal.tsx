import { FC } from "react";
import {
    MessageModalContent,
    MessageModalBackgroundLayer,
    MessageModalIcon,
    MessageModalTitle,
    MessageModalText,
    MessageModalMainButton
} from "./MessageModalStyles";
import { ModalCloseComponent } from "components/ModalCloseComponent/ModalCloseComponent";
import { ModalOutsideClose, ModalExternalBlock } from "components/Mixins/Mixins";
import FocusTrap from "focus-trap-react";

interface IMessageModal {
    onClose(): any;
    modalType: string;
    message?: string;
}

const MessageModal: FC<IMessageModal> = ({onClose, modalType, message}) => {
    if (modalType === "messageModal" && message) {
        return (
            <FocusTrap focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
                <ModalExternalBlock>
                    <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                    <MessageModalContent>
                        <MessageModalBackgroundLayer>
                            <MessageModalIcon alt="success" src="/images/success.svg" />
                            <MessageModalTitle>{message}</MessageModalTitle>
                            <MessageModalMainButton onClick={onClose}>Ок</MessageModalMainButton>
                        </MessageModalBackgroundLayer>
                        <ModalCloseComponent onClose={onClose} />
                    </MessageModalContent>
                </ModalExternalBlock>
            </FocusTrap>
        );
    } else if (modalType === "balanceUpdated") {
        return (
            <FocusTrap focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
                <ModalExternalBlock>
                    <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                    <MessageModalContent>
                        <MessageModalBackgroundLayer>
                            <MessageModalIcon alt="success" src="/images/success.svg" />
                            <MessageModalTitle>Пароль успешно изменен</MessageModalTitle>
                            <MessageModalText>
                                Ваш баланс пополнен на <span>10,000 минут</span>
                            </MessageModalText>
                            <MessageModalMainButton onClick={onClose}>Ок</MessageModalMainButton>
                        </MessageModalBackgroundLayer>
                        <ModalCloseComponent onClose={onClose} />
                    </MessageModalContent>
                </ModalExternalBlock>
            </FocusTrap>
        );
    }
}

export default MessageModal;