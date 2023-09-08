import { FC, SyntheticEvent, useState } from "react";
import { 
    NewFileFolderModalBlock,
    NewFileFolderModalContent,
    NewFileFolderModalBackgroundLayer,
    NewFileFolderModalTitle,
    NewFileFolderModalSelectBlock,
    NewFileFolderModalSelectTitle,
    NewFileFolderModalSelectComponent,
    NewFileFolderModalSelectBackgroundLayer,
    NewFileFolderModalInputField,
    NewFileFolderModalMainButton,
    NewFileFolderModalClose,
    NewFileFolderModalCloseIcon,
    NewFileFolderModalInstruction,
    NewFileFolderModalMenuButton,
    NewFileFolderModalMenuButtonIcon
} from "./NewFileFolderModalStyles";
import LargeComboBox from "components/LargeComboBox/LargeComboBox";
import useModal from "hooks/useModal";
import UploadNewFileModal from "../UploadNewFileModal/UploadNewFileModal";

interface INewFileFolderModal {
    onClose(): any;
    openNewFolderModal?: () => void;
    folders?: {
        folderName: string;
    }[];
}

const NewFileFolderModal: FC<INewFileFolderModal> =  ({onClose, openNewFolderModal, folders}) => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [option, setOption] = useState<string>("");

    const {
        closeModal: closeModal,
        openModal: openModal,
        modal: uploadNewFileModal
    } = useModal(UploadNewFileModal, {option});

    const items = [
        {
            option: "Папка 1"
        },
        {
            option: "Папка 2"
        },
        {
            option: "Папка 3"
        },
    ];

    const toggleMenuActive = () => {
        setMenuActive(current => !current);
    }
    return (
        <NewFileFolderModalBlock onClick={onClose}>
            <NewFileFolderModalContent onClick={(e) => e.stopPropagation()}>
                <NewFileFolderModalClose onClick={onClose}>
                    <NewFileFolderModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </NewFileFolderModalCloseIcon>
                </NewFileFolderModalClose>
                <NewFileFolderModalBackgroundLayer />
                <NewFileFolderModalTitle>Новый файл</NewFileFolderModalTitle>
                <NewFileFolderModalInstruction>Выберите папку, в которой будет храниться файл</NewFileFolderModalInstruction>
                <NewFileFolderModalSelectBlock>
                    <NewFileFolderModalSelectTitle>Выбор папки</NewFileFolderModalSelectTitle>
                    <NewFileFolderModalSelectComponent>
                        <NewFileFolderModalSelectBackgroundLayer />
                        <NewFileFolderModalInputField type="text" disabled value={option}/>
                        <NewFileFolderModalMenuButton onClick={toggleMenuActive}>
                            {menuActive == true ? (
                                <NewFileFolderModalMenuButtonIcon alt="open" src="/images/folders-opened.svg" />
                            ) : (
                                <NewFileFolderModalMenuButtonIcon alt="open" src="/images/folders-closed.svg" />
                            )}
                        </NewFileFolderModalMenuButton>
                    </NewFileFolderModalSelectComponent>
                    {menuActive == true && (
                        <LargeComboBox 
                            addFolderActive={true} 
                            setOption={setOption} 
                            setMenuActive={setMenuActive}
                            openNewFolderModal={openNewFolderModal}
                            isActive={menuActive} 
                            items={items}
                        />
                    )}
                </NewFileFolderModalSelectBlock>
                <NewFileFolderModalMainButton onClick={openModal}>Далее</NewFileFolderModalMainButton>
            </NewFileFolderModalContent>
            {uploadNewFileModal}
        </NewFileFolderModalBlock>
    );
}

export default NewFileFolderModal;