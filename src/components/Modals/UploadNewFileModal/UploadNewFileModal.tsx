import React, { FC, SyntheticEvent, useState } from "react";
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
    UploadNewFileModalMobilInputWrapper
} from "./UploadNewFileModalStyles";

interface IUploadNewFileModal {
    onClose(): any;
    option: string;
}

const UploadNewFileModal: FC<IUploadNewFileModal> =  ({onClose}) => {
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
                <UploadNewFileModalInputFileBlock>
                    <UploadNewFileModalInputFileInstruction>Перетащите изображение в выделенную область или<br></br> нажимите “Выбрать файл”</UploadNewFileModalInputFileInstruction>
                    <UploadNewFileModalInputFileButton>
                        <UploadNewFileModalInputFileField type="file" />
                        Выбрать файл
                    </UploadNewFileModalInputFileButton>
                    <UploadNewFileModalInputFileLimitText>Максимальный рамзер файлов не более 2GB</UploadNewFileModalInputFileLimitText>
                </UploadNewFileModalInputFileBlock>
                <UploadNewFileModalInputFileButton className="mobile-upload">
                    <UploadNewFileModalInputFileField type="file" />
                    Выбрать файл
                </UploadNewFileModalInputFileButton>
                <UploadNewFileModalInputFileLimitText className="mobile-text">Максимальный рамзер файлов не более 2GB</UploadNewFileModalInputFileLimitText>
                <UploadNewFileModalLine />
                <UploadNewFileModalAdjustmentsText>Какой-то текст про настройки</UploadNewFileModalAdjustmentsText>
                <UploadNewFileModalCheckboxBlock>
                    <UploadNewFileModalMobilInputWrapper>
                        <UploadNewFileModalCheckboxInput type="checkbox" />
                        <UploadNewFileModalCheckboxText>Настройка 1</UploadNewFileModalCheckboxText>
                    </UploadNewFileModalMobilInputWrapper>
                    <UploadNewFileModalMobilInputWrapper>
                        <UploadNewFileModalCheckboxInput type="checkbox" />
                        <UploadNewFileModalCheckboxText>Настройка 2</UploadNewFileModalCheckboxText>
                    </UploadNewFileModalMobilInputWrapper>
                    <UploadNewFileModalMobilInputWrapper>
                        <UploadNewFileModalCheckboxInput type="checkbox" />
                        <UploadNewFileModalCheckboxText>Настройка 3</UploadNewFileModalCheckboxText>
                    </UploadNewFileModalMobilInputWrapper>
                    <UploadNewFileModalMobilInputWrapper>
                        <UploadNewFileModalCheckboxInput type="checkbox" />
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