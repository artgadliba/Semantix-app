import { FC } from "react";
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

interface IFileUploadPopup {
    onClose(): any;
}

const FileUploadPopup: FC<IFileUploadPopup> =  ({onClose}) => {
    return (
        <FileUploadPopupBlock onClick={onClose}>
            <FileUploadPopupContent onClick={(e) => e.stopPropagation()}>
                <FileUploadPopupClose onClick={onClose}>
                    <FileUploadPopupCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </FileUploadPopupCloseIcon>
                </FileUploadPopupClose>
                <FileUploadPopupBackgroundLayer />
                <FileUploadPopupTitle>Загрузка файлов</FileUploadPopupTitle>
                <FileUploadPopupMessage>Осталось до окончания загрузки: <br className="mobile-break"></br><span>23 минуты</span></FileUploadPopupMessage>
                <FileUploadPopupProgressBar max="100" value="33"/>
                <FileUploadPopupCancelButton onClick={onClose}>Отменить</FileUploadPopupCancelButton>
            </FileUploadPopupContent>
        </FileUploadPopupBlock>
    );
}

export default FileUploadPopup;