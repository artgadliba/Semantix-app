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
import CreateNewFolderModal from "components/Modals/CreateNewFolder/CreateNewFolderModal";
import SmallComboBox from "components/SmallComboBox/SmallComboBox";

interface IAppControlBar {
    setQuery: (input: string) => void;
    setSortType:(type: string) => void;
    setSortByField:(field: string) => void;
}

const AppControlBar: FC<IAppControlBar> = ({setQuery, setSortType, setSortByField}) => {
    const [filterMenuActive, setFilterMenuActive] = useState<boolean>(false);
    const [message, setSeacrhInput] = useState<string>("");
    const [option, setOption] = useState<string>("Фильтр");
    
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
        closeModal: closeNewFolderModal,
        openModal: openNewFolderModal,
        modal: CreateNewFolderModalModal
    } = useModal(CreateNewFolderModal, {});
    const {
        closeModal: closeFileFolderModal,
        openModal: openFileFolderModal,
        modal: newFileFolderModal
    } = useModal(NewFileFolderModal, {openNewFolderModal});

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
        if (option === "По имени А-я") {
            setSortByField("fileName");
            setSortType("ascending");
        } else if (option === "По имени Я-а") {
            setSortByField("fileName");
            setSortType("descending");
        } else if (option === "По дате (сначала новые)") {
            setSortByField("fileDate");
            setSortType("ascending");
        }else if (option === "По дате (сначала старые)") {
            setSortByField("fileDate");
            setSortType("descending");
        }
    }, [option]);

    return (
        <AppControlBarBlock>
            <AppControlBarBody>
                <AppControlBarSearchAndFilterBlock>
                    <AppControlBarSearchInputBlock>
                        <AppControlBarSearchInput type="text" placeholder="Поиск" onChange={handleSearchChange} />
                        {message != "" ? (
                            <AppControlBarSearchInputIcon alt="search" src="/images/search-active.svg" />
                        ) : (
                            <AppControlBarSearchInputIcon alt="search" src="/images/search.svg" />
                        )}
                    </AppControlBarSearchInputBlock>
                    <AppControlBarFilterButton onClick={() => {toggleFilterMenu()}}>
                        <AppControlBarFilterIcon alt="filter" src="/images/filter.svg" />
                        <AppControlBarFilterTitle className={option != "Фильтр" ? "active" : ""}>{option}</AppControlBarFilterTitle>
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
                        <AppControlBarSearchInput type="text" placeholder="Поиск" />
                        <AppControlBarSearchInputIcon alt="search" src="/images/search.svg" />
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
        </AppControlBarBlock>
    );
}

export default AppControlBar;