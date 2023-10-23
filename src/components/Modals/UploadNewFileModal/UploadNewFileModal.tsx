import React, { FC, useRef, useEffect, useState } from "react";
import { 
    UploadNewFileModalBlock,
    UploadNewFileModalContent,
    UploadNewFileModalBackgroundLayer,
    UploadNewFileModalLabel,
    UploadNewFileModalInputFileBlock,
    UploadNewFileModalInputFileInstruction,
    UploadNewFileModalInputFileButton,
    UploadNewFileModalInputFileLimitText,
    UploadNewFileModalInputFileField,
    UploadNewFileModalAdjustmentsText,
    UploadNewFileModalCheckboxBlock,
    UploadNewFileModalCheckboxInput,
    UploadNewFileModalCheckboxText,
    UploadNewFileModalMainButton,
    UploadNewFileModalLine,
    UploadNewFileModalClose,
    UploadNewFileModalCloseIcon,
    UploadNewFileModalMobilInputWrapper,
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
    FileUploadPopupBlock,
    FileUploadPopupContent,
    FileUploadPopupBackgroundLayer,
    FileUploadPopupTitle,
    FileUploadPopupMessage,
    FileUploadPopupProgressBar,
    FileUploadPopupCancelButton,
    FileUploadPopupClose,
    FileUploadPopupCloseIcon,
} from "./FileUploadPopupStyles";
import { humanFileSize } from "utils/fileSizeToReadable";
import axios from "axios";
import { getItemsLength } from "utils/getItemsLength";
import { convertTimeToReadable } from "utils/convertTimeToReadable";
import ModalOutsideClose from "../ModalOutsideCloseBlockStyles";

interface IUploadNewFileModal {
    onClose(): any;
    openMessModal(): any;
    folder: {
        id: number;
        name: string;
    }
}

