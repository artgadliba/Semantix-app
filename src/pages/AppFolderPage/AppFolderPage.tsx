import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import AppInterface from "../../layouts/App/AppInterface";
import { 
    AppFolderPageBlock,
    AppFolderPageDecryptionBlock,
    AppFolderPageDecryptionTitle,
    AppFolderPageLineBlock,
    AppFolderPageLine,
    AppFolderPageTranscriptedBlock,
    AppFolderPageTranscriptedTitle
} from "./AppFolderPageStyles";
import UserFileList from "components/UserFileList/UserFileList";

interface IAppFolder {
    folder: string;
    query?: string;
}

const AppFolder: FC<IAppFolder> = ({folder, query}) => {
    const items = [
        {
            fileName: "Имя файла 1",
            fileLength: 3643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: folder,
            status: "processing"
        },
        {
            fileName: "Имя файла 1",
            fileLength: 3643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: folder,
            status: "ready"
        },
        {
            fileName: "Имя файла 2",
            fileLength: 7643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: folder,
            status: "ready"
        },
        {
            fileName: "Имя файла 3",
            fileLength: 7113.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: folder,
            status: "ready"
        },
        {
            fileName: "Имя файла 1",
            fileLength: 3643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: folder,
            status: "ready"
        }
    ];
    const filteredData = items.filter((item) => {
        if (query === "") {
            return item;
        } else {
            return item.fileName.toLowerCase().includes(query);
        }
    });
    const processingFiles = filteredData.filter((item) => {
        return item.status === "processing";
    });
    const readyFiles = filteredData.filter((item) => {
        return item.status === "ready";
    });
    return (
        <AppFolderPageBlock>
            {processingFiles.length > 0 ? (
                <AppFolderPageDecryptionBlock>
                    <AppFolderPageDecryptionTitle>Расшифровка</AppFolderPageDecryptionTitle>
                    <AppFolderPageLineBlock>
                        <AppFolderPageLine />
                    </AppFolderPageLineBlock>
                    <UserFileList className="folderPage" linkState="isInactive" items={processingFiles}></UserFileList>
                </AppFolderPageDecryptionBlock>
            ) : (
                <></>
            )}
            {readyFiles.length > 0 ? (
                <AppFolderPageTranscriptedBlock>
                    <AppFolderPageTranscriptedTitle>Завершено</AppFolderPageTranscriptedTitle>
                    <AppFolderPageLineBlock>
                        <AppFolderPageLine />
                    </AppFolderPageLineBlock>
                    <UserFileList className="folderPage" items={readyFiles}></UserFileList>
                </AppFolderPageTranscriptedBlock>
            ) : (
                <></>
            )}
        </AppFolderPageBlock>
    )
}

const AppFolderPage: FC = () => {
    const folder = useParams();
    return (
        <AppInterface headerTitle={folder.folderName} controlBar={true}>
            <AppFolder folder={folder.folderName} />
        </AppInterface>
    );
}

export default AppFolderPage;