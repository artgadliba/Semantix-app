import { FC, useState, useEffect } from "react";
import { 
    AppMainPageBlock,
    AppMainPageTitle,
    AppMainPageText,
    AppMainPageBottomLineBlock,
    AppMainPageBottomLine,
    AppMainPageEmptyContent,
    AppMainPageEmptyOutputBlock,
    AppMainPageEmptyOutputIcon,
    AppMainPageEmptyOutputText
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
    const [items, setItems] = useState([]);
    const [fileList, setFileList] = useState<Array<ILatestFileData>>([]);

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
        var filteredList = [...items];
        filteredList = items.filter((item) => {
            if (query === "") {
                return item;
            } else {
                if (item.fileName.toLowerCase().includes(query)) {
                    return item;
                }
            }
        })
        const filesData = sortFunc(filteredList, sortType, sortByField);
        setFileList(filesData);
    }, [query, sortType, sortByField]);

    if (fileList.length === 0 && query !== "") {
        return (
            <AppMainPageEmptyContent>
                <AppMainPageEmptyOutputBlock>
                    <AppMainPageEmptyOutputIcon alt="search" src="/images/search-result.svg" />
                    <AppMainPageEmptyOutputText>
                        К сожалению ничего не найдено
                    </AppMainPageEmptyOutputText>
                </AppMainPageEmptyOutputBlock>
            </AppMainPageEmptyContent>
        );
    } else if (fileList.length === 0) {
        return (
            <AppMainPageEmptyContent>
                <AppMainPageEmptyOutputBlock>
                    <AppMainPageEmptyOutputIcon alt="upload" src="/images/upload-icon.svg" />
                    <AppMainPageEmptyOutputText>
                        <span>Загрузите первый файл для начала работы с приложением</span>
                    </AppMainPageEmptyOutputText>
                    <AppMainPageEmptyOutputText className="additionalTextField">
                        В текущем разделе будут отображены загруженные вами за последние 7 дней файлы
                    </AppMainPageEmptyOutputText>
                </AppMainPageEmptyOutputBlock>
            </AppMainPageEmptyContent>
        );
    } else {
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
}

const AppMainPage: FC<IAppMain> = () => {
    return (
        <AppInterface headerTitle="Главная" controlBar={true}>
            <AppMain />
        </AppInterface>
    );
}

export default AppMainPage;