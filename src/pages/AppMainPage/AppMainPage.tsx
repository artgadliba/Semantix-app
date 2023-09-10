import { FC, useEffect } from "react";
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
}

const AppMain: FC<IAppMain> = ({query}) => {
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
    return (
        <AppMainPageBlock>
            <AppMainPageTitle>Последние загруженные</AppMainPageTitle>
            <AppMainPageText>
                В этом разделе отображаются файлы загруженные за последние 7 дней
            </AppMainPageText>
            <UserFileList items={filteredData}/>
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