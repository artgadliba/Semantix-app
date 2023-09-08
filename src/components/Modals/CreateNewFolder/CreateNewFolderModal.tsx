import { FC, SyntheticEvent, useState } from "react";
import { 
    CreateNewFolderModalBlock,
    CreateNewFolderModalContent,
    CreateNewFolderModalBackgroundLayer,
    CreateNewFolderModalTitle,
    CreateNewFolderModalInputBlock,
    CreateNewFolderModalInputTitle,
    CreateNewFolderModalInputComponent,
    CreateNewFolderModalInputBackgroundLayer,
    CreateNewFolderModalInputField,
    CreateNewFolderModalMainButton,
    CreateNewFolderModalClose,
    CreateNewFolderModalCloseIcon,
} from "./CreateNewFolderModalStyles";

interface ICreateNewFolderModal {
    onClose(): any;
}

const CreateNewFolderModal: FC<ICreateNewFolderModal> =  ({onClose}) => {    
    const togglePassword = (e: SyntheticEvent<HTMLElement>) => {
        const elem = document.querySelector("#psswd_input");
        const type = elem.getAttribute('type') === 'password' ? 'text' : 'password';
        elem.setAttribute('type', type);
    }
    return (
        <CreateNewFolderModalBlock onClick={onClose}>
            <CreateNewFolderModalContent onClick={(e) => e.stopPropagation()}>
                <CreateNewFolderModalClose onClick={onClose}>
                    <CreateNewFolderModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </CreateNewFolderModalCloseIcon>
                </CreateNewFolderModalClose>
                <CreateNewFolderModalBackgroundLayer />
                <CreateNewFolderModalTitle>Новая папка</CreateNewFolderModalTitle>
                <CreateNewFolderModalInputBlock>
                    <CreateNewFolderModalInputTitle>Имя папки</CreateNewFolderModalInputTitle>
                    <CreateNewFolderModalInputComponent>
                        <CreateNewFolderModalInputBackgroundLayer />
                        <CreateNewFolderModalInputField type="text" />
                    </CreateNewFolderModalInputComponent>
                </CreateNewFolderModalInputBlock>
                <CreateNewFolderModalMainButton>Добавить</CreateNewFolderModalMainButton>
            </CreateNewFolderModalContent>
        </CreateNewFolderModalBlock>
    );
}

export default CreateNewFolderModal;