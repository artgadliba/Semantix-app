import { FC, useState } from "react";
import {
    CreateNewFolderModalContent,
    CreateNewFolderModalTitle,
    CreateNewFolderModalInputBlock,
    CreateNewFolderModalInputLabel,
    CreateNewFolderModalInputLabelRowWrapper,
    CreateNewFolderModalInputComponent,
    CreateNewFolderModalInputBackgroundLayer,
    CreateNewFolderModalInputField,
    CreateNewFolderModalInputActiveField,
    CreateNewFolderModalMainButton,
    CreateNewFolderModalTooltipButton,
    CreateNewFolderModalTooltipBlock,
    CreateNewFolderModalTooltipBlockText,
    CreateNewFolderModalBottomError
} from "./CreateNewFolderModalStyles";
import { ModalCloseComponent } from "components/ModalCloseComponent/ModalCloseComponent";
import { ModalOutsideClose, ModalExternalBlock, ModalBackgroundLayer } from "components/Mixins/Mixins";
import { TooltipIconSVG } from "components/SvgComponents/TooltipIconSVG";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUpdateFolderList } from "slices/updateFolderListSlice";
import FocusTrap from "focus-trap-react";

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
    };

    const showTipOnClick = () => {
        setTooltipActive(true);
        setTimeout(() => {
            hideTip();
        }, 5000);
    };

    const showTip = () => {
        setTooltipActive(true);
    };
    
    const hideTip = () => {
        setTooltipActive(false);
    };

    const handleCreateFolder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
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
            if (setCurrentFolderName) {
                setCurrentFolderName(inputData);
            }
            dispatch(setUpdateFolderList());
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
                    let folders = JSON.parse(localStorage.getItem("folders"));
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
        <FocusTrap focusTrapOptions={{ initialFocus: false }}>
            <ModalExternalBlock>
                <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                <CreateNewFolderModalContent>
                    {tooltipActive === true && (
                        <CreateNewFolderModalTooltipBlock>
                            <CreateNewFolderModalTooltipBlockText>
                                Имя папки должно быть длинной от 1 до 50 символов
                            </CreateNewFolderModalTooltipBlockText>
                        </CreateNewFolderModalTooltipBlock>
                    )}
                    <ModalBackgroundLayer>
                        <CreateNewFolderModalTitle>Новая папка</CreateNewFolderModalTitle>
                        <form onSubmit={(e) => { handleCreateFolder(e); }}>
                            <CreateNewFolderModalInputBlock>
                                <CreateNewFolderModalInputLabelRowWrapper>
                                    <CreateNewFolderModalInputLabel htmlFor="new_folder_input">Имя папки</CreateNewFolderModalInputLabel>
                                    <CreateNewFolderModalTooltipButton 
                                        onMouseEnter={showTip} 
                                        onMouseLeave={hideTip}
                                        onClick={(e) => { e.preventDefault(); showTipOnClick(); }}
                                    >
                                        <TooltipIconSVG />
                                    </CreateNewFolderModalTooltipButton>
                                </CreateNewFolderModalInputLabelRowWrapper>
                                <CreateNewFolderModalInputComponent>
                                    <CreateNewFolderModalInputBackgroundLayer>
                                        <CreateNewFolderModalInputField 
                                            type="text" 
                                            id="new_folder_input"
                                            autoComplete="off"
                                            onChange={(e) => { handleInput(e); }} 
                                        />
                                        <CreateNewFolderModalInputActiveField />
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
                    </ModalBackgroundLayer>
                    <ModalCloseComponent onClose={onClose} />
                </CreateNewFolderModalContent>
            </ModalExternalBlock>
        </FocusTrap>
    );
}

export default CreateNewFolderModal;