const UploadNewFileModal: FC<IUploadNewFileModal> =  ({onClose, openMessModal, folder}) => {
    const inputRef = useRef(null);
    const abortControllerRef = useRef<AbortController>(new AbortController());
    const [data, setData] = useState<Array<File>>([]);
    const [checkboxNoise, setCheckboxNoise] = useState<boolean>(false);
    const [checkboxVoiceNorm, setCheckboxVoiceNorm] = useState<boolean>(false);
    const [checkboxFrequency, setCheckboxFrequency] = useState<boolean>(false);
    const [fileFormatError, setFileFormatError] = useState<boolean>(false);
    const [uploadProcess, setUploadProcess] = useState<boolean>(false);
    const [filesSize, setFilesSize] = useState<string>("");
    const [fileProgress, setFileProgress] = useState<number>(null);
    const [remainingTime, setRemainingTime] = useState<number>(null);

    const handleDrop = function(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        var fileBatchSize: number = 0;
        console.log(e.dataTransfer.files)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const files: Array<File> = [];
            for (let i = 0; i < e.dataTransfer.files.length; i ++) {
                files.push(e.dataTransfer.files[i]);
                fileBatchSize += e.dataTransfer.files[i].size;
            }
            if (files.length === e.dataTransfer.files.length) {
                if (checkFilesExt(files) === true) {
                    setData((currentFiles) => [...currentFiles, ...files]);
                    setFilesSize(humanFileSize(fileBatchSize));
                }
            }
        }
    };

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        var fileBatchSize: number = 0;
        const target = (e.target as HTMLInputElement);
        if (target.files && target.files[0]) {
            const files: Array<File> = [];
            for (let i = 0; i < target.files.length; i ++) {
                files.push(target.files[i]);
                fileBatchSize += e.target.files[i].size;
            }
            if (files.length === target.files.length) {
                if (checkFilesExt(files) === true) {
                    setData((currentFiles) => [...currentFiles, ...files]);
                    setFilesSize(humanFileSize(fileBatchSize));
                }
            }
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

    const checkFilesExt = (files: File[]) => {
        for (let i = 0; i < files.length; i ++) {
            const ext = files[i].name.match(/\.([^\.]+)$/)[1];
            switch (ext) {
                case 'mp4':
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
                    console.log(files[i], " allowed");
                    break;
                default:
                    console.log(files[i], " not allowed");
                    setFileFormatError(true);
                    return false;
            }
            if (i === files.length - 1) {
                setFileFormatError(false);
                return true;
            }
        }
    }

    const handleFileUpload = () => {
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
                onClose();
                openMessModal();
                console.log(res);
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
        }
    }

    useEffect(() => {
        const controller = abortControllerRef.current;
        return () => {
            controller.abort();
        };
    }, []);
   
    if (uploadProcess === false) {
        return (
            <UploadNewFileModalBlock>
                <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                <UploadNewFileModalContent>
                    <UploadNewFileModalClose onClick={onClose}>
                        <UploadNewFileModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                        </UploadNewFileModalCloseIcon>
                    </UploadNewFileModalClose>
                    <UploadNewFileModalBackgroundLayer>
                        <form onSubmit={handleFileUpload}>
                            <UploadNewFileModalLabel htmlFor="input_file">Новый файл</UploadNewFileModalLabel>
                            {data.length == 0 ? (
                                <UploadNewFileModalInputFileBlock 
                                    id="input_file"
                                    onSubmit={(e) => e.preventDefault()}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={handleDrop}
                                >
                                    {fileFormatError === true && (
                                        <UploadNewFileModalFilesError>
                                            Ошибка: неверный формат файла
                                        </UploadNewFileModalFilesError>
                                    )} 
                                    <UploadNewFileModalInputFileField 
                                        type="file"
                                        accept=".mp3,.mpeg,.mpg,.mov,.mkv,.mxf,.avi,.mts,.3gp,.amr,.wav,.flv,.mov,.wmv,.m4a,.ogg,.aac,.flac,.wma"
                                        id="inputFileField" 
                                        multiple={true} 
                                        ref={inputRef}
                                        onChange={handleChange}
                                    />
                                    <UploadNewFileModalInputFileInstruction>Перетащите изображение в выделенную область или<br></br> нажимите “Выбрать файл”</UploadNewFileModalInputFileInstruction>
                                    <UploadNewFileModalInputFileButton onClick={onButtonClick}>
                                        Выбрать файл
                                    </UploadNewFileModalInputFileButton>
                                    <UploadNewFileModalInputFileLimitText>Максимальный размер файлов не более 2GB</UploadNewFileModalInputFileLimitText>
                                </UploadNewFileModalInputFileBlock>
                            ) : (
                                <UploadNewFileModalInputFileBlock 
                                    id="input_file"
                                    onSubmit={(e) => e.preventDefault()}
                                    onDragOver={(e) => e.preventDefault()}
                                    onDrop={handleDrop}
                                >   
                                    {fileFormatError === true && (
                                        <UploadNewFileModalFilesError>
                                            Ошибка: неверный формат файла
                                        </UploadNewFileModalFilesError>
                                    )} 
                                    <UploadNewFileModalInputFileField 
                                        type="file"
                                        accept=".mp3,.mpeg,.mpg,.mov,.mkv,.mxf,.avi,.mts,.3gp,.amr,.wav,.flv,.mov,.wmv,.m4a,.ogg,.aac,.flac,.wma"
                                        id="inputFileField" 
                                        multiple={true} 
                                        ref={inputRef}
                                        onChange={handleChange}
                                    />
                                    <UploadNewFileModalFilesBlock>
                                        {data.slice(0, 3).map((d, idx) => (
                                                <UploadNewFileModalFile key={idx}>
                                                    {getSlicedFilename(d.name)}
                                                    <UploadNewFileModalFileDeleteButton onClick={() => {removeFileFromUploadList(d.name)}} />
                                                </UploadNewFileModalFile>
                                        ))}
                                        {getItemsLength(data.length) > 0 && (
                                            <UploadNewFileModalFilesShortcut>{`...(${getItemsLength(data.length)})`}</UploadNewFileModalFilesShortcut>
                                        )}
                                    </UploadNewFileModalFilesBlock>
                                    <UploadNewFileModalButtonsBlock>
                                        <UploadNewFileModalActionButton onClick={onButtonClick}>Выбрать файл</UploadNewFileModalActionButton>
                                        <UploadNewFileModalActionButton onClick={() => { setData([]); }}>Отменить</UploadNewFileModalActionButton>
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
                                                <UploadNewFileModalFileDeleteButton onClick={() => {removeFileFromUploadList(d.name)}} />
                                            </UploadNewFileModalFile>
                                        ))}
                                        {getItemsLength(data.length) > 0 && (
                                            <UploadNewFileModalFilesShortcut>{`...(${getItemsLength(data.length)})`}</UploadNewFileModalFilesShortcut>
                                        )}
                                    </UploadNewFileModalFilesMobileBlock>
                                    <UploadNewFileModalButtonsBlock>
                                        <UploadNewFileModalActionButton onClick={onButtonClick}>Добавить файл</UploadNewFileModalActionButton>
                                        <UploadNewFileModalActionButton onClick={onClose}>Отменить</UploadNewFileModalActionButton>
                                    </UploadNewFileModalButtonsBlock>
                                    <UploadNewFileModalInputFileLimitText className="mobileText">
                                        Использовано <span>{filesSize}</span> из <span>2GB</span>
                                    </UploadNewFileModalInputFileLimitText>
                                </UploadNewFileModalFilesMobileWrapper>
                            ) : (
                                <>
                                <UploadNewFileModalInputFileButton className="mobile-upload" onClick={onButtonClick}>
                                    Выбрать файл
                                </UploadNewFileModalInputFileButton>
                                <UploadNewFileModalInputFileLimitText className="mobileText">Максимальный размер файлов не более 2GB</UploadNewFileModalInputFileLimitText>
                                </>
                            )}
                            <UploadNewFileModalLine />
                            <UploadNewFileModalAdjustmentsText>Какой-то текст про настройки</UploadNewFileModalAdjustmentsText>
                            <UploadNewFileModalCheckboxBlock>
                                <UploadNewFileModalMobilInputWrapper onClick={() => {setCheckboxNoise(current => !current)}}>
                                    <UploadNewFileModalCheckboxInput type="checkbox" checked={checkboxNoise} />
                                    <UploadNewFileModalCheckboxText>Шумоподавление</UploadNewFileModalCheckboxText>
                                </UploadNewFileModalMobilInputWrapper>
                                <UploadNewFileModalMobilInputWrapper onClick={() => {setCheckboxVoiceNorm(current => !current)}}>
                                    <UploadNewFileModalCheckboxInput type="checkbox" checked={checkboxVoiceNorm} />
                                    <UploadNewFileModalCheckboxText>Нормализация голоса</UploadNewFileModalCheckboxText>
                                </UploadNewFileModalMobilInputWrapper>
                                <UploadNewFileModalMobilInputWrapper onClick={() => {setCheckboxFrequency(current => !current)}}>
                                    <UploadNewFileModalCheckboxInput type="checkbox" checked={checkboxFrequency} />
                                    <UploadNewFileModalCheckboxText>Частотный фильтр</UploadNewFileModalCheckboxText>
                                </UploadNewFileModalMobilInputWrapper>
                            </UploadNewFileModalCheckboxBlock>
                            <UploadNewFileModalLine />
                            <UploadNewFileModalMainButton disabled={data.length === 0} type="submit">
                                Загрузить файл
                            </UploadNewFileModalMainButton>
                        </form>
                    </UploadNewFileModalBackgroundLayer>
                </UploadNewFileModalContent>
            </UploadNewFileModalBlock>
        );
    } else if (uploadProcess === true) {
        return (
            <FileUploadPopupBlock >
                <ModalOutsideClose onClick={() => { onClose(); abortControllerRef.current.abort(); }}>
                </ModalOutsideClose>
                <FileUploadPopupContent>
                    <FileUploadPopupClose onClick={() => { onClose(); abortControllerRef.current.abort(); }}>
                        <FileUploadPopupCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                        </FileUploadPopupCloseIcon>
                    </FileUploadPopupClose>
                    <FileUploadPopupBackgroundLayer>
                        <FileUploadPopupTitle>Загрузка файлов</FileUploadPopupTitle>
                        <FileUploadPopupMessage>
                            Осталось до окончания загрузки: <br className="mobile-break"></br><span> {convertTimeToReadable(remainingTime)}</span>
                        </FileUploadPopupMessage>
                        <FileUploadPopupProgressBar max="100" value={fileProgress}/>
                        <form onSubmit={() => { onClose(); abortControllerRef.current.abort(); }}>
                            <FileUploadPopupCancelButton type="submit">
                                Отменить
                            </FileUploadPopupCancelButton>
                        </form>
                    </FileUploadPopupBackgroundLayer>
                </FileUploadPopupContent>
            </FileUploadPopupBlock>
        );
    }
    
}

export default UploadNewFileModal;