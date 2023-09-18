import React, { FC, useRef, useState } from "react";
import { 
    UploadNewFileModalBlock,
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
    UploadNewFileModalProgressBar,
    UploadNewFileModalCancelButton,
    UploadNewFileModalFilesMobileBlock,
    UploadNewFileModalFilesRow,
    UploadNewFileModalFilesMobileWrapper
} from "./UploadNewFileModalStyles";

interface IUploadNewFileModal {
    onClose(): any;
    option: string;
}

interface IDataTransfer {
    filename: string;
}

const UploadNewFileModal: FC<IUploadNewFileModal> =  ({onClose, option}) => {
    const inputRef = useRef(null);
    const [data, setData] = useState<Array<IDataTransfer>>([]);
    const [dragActive, setDragActive] = useState<boolean>(false);
    const [checkboxFirst, setCheckoxFirst] = useState<boolean>(false);
    const [checkboxSecond, setCheckoxSecond] = useState<boolean>(false);
    const [checkboxThird, setCheckoxThird] = useState<boolean>(false);
    const [checkboxFourth, setCheckoxFourth] = useState<boolean>(false);

    const handleDrag = function(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = function(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const files: Array<IDataTransfer> = [];
            for (let i = 0; i < e.dataTransfer.files.length; i ++) {
                let filename = e.dataTransfer.files[i].name;
                files.push({
                    filename: filename
                });
            }
            if (files.length == e.dataTransfer.files.length) {
                setData(files);
            }
        }
    };

    const handleChange = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            const files: Array<IDataTransfer> = [];
            for (let i = 0; i < e.target.files.length; i ++) {
                let filename = e.target.files[i].name;
                files.push({
                    filename: filename
                });
            }
            if (files.length == e.target.files.length) {
                setData(files);
            }
        }
    };

    const onButtonClick = () => {
        inputRef.current.click();
    };

    const getItemsLength = (num: number): number => {
        const result = num - 3;
        if (result < 0) {
            return 0;
        } else {
            return result;
        }
    };

    const getSlicedFilename = (name: string): string => {
        if (name.length > 15) {
            return name.slice(0,12) + "..." + name.slice(-3);
        } else {
            return name;
        }
    }

    const removeFileFromUploadList = (name: string): void => {
        const newData = data.filter(file => file.filename !== name);
        setData(newData);
    }

    return (
        <UploadNewFileModalBlock onClick={onClose}>
            <UploadNewFileModalContent onClick={(e) => e.stopPropagation()}>
                <UploadNewFileModalClose onClick={onClose}>
                    <UploadNewFileModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </UploadNewFileModalCloseIcon>
                </UploadNewFileModalClose>
                <UploadNewFileModalBackgroundLayer />
                <UploadNewFileModalTitle>Новый файл</UploadNewFileModalTitle>
                {data.length == 0 ? (
                    <UploadNewFileModalInputFileBlock 
                    id="input-file-upload" 
                    onDragEnter={handleDrag} 
                    onSubmit={(e) => e.preventDefault()}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    >
                        <UploadNewFileModalInputFileField 
                            type="file" 
                            id="input-file-upload" 
                            multiple={true} 
                            ref={inputRef}
                            onChange={handleChange}
                        />
                        <UploadNewFileModalInputFileInstruction>Перетащите изображение в выделенную область или<br></br> нажимите “Выбрать файл”</UploadNewFileModalInputFileInstruction>
                        <UploadNewFileModalInputFileButton onClick={onButtonClick}>
                            Выбрать файл
                        </UploadNewFileModalInputFileButton>
                        <UploadNewFileModalInputFileLimitText>Максимальный рамзер файлов не более 2GB</UploadNewFileModalInputFileLimitText>
                    </UploadNewFileModalInputFileBlock>
                ) : (
                    <UploadNewFileModalInputFileBlock>
                        <UploadNewFileModalFilesBlock>
                            {data.slice(0, 3).map((d, idx) => (
                                    <UploadNewFileModalFile key={idx}>
                                        {getSlicedFilename(d.filename)}
                                        <UploadNewFileModalFileDeleteButton onClick={() => {removeFileFromUploadList(d.filename)}} />
                                    </UploadNewFileModalFile>
                            ))}
                            {getItemsLength(data.length) > 0 && (
                               <UploadNewFileModalFilesShortcut>{`...(${getItemsLength(data.length)})`}</UploadNewFileModalFilesShortcut>
                            )}
                        </UploadNewFileModalFilesBlock>
                        <UploadNewFileModalProgressBar max="100" value="33" />
                        <UploadNewFileModalCancelButton onClick={onClose}>Отменить</UploadNewFileModalCancelButton>
                    </UploadNewFileModalInputFileBlock>
                )}
                {data.length > 0 ? (
                    <UploadNewFileModalFilesMobileWrapper>
                        <UploadNewFileModalFilesMobileBlock>
                            <UploadNewFileModalFilesRow>
                                {data.slice(0, 2).map((d, idx) => (
                                    <UploadNewFileModalFile key={idx}>
                                        {getSlicedFilename(d.filename)}
                                        <UploadNewFileModalFileDeleteButton onClick={() => {removeFileFromUploadList(d.filename)}} />
                                    </UploadNewFileModalFile>
                                ))}
                            </UploadNewFileModalFilesRow>
                            <UploadNewFileModalFilesRow>
                                {data.slice(2, 3).map((d, idx) => (
                                    <UploadNewFileModalFile key={idx}>
                                        {getSlicedFilename(d.filename)}
                                        <UploadNewFileModalFileDeleteButton onClick={() => {removeFileFromUploadList(d.filename)}} />
                                    </UploadNewFileModalFile>
                                ))}
                                {getItemsLength(data.length) > 0 && (
                                <UploadNewFileModalFilesShortcut>{`...(${getItemsLength(data.length)})`}</UploadNewFileModalFilesShortcut>
                                )}
                            </UploadNewFileModalFilesRow>
                        </UploadNewFileModalFilesMobileBlock>
                        <UploadNewFileModalProgressBar max="100" value="33" />
                        <UploadNewFileModalCancelButton onClick={onClose}>Отменить</UploadNewFileModalCancelButton>
                    </UploadNewFileModalFilesMobileWrapper>
                ) : (
                    <>
                    <UploadNewFileModalInputFileButton className="mobile-upload" onClick={onButtonClick}>
                        Выбрать файл
                    </UploadNewFileModalInputFileButton>
                    <UploadNewFileModalInputFileLimitText className="mobile-text">Максимальный рамзер файлов не более 2GB</UploadNewFileModalInputFileLimitText>
                    </>
                )}
                <UploadNewFileModalLine />
                <UploadNewFileModalAdjustmentsText>Какой-то текст про настройки</UploadNewFileModalAdjustmentsText>
                <UploadNewFileModalCheckboxBlock>
                    <UploadNewFileModalMobilInputWrapper onClick={() => {setCheckoxFirst(current => !current)}}>
                        <UploadNewFileModalCheckboxInput type="checkbox" checked={checkboxFirst} />
                        <UploadNewFileModalCheckboxText>Настройка 1</UploadNewFileModalCheckboxText>
                    </UploadNewFileModalMobilInputWrapper>
                    <UploadNewFileModalMobilInputWrapper onClick={() => {setCheckoxSecond(current => !current)}}>
                        <UploadNewFileModalCheckboxInput type="checkbox" checked={checkboxSecond} />
                        <UploadNewFileModalCheckboxText>Настройка 2</UploadNewFileModalCheckboxText>
                    </UploadNewFileModalMobilInputWrapper>
                    <UploadNewFileModalMobilInputWrapper onClick={() => {setCheckoxThird(current => !current)}}>
                        <UploadNewFileModalCheckboxInput type="checkbox" checked={checkboxThird} />
                        <UploadNewFileModalCheckboxText>Настройка 3</UploadNewFileModalCheckboxText>
                    </UploadNewFileModalMobilInputWrapper>
                    <UploadNewFileModalMobilInputWrapper onClick={() => {setCheckoxFourth(current => !current)}}>
                        <UploadNewFileModalCheckboxInput type="checkbox" checked={checkboxFourth} />
                        <UploadNewFileModalCheckboxText>Настройка 4</UploadNewFileModalCheckboxText>
                    </UploadNewFileModalMobilInputWrapper>
                </UploadNewFileModalCheckboxBlock>
                <UploadNewFileModalLine />
                <UploadNewFileModalMainButton>Загрузить файл</UploadNewFileModalMainButton>
            </UploadNewFileModalContent>
        </UploadNewFileModalBlock>
    );
}

export default UploadNewFileModal;