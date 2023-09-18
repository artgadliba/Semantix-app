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
    sortType?: string;
    sortByField?: string;
}

interface IFileData {
    fileName: string;
    fileLength: number;
    fileDate: string;
    folderName: string;
    status: string;
}

const AppFolder: FC<IAppFolder> = ({folder, query, sortType, sortByField}) => {
    const [processingList, setProcessingList] = useState<Array<IFileData>>([]);
    const [readyList, setReadyList] = useState<Array<IFileData>>([]);
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
    
    function sortFunc(results, sortType, sortByField) {
        if (sortType === "ascending") {
            results.sort((a, b) => a[sortByField] < b[sortByField] ? -1 : 1)  
        }
        else if (sortType === "descending") {
            results.sort((a, b) => b[sortByField] > a[sortByField] ? 1 : -1)
        }
        return results;
    }

    const processingFiles = filteredData.filter((item) => {
        return item.status === "processing";
    });
    const readyFiles = filteredData.filter((item) => {
        return item.status === "ready";
    });

    useEffect(() => {
        const processingData = sortFunc(processingFiles, sortType, sortByField);
        const readyData = sortFunc(readyFiles, sortType, sortByField);
        setProcessingList(processingData);
        setReadyList(readyData);
    }, [sortType, sortByField]);

    return (
        <AppFolderPageBlock>
            {processingList.length > 0 ? (
                <AppFolderPageDecryptionBlock>
                    <AppFolderPageDecryptionTitle>Расшифровка</AppFolderPageDecryptionTitle>
                    <AppFolderPageLineBlock>
                        <AppFolderPageLine />
                    </AppFolderPageLineBlock>
                    <UserFileList className="folderPage" linkState="isInactive" items={processingList}></UserFileList>
                </AppFolderPageDecryptionBlock>
            ) : (
                <></>
            )}
            {readyList.length > 0 ? (
                <AppFolderPageTranscriptedBlock>
                    <AppFolderPageTranscriptedTitle>Завершено</AppFolderPageTranscriptedTitle>
                    <AppFolderPageLineBlock>
                        <AppFolderPageLine />
                    </AppFolderPageLineBlock>
                    <UserFileList className="folderPage" items={readyList}></UserFileList>
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