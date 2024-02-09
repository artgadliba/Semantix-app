import { FC, useEffect, useState } from "react";
import { 
    UserFileListBody,
    UserFileListBlock,
    UserFileListItem,
    UserFileListItemBackgroundLayer,
    UserFileListItemContent,
    UserFileListItemIcon,
    UserFileListItemMobileIcon,
    UserFileListItemInfoBlock,
    UserFileListItemInfoColumnWrapper,
    UserFileListItemInfoRowWrapper,
    UserFileListItemFilenameBlock,
    UserFileListItemFilename,
    UserFileListItemFileLength,
    UserFileListItemFileDate,
    UserFileListItemFolderName,
    UserFileListItemMobileFolderName,
    UserFileListItemOpenButton,
    UserFileListItemInfoButtonsWrapper,
    UserFileListItemOptionsButton,
    UserFileListItemOptionsButtonIcon,
    UserFileListItemMobileLine
} from "./UserFileListStyles";
import { fileOptions } from "content/FileOptions";
import LoadingIconSVG from "components/SvgComponents/LoadingIconSVG";
import LoadingIconMobileSVG from "components/SvgComponents/LoadingIconMobileSVG";
import { parseDate } from "../../utils/parseDate";
import { parseFileLength } from "../../utils/parseFileLength";
import SmallComboBox from "components/SmallComboBox/SmallComboBox";
import useModal from "hooks/useModal";
import ExportModal from "components/Modals/ExportModal/ExportModal";
import FileDeletePopup from "components/Popups/FileDeletePopup/FileDeletePopup";

interface IFileList {
    className?: string;
    items: {
        id: number;
        folder: {
            id: number;
            name: string;
        }
        info: {
            creation_datetime: string;
        }
        media: {
            name: string;
            lengthMs: number;
        }
        status: {
            code: number;
        }
    }[];
}

const UserFileList: FC<IFileList> = ({className, items}) => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [optionMenuActive, setOptionMenuActive] = useState<number>(null);
    const [option, setOption] = useState<string>("");
    const [fileName, setFileName] = useState<string>(null);

    useEffect(() => {
        if (option === "Выгрузить") {
            openExportModal();
        } else if (option === "Удалить") {
            openFileDeletePopup();
        } 
        setOption(null);
    }, [option]);

    const toggleOptionMenu = (idx: number): void => {
        if (optionMenuActive == idx) {
            if (menuActive == true) {
                setMenuActive(false);
            } else {
                setMenuActive(true);
            }
        } else {
            setMenuActive(true);
        }
        setOptionMenuActive(idx);
        setFileName(items[idx].media.name);
    }

    const {
        openModal: openExportModal,
        modal: exportModal
    } = useModal(ExportModal, {fileName});
    const {
        openModal: openFileDeletePopup,
        modal: fileDeletePopup
    } = useModal(FileDeletePopup, {fileName});
    
    return (
        <UserFileListBody className={className}>
            {items.map((item, idx) => {
                return (
                    <UserFileListBlock key={idx}>
                        <UserFileListItem>
                            <UserFileListItemBackgroundLayer />
                            {className !== "folder_page" && (
                                <>
                                    <UserFileListItemMobileFolderName to={`/app/folders/${item.folder.id}`}>
                                        {item.folder.name}
                                    </UserFileListItemMobileFolderName>
                                    <UserFileListItemMobileLine />
                                </>
                            )}
                            <UserFileListItemContent>
                                {item.status.code < 7 && (
                                    <LoadingIconSVG />
                                )}
                                {item.status.code === 7 && (
                                    <UserFileListItemIcon alt="complete" src="/images/file-complete.svg" />
                                )}
                                <UserFileListItemInfoBlock>
                                    {item.status.code < 7 && (
                                        <LoadingIconMobileSVG />
                                    )}
                                    {item.status.code === 7 && (
                                        <UserFileListItemMobileIcon alt="complete" src="/images/file-complete.svg" />
                                    )}
                                    <UserFileListItemInfoColumnWrapper>
                                        <UserFileListItemFilenameBlock>
                                            <UserFileListItemFilename>{item.media.name.slice(0,-4)}</UserFileListItemFilename>
                                            {/* {item.edited === true && (
                                                <UserFileListItemFilenameEdited alt="edited" src="/images/file-edited.svg" />
                                            )} */}
                                            {className != "folder_page" && (
                                                <UserFileListItemFolderName to={`/app/folders/${item.folder.id}`}>
                                                    {item.folder.name}
                                                </UserFileListItemFolderName>
                                            )}
                                        </UserFileListItemFilenameBlock>
                                        <UserFileListItemInfoRowWrapper>
                                            <UserFileListItemFileLength>{parseFileLength(item.media.lengthMs)}</UserFileListItemFileLength>
                                            <UserFileListItemFileDate>
                                                {parseDate(item.info.creation_datetime)}
                                            </UserFileListItemFileDate>
                                        </UserFileListItemInfoRowWrapper>
                                    </UserFileListItemInfoColumnWrapper>
                                </UserFileListItemInfoBlock>
                                <UserFileListItemInfoButtonsWrapper>
                                    <UserFileListItemOpenButton 
                                        className={item.status.code < 7 ? "is_processing" : ""}
                                        to={`/app/folders/${item.folder.id}/${item.id}`}
                                    >
                                        Открыть
                                    </UserFileListItemOpenButton>
                                    <UserFileListItemOptionsButton 
                                        className={item.status.code < 7 ? "is_processing" : ""}
                                        onClick={() => {toggleOptionMenu(idx)}}
                                    >
                                        <UserFileListItemOptionsButtonIcon className="circle" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="13" r="2" />
                                            <circle cx="20" cy="20" r="2" />
                                            <circle cx="20" cy="27" r="2" />
                                        </UserFileListItemOptionsButtonIcon>
                                    </UserFileListItemOptionsButton>
                                    {optionMenuActive === idx && menuActive === true && (
                                        <SmallComboBox 
                                            className="filelist_box" 
                                            setMenuActive={setMenuActive} 
                                            setOption={setOption}
                                            options={fileOptions}
                                        />
                                    )}
                                </UserFileListItemInfoButtonsWrapper>
                            </UserFileListItemContent>
                        </UserFileListItem>
                    </UserFileListBlock>
                );
            })}
            {exportModal}
            {fileDeletePopup}
        </UserFileListBody>
    );
}

export default UserFileList;