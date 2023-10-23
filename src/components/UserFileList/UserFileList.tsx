import { FC, useEffect, useState } from "react";
import { 
    UserFileListBody,
    UserFileListBlock,
    UserFileListItem,
    UserFileListItemBackgroundLayer,
    UserFileListItemContent,
    UserFileListItemIcon,
    UserFileListItemSVG,
    UserFileListItemMobileIcon,
    UserFileListItemMobileSVG,
    UserFileListItemInfoBlock,
    UserFileListItemInfoColumnWrapper,
    UserFileListItemInfoRowWrapper,
    UserFileListItemFilenameBlock,
    UserFileListItemFilename,
    UserFileListItemFilenameEdited,
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
import { parseDate } from "../../utils/parseDate";
import { parseFileLength } from "../../utils/parseFileLength";
import SmallComboBox from "components/SmallComboBox/SmallComboBox";
import useModal from "hooks/useModal";
import ExportModal from "components/Modals/ExportModal/ExportModal";
import FileDeletePopup from "components/Popups/FileDeletePopup/FileDeletePopup";

interface IUserFilesList {
    className?: string;
    fileState?: string;
    items: {
        fileName: string;
        fileLength: number;
        fileDate: string;
        folderName?: string;
        edited?: boolean;
    }[];
}

const UserFileList: FC<IUserFilesList> = ({className, fileState, items}) => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [optionMenuActive, setOptionMenuActive] = useState<number>(null);
    const [option, setOption] = useState<string>("");
    const [fileName, setFileName] = useState<string>(null);

    const options = [
        {
            name: "Выгрузить"
        },
        {
            name: "Удалить"
        }
    ];
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
        setFileName(items[idx].fileName);
    }

    const {
        closeModal: closeExportModal,
        openModal: openExportModal,
        modal: exportModal
    } = useModal(ExportModal, {fileName});
    const {
        closeModal: closeFileDeletePopup,
        openModal: openFileDeletePopup,
        modal: fileDeletePopup
    } = useModal(FileDeletePopup, {fileName});

    useEffect(() => {
        if (option === "Выгрузить") {
            openExportModal();
        } else if (option === "Удалить") {
            openFileDeletePopup();
        } 
        setOption(null);
    }, [option]);
    
    return (
        <UserFileListBody className={className}>
            {items.map((item, idx) => {
                return (
                    <UserFileListBlock key={idx}>
                        <UserFileListItem>
                            <UserFileListItemBackgroundLayer />
                            {className != "folderPage" && (
                                <>
                                <UserFileListItemMobileFolderName to={`/app/folders/${item.folderName}`}>{item.folderName}</UserFileListItemMobileFolderName>
                                <UserFileListItemMobileLine />
                                </>
                            )}
                            <UserFileListItemContent>
                                {fileState === "isProcessing" && (
                                    <UserFileListItemSVG viewBox="0 0 48 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_338_484)">
                                        <path d="M6.83363 0C3.06147 0 0 3.11504 0 6.95322V59.0468C0 62.8849 3.06147 66 6.83363 66H41.1664C44.9385 66 48 62.8849 48 59.0468V18.48L29.8378 0H6.83363Z" fill="#292A3C"/>
                                        <path d="M29.8418 0V11.7404C29.8418 15.4606 32.8092 18.48 36.4655 18.48H48.004L29.8418 0Z" fill="#202130"/>
                                        </g>
                                        <g>
                                        <circle className="UploadCircle6" cx="17" cy="29" r="2.3" fill="#79768B" fill-opacity="0.25"/>
                                        <circle className="UploadCircle5" cx="17" cy="37" r="2.3" fill="#79768B" fill-opacity="0.25"/>
                                        <circle className="UploadCircle4" cx="24" cy="41" r="2.3" fill="#79768B" fill-opacity="0.25"/>
                                        <circle className="UploadCircle3" cx="31" cy="37" r="2.3" fill="#79768B" fill-opacity="0.25"/>
                                        <circle className="UploadCircle2" cx="31" cy="29" r="2.3" fill="#79768B" fill-opacity="0.25"/>
                                        <circle className="UploadCircle1" cx="24" cy="25" r="2.3" fill="#79768B" fill-opacity="0.25"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_338_484">
                                        <rect width="48" height="66" fill="white"/>
                                        </clipPath>
                                        <clipPath id="clip1_338_484">
                                        <rect width="20" height="20" fill="white" transform="translate(14 27)"/>
                                        </clipPath>
                                        </defs>
                                    </UserFileListItemSVG>
                                )}
                                {fileState === "isReady" && (
                                    <UserFileListItemIcon alt="complete" src="/images/file-complete.svg" />
                                )}
                                <UserFileListItemInfoBlock>
                                    {fileState === "isProcessing" && (
                                        <UserFileListItemMobileSVG viewBox="0 0 48 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_338_484)">
                                            <path d="M6.83363 0C3.06147 0 0 3.11504 0 6.95322V59.0468C0 62.8849 3.06147 66 6.83363 66H41.1664C44.9385 66 48 62.8849 48 59.0468V18.48L29.8378 0H6.83363Z" fill="#292A3C"/>
                                            <path d="M29.8418 0V11.7404C29.8418 15.4606 32.8092 18.48 36.4655 18.48H48.004L29.8418 0Z" fill="#202130"/>
                                            </g>
                                            <g clip-path="url(#clip1_338_484)">
                                            <circle className="UploadCircle1" cx="17" cy="33" r="2" transform="rotate(90 17 33)" fill="#79768B" fill-opacity="0.25"/>
                                            <circle className="UploadCircle2" cx="17" cy="41" r="2" transform="rotate(90 17 41)" fill="#79768B" fill-opacity="0.25"/>
                                            <circle className="UploadCircle3" cx="24" cy="45" r="2" transform="rotate(90 24 45)" fill="#79768B" fill-opacity="0.25"/>
                                            <circle className="UploadCircle4" cx="31" cy="41" r="2" transform="rotate(90 31 41)" fill="#79768B" fill-opacity="0.25"/>
                                            <circle className="UploadCircle5" cx="31" cy="33" r="2" transform="rotate(90 31 33)" fill="#79768B" fill-opacity="0.25"/>
                                            <circle className="UploadCircle6" cx="24" cy="29" r="2" transform="rotate(90 24 29)" fill="#79768B" fill-opacity="0.25"/>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_338_484">
                                            <rect width="48" height="66" fill="white"/>
                                            </clipPath>
                                            <clipPath id="clip1_338_484">
                                            <rect width="20" height="20" fill="white" transform="translate(14 27)"/>
                                            </clipPath>
                                            </defs>
                                        </UserFileListItemMobileSVG>
                                    )}
                                    {fileState === "isReady" && (
                                        <UserFileListItemMobileIcon alt="complete" src="/images/file-complete.svg" />
                                    )}
                                    <UserFileListItemInfoColumnWrapper>
                                        <UserFileListItemFilenameBlock>
                                            <UserFileListItemFilename>{item.fileName}</UserFileListItemFilename>
                                            {item.edited === true && (
                                                <UserFileListItemFilenameEdited alt="edited" src="/images/file-edited.svg" />
                                            )}
                                        </UserFileListItemFilenameBlock>
                                        <UserFileListItemInfoRowWrapper>
                                            <UserFileListItemFileLength>{parseFileLength(item.fileLength)}</UserFileListItemFileLength>
                                            <UserFileListItemFileDate className={fileState === "isUploading" ? "UploadingItem" : ""}>{parseDate(item.fileDate)}</UserFileListItemFileDate>
                                        </UserFileListItemInfoRowWrapper>
                                    </UserFileListItemInfoColumnWrapper>
                                </UserFileListItemInfoBlock>
                                {className != "folderPage" && (
                                    <UserFileListItemFolderName to={`/app/folders/${item.folderName}`}>{item.folderName}</UserFileListItemFolderName>
                                )}
                                <UserFileListItemInfoButtonsWrapper>
                                    <UserFileListItemOpenButton className={fileState} to={`/app/folders/${item.folderName}/${item.fileName}`}>Открыть</UserFileListItemOpenButton>
                                    <UserFileListItemOptionsButton className={fileState} onClick={() => {toggleOptionMenu(idx)}}>
                                        <UserFileListItemOptionsButtonIcon className="circle" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="20" cy="13" r="2" />
                                            <circle cx="20" cy="20" r="2" />
                                            <circle cx="20" cy="27" r="2" />
                                        </UserFileListItemOptionsButtonIcon>
                                    </UserFileListItemOptionsButton>
                                        {optionMenuActive == idx && menuActive == true && (
                                            <SmallComboBox 
                                                className="filelist-box" 
                                                setMenuActive={setMenuActive} 
                                                setOption={setOption}
                                                options={options}
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