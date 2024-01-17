import { FC } from "react";
import { ModalCloseButton, ModalCloseButtonIcon } from "components/Mixins/Mixins";

interface IClosable {
    onClose(): any;
}

export const ModalCloseComponent: FC<IClosable> = ({ onClose }) => {
    return (
        <ModalCloseButton onClick={onClose}>
            <ModalCloseButtonIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
            </ModalCloseButtonIcon>
        </ModalCloseButton>  
    );
}