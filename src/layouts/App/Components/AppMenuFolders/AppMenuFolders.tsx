import { FC, useEffect, useState } from "react";
import { 
    AppMenuFoldersBlock,
    AppMenuFoldersAddNewFolderButton,
    AppMenuFoldersAddNewFolderIcon,
    AppMenuFoldersAddNewFolderTitle,
    AppMenuFoldersLine,
    AppMenuFoldersContent,
    AppMenuFoldersContentFolderBlock,
    AppMenuFoldersContentFolderIcon,
    AppMenuFoldersContentFolderTitle,
 } from "./AppMenuFoldersStyle";
import sliceLongFoldername from "utils/sliceLongFoldername";

interface IAppFolderObj {
    id: number;
    name: string;
}

interface IAppMenuFolders {
    setIsOpen?: (state: boolean) => void;
    openModal: () => void;
    folderList: IAppFolderObj[];
}

const AppMenuFolders: FC<IAppMenuFolders> = ({ setIsOpen, openModal, folderList}) => {
    const handleMobileNewFolderModal = () => {
        const { innerWidth: width} = window;
        if (width <= 500) {
            setIsOpen(false);
        }
        openModal();
    };
    
    return (
        <AppMenuFoldersBlock>
            <AppMenuFoldersAddNewFolderButton onClick={handleMobileNewFolderModal}>
                <AppMenuFoldersAddNewFolderIcon width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="17" height="17" rx="3.5" />
                    <path d="M9.5 6V13M6 9.5H13" strokeLinecap="round" strokeLinejoin="round"/>
                </AppMenuFoldersAddNewFolderIcon>
                <AppMenuFoldersAddNewFolderTitle>Новая папка</AppMenuFoldersAddNewFolderTitle>
            </AppMenuFoldersAddNewFolderButton>
            <AppMenuFoldersLine />
            {folderList.length > 0 && (
                <>
                    <AppMenuFoldersContent>
                        {folderList.map((item, idx) => {
                            return (
                                <AppMenuFoldersContentFolderBlock key={idx} to={`/app/folders/${item.name}`}>
                                    <AppMenuFoldersContentFolderIcon width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3" r="3" />
                                    </AppMenuFoldersContentFolderIcon>
                                    <AppMenuFoldersContentFolderTitle>{sliceLongFoldername(item.name, "foldersMenu")}</AppMenuFoldersContentFolderTitle>
                                </AppMenuFoldersContentFolderBlock>
                            );
                        })}
                    </AppMenuFoldersContent>
                    <AppMenuFoldersLine />
                </>
            )}
        </AppMenuFoldersBlock>
    );
}

export default AppMenuFolders;