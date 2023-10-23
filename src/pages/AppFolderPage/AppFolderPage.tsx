import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import AppInterface from "../../layouts/App/AppInterface";
import { 
    AppFolderPageBlock,
    AppFolderPageFoldersBlock,
    AppFolderPageFoldersBlockTitle,
    AppFolderPageLineBlock,
    AppFolderPageLine,
    AppFolderPageEmptyContent,
    AppFolderPageEmptyOutputBlock,
    AppFolderPageEmptyOutputIcon,
    AppFolderPageEmptyOutputText
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
    edited?: boolean;
}

const AppFolder: FC<IAppFolder> = ({folder, query, sortType, sortByField}) => {
    const [items, setItems] = useState([
        {
            fileName: "Имя файла 1",
            fileLength: 3643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: folder,
            status: "processing"
        },
        {
            fileName: "Имя файла 2",
            fileLength: 3643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: folder,
            status: "ready"
        },
        {
            fileName: "Имя файла 3",
            fileLength: 7643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: folder,
            status: "ready"
        },
        {
            fileName: "Имя файла 4",
            fileLength: 7113.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: folder,
            status: "ready"
        }]);
    const [processingList, setProcessingList] = useState<Array<IFileData>>([]);
    const [readyList, setReadyList] = useState<Array<IFileData>>([]);
    
    function sortFunc(results: IFileData[], sortType: string, sortByField: string) {
        if (sortType === "ascending") {
            results.sort((a, b) => a[sortByField] < b[sortByField] ? -1 : 1)  
        }
        else if (sortType === "descending") {
            results.sort((a, b) => b[sortByField] > a[sortByField] ? 1 : -1)
        }
        return results;
    }

    useEffect(() => {
        var filteredList = [...items];
        filteredList = items.filter((item) => {
            if (query === "") {
                return item;
            } else {
                if (item.fileName.toLowerCase().includes(query)) {
                    return item;
                }
            }
        });
        const processingFiles = filteredList.filter((item) => {
            return item.status === "processing";
        });
        const readyFiles = filteredList.filter((item) => {
            return item.status === "ready";
        });
        const processingData = sortFunc(processingFiles, sortType, sortByField);
        const readyData = sortFunc(readyFiles, sortType, sortByField);
        setProcessingList(processingData);
        setReadyList(readyData);
    }, [query, sortType, sortByField]);
    
    if (processingList.length === 0 && readyList.length === 0 && query !== "") {
        return (
            <AppFolderPageEmptyContent>
                <AppFolderPageEmptyOutputBlock>
                    <AppFolderPageEmptyOutputIcon alt="search" src="/images/search-result.svg" />
                    <AppFolderPageEmptyOutputText>
                        К сожалению ничего не найдено
                    </AppFolderPageEmptyOutputText>
                </AppFolderPageEmptyOutputBlock>
            </AppFolderPageEmptyContent>
        );
    } else if (processingList.length === 0 && readyList.length === 0) {
        return (
            <AppFolderPageEmptyContent>
                <AppFolderPageEmptyOutputBlock>
                    <AppFolderPageEmptyOutputIcon alt="upload" src="/images/upload-icon.svg" />
                    <AppFolderPageEmptyOutputText>
                        <span>Загрузите первый файл для начала работы с приложением</span>
                    </AppFolderPageEmptyOutputText>
                    <AppFolderPageEmptyOutputText className="additionalTextField">
                    В текущем разделе будут отображены загруженные вам файлы для обработки
                    </AppFolderPageEmptyOutputText>
                </AppFolderPageEmptyOutputBlock>
            </AppFolderPageEmptyContent>
        );
    } else {
        return (
            <AppFolderPageBlock>
                {processingList.length > 0 && (
                    <AppFolderPageFoldersBlock>
                        <AppFolderPageFoldersBlockTitle>Расшифровка</AppFolderPageFoldersBlockTitle>
                        <AppFolderPageLineBlock>
                            <AppFolderPageLine />
                        </AppFolderPageLineBlock>
                        <UserFileList className="folderPage" fileState="isProcessing" items={processingList}></UserFileList>
                    </AppFolderPageFoldersBlock>
                )}
                {readyList.length > 0 && (
                    <AppFolderPageFoldersBlock>
                        <AppFolderPageFoldersBlockTitle>Завершено</AppFolderPageFoldersBlockTitle>
                        <AppFolderPageLineBlock>
                            <AppFolderPageLine />
                        </AppFolderPageLineBlock>
                        <UserFileList className="folderPage" fileState="isReady" items={readyList}></UserFileList>
                    </AppFolderPageFoldersBlock>
                )}
            </AppFolderPageBlock>
        );
    }
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