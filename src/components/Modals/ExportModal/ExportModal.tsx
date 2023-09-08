import { FC, SyntheticEvent, useState } from "react";
import { 
    ExportModalBlock,
    ExportModalContent,
    ExportModalBackgroundLayer,
    ExportModalTitle,
    ExportModalSelectBlock,
    ExportModalSelectTitle,
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

interface IExportModal {
    onClose(): any;
    fileName: string;
}

const ExportModal: FC<IExportModal> =  ({onClose, fileName}) => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [option, setOption] = useState<string>("");
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
        <ExportModalBlock onClick={onClose}>
            <ExportModalContent onClick={(e) => e.stopPropagation()}>
                <ExportModalClose onClick={onClose}>
                    <ExportModalCloseIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="m16.95 7.05-9.9 9.9m0-9.9 9.9 9.9" stroke-linecap="round" strokeLinejoin="round"/>
                    </ExportModalCloseIcon>
                </ExportModalClose>
                <ExportModalBackgroundLayer />
                <ExportModalTitle>Выгрузить</ExportModalTitle>
                <ExportModalFilename>{fileName}</ExportModalFilename>
                <ExportModalSelectBlock>
                    <ExportModalSelectTitle>Выбор типа файла</ExportModalSelectTitle>
                    <ExportModalSelectComponent>
                        <ExportModalSelectBackgroundLayer />
                        <ExportModalInputField type="text" disabled value={option}/>
                        <ExportModalMenuButton onClick={toggleMenuActive}>
                            {menuActive == true ? (
                                <ExportModalMenuButtonIcon alt="open" src="/images/folders-opened.svg" />
                            ) : (
                                <ExportModalMenuButtonIcon alt="open" src="/images/folders-closed.svg" />
                            )}
                        </ExportModalMenuButton>
                    </ExportModalSelectComponent>
                    {menuActive == true && (
                        <LargeComboBox addFolderActive={false} setOption={setOption} setMenuActive={setMenuActive} isActive={menuActive} items={items}/>
                    )}
                </ExportModalSelectBlock>
                <ExportModalMainButton>Выгрузить файл</ExportModalMainButton>
            </ExportModalContent>
        </ExportModalBlock>
    );
}

export default ExportModal;