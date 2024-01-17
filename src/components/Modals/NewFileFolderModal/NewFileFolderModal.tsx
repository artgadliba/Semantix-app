import { FC, useEffect, useState } from "react";
import {
    NewFileFolderModalContent,
    NewFileFolderModalTitle,
    NewFileFolderModalSelectBlock,
    NewFileFolderModalSelectLabel,
    NewFileFolderModalSelectComponent,
    NewFileFolderModalSelectBackgroundLayer,
    NewFileFolderModalInputField,
    NewFileFolderModalMainButton,
    NewFileFolderModalInstruction,
    NewFileFolderModalMenuButton,
    NewFileFolderModalMenuButtonIcon
} from "./NewFileFolderModalStyles";
import { ModalCloseComponent } from "components/ModalCloseComponent/ModalCloseComponent";
import LargeComboBox from "components/LargeComboBox/LargeComboBox";
import { ModalOutsideClose, ModalExternalBlock, ModalBackgroundLayer } from "components/Mixins/Mixins";
import axios from "axios";
import FocusTrap from "focus-trap-react";
import { useSelector, useDispatch } from "react-redux";
import { setUploadFolder } from "slices/uploadFolderSlice";
import { RootState } from "slices";

interface IAppFolderObj {
    id: number;
    name: string;
}

interface INewFileFolderModal {
    onClose(): any;
    openNewFolderModal?: () => void;
    openNewFileModal(): any;
}

const NewFileFolderModal: FC<INewFileFolderModal> =  ({onClose, openNewFolderModal, openNewFileModal}) => {
    const dispatch = useDispatch();
    const [folderList, setFolderList] = useState<Array<IAppFolderObj>>([]);
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const folder = useSelector((state: RootState) => state.uploadFolder.value);

    useEffect(() => {
        if (folder) {
            setMenuActive(false);
        }
    }, [folder]);

    useEffect(() => {
        handleRequestUserFolders();
    },[]);

    const toggleMenuActive = () => {
        setMenuActive(current => !current);
    }

    const handleRequestUserFolders = () => {
        if (localStorage.getItem("jwt-tokens")) {
            axios.get("/api/folders/0,0", {
                headers: {
                    "jwt-tokens": localStorage.getItem("jwt-tokens")
                }
            })
            .then((res) => {
                if (res.headers && "jwt-tokens" in res.headers) {
                    localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
                }
                const list = res.data;
                if (list) {
                    setFolderList(list);
                }
            })
            .catch((err) => {
                if (err.headers && "jwt-tokens" in err.headers) {
                    localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                }
                console.log(err);
            })
        }
    }

    return (
        <FocusTrap focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
            <ModalExternalBlock>
                <ModalOutsideClose onClick={() => { dispatch(setUploadFolder(null)); onClose(); }}>
                </ModalOutsideClose>
                <NewFileFolderModalContent>
                    <ModalBackgroundLayer>
                        <form onSubmit={() => { onClose(); openNewFileModal(); }}>
                            <NewFileFolderModalTitle>Новый файл</NewFileFolderModalTitle>
                            <NewFileFolderModalInstruction>
                                Выберите папку, в которой будет храниться файл
                            </NewFileFolderModalInstruction>
                            <NewFileFolderModalSelectBlock>
                                <NewFileFolderModalSelectLabel htmlFor="folder_input">
                                    Выбор папки
                                </NewFileFolderModalSelectLabel>
                                <NewFileFolderModalSelectComponent>
                                    <NewFileFolderModalSelectBackgroundLayer>
                                        <NewFileFolderModalInputField 
                                            id="folder_input" 
                                            type="text"
                                            disabled value={folder ? folder.name : ""}
                                        />
                                        <NewFileFolderModalMenuButton 
                                            type="button" 
                                            onClick={() => { handleRequestUserFolders(); toggleMenuActive(); }}
                                        >
                                            <NewFileFolderModalMenuButtonIcon 
                                                alt="icon" 
                                                src={menuActive ? "/images/folders-opened.svg" : "/images/folders-closed.svg"}
                                            />
                                        </NewFileFolderModalMenuButton>
                                    </NewFileFolderModalSelectBackgroundLayer>
                                </NewFileFolderModalSelectComponent>
                                {menuActive === true && (
                                    <LargeComboBox 
                                        addFolderActive={true}
                                        setMenuActive={setMenuActive}
                                        openNewFolderModal={openNewFolderModal}
                                        items={folderList}
                                    />
                                )}
                            </NewFileFolderModalSelectBlock>
                            <NewFileFolderModalMainButton 
                                disabled={!folder}
                                type="submit"
                            >
                                Далее
                            </NewFileFolderModalMainButton>
                        </form>
                    </ModalBackgroundLayer>
                    <ModalCloseComponent onClose={onClose} />
                </NewFileFolderModalContent>
            </ModalExternalBlock>
        </FocusTrap>
    );
}

export default NewFileFolderModal;