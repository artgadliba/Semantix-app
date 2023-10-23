import { FC, useState } from "react";
import { 
    ExportModalBlock,
    ExportModalContent,
    ExportModalBackgroundLayer,
    ExportModalTitle,
    ExportModalSelectBlock,
    ExportModalSelectLabel,
    ExportModalSelectComponent,
    ExportModalSelectBackgroundLayer,
    ExportModalInputField,
    ExportModalMainButton,
    ExportModalClose,
    ExportModalCloseIcon,
    ExportModalFilename,
    ExportModalMenuButton,
    ExportModalMenuButtonIcon
} from "./ExportModalStyles";
import LargeComboBox from "components/LargeComboBox/LargeComboBox";
import ModalOutsideClose from "../ModalOutsideCloseBlockStyles";

interface IExportModal {
    onClose(): any;
    fileName: string;
}

const ExportModal: FC<IExportModal> =  ({onClose, fileName}) => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [option, setOption] = useState<string>(null);
    const items = [
        {
            option: "Вариант 1"
        },
        {
            option: "Вариант 2"
        },
        {
            option: "Вариант 3"
        },
        {
            option: "Вариант 4"
        },
        {
            option: "Вариант 5"
        }
    ];
    const toggleMenuActive = () => {
        setMenuActive(current => !current);
    }
    return (
        <ExportModalBlock>
            <ModalOutsideClose onClick={onClose}></ModalOutsideClose>
            <ExportModalContent>
                <ExportModalClose onClick={onClose}>
                    <ExportModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </ExportModalCloseIcon>
                </ExportModalClose>
                <ExportModalBackgroundLayer>
                    <ExportModalTitle>Выгрузить</ExportModalTitle>
                    <ExportModalFilename>{fileName}</ExportModalFilename>
                    <form>
                        <ExportModalSelectBlock>
                            <ExportModalSelectLabel htmlFor="FileTypeInput">Выбор типа файла</ExportModalSelectLabel>
                            <ExportModalSelectComponent>
                                <ExportModalSelectBackgroundLayer>
                                    <ExportModalInputField id="FileTypeInput" type="text" disabled value={option}/>
                                    <ExportModalMenuButton onClick={toggleMenuActive}>
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
                </ExportModalBackgroundLayer>
            </ExportModalContent>
        </ExportModalBlock>
    );
}

export default ExportModal;