import { FC } from "react";
import { 
    FileDeletePopupBlock,
    FileDeletePopupContent,
    FileDeletePopupBackgroundLayer,
    FileDeletePopupTitle,
    FileDeletePopupMessage,
    FileDeletePopupButtonsBlock,
    FileDeletePopupButton,
    FileDeletePopupClose,
    FileDeletePopupCloseIcon,
} from "./FileDeletePopupStyles";

interface IFileDeletePopup {
    onClose(): any;
    fileName: string;
}

const FileDeletePopup: FC<IFileDeletePopup> =  ({onClose}) => {
    return (
        <FileDeletePopupBlock onClick={onClose}>
            <FileDeletePopupContent onClick={(e) => e.stopPropagation()}>
                <FileDeletePopupClose onClick={onClose}>
                    <FileDeletePopupCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </FileDeletePopupCloseIcon>
                </FileDeletePopupClose>
                <FileDeletePopupBackgroundLayer />
                <FileDeletePopupTitle>Удаление</FileDeletePopupTitle>
                <FileDeletePopupMessage>Вы уверены, что хотите удалить файл <br className="mobile-break"></br><span>Имя файла?</span></FileDeletePopupMessage>
                <FileDeletePopupButtonsBlock>
                    <FileDeletePopupButton>Подтвердить</FileDeletePopupButton>
                    <FileDeletePopupButton onClick={onClose}>Отменить</FileDeletePopupButton>
                </FileDeletePopupButtonsBlock>
            </FileDeletePopupContent>
        </FileDeletePopupBlock>
    );
}

export default FileDeletePopup;