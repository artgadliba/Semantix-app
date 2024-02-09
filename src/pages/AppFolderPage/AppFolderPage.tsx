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
import { useSelector, useDispatch } from "react-redux";
import { setUploadFolder } from "slices/uploadFolderSlice";
import { RootState } from "slices";
import axios from "axios";

interface IAppFolder {
    id: number;
}

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

const AppFolder: FC<IAppFolder> = ({id}) => {
    const query = useSelector((state: RootState) => state.searchQuery.value);
    const sortType = useSelector((state: RootState) => state.sortType.value);
    const sortByField = useSelector((state: RootState) => state.sortByField.value);
    const updateFilelist = useSelector((state: RootState) => state.updateFileList.value);
    const [items, setItems] = useState<Array<IMediaFile>>([]);
    const [processingList, setProcessingList] = useState<Array<IMediaFile>>(null);
    const [readyList, setReadyList] = useState<Array<IMediaFile>>(null);

    useEffect(() => {
        if (localStorage.getItem("jwt-tokens")) {
            axios.get(`/api/folders/${id}/files/0,0`, {
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
                    setProcessingList([]);
                    setReadyList([]);
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
    },[id, updateFilelist]);

    useEffect(() => {
        if (items.length > 0) {
            let filteredList = [...items];
            if (query !== "") {
                filteredList = items.filter((item) => { 
                   return item.media.name.toLowerCase().startsWith(query);
                });
            }
            const processingFiles = filteredList.filter((item) => {
                return item.status.code < 7;
            });
            const readyFiles = filteredList.filter((item) => {
                return item.status.code === 7;
            });
            const processingData = sortFunc(processingFiles, sortType, sortByField);
            const readyData = sortFunc(readyFiles, sortType, sortByField);
            setProcessingList(processingData);
            setReadyList(readyData);
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
    
    if (items && processingList && readyList) {
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
                        <AppFolderPageEmptyOutputText className="additional_text_field">
                        В текущем разделе будут отображены загруженные вами файлы для обработки
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
                            <UserFileList className="folder_page" items={processingList}></UserFileList>
                        </AppFolderPageFoldersBlock>
                    )}
                    {readyList.length > 0 && (
                        <AppFolderPageFoldersBlock>
                            <AppFolderPageFoldersBlockTitle>Завершено</AppFolderPageFoldersBlockTitle>
                            <AppFolderPageLineBlock>
                                <AppFolderPageLine />
                            </AppFolderPageLineBlock>
                            <UserFileList className="folder_page" items={readyList}></UserFileList>
                        </AppFolderPageFoldersBlock>
                    )}
                </AppFolderPageBlock>
            );
        }
    }
}

interface IFolder {
    id: number;
    name: string;
    userId: number;
    info: {
        change_datetime: string;
        creation_datetime: string;
    }
}

const AppFolderPage = () => {
    const {id} = useParams();
    const [folder, setFolder] = useState<IFolder>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (folder) {
            dispatch(setUploadFolder({
                id: folder.id,
                name: folder.name
            }));
        }
    }, [folder]);

    useEffect(() => {
        if (localStorage.getItem("jwt-tokens")) {
            axios.get(`/api/folders/${id}`, {
                headers: {
                    "jwt-tokens": localStorage.getItem("jwt-tokens")
                }
            })
            .then((res) => {
                if (res.headers && "jwt-tokens" in res.headers) {
                    localStorage.setItem("jwt-tokens", res.headers["jwt-tokens"]);
                }
                setFolder(res.data);
            })
            .catch((err) => {
                if (err.headers && "jwt-tokens" in err.headers) {
                    localStorage.setItem("jwt-tokens", err.headers["jwt-tokens"]);
                }
                console.log(err);
                window.location.href = "/#login";
            })
        } else {
            window.location.href = "/#login";
        }
    }, [id]);
    
    if (folder) {
        return (
            <AppInterface headerTitle={folder.name} controlBar={true}>
                <AppFolder id={folder.id} />
            </AppInterface>
        );
    }
}

export default AppFolderPage;