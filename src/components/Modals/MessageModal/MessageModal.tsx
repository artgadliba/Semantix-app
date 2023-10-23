import { FC } from "react";
import { 
    MessageModalBlock,
    MessageModalContent,
    MessageModalBackgroundLayer,
    MessageModalIcon,
    MessageModalTitle,
    MessageModalText,
    MessageModalMainButton,
    MessageModalClose,
    MessageModalCloseIcon
} from "./MessageModalStyles";
import ModalOutsideClose from "../ModalOutsideCloseBlockStyles";

interface IMessageModal {
    onClose(): any;
    modalType: string;
    message?: string;
}

const MessageModal: FC<IMessageModal> = ({onClose, modalType, message}) => {
    if (modalType === "messageModal" && message) {
        return (
            <MessageModalBlock>
                <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                <MessageModalContent>
                    <MessageModalClose onClick={onClose}>
                        <MessageModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                        </MessageModalCloseIcon>
                    </MessageModalClose>
                    <MessageModalBackgroundLayer>
                        <MessageModalIcon alt="success" src="/images/success.svg" />
                        <MessageModalTitle>{message}</MessageModalTitle>
                        <MessageModalMainButton onClick={onClose}>Ок</MessageModalMainButton>
                    </MessageModalBackgroundLayer>
                </MessageModalContent>
            </MessageModalBlock>
        );
    } else if (modalType === "balanceUpdated") {
        return (
            <MessageModalBlock>
                <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                <MessageModalContent>
                    <MessageModalClose onClick={onClose}>
                        <MessageModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                        </MessageModalCloseIcon>
                    </MessageModalClose>
                    <MessageModalBackgroundLayer>
                        <MessageModalIcon alt="success" src="/images/success.svg" />
                        <MessageModalTitle>Пароль успешно изменен</MessageModalTitle>
                        <MessageModalText>
                            Ваш баланс пополнен на <span>10,000 минут</span>
                        </MessageModalText>
                        <MessageModalMainButton onClick={onClose}>Ок</MessageModalMainButton>
                    </MessageModalBackgroundLayer>
                </MessageModalContent>
            </MessageModalBlock>
        );
    }
}

export default MessageModal;