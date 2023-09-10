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
import { parseDate } from "../../utils/parseDate";
import { parseFileLength } from "../../utils/parseFileLength";
import SmallComboBox from "components/SmallComboBox/SmallComboBox";

interface IUserFilesList {
    className?: string;
    linkState?: string;
    items: {
        fileName: string;
        fileLength: number;
        fileDate: string;
        folderName?: string;
    }[];
}

const UserFileList: FC<IUserFilesList> = ({className, linkState, items}) => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [optionMenuActive, setOptionMenuActive] = useState<number>(null);
    const [option, setOption] = useState<string>("");
    const options = [
        {
            name: "Действие 1"
        },
        {
            name: "Действие 2"
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
    }
    
    if (items.length > 0) {
        return (
            <UserFileListBody className={className}>
                {items.map((item, idx) => {
                    return (
                        <UserFileListBlock key={idx}>
                            <UserFileListItem>
                                <UserFileListItemBackgroundLayer />
                                {className != "folderPage" && (
                                    <>
                                    <UserFileListItemMobileFolderName to={`/folders/${item.folderName}`}>{item.folderName}</UserFileListItemMobileFolderName>
                                    <UserFileListItemMobileLine />
                                    </>
                                )}
                                <UserFileListItemContent>
                                    {linkState == "isInactive" ? (
                                        <UserFileListItemIcon alt="processing" src="/images/file-processing.svg" />
                                    ) : (
                                        <UserFileListItemIcon alt="complete" src="/images/file-complete.svg" />
                                    )}
                                    <UserFileListItemInfoBlock>
                                        {linkState == "isInactive" ? (
                                            <UserFileListItemMobileIcon alt="processing" src="/images/file-processing.svg" />
                                        ) : (
                                            <UserFileListItemMobileIcon alt="complete" src="/images/file-complete.svg" />
                                        )}
                                        <UserFileListItemInfoColumnWrapper>
                                            <UserFileListItemFilename>{item.fileName}</UserFileListItemFilename>
                                            <UserFileListItemInfoRowWrapper>
                                                <UserFileListItemFileLength>{parseFileLength(item.fileLength)}</UserFileListItemFileLength>
                                                <UserFileListItemFileDate>{parseDate(item.fileDate)}</UserFileListItemFileDate>
                                            </UserFileListItemInfoRowWrapper>
                                        </UserFileListItemInfoColumnWrapper>
                                    </UserFileListItemInfoBlock>
                                    {className != "folderPage" && (
                                        <UserFileListItemFolderName to={`/folders/${item.folderName}`}>{item.folderName}</UserFileListItemFolderName>
                                    )}
                                    <UserFileListItemInfoButtonsWrapper>
                                        <UserFileListItemOpenButton className={linkState} to={`/folders/${item.folderName}/${item.fileName}`}>Открыть</UserFileListItemOpenButton>
                                        <UserFileListItemOptionsButton className={linkState} onClick={() => {toggleOptionMenu(idx)}}>
                                            <UserFileListItemOptionsButtonIcon className="circle" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="20" cy="13" r="2" />
                                                <circle cx="20" cy="20" r="2" />
                                                <circle cx="20" cy="27" r="2" />
                                            </UserFileListItemOptionsButtonIcon>
                                        </UserFileListItemOptionsButton>
                                            {optionMenuActive == idx && menuActive == true && (
                                                <SmallComboBox className="filelist-box" setMenuActive={setMenuActive} setOption={setOption} options={options} />
                                            )}
                                    </UserFileListItemInfoButtonsWrapper>
                                </UserFileListItemContent>
                            </UserFileListItem>
                        </UserFileListBlock>
                    );
                })}
            </UserFileListBody>
        );
    }
}

export default UserFileList;