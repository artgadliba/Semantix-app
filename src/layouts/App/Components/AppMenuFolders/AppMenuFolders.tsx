import { FC, useEffect } from "react";
import { 
    AppMenuFoldersBlock,
    AppMenuFoldersAddNewFolderButton,
    AppMenuFoldersAddNewFolderIcon,
    AppMenuFoldersAddNewFolderTitle,
    AppMenuFoldersLine,
    AppMenuFoldersContent,
    AppMenuFoldersContentFolderLink,
    AppMenuFoldersContentFolderIcon,
    AppMenuFoldersContentFolderTitle,
    AppMenuFoldersScrollbarTrack,
    AppMenuFoldersScrollbarThumb
 } from "./AppMenuFoldersStyle";
import sliceLongFoldername from "utils/sliceLongFoldername";

interface IAppFolderObj {
    id: number;
    name: string;
}

interface IAppMenuFolders {
    onClose?: () => void;
    openModal: () => void;
    folderList: IAppFolderObj[];
}

const AppMenuFolders: FC<IAppMenuFolders> = ({ onClose, openModal, folderList}) => {
    useEffect(() => {
        if (folderList.length > 3) {
            let clippedHeight = document.getElementById("folders_content").offsetHeight;
            let contentBlock = document.querySelector("#folders_content");

            const trackHeight = document.getElementById("folders_scrollbar_track").offsetHeight;
            const thumbHeight = trackHeight * (clippedHeight / (folderList.length * 40));
            document.getElementById("folders_scrollbar_thumb").style.height = `${thumbHeight}px`;

            contentBlock.addEventListener("scroll", function() {
                handleFolderlistScroll(contentBlock, contentBlock.scrollHeight, trackHeight);
            });
            contentBlock.addEventListener("touchmove", function(e) { e.stopPropagation(); });
            return () => {
                contentBlock.removeEventListener("scroll", function() {
                    handleFolderlistScroll(contentBlock, contentBlock.scrollHeight, trackHeight);
                });
                contentBlock.removeEventListener("touchmove", function(e) { e.stopPropagation(); });
            }
        }
    }, [folderList]);

    function handleFolderlistScroll(
        element: HTMLElement | Element, 
        scrollHeight: number, 
        trackHeight: number): void 
    {
        const value = element.scrollTop / (scrollHeight / trackHeight);
        document.getElementById("folders_scrollbar_thumb").style.transform = `translate3d(0px, ${value}px, 0px`;
    }

    const handleMobileNewFolderModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        openModal();
    };

    const items = folderList.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);

    return (
        <AppMenuFoldersBlock>
            <AppMenuFoldersAddNewFolderButton onClick={(e) => { handleMobileNewFolderModal(e); }}>
                <AppMenuFoldersAddNewFolderIcon width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="1" width="17" height="17" rx="3.5" />
                    <path d="M9.5 6V13M6 9.5H13" strokeLinecap="round" strokeLinejoin="round"/>
                </AppMenuFoldersAddNewFolderIcon>
                <AppMenuFoldersAddNewFolderTitle>
                    Новая папка
                </AppMenuFoldersAddNewFolderTitle>
            </AppMenuFoldersAddNewFolderButton>
            <AppMenuFoldersLine />
            {items && items.length > 0 && (
                <>
                    <AppMenuFoldersContent id="folders_content">
                        {folderList.map((item, idx) => {
                            return (
                                <AppMenuFoldersContentFolderLink
                                    key={idx} 
                                    to={`/app/folders/${item.id}`}
                                    onClick={onClose}
                                >
                                    <AppMenuFoldersContentFolderIcon width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="3" cy="3" r="3" />
                                    </AppMenuFoldersContentFolderIcon>
                                    <AppMenuFoldersContentFolderTitle>
                                        {sliceLongFoldername(item.name, "foldersMenu")}
                                    </AppMenuFoldersContentFolderTitle>
                                </AppMenuFoldersContentFolderLink>
                            );
                        })}
                        <AppMenuFoldersScrollbarTrack id="folders_scrollbar_track">
                            <AppMenuFoldersScrollbarThumb id="folders_scrollbar_thumb" />
                        </AppMenuFoldersScrollbarTrack>
                    </AppMenuFoldersContent>
                    <AppMenuFoldersLine />
                </>
            )}
        </AppMenuFoldersBlock>
    );
}

export default AppMenuFolders;