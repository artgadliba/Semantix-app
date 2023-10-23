import { FC, useEffect, useState } from "react";
import { 
    NewFileFolderModalBlock,
    NewFileFolderModalContent,
    NewFileFolderModalBackgroundLayer,
    NewFileFolderModalLabel,
    NewFileFolderModalSelectBlock,
    NewFileFolderModalSelectLabel,
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
import ModalOutsideClose from "../ModalOutsideCloseBlockStyles";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "slices";
import { setUpdateFolderList } from "slices/updateFolderListSlice";

interface IAppFolderObj {
    id: number;
    name: string;
}

interface INewFileFolderModal {
    onClose(): any;
    openNewFolderModal?: () => void;
    setCurrentFolder:(folder: IAppFolderObj) => any;
    openNewFileModal(): any;
    currentFolderName: string;
}

const NewFileFolderModal: FC<INewFileFolderModal> =  (props) => {
    const {onClose, openNewFolderModal, setCurrentFolder, openNewFileModal, currentFolderName} = props;
    const dispatch = useDispatch();
    const updateFolderList = useSelector((state: RootState) => state.updateFolderList.value);
    const [folderList, setFolderList] = useState<Array<IAppFolderObj>>([]);
    const [menuActive, setMenuActive] = useState<boolean>(false);

    const toggleMenuActive = () => {
        setMenuActive(current => !current);
    }

    useEffect(() => {
        if (currentFolderName) {
            setMenuActive(false);
        }
    }, [currentFolderName]);

    useEffect(() => {
        if (updateFolderList === true) {
            const list = JSON.parse(localStorage.getItem("folders"));
            if (list) {
                setFolderList(list);
                dispatch(setUpdateFolderList(false));
            }
        }
    }, [updateFolderList]);

    useEffect(() => {
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
                localStorage.setItem("folders", JSON.stringify(list));
            })
            .catch((err) => {
                if (err.headers && "jwt-tokens" in err.headers) {
                    localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                }
                console.log(err);
            })
        }
    },[]);

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem("folders"));
        if (list) {
            setFolderList(list);
        }
    }, []);
    
    return (
        <NewFileFolderModalBlock>
            <ModalOutsideClose onClick={() => { onClose(); setCurrentFolder(null); }}></ModalOutsideClose>
            <NewFileFolderModalContent>
                <NewFileFolderModalClose onClick={() => { onClose(); setCurrentFolder(null); }}>
                    <NewFileFolderModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </NewFileFolderModalCloseIcon>
                </NewFileFolderModalClose>
                <NewFileFolderModalBackgroundLayer>
                    <form onSubmit={() => { onClose(); openNewFileModal(); }}>
                        <NewFileFolderModalLabel htmlFor="FolderInput">Новый файл</NewFileFolderModalLabel>
                        <NewFileFolderModalInstruction>Выберите папку, в которой будет храниться файл</NewFileFolderModalInstruction>
                        <NewFileFolderModalSelectBlock>
                            <NewFileFolderModalSelectLabel>Выбор папки</NewFileFolderModalSelectLabel>
                            <NewFileFolderModalSelectComponent>
                                <NewFileFolderModalSelectBackgroundLayer>
                                    <NewFileFolderModalInputField 
                                        id="FolderInput" 
                                        type="text"
                                        disabled value={currentFolderName}
                                    />
                                    <NewFileFolderModalMenuButton onClick={toggleMenuActive}>
                                        {menuActive === true ? (
                                            <NewFileFolderModalMenuButtonIcon alt="open" src="/images/folders-opened.svg" />
                                        ) : (
                                            <NewFileFolderModalMenuButtonIcon alt="open" src="/images/folders-closed.svg" />
                                        )}
                                    </NewFileFolderModalMenuButton>
                                </NewFileFolderModalSelectBackgroundLayer>
                            </NewFileFolderModalSelectComponent>
                            {menuActive === true && (
                                <LargeComboBox 
                                    addFolderActive={true}
                                    setCurrentFolder={setCurrentFolder}
                                    setMenuActive={setMenuActive}
                                    openNewFolderModal={openNewFolderModal}
                                    items={folderList}
                                />
                            )}
                        </NewFileFolderModalSelectBlock>
                        <NewFileFolderModalMainButton 
                            disabled={currentFolderName == undefined} 
                            type="submit"
                        >
                            Далее
                        </NewFileFolderModalMainButton>
                    </form>
                </NewFileFolderModalBackgroundLayer>
            </NewFileFolderModalContent>
        </NewFileFolderModalBlock>
    );
}

export default NewFileFolderModal;