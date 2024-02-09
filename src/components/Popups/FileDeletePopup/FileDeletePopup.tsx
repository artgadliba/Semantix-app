import { FC } from "react";
import { 
    FileDeletePopupContent,
    FileDeletePopupBackgroundLayer,
    FileDeletePopupTitle,
    FileDeletePopupMessage,
    FileDeletePopupButtonsBlock,
    FileDeletePopupButton
} from "./FileDeletePopupStyles";
import { ModalOutsideClose, ModalExternalBlock } from "components/Mixins/Mixins";
import { ModalCloseComponent } from "components/ModalCloseComponent/ModalCloseComponent";
import FocusTrap from "focus-trap-react";

interface IFileDeletePopup {
    onClose: () => void;
    fileName: string;
}

const FileDeletePopup: FC<IFileDeletePopup> =  ({onClose}) => {
    return (
        <FocusTrap focusTrapOptions={{ initialFocus: false }}>
            <ModalExternalBlock>
                <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                <FileDeletePopupContent>
                    <ModalCloseComponent onClose={onClose} />
                    <FileDeletePopupBackgroundLayer>
                        <FileDeletePopupTitle>Удаление</FileDeletePopupTitle>
                        <FileDeletePopupMessage>
                            Вы уверены, что хотите удалить файл <br className="mobile_break"></br><span>Имя файла?</span>
                        </FileDeletePopupMessage>
                        <FileDeletePopupButtonsBlock>
                            <FileDeletePopupButton>Подтвердить</FileDeletePopupButton>
                            <FileDeletePopupButton onClick={onClose}>Отменить</FileDeletePopupButton>
                        </FileDeletePopupButtonsBlock>
                    </FileDeletePopupBackgroundLayer>
                </FileDeletePopupContent>
            </ModalExternalBlock>
        </FocusTrap>
    );
}

export default FileDeletePopup;