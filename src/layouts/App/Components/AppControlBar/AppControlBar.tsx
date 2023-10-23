import React, { FC, useEffect, useState } from "react";
import { 
    AppControlBarBlock,
    AppControlBarBody,
    AppControlBarSearchInputBlock,
    AppControlBarSearchAndFilterBlock,
    AppControlBarSearchAndFilterMobileBlock,
    AppControlBarSearchInput,
    AppControlBarSearchInputIcon,
    AppControlBarFilterIcon,
    AppControlBarFilterIconBlock,
    AppControlBarFilterTitle,
    AppControlBarFilterButton,
    AppControlBarFilterButtonMobile,
    AppControlBarUploadButton
} from "./AppControlBarStyles";
import useModal from "hooks/useModal";
import NewFileFolderModal from "components/Modals/NewFileFolderModal/NewFileFolderModal";
import CreateNewFolderModal from "components/Modals/CreateNewFolderModal/CreateNewFolderModal";
import MessageModal from "components/Modals/MessageModal/MessageModal";
import SmallComboBox from "components/SmallComboBox/SmallComboBox";
import UploadNewFileModal from "components/Modals/UploadNewFileModal/UploadNewFileModal";

interface IAppControlBar {
    setQuery: (input: string) => void;
    setSortType:(type: string) => void;
    setSortByField:(field: string) => void;
}

interface IAppFolderObj {
    id: number;
    name: string;
}

const AppControlBar: FC<IAppControlBar> = ({setQuery, setSortType, setSortByField}) => {
    const [filterMenuActive, setFilterMenuActive] = useState<boolean>(false);
    const [searchInput, setSeacrhInput] = useState<string>("");
    const [option, setOption] = useState<string>("");
    const [optionName, setOptionName] = useState<string>("Фильтр");
    const [currentFolder, setCurrentFolder] = useState<IAppFolderObj | null>(null);
    const [currentFolderName, setCurrentFolderName] = useState<string>(null);
    
    const options = [
        {
            name: "По имени А-я"
        },
        {
            name: "По имени Я-а"
        },
        {
            name: "По дате (сначала новые)"
        },
        {
            name: "По дате (сначала старые)"
        }
    ];

    const {
        closeModal: closeMessModal,
        openModal: openMessModal,
        modal: messageModal
    } = useModal(MessageModal, { modalType: "messageModal", message: "Файлы успешно отправлены" });
    const {
        closeModal: closeNewFileModal,
        openModal: openNewFileModal,
        modal: uploadNewFileModal
    } = useModal(UploadNewFileModal, { folder: currentFolder, openMessModal, setCurrentFolder });
    const {
        closeModal: closeNewFolderModal,
        openModal: openNewFolderModal,
        modal: CreateNewFolderModalModal
    } = useModal(CreateNewFolderModal, { setCurrentFolderName });
    const {
        closeModal: closeFileFolderModal,
        openModal: openFileFolderModal,
        modal: newFileFolderModal
    } = useModal(NewFileFolderModal, { currentFolderName, openNewFolderModal, setCurrentFolder, openNewFileModal });

    const toggleFilterMenu = () => {
        if (filterMenuActive == true) {
            setFilterMenuActive(false);
        } else {
            setFilterMenuActive(true);
        }
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let lowerCase = event.target.value.toLowerCase();
        setSeacrhInput(lowerCase);
        setQuery(lowerCase);
    };

    useEffect(() => {
        if (currentFolder) {
            setCurrentFolderName(currentFolder.name);
        } else {
            setCurrentFolderName(null);
        }
    }, [currentFolder]);

    useEffect(() => {
        if (option === "По имени А-я") {
            setSortByField("fileName");
            setSortType("ascending");
            setOptionName(option);
        } else if (option === "По имени Я-а") {
            setSortByField("fileName");
            setSortType("descending");
            setOptionName(option);
        } else if (option === "По дате (сначала новые)") {
            setSortByField("fileDate");
            setSortType("descending");
            setOptionName("По дате (нов.)")
        }else if (option === "По дате (сначала старые)") {
            setSortByField("fileDate");
            setSortType("ascending");
            setOptionName("По дате (стар.)")
        }
    }, [option]);

    return (
        <AppControlBarBlock>
            <AppControlBarBody>
                <AppControlBarSearchAndFilterBlock>
                    <AppControlBarSearchInputBlock>
                        <AppControlBarSearchInput 
                            type="text" 
                            placeholder="Поиск"
                            autoComplete="search"
                            onChange={handleSearchChange} 
                        />
                        {searchInput != "" ? (
                            <AppControlBarSearchInputIcon alt="search" src="/images/search-active.svg" />
                        ) : (
                            <AppControlBarSearchInputIcon alt="search" src="/images/search.svg" />
                        )}
                    </AppControlBarSearchInputBlock>
                    <AppControlBarFilterButton onClick={() => {toggleFilterMenu()}}>
                        <AppControlBarFilterIcon alt="filter" src="/images/filter.svg" />
                        <AppControlBarFilterTitle className={optionName != "Фильтр" ? "active" : ""}>
                            {optionName}
                        </AppControlBarFilterTitle>
                        <AppControlBarFilterIconBlock className={filterMenuActive ? "active" : ""} />
                    </AppControlBarFilterButton>
                    {filterMenuActive == true && (
                        <SmallComboBox 
                            className="filter-box" 
                            setMenuActive={setFilterMenuActive} 
                            setOption={setOption} 
                            options={options}
                        />
                    )}
                </AppControlBarSearchAndFilterBlock>
                <AppControlBarUploadButton onClick={openFileFolderModal}>Загрузить файл</AppControlBarUploadButton>
                <AppControlBarSearchAndFilterMobileBlock>
                    <AppControlBarSearchInputBlock>
                        <AppControlBarSearchInput type="text" placeholder="Поиск" onChange={handleSearchChange} />
                        {searchInput != "" ? (
                            <AppControlBarSearchInputIcon alt="search" src="/images/search-active.svg" />
                        ) : (
                            <AppControlBarSearchInputIcon alt="search" src="/images/search.svg" />
                        )}
                    </AppControlBarSearchInputBlock>
                    <AppControlBarFilterButtonMobile onClick={() => {toggleFilterMenu()}}>
                        <AppControlBarFilterIcon alt="filter" src="/images/filter.svg" />
                    </AppControlBarFilterButtonMobile>
                    {filterMenuActive == true && (
                        <SmallComboBox 
                            className="filter-box" 
                            setMenuActive={setFilterMenuActive} 
                            setOption={setOption} 
                            options={options} 
                        />
                    )}
                </AppControlBarSearchAndFilterMobileBlock>
            </AppControlBarBody>
            {newFileFolderModal}
            {CreateNewFolderModalModal}
            {messageModal}
            {uploadNewFileModal}
        </AppControlBarBlock>
    );
}

export default AppControlBar;