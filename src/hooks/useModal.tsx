import React, { ComponentType, useState } from "react";
import { createPortal } from "react-dom";

interface IClosable {
    onClose: () => any;
}

function useModal<T extends IClosable>(modal: React.ComponentType<T>, props: Omit<T, "onClose">) {
    const [isOpen, setIsOpen] = useState(false);

    function closeModal(): void {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
    }

    function openModal(): void {
        setIsOpen(true);
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

    const componentProps = { ...props, onClose: closeModal } as T;

    const ModalComponent: ComponentType<T> = modal;

    const modalElement = createPortal(
        isOpen && 
        <ModalComponent {...componentProps} />, document.querySelector(".modal") as HTMLElement);

    return {
        closeModal,
        openModal,
        modal: modalElement,
    };
}

export default useModal;
