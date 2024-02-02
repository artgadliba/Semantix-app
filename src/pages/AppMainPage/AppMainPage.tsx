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
import { useSelector } from "react-redux";
import { RootState } from "slices";
import axios from "axios";

interface IFile {
    folder: {
        id: number;
        name: string;
    }
    id: number;
    info: {
        creation_datetime: string;
    }
    length: number;
    name: string;
    status: {
        code: number;
    }
}

const AppMain: FC = () => {
    const query = useSelector((state: RootState) => state.searchQuery.value);
    const sortType = useSelector((state: RootState) => state.sortType.value);
    const sortByField = useSelector((state: RootState) => state.sortByField.value);
    const updateFilelist = useSelector((state: RootState) => state.updateFileList.value);
    const [items, setItems] = useState<Array<IFile>>([]);
    const [fileList, setFileList] = useState<Array<IFile>>(null);

    // useEffect(() => {
    //     if (localStorage.getItem("jwt-tokens")) {
    //         axios.get("/api/users/current/files/0,10", {
    //             headers: {
    //                 "jwt-tokens": localStorage.getItem("jwt-tokens")
    //             }
    //         })
    //         .then((res) => {
    //             if (res.headers && "jwt-tokens" in res.headers) {
    //                 localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
    //             }
    //             if (res.data) {
    //                 setItems(res.data);
    //             } else {
    //                 setItems([]);
    //             }
    //         })
    //         .catch((err) => {
    //             if (err.headers && "jwt-tokens" in err.headers) {
    //                 localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
    //             }
    //             console.log(err);
    //             window.location.href = "/#login";
    //         })
    //     } else {
    //         window.location.href = "/#login";
    //     }
    // },[updateFilelist]);
    
    useEffect(() => {
        if (items) {
            let filteredList = [...items];
            if (query !== "") {
                filteredList = items.filter((item) => { 
                    return item.name.toLowerCase().startsWith(query)
                });
            }
            const filesData = sortFunc(filteredList, sortType, sortByField);
            setFileList(filesData);
        }
    }, [items, query, sortType, sortByField]);

    function sortFunc(results: IFile[], sortType: string, sortByField: string): IFile[] {
        if (sortType === "ascending") {
            results.sort((a, b) => a[sortByField].toLowerCase() < b[sortByField].toLowerCase() ? -1 : 1);
        }
        else if (sortType === "descending") {
            results.sort((a, b) => b[sortByField].toLowerCase() > a[sortByField].toLowerCase() ? 1 : -1);
        }
        return results;
    }
    
    if (items && fileList) {
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
                        <AppMainPageEmptyOutputText className="additional_text_field">
                            В текущем разделе будут отображены последние 10 загруженных файлов
                        </AppMainPageEmptyOutputText>
                    </AppMainPageEmptyOutputBlock>
                </AppMainPageEmptyContent>
            );
        } else {
            return (
                <AppMainPageBlock>
                    <AppMainPageTitle>Последние загруженные</AppMainPageTitle>
                    <AppMainPageText>
                        В этом разделе отображаются последние 10 загруженных файлов
                    </AppMainPageText>
                    <UserFileList items={fileList}/>
                    <AppMainPageBottomLineBlock>
                        <AppMainPageBottomLine />
                    </AppMainPageBottomLineBlock>
                 </AppMainPageBlock>
            );
        }
    }
}

const AppMainPage = () => {
    return (
        <AppInterface headerTitle="Главная" controlBar={true}>
            <AppMain />
        </AppInterface>
    );
}

export default AppMainPage;