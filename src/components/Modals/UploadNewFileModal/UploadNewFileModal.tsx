import React, { FC, useRef, useEffect, useState } from "react";
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
import { convertTimeToReadable } from "utils/convertTimeToReadable";
import { setUpdateFileList } from "slices/updateFileListSlice";
import FocusTrap from "focus-trap-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "slices";
import { setUploadFolder } from "slices/uploadFolderSlice";

interface IUploadNewFileModal {
    onClose(): any;
    openMessModal(): any;
}

const UploadNewFileModal: FC<IUploadNewFileModal> =  ({onClose, openMessModal}) => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const abortControllerRef = useRef<AbortController>(new AbortController());
    const [data, setData] = useState<Array<File>>([]);
    const [checkboxNoise, setCheckboxNoise] = useState<boolean>(false);
    const [checkboxVoiceNorm, setCheckboxVoiceNorm] = useState<boolean>(false);
    const [checkboxFrequency, setCheckboxFrequency] = useState<boolean>(false);
    const [uploadProcess, setUploadProcess] = useState<boolean>(false);
    const [filesSize, setFilesSize] = useState<string>("");
    const [fileError, setFileError] = useState<string>(null);
    const [fileProgress, setFileProgress] = useState<number>(null);
    const [remainingTime, setRemainingTime] = useState<number>(null);
    const [key, setKey] = useState<number>(0);
    const [initialFocus, setInitialFocus] = useState<any>(false);
    const folder = useSelector((state: RootState) => state.uploadFolder.value);

    useEffect(() => {
        const controller = abortControllerRef.current;
        return () => {
            controller.abort();
        };
    }, []);

    const handleDrop = function(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        let fileBatchSize: number = 0;
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const files: Array<File> = [];
            for (let i = 0; i < e.dataTransfer.files.length; i ++) {
                if (e.dataTransfer.files[i].size === 0) {
                    setFileError("Часть файлов не была загружена из-за нулевого размера");
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
            setData((currentFiles) => [...currentFiles, ...files]);
            setFilesSize(humanFileSize(fileBatchSize));
            setInitialFocus("#upload_button");
            setKey(current => current + 1);
        }
    };

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        let fileBatchSize: number = 0;
        const target = (e.target as HTMLInputElement);
        if (target.files && target.files[0]) {
            const files: Array<File> = [];
            let numOfFiles = target.files.length
            if (numOfFiles > 50) {
                setFileError("Превышен лимит количества загружаемых файлов. Будут загружены только первые 50 файлов.");
                numOfFiles = 50;
            }
            for (let i = 0; i < numOfFiles; i ++) {
                if (target.files[i].size === 0) {
                    setFileError("Часть файлов не будут загружены из-за нулевого размера");
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
            setData((currentFiles) => [...currentFiles, ...files]);
            setFilesSize(humanFileSize(fileBatchSize));
            setInitialFocus("#upload_button");
            setKey(current => current + 1);
        }
    };

    const onButtonClick = () => {
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

    const checkFileDuplicates = (file: File) => {
        return data.find(function(existingFile) {
            return existingFile.name === file.name;
        })
    }

    const checkFileExt = (file: File) => {
        const ext = file.name.match(/\.([^\.]+)$/)[1];
        switch (ext) {
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
            case 'mov':
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

    const handleFileUpload = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (data.length > 0 && localStorage.getItem("jwt-tokens") && folder) {
            const config = {
                folder: {
                    id: folder.id,
                    name: folder.name
                },
                noiseReductionF: checkboxNoise,
                voiceNormalizationF: checkboxVoiceNorm,
                frequencyF: checkboxFrequency
            };
            const timeStarted = new Date();
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
                    const timeElapsed = Math.abs(new Date().getTime() - timeStarted.getTime());
                    const uploadSpeed = data.loaded / (timeElapsed/1000);
                    setRemainingTime((data.total - data.loaded) / uploadSpeed);
                },
                signal: abortControllerRef.current.signal
            })
            .then((res) => {
                if (res.headers && "jwt-tokens" in res.headers) {
                    localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
                }
                dispatch(setUpdateFileList());
                onClose();
                openMessModal();
            })
            .catch(function(thrown) {
                if (axios.isCancel(thrown)) {
                    console.log('Request ', thrown.message);
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
   
    if (uploadProcess === false) {
        return (
            <FocusTrap key={key} focusTrapOptions={{ initialFocus: initialFocus, clickOutsideDeactivates: true }}>
                <ModalExternalBlock>
                    <ModalOutsideClose onClick={() => { dispatch(setUploadFolder(null)); onClose(); }} />
                    <UploadNewFileModalContent>
                        <UploadNewFileModalBackgroundLayer>
                            <form onSubmit={(e) => { handleFileUpload(e); }}>
                                <UploadNewFileModalTitle>Новый файл</UploadNewFileModalTitle>
                                {data.length == 0 ? (
                                    <UploadNewFileModalInputFileBlock 
                                        id="input_file"
                                        onSubmit={(e) => e.preventDefault()}
                                        onDragOver={(e) => e.preventDefault()}
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
                                        <UploadNewFileModalInputFileInstruction>Перетащите изображение в выделенную область или<br/> нажимите “Выбрать файл”</UploadNewFileModalInputFileInstruction>
                                        <UploadNewFileModalInputFileButton type="button" onClick={onButtonClick}>
                                            Выбрать файл
                                        </UploadNewFileModalInputFileButton>
                                        <UploadNewFileModalInputFileLimitText>Допускается отправка не более 50 файлов общим размером до 2Гб</UploadNewFileModalInputFileLimitText>
                                    </UploadNewFileModalInputFileBlock>
                                ) : (
                                    <UploadNewFileModalInputFileBlock 
                                        id="input_file"
                                        onSubmit={(e) => e.preventDefault()}
                                        onDragOver={(e) => e.preventDefault()}
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
                                            <UploadNewFileModalActionButton type="button" onClick={onButtonClick}>
                                                Выбрать файл
                                            </UploadNewFileModalActionButton>
                                            <UploadNewFileModalActionButton type="button" onClick={() => { setData([]); }}>
                                                Отменить
                                            </UploadNewFileModalActionButton>
                                        </UploadNewFileModalButtonsBlock>
                                        <UploadNewFileModalInputFileLimitText>
                                            Использовано <span>{filesSize}</span> из <span>2GB</span>
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
                                            <UploadNewFileModalActionButton id="upload_button" type="button" onClick={onButtonClick}>
                                                Добавить файл
                                            </UploadNewFileModalActionButton>
                                            <UploadNewFileModalActionButton type="button" onClick={onClose}>
                                                Отменить
                                            </UploadNewFileModalActionButton>
                                        </UploadNewFileModalButtonsBlock>
                                        <UploadNewFileModalInputFileLimitText className="mobile_text">
                                            Использовано <span>{filesSize}</span> из <span>2GB</span>
                                        </UploadNewFileModalInputFileLimitText>
                                    </UploadNewFileModalFilesMobileWrapper>
                                ) : (
                                    <>
                                    <UploadNewFileModalInputFileButton 
                                        className="mobile_upload"
                                        type="button"
                                        onClick={onButtonClick}
                                    >
                                        Выбрать файл
                                    </UploadNewFileModalInputFileButton>
                                    <UploadNewFileModalInputFileLimitText className="mobile_text">
                                        Максимальный размер файлов не более 2GB
                                    </UploadNewFileModalInputFileLimitText>
                                    </>
                                )}
                                <UploadNewFileModalLine />
                                <UploadNewFileModalAdjustmentsText>
                                    Какой-то текст про настройки
                                </UploadNewFileModalAdjustmentsText>
                                <UploadNewFileModalCheckboxBlock>
                                    <UploadNewFileModalCheckboxInput 
                                        type="checkbox" 
                                        id="checkbox_first" 
                                        defaultChecked={checkboxNoise} 
                                        onClick={() => {setCheckboxNoise(current => !current)}}
                                    />
                                    <UploadNewFileModalCheckboxLabel htmlFor="checkbox_first">
                                        Шумоподавление
                                    </UploadNewFileModalCheckboxLabel>
                                    <UploadNewFileModalCheckboxInput 
                                        type="checkbox"
                                        id="checkbox_second"
                                        defaultChecked={checkboxVoiceNorm} 
                                        onClick={() => {setCheckboxVoiceNorm(current => !current)}} 
                                    />
                                    <UploadNewFileModalCheckboxLabel htmlFor="checkbox_second">
                                        Нормализация голоса
                                    </UploadNewFileModalCheckboxLabel>
                                    <UploadNewFileModalCheckboxInput 
                                        type="checkbox"
                                        id="checkbox_third"
                                        defaultChecked={checkboxFrequency} 
                                        onClick={() => {setCheckboxFrequency(current => !current)}}
                                    />
                                    <UploadNewFileModalCheckboxLabel htmlFor="checkbox_third">
                                        Частотный фильтр
                                    </UploadNewFileModalCheckboxLabel>
                                </UploadNewFileModalCheckboxBlock>
                                <UploadNewFileModalLine />
                                <UploadNewFileModalMainButton disabled={data.length === 0} type="submit">
                                    Загрузить файл
                                </UploadNewFileModalMainButton>
                            </form>
                        </UploadNewFileModalBackgroundLayer>
                        <ModalCloseComponent onClose={onClose} />
                    </UploadNewFileModalContent>
                </ModalExternalBlock>
            </FocusTrap>
        );
    } else if (uploadProcess === true) {
        return (
            <FocusTrap key={key} focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
                <ModalExternalBlock >
                    <ModalOutsideClose onClick={() => { onClose(); abortControllerRef.current.abort(); }}>
                    </ModalOutsideClose>
                    <FileUploadPopupContent>
                        <FileUploadPopupBackgroundLayer>
                            <FileUploadPopupTitle>Загрузка файлов</FileUploadPopupTitle>
                            <FileUploadPopupMessage>
                                Осталось до окончания загрузки: <br/><span> {convertTimeToReadable(remainingTime)}</span>
                            </FileUploadPopupMessage>
                            <FileUploadPopupProgressBar max="100" value={fileProgress}/>
                            <form onSubmit={() => { onClose(); abortControllerRef.current.abort(); }}>
                                <FileUploadPopupCancelButton type="submit">
                                    Отменить
                                </FileUploadPopupCancelButton>
                            </form>
                        </FileUploadPopupBackgroundLayer>
                        <ModalCloseComponent onClose={onClose} />
                    </FileUploadPopupContent>
                </ModalExternalBlock>
            </FocusTrap>
        );
    }
}

export default UploadNewFileModal;