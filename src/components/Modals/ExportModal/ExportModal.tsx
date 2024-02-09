import { FC, useState } from "react";
import {
    ExportModalContent,
    ExportModalTitle,
    ExportModalSelectBlock,
    ExportModalSelectLabel,
    ExportModalSelectComponent,
    ExportModalSelectBackgroundLayer,
    ExportModalInputField,
    ExportModalInputActiveField,
    ExportModalMainButton,
    ExportModalFilename,
    ExportModalMenuButton,
    ExportModalMenuButtonIcon
} from "./ExportModalStyles";
import { ModalCloseComponent } from "components/ModalCloseComponent/ModalCloseComponent";
import LargeComboBox from "components/LargeComboBox/LargeComboBox";
import { ModalOutsideClose, ModalExternalBlock, ModalBackgroundLayer } from "components/Mixins/Mixins";
import FocusTrap from "focus-trap-react";

interface IExportModal {
    onClose: () => void;
    fileName: string;
}

const ExportModal: FC<IExportModal> =  ({onClose, fileName}) => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [option, setOption] = useState<string>(null);
    
    const items = [
        {
            option: "Формат .docx"
        },
        {
            option: "Формат .srt"
        },
        {
            option: "Формат .txt"
        },
        {
            option: "Все форматы в архиве .zip"
        }
    ];

    const toggleMenuActive = (): void => {
        setMenuActive(current => !current);
    }
    
    return (
        <FocusTrap focusTrapOptions={{ initialFocus: false, clickOutsideDeactivates: true }}>
            <ModalExternalBlock>
                <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
                <ExportModalContent>
                    <ModalBackgroundLayer>
                        <ExportModalTitle>Выгрузить</ExportModalTitle>
                        <ExportModalFilename>{fileName}</ExportModalFilename>
                        <form>
                            <ExportModalSelectBlock>
                                <ExportModalSelectLabel htmlFor="file_type_input">Выбор типа файла</ExportModalSelectLabel>
                                <ExportModalSelectComponent>
                                    <ExportModalSelectBackgroundLayer>
                                        <ExportModalInputField id="file_type_input" type="text" disabled value={option}/>
                                        <ExportModalInputActiveField />
                                        <ExportModalMenuButton type="button" onClick={toggleMenuActive}>
                                            {menuActive == true ? (
                                                <ExportModalMenuButtonIcon alt="open" src="/images/folders-opened.svg" />
                                            ) : (
                                                <ExportModalMenuButtonIcon alt="open" src="/images/folders-closed.svg" />
                                            )}
                                        </ExportModalMenuButton>
                                    </ExportModalSelectBackgroundLayer>
                                </ExportModalSelectComponent>
                                {menuActive == true && (
                                    <LargeComboBox 
                                        addFolderActive={false}
                                        setOption={setOption} 
                                        setMenuActive={setMenuActive} 
                                        items={items}
                                    />
                                )}
                            </ExportModalSelectBlock>
                            <ExportModalMainButton disabled={!option}>Выгрузить файл</ExportModalMainButton>
                        </form>
                    </ModalBackgroundLayer>
                    <ModalCloseComponent onClose={onClose} />
                </ExportModalContent>
            </ModalExternalBlock>
        </FocusTrap>   
    );
}

export default ExportModal;