import React, { FC, useRef, useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
    UploadNewFileModalContent,
    UploadNewFileModalBackgroundLayer,
    UploadNewFileModalTitle,
    UploadNewFileModalInputFileBlock,
    UploadNewFileModalInputFileInstruction,
    UploadNewFileModalInputFileButton,
    UploadNewFileModalInputFileLimitText,
    UploadNewFileModalInputFileField,
    UploadNewFileModalAdjustmentsText,
    UploadNewFileModalCheckboxBlock,
    UploadNewFileModalLabelWrapper,
    UploadNewFileModalCheckboxInput,
    UploadNewFileModalCheckboxLabel,
    UploadNewFileModalMainButton,
    UploadNewFileModalLine,
    UploadNewFileModalFilesBlock,
    UploadNewFileModalFile,
    UploadNewFileModalFilesShortcut,
    UploadNewFileModalFileDeleteButton,
    UploadNewFileModalButtonsBlock,
    UploadNewFileModalActionButton,
    UploadNewFileModalFilesMobileBlock,
    UploadNewFileModalFilesMobileWrapper,
    UploadNewFileModalFilesError
} from "./UploadNewFileModalStyles";
import {
    FileUploadPopupContent,
    FileUploadPopupBackgroundLayer,
    FileUploadPopupTitle,
    FileUploadPopupMessage,
    FileUploadPopupProgressBar,
    FileUploadPopupCancelButton
} from "./FileUploadPopupStyles";
import { ModalCloseComponent } from "components/ModalCloseComponent/ModalCloseComponent";
import { ModalOutsideClose, ModalExternalBlock } from "components/Mixins/Mixins";
import { humanFileSize } from "utils/fileSizeToReadable";
import axios from "axios";
import { getItemsLength } from "utils/getItemsLength";
import { setUpdateFileList } from "slices/updateFileListSlice";
import FocusTrap from "focus-trap-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "slices";
import { setUploadFolder } from "slices/uploadFolderSlice";

interface IUploadNewFileModal {
    onClose: () => void;
    openMessModal(): any;
}

interface IFilesSize {
    rawSize: number;
    readableSize: string;
}

