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

interface IAppMenuFolders {
    setIsOpen?: (state: boolean) => void;
    openModal: () => void;
    items: {
        folderName: string;
    }[];
}

const AppMenuFolders: FC<IAppMenuFolders> = ({items, setIsOpen, openModal}) => {
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
            {items.length > 0 && (
                <>
                <AppMenuFoldersContent>
                    {items.map((item, idx) => {
                        return (
                            <AppMenuFoldersContentFolderBlock key={idx} to={`/folders/${item.folderName}`}>
                                <AppMenuFoldersContentFolderIcon width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="3" r="3" />
                                </AppMenuFoldersContentFolderIcon>
                                <AppMenuFoldersContentFolderTitle>{item.folderName}</AppMenuFoldersContentFolderTitle>
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