import { FC } from "react";
import { 
    AppMainPageBlock,
    AppMainPageTitle,
    AppMainPageText,
    AppMainPageBottomLineBlock,
    AppMainPageBottomLine
} from "./AppMainPageStyles";
import AppInterface from "../../layouts/App/AppInterface";
import UserFileList from "components/UserFileList/UserFileList";

const AppMainPage: FC = () => {
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
    return (
        <AppInterface headerTitle="Главная" controlBar={true}>
            <AppMainPageBlock>
            <AppMainPageTitle>Последние загруженные</AppMainPageTitle>
            <AppMainPageText>
                В этом разделе отображаются файлы загруженные за последние 7 дней
            </AppMainPageText>
            <UserFileList items={items}/>
            <AppMainPageBottomLineBlock>
                <AppMainPageBottomLine />
            </AppMainPageBottomLineBlock>
            </AppMainPageBlock>
        </AppInterface>
    );
}

export default AppMainPage;