const UploadNewFileModal: FC<IUploadNewFileModal> =  ({onClose, openMessModal}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const abortControllerRef = useRef<AbortController>(new AbortController());
    const [data, setData] = useState<Array<File>>([]);
    const [checkboxNoise, setCheckboxNoise] = useState<boolean>(false);
    const [checkboxVoiceNorm, setCheckboxVoiceNorm] = useState<boolean>(false);
    const [checkboxFrequency, setCheckboxFrequency] = useState<boolean>(false);
    const [uploadProcess, setUploadProcess] = useState<boolean>(false);
    const [filesSize, setFilesSize] = useState<IFilesSize>({ rawSize: 0, readableSize: "" });
    const [fileError, setFileError] = useState<string>(null);
    const [fileProgress, setFileProgress] = useState<number>(null);
    const [key, setKey] = useState<number>(0);
    const [initialFocus, setInitialFocus] = useState<any>(false);
    const folder = useSelector((state: RootState) => state.uploadFolder.value);
    const dispatch = useDispatch();
    const { pathname } = useLocation();

    useEffect(() => {
        let handler = null;
        if (uploadProcess) {
            handler = (e: BeforeUnloadEvent) => handleBeforeUnload(e);
            window.addEventListener("beforeunload", handler);
        }
        return () => {
            if (handler) {
                window.removeEventListener("beforeunload", handler);
            } 
        }
    }, [uploadProcess]);

    useEffect(() => {
        const controller = abortControllerRef.current;
        return () => {
            controller.abort();
        };
    }, []);

    function handleBeforeUnload(e: BeforeUnloadEvent): void {
        e.preventDefault();
        e.returnValue = "";
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>): void => {
        e.preventDefault();
        e.stopPropagation();
        setFileError(null);
        let fileBatchSize: number = 0;
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const files: Array<File> = [];
            let numOfFiles = e.dataTransfer.files.length
            if (numOfFiles > 50) {
                setFileError("Превышен лимит количества загружаемых файлов. Будут загружены только 50 файлов.");
                numOfFiles = 50;
            }
            for (let i = 0; i < numOfFiles; i ++) {
                if (e.dataTransfer.files[i].size === 0) {
                    setFileError("Обнаружены файлы с нулевым размером, которые не были загружены");
                    continue;
                }
                if (data.length > 0) {
                    if (checkFileDuplicates(e.dataTransfer.files[i])) {
                        setFileError("Обнаружены файлы дубликаты, которые не были загружены");
                        continue;
                    }
                }
                if (!checkFileExt(e.dataTransfer.files[i])) {
                    setFileError("Обнаружены файлы c недопустимым разрешением, которые не были загружены");
                    continue;
                }
                files.push(e.dataTransfer.files[i]);
                fileBatchSize += e.dataTransfer.files[i].size;
            }
            if (fileBatchSize + filesSize.rawSize <= 2000000000) {
                setData((currentFiles) => [...currentFiles, ...files]);
                const newFileSize = {
                    rawSize: filesSize.rawSize + fileBatchSize,
                    readableSize: humanFileSize(filesSize.rawSize + fileBatchSize)
                };
                setFilesSize(newFileSize);
                setInitialFocus("#upload_button");
                setKey(current => current + 1);
            } else {
                setFileError("Превышен максимальный лимит общего веса файлов.");
            }
        }
    };

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>): void {
        e.preventDefault();
        setFileError(null);
        let fileBatchSize: number = 0;
        const target = (e.currentTarget as HTMLInputElement);
        if (target.files && target.files[0]) {
            const files: Array<File> = [];
            let numOfFiles = target.files.length
            if (numOfFiles > 50) {
                setFileError("Превышен лимит количества загружаемых файлов. Будут загружены только 50 файлов.");
                numOfFiles = 50;
            }
            for (let i = 0; i < numOfFiles; i ++) {
                if (target.files[i].size === 0) {
                    setFileError("Обнаружены файлы с нулевым размером, которые не были загружены");
                    continue;
                }
                if (data.length > 0) {
                    if (checkFileDuplicates(target.files[i])) {
                        setFileError("Обнаружены файлы дубликаты, которые не будут загружены");
                        continue;
                    }
                }
                if (!checkFileExt(target.files[i])) {
                    setFileError("Обнаружены файлы c недопустимым разрешением, которые не будут загружены");
                    continue;
                }
                files.push(target.files[i]);
                fileBatchSize += e.target.files[i].size;
            }
            if (fileBatchSize + filesSize.rawSize <= 2000000000) {
                setData((currentFiles) => [...currentFiles, ...files]);
                const newFileSize = {
                    rawSize: filesSize.rawSize + fileBatchSize,
                    readableSize: humanFileSize(filesSize.rawSize + fileBatchSize)
                };
                setFilesSize(newFileSize);
                setInitialFocus("#upload_button");
                setKey(current => current + 1);
            } else {
                setFileError("Превышен максимальный лимит общего веса файлов.");
            }
        }
    };

    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => { 
        e.preventDefault();
        inputRef.current.click();
    };

    const getSlicedFilename = (name: string): string => {
        if (name.length > 15) {
            if (window.innerWidth <= 500) {
                return name.slice(0,9) + "..." + name.slice(-3);
            } else {
                return name.slice(0,12) + "..." + name.slice(-3);
            }
        } else {
            return name;
        }
    }

    const removeFileFromUploadList = (name: string): void => {
        const newData = data.filter(file => file.name !== name);
        setData(newData);
    }

    //check return type 
    const checkFileDuplicates = (file: File): File => {
        return data.find(function(existingFile) {
            return existingFile.name === file.name;
        })
    }

    const checkFileExt = (file: File): boolean => {
        const ext = file.name.match(/\.([^\.]+)$/)[1];
        switch (ext.toLowerCase()) {
            case 'mp3':
            case 'mpeg':
            case 'mpg':
            case 'mov':
            case 'mkv':
            case 'mxf':
            case 'avi':
            case 'mts':
            case '3gp':
            case 'amr':
            case 'wav':
            case 'flv':
            case 'wmv':
            case 'm4a':
            case 'ogg':
            case 'aac':
            case 'flac':
            case 'wma':
            case 'mp4':
                return true;
            default:
                return false;
        }
    }

    const handleFileUpload = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (data.length > 0 && folder && localStorage.getItem("jwt-tokens")) {
            const config = {
                folder: {
                    id: folder.id,
                    name: folder.name
                },
                noiseReductionF: checkboxNoise,
                voiceNormalizationF: checkboxVoiceNorm,
                frequencyF: checkboxFrequency
            };
            axios.post("/api/tasks/new", {
                files: data,
                inputValues: JSON.stringify(config)
            }, {
                headers: {
                    "Jwt-Tokens": localStorage.getItem("jwt-tokens"),
                    "Content-Type": "multipart/form-data"
                },
                onUploadProgress: data => {
                    setFileProgress(Math.round((100 * data.loaded) / data.total));
                },
                signal: abortControllerRef.current.signal
            })
            .then((res) => {
                if (res.headers && "jwt-tokens" in res.headers) {
                    localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
                }
                dispatch(setUpdateFileList());
                handleModalClose();
                setUploadProcess(false);
                openMessModal();
            })
            .catch(function(thrown) {
                if (axios.isCancel(thrown)) {
                    console.log('Request', thrown.message);
                }
                console.log(thrown);
            })
            .catch((err) => {
                if (err.headers && "jwt-tokens" in err.headers) {
                    localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                }
                console.log(err);
            })
            setUploadProcess(true);
            setKey(1);
        }
    }

    const handleInputFocus = (): void => {
        const input = document.getElementById("input_file") as HTMLElement;
        input.style.border = "1px solid #1683E2";
    }

    const handleInputLeave = (): void => {
        const input = document.getElementById("input_file") as HTMLElement;
        input.style.border = "1px dashed #2D3042";
    }

    const handleModalClose = (): void => {
        if (pathname.includes("/app/folders")) {
            onClose();
        } if (!pathname.includes("/app/folders")) {
            dispatch(setUploadFolder(null)); 
            onClose();
        }
    }

    if (!uploadProcess) {
        return (
            <FocusTrap key={key} focusTrapOptions={{ initialFocus: initialFocus, clickOutsideDeactivates: true }}>
                <ModalExternalBlock>
                    <ModalOutsideClose onClick={handleModalClose} />
                    <UploadNewFileModalContent>
                        <UploadNewFileModalBackgroundLayer>
                            <form onSubmit={(e) => { handleFileUpload(e); }}>
                                <UploadNewFileModalTitle>Новый файл</UploadNewFileModalTitle>
                                {data.length === 0 ? (
                                    <UploadNewFileModalInputFileBlock 
                                        id="input_file"
                                        onSubmit={(e) => e.preventDefault()}
                                        onDragOver={(e) => { e.preventDefault(); handleInputFocus(); }}
                                        onDragLeave={(e) => { e.preventDefault(); handleInputLeave(); }}
                                        onDrop={handleDrop}
                                    >
                                        {fileError && (
                                            <UploadNewFileModalFilesError>
                                                {fileError}
                                            </UploadNewFileModalFilesError>
                                        )} 
                                        <UploadNewFileModalInputFileField 
                                            type="file"
                                            accept=".mp3,.mpeg,.mpg,.mov,.mkv,.mxf,.avi,.mts,.3gp,.amr,.wav,.flv,.mov,.wmv,.m4a,.ogg,.aac,.flac,.wma,.mp4"
                                            id="input_file_field" 
                                            multiple={true} 
                                            ref={inputRef}
                                            onChange={handleChange}
                                        />
                                        <UploadNewFileModalInputFileInstruction>
                                            Перетащите изображение в выделенную область или<br/> нажимите “Выбрать файл”
                                        </UploadNewFileModalInputFileInstruction>
                                        <UploadNewFileModalInputFileButton 
                                            type="button" 
                                            onClick={(e) => { onButtonClick(e); }}
                                        >
                                            Выбрать файл
                                        </UploadNewFileModalInputFileButton>
                                        <UploadNewFileModalInputFileLimitText>
                                            Допускается отправка не более 50 файлов общим размером до 2Гб
                                        </UploadNewFileModalInputFileLimitText>
                                    </UploadNewFileModalInputFileBlock>
                                ) : (
                                    <UploadNewFileModalInputFileBlock 
                                        id="input_file"
                                        onSubmit={(e) => e.preventDefault()}
                                        onDragOver={(e) => { e.preventDefault(); handleInputFocus(); }}
                                        onDragLeave={(e) => { e.preventDefault(); handleInputLeave(); }}
                                        onDrop={handleDrop}
                                    >   
                                        {fileError && (
                                            <UploadNewFileModalFilesError>
                                                {fileError}
                                            </UploadNewFileModalFilesError>
                                        )} 
                                        <UploadNewFileModalInputFileField 
                                            type="file"
                                            accept=".mp3,.mpeg,.mpg,.mov,.mkv,.mxf,.avi,.mts,.3gp,.amr,.wav,.flv,.mov,.wmv,.m4a,.ogg,.aac,.flac,.wma"
                                            id="input_file_field" 
                                            multiple={true} 
                                            ref={inputRef}
                                            onChange={handleChange}
                                        />
                                        <UploadNewFileModalFilesBlock>
                                            {data.slice(0, 3).map((d, idx) => (
                                                    <UploadNewFileModalFile key={idx}>
                                                        {getSlicedFilename(d.name)}
                                                        <UploadNewFileModalFileDeleteButton
                                                            type="button"
                                                            onClick={() => {removeFileFromUploadList(d.name)}} 
                                                        />
                                                    </UploadNewFileModalFile>
                                            ))}
                                            {getItemsLength(data.length) > 0 && (
                                                <UploadNewFileModalFilesShortcut>
                                                    {`...(${getItemsLength(data.length)})`}
                                                </UploadNewFileModalFilesShortcut>
                                            )}
                                        </UploadNewFileModalFilesBlock>
                                        <UploadNewFileModalButtonsBlock>
                                            <UploadNewFileModalActionButton 
                                                type="button"
                                                id="upload_button"
                                                onClick={(e) => { onButtonClick(e); }}
                                            >
                                                Выбрать файл
                                            </UploadNewFileModalActionButton>
                                            <UploadNewFileModalActionButton 
                                                type="button" 
                                                onClick={() => { setData([]); }}
                                            >
                                                Отменить
                                            </UploadNewFileModalActionButton>
                                        </UploadNewFileModalButtonsBlock>
                                        <UploadNewFileModalInputFileLimitText>
                                            Использовано <span>{filesSize.readableSize}</span> из <span>2Гб</span>
                                        </UploadNewFileModalInputFileLimitText>
                                    </UploadNewFileModalInputFileBlock>
                                )}
                                {data.length > 0 ? (
                                    <UploadNewFileModalFilesMobileWrapper>
                                        <UploadNewFileModalFilesMobileBlock>
                                            {data.slice(0, 3).map((d, idx) => (
                                                <UploadNewFileModalFile key={idx}>
                                                    {getSlicedFilename(d.name)}
                                                    <UploadNewFileModalFileDeleteButton
                                                        type="button"
                                                        onClick={() => {removeFileFromUploadList(d.name)}} 
                                                    />
                                                </UploadNewFileModalFile>
                                            ))}
                                            {getItemsLength(data.length) > 0 && (
                                                <UploadNewFileModalFilesShortcut>
                                                    {`...(${getItemsLength(data.length)})`}
                                                </UploadNewFileModalFilesShortcut>
                                            )}
                                        </UploadNewFileModalFilesMobileBlock>
                                        <UploadNewFileModalButtonsBlock>
                                            <UploadNewFileModalActionButton 
                                                id="upload_button" 
                                                type="button" 
                                                onClick={(e) => { onButtonClick(e); }}
                                            >
                                                Добавить файл
                                            </UploadNewFileModalActionButton>
                                            <UploadNewFileModalActionButton 
                                                type="button" 
                                                onClick={() => { setData([]); }}
                                            >
                                                Отменить
                                            </UploadNewFileModalActionButton>
                                        </UploadNewFileModalButtonsBlock>
                                        <UploadNewFileModalInputFileLimitText className="mobile_text">
                                            Использовано <span>{filesSize.readableSize}</span> из <span>2Гб</span>
                                        </UploadNewFileModalInputFileLimitText>
                                        {fileError && (
                                            <UploadNewFileModalFilesError>
                                                {fileError}
                                            </UploadNewFileModalFilesError>
                                        )} 
                                    </UploadNewFileModalFilesMobileWrapper>
                                ) : (
                                    <UploadNewFileModalFilesMobileWrapper>
                                        <UploadNewFileModalInputFileButton 
                                            className="mobile_upload"
                                            id="upload_button"
                                            type="button"
                                            onClick={(e) => { onButtonClick(e); }}
                                        >
                                            Выбрать файл
                                        </UploadNewFileModalInputFileButton>
                                        <UploadNewFileModalInputFileLimitText className="mobile_text">
                                            Допускается отправка не более 50 файлов<br />общим размером до 2Гб
                                        </UploadNewFileModalInputFileLimitText>
                                        {fileError && (
                                            <UploadNewFileModalFilesError>
                                                {fileError}
                                            </UploadNewFileModalFilesError>
                                        )} 
                                    </UploadNewFileModalFilesMobileWrapper>
                                )}
                                <UploadNewFileModalLine />
                                <UploadNewFileModalAdjustmentsText>
                                    Фильтры для работы с файлами низкого качества
                                </UploadNewFileModalAdjustmentsText>
                                <UploadNewFileModalCheckboxBlock>
                                    <UploadNewFileModalLabelWrapper>
                                        <UploadNewFileModalCheckboxInput 
                                            type="checkbox" 
                                            id="checkbox_first" 
                                            defaultChecked={checkboxNoise} 
                                            onClick={() => {setCheckboxNoise(current => !current)}}
                                        />
                                        <UploadNewFileModalCheckboxLabel htmlFor="checkbox_first">
                                            Шумоподавление
                                        </UploadNewFileModalCheckboxLabel>
                                    </UploadNewFileModalLabelWrapper>
                                    <UploadNewFileModalLabelWrapper>
                                        <UploadNewFileModalCheckboxInput 
                                            type="checkbox"
                                            id="checkbox_second"
                                            defaultChecked={checkboxVoiceNorm} 
                                            onClick={() => {setCheckboxVoiceNorm(current => !current)}} 
                                        />
                                        <UploadNewFileModalCheckboxLabel htmlFor="checkbox_second">
                                            Нормализация голоса
                                        </UploadNewFileModalCheckboxLabel>
                                    </UploadNewFileModalLabelWrapper>
                                    <UploadNewFileModalLabelWrapper>
                                        <UploadNewFileModalCheckboxInput 
                                            type="checkbox"
                                            id="checkbox_third"
                                            defaultChecked={checkboxFrequency} 
                                            onClick={() => {setCheckboxFrequency(current => !current)}}
                                        />
                                        <UploadNewFileModalCheckboxLabel htmlFor="checkbox_third">
                                            Частотный фильтр
                                        </UploadNewFileModalCheckboxLabel>
                                    </UploadNewFileModalLabelWrapper>
                                </UploadNewFileModalCheckboxBlock>
                                <UploadNewFileModalLine />
                                <UploadNewFileModalMainButton disabled={data.length === 0} type="submit">
                                    Загрузить файл
                                </UploadNewFileModalMainButton>
                            </form>
                        </UploadNewFileModalBackgroundLayer>
                        <ModalCloseComponent onClose={handleModalClose} />
                    </UploadNewFileModalContent>
                </ModalExternalBlock>
            </FocusTrap>
        );
    } else if (uploadProcess) {
        return (
            <FocusTrap key={key} focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
                <ModalExternalBlock >
                    <ModalOutsideClose onClick={() => { handleModalClose(); abortControllerRef.current.abort(); }}>
                    </ModalOutsideClose>
                    <FileUploadPopupContent>
                        <FileUploadPopupBackgroundLayer>
                            <FileUploadPopupTitle>Загрузка файлов</FileUploadPopupTitle>
                            <FileUploadPopupMessage>
                                Дождитесь окончания загрузки файлов
                            </FileUploadPopupMessage>
                            <FileUploadPopupProgressBar max="100" value={fileProgress}/>
                            <form onSubmit={() => { 
                                handleModalClose(); 
                                abortControllerRef.current.abort();
                            }}>
                                <FileUploadPopupCancelButton type="submit">
                                    Отменить
                                </FileUploadPopupCancelButton>
                            </form>
                        </FileUploadPopupBackgroundLayer>
                        <ModalCloseComponent onClose={handleModalClose} />
                    </FileUploadPopupContent>
                </ModalExternalBlock>
            </FocusTrap>
        );
    }
}

export default UploadNewFileModal;