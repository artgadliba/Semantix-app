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
import { useSelector, useDispatch } from "react-redux";
import { setUploadFolder } from "slices/uploadFolderSlice";
import { RootState } from "slices";
import axios from "axios";

interface IMediaFile {
    id: number;
    folder: {
        id: number;
        name: string;
    }
    info: {
        creation_datetime: string;
    }
    media: {
        name: string;
        lengthMs: number;
    }
    status: {
        code: number;
    }
}

const AppMain = () => {
    const query = useSelector((state: RootState) => state.searchQuery.value);
    const sortType = useSelector((state: RootState) => state.sortType.value);
    const sortByField = useSelector((state: RootState) => state.sortByField.value);
    const updateFilelist = useSelector((state: RootState) => state.updateFileList.value);
    const [items, setItems] = useState<Array<IMediaFile>>([]);
    const [fileList, setFileList] = useState<Array<IMediaFile>>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setUploadFolder(null));
    }, []);

    useEffect(() => {
        if (localStorage.getItem("jwt-tokens")) {
            axios.get("/api/users/current/files/0,10", {
                headers: {
                    "jwt-tokens": localStorage.getItem("jwt-tokens")
                }
            })
            .then((res) => {
                if (res.headers && "jwt-tokens" in res.headers) {
                    localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
                }
                if (res.data) {
                    setItems(res.data);
                } else {
                    setFileList([]);
                }
            })
            .catch((err) => {
                if (err.headers && "jwt-tokens" in err.headers) {
                    localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                }
                window.location.href = "/#login";
            })
        } else {
            window.location.href = "/#login";
        }
    },[updateFilelist]);
    
    useEffect(() => {
        if (items.length > 0) {
            let filteredList = [...items];
            if (query !== "") {
                filteredList = items.filter((item) => { 
                    return item.media.name.toLowerCase().startsWith(query)
                });
            }
            const filesData = sortFunc(filteredList, sortType, sortByField);
            setFileList(filesData);
        }
    }, [items, query, sortType, sortByField]);

    function sortFunc(results: IMediaFile[], sortType: string, sortByField: string): IMediaFile[] {
        if (sortByField === "name") {
            if (sortType === "ascending") {
                results.sort((a, b) => a.media[sortByField].toLowerCase() < b.media[sortByField].toLowerCase() ? -1 : 1);
            }
            else if (sortType === "descending") {
                results.sort((a, b) => b.media[sortByField].toLowerCase() > a.media[sortByField].toLowerCase() ? 1 : -1);
            }
        } else if (sortByField === "creation_datetime") {
            if (sortType === "ascending") {
                results.sort((a, b) => a.info[sortByField].toLowerCase() < b.info[sortByField].toLowerCase() ? -1 : 1);
            }
            else if (sortType === "descending") {
                results.sort((a, b) => b.info[sortByField].toLowerCase() > a.info[sortByField].toLowerCase() ? 1 : -1);
            }
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