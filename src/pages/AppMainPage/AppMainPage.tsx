import { FC, useState, useEffect } from "react";
import { 
    AppMainPageBlock,
    AppMainPageTitle,
    AppMainPageText,
    AppMainPageBottomLineBlock,
    AppMainPageBottomLine
} from "./AppMainPageStyles";
import AppInterface from "../../layouts/App/AppInterface";
import UserFileList from "components/UserFileList/UserFileList";

interface IAppMain {
    query?: string;
    sortType?: string;
    sortByField?: string;
}

interface ILatestFileData {
    fileName: string;
    fileLength: number;
    fileDate: string;
    folderName: string;
    status: string;
}

const AppMain: FC<IAppMain> = ({query, sortType, sortByField}) => {
    const [fileList, setFileList] = useState<Array<ILatestFileData>>([]);
    const items = [
        {
            fileName: "Имя файла 1",
            fileLength: 3643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: "Папка 1"
        },
        {
            fileName: "Имя файла 2",
            fileLength: 7643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: "Папка 1"
        },
        {
            fileName: "Имя файла 3",
            fileLength: 7113.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: "Папка 1"
        },
        {
            fileName: "Имя файла 1",
            fileLength: 3643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: "Папка 2"
        },
        {
            fileName: "Имя файла 2",
            fileLength: 7643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: "Папка 2"
        },
        {
            fileName: "Имя файла 3",
            fileLength: 7113.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: "Папка 2"
        },{
            fileName: "Имя файла 1",
            fileLength: 3643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: "Папка 3"
        },
        {
            fileName: "Имя файла 2",
            fileLength: 7643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: "Папка 3"
        },
        {
            fileName: "Имя файла 3",
            fileLength: 7113.23,
            fileDate: "2023-07-27T09:55:15.209Z",
            folderName: "Папка 3"
        }
    ];

    const filteredData = items.filter((item) => {
        if (query === "") {
            return item;
        } else {
            return item.fileName.toLowerCase().includes(query);
        }
    })

    function sortFunc(results, sortType, sortByField) {
        if (sortType === "ascending") {
            results.sort((a, b) => a[sortByField] < b[sortByField] ? -1 : 1)  
        }
        else if (sortType === "descending") {
            results.sort((a, b) => b[sortByField] > a[sortByField] ? 1 : -1)
        }
        return results;
    }

    useEffect(() => {
        const filesData = sortFunc(filteredData, sortType, sortByField);
        setFileList(filesData);
    }, [sortType, sortByField]);

    return (
        <AppMainPageBlock>
            <AppMainPageTitle>Последние загруженные</AppMainPageTitle>
            <AppMainPageText>
                В этом разделе отображаются файлы загруженные за последние 7 дней
            </AppMainPageText>
            <UserFileList items={fileList}/>
            <AppMainPageBottomLineBlock>
                <AppMainPageBottomLine />
            </AppMainPageBottomLineBlock>
         </AppMainPageBlock>
    );
}

const AppMainPage: FC<IAppMain> = () => {
    return (
        <AppInterface headerTitle="Главная" controlBar={true}>
            <AppMain />
        </AppInterface>
    );
}

export default AppMainPage;