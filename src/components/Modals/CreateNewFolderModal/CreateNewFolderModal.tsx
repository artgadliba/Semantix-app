import { FC, useState } from "react";
import { 
    CreateNewFolderModalBlock,
    CreateNewFolderModalContent,
    CreateNewFolderModalBackgroundLayer,
    CreateNewFolderModalTitle,
    CreateNewFolderModalInputBlock,
    CreateNewFolderModalInputLabel,
    CreateNewFolderModalInputLabelRowWrapper,
    CreateNewFolderModalInputComponent,
    CreateNewFolderModalInputBackgroundLayer,
    CreateNewFolderModalInputField,
    CreateNewFolderModalMainButton,
    CreateNewFolderModalClose,
    CreateNewFolderModalCloseIcon,
    CreateNewFolderModalTooltipButton,
    CreateNewFolderModalTooltipIcon,
    CreateNewFolderModalTooltipBlock,
    CreateNewFolderModalTooltipBlockText,
    CreateNewFolderModalBottomError
} from "./CreateNewFolderModalStyles";
import ModalOutsideClose from "../ModalOutsideCloseBlockStyles";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUpdateFolderList } from "slices/updateFolderListSlice";

interface ICreateNewFolderModal {
    onClose(): any;
    setCurrentFolderName?: (name: string) => void;
}

const CreateNewFolderModal: FC<ICreateNewFolderModal> =  ({onClose, setCurrentFolderName}) => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState<string>(null);
    const [errorMessage, setErrorMessage] = useState<string>(null);
    const [tooltipActive, setTooltipActive] = useState<boolean>(false);
    
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(event.target.value.trim());
    }

    const showTip = () => {
        setTooltipActive(true);
      };
    
    const hideTip = () => {
        setTooltipActive(false);
    };

    const handleCreateFolder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        var folders = JSON.parse(localStorage.getItem("folders"));
        if (!folders) {
            folders = [];
        }
        axios.post("/api/folders/new", {
            id: 0,
            name: inputData
        }, {
            headers: {
                "Jwt-Tokens": localStorage.getItem("jwt-tokens")
            }
        })
        .then((res) => {
            if (res.headers && "jwt-tokens" in res.headers) {
                localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
            }
            folders.push(res.data);
            localStorage.setItem("folders", JSON.stringify(folders));
            if (setCurrentFolderName) {
                setCurrentFolderName(inputData);
            }
            dispatch(setUpdateFolderList(true));
            onClose();
        })
        .catch((err) => {
            if (err.response.data.includes("Имя папки")) {
                setErrorMessage("Указанное имя папки имеет неправильный формат");
            } else if (err.response.data.includes("Максимальное кол-во")) {
                setErrorMessage("Превышен лимит создания новых папок");
            } else if (err.response.data.includes("Error 1062 (23000)")) {
                setErrorMessage("Папка с таким именем уже существует");
            }
            console.log(err);
        })
    }

    const handleDeleteFolder = () => {
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
                axios.post("/api/folders/delete", {
                    id: res.data[0].id,
                    name: res.data[0].name
                }, {
                    headers: {
                        "Jwt-Tokens": localStorage.getItem("jwt-tokens")
                    }
                })
                .then((res) => {
                    var folders = JSON.parse(localStorage.getItem("folders"));
                    if (res.headers && "jwt-tokens" in res.headers) {
                        localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
                    }
                    folders.shift();
                    localStorage.setItem("folders", JSON.stringify(folders));
                    onClose();
                })
                .catch((err) => {
                    if (err.headers && "jwt-tokens" in err.headers) {
                        localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                    }
                    console.log(err);
                })
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
        <CreateNewFolderModalBlock>
            <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
            <CreateNewFolderModalContent>
                {tooltipActive === true && (
                    <CreateNewFolderModalTooltipBlock>
                        <CreateNewFolderModalTooltipBlockText>
                            Имя папки должно быть длинной от 1 до 50 символов
                        </CreateNewFolderModalTooltipBlockText>
                    </CreateNewFolderModalTooltipBlock>
                )}
                <CreateNewFolderModalClose onClick={onClose}>
                    <CreateNewFolderModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </CreateNewFolderModalCloseIcon>
                </CreateNewFolderModalClose>
                <CreateNewFolderModalBackgroundLayer>
                    <CreateNewFolderModalTitle>Новая папка</CreateNewFolderModalTitle>
                    <form onSubmit={(e) => { handleCreateFolder(e); }}>
                        <CreateNewFolderModalInputBlock>
                            <CreateNewFolderModalInputLabelRowWrapper>
                                <CreateNewFolderModalInputLabel htmlFor="NewFolderInput">Имя папки</CreateNewFolderModalInputLabel>
                                <CreateNewFolderModalTooltipButton 
                                    onMouseEnter={showTip} 
                                    onMouseLeave={hideTip}
                                    onClick={(e) => { e.preventDefault(); }}
                                >
                                    <CreateNewFolderModalTooltipIcon width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9" cy="9" r="9" />
                                        <path d="M8.492 13.484V7.116H9.52v6.368H8.492ZM8.365 5.67V4.516h1.269V5.67H8.365Z" fill="#fff"/>
                                    </CreateNewFolderModalTooltipIcon>
                                </CreateNewFolderModalTooltipButton>
                            </CreateNewFolderModalInputLabelRowWrapper>
                            <CreateNewFolderModalInputComponent>
                                <CreateNewFolderModalInputBackgroundLayer>
                                    <CreateNewFolderModalInputField type="text" id="NewFolderInput" onChange={(e) => {handleInput(e)}} />
                                </CreateNewFolderModalInputBackgroundLayer>
                            </CreateNewFolderModalInputComponent>
                        </CreateNewFolderModalInputBlock>
                        <CreateNewFolderModalMainButton 
                            disabled={!inputData}
                            type="submit"
                        >
                            Добавить
                        </CreateNewFolderModalMainButton>
                    </form>
                    {errorMessage && (
                        <CreateNewFolderModalBottomError>{errorMessage}</CreateNewFolderModalBottomError>
                    )}
                </CreateNewFolderModalBackgroundLayer>
            </CreateNewFolderModalContent>
        </CreateNewFolderModalBlock>
    );
}

export default CreateNewFolderModal;