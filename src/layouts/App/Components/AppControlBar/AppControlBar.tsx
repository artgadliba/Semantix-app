import React, { useEffect, useState } from "react";
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
import { filterOptions } from "content/FilterOptions";
import useModal from "hooks/useModal";
import NewFileFolderModal from "components/Modals/NewFileFolderModal/NewFileFolderModal";
import CreateNewFolderModal from "components/Modals/CreateNewFolderModal/CreateNewFolderModal";
import MessageModal from "components/Modals/MessageModal/MessageModal";
import SmallComboBox from "components/SmallComboBox/SmallComboBox";
import UploadNewFileModal from "components/Modals/UploadNewFileModal/UploadNewFileModal";
import { useDispatch } from "react-redux";
import { setQuery } from "slices/searchQuerySlice";
import { setSortType } from "slices/sortTypeSlice";
import { setSortByField } from "slices/sortByFieldSlice";

const AppControlBar = () => {
    const [filterMenuActive, setFilterMenuActive] = useState<boolean>(false);
    const [searchInput, setSeacrhInput] = useState<string>("");
    const [option, setOption] = useState<string>("Фильтр");
    const dispatch = useDispatch();

    useEffect(() => {
        if (option === "По имени А-я") {
            dispatch(setSortByField("name"));
            dispatch(setSortType("ascending"));
            setOption(option);
        } else if (option === "По имени Я-а") {
            dispatch(setSortByField("name"));
            dispatch(setSortType("descending"));
            setOption(option);
        } else if (option === "По дате (сначала старые)") {
            dispatch(setSortByField("creation_datetime"));
            dispatch(setSortType("ascending"));
            setOption("По дате (стар.)");
        } else if (option === "По дате (сначала новые)") {
            dispatch(setSortByField("creation_datetime"));
            dispatch(setSortType("descending"));
            setOption("По дате (нов.)");
        }
    }, [option]);

    const {
        openModal: openMessModal,
        modal: messageModal
    } = useModal(MessageModal, { modalType: "messageModal", message: "Файлы успешно отправлены" });
    const {
        openModal: openNewFileModal,
        modal: uploadNewFileModal
    } = useModal(UploadNewFileModal, { openMessModal });
    const {
        openModal: openNewFolderModal,
        modal: CreateNewFolderModalModal
    } = useModal(CreateNewFolderModal, {});
    const {
        openModal: openFileFolderModal,
        modal: newFileFolderModal
    } = useModal(NewFileFolderModal, { openNewFolderModal, openNewFileModal });

    const toggleFilterMenu = (): void => {
        if (filterMenuActive === true) {
            setFilterMenuActive(false);
        } else {
            setFilterMenuActive(true);
        }
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let lowerCase = event.target.value.toLowerCase();
        setSeacrhInput(lowerCase);
        dispatch(setQuery(lowerCase));
    };

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
                        {searchInput !== "" ? (
                            <AppControlBarSearchInputIcon alt="search" src="/images/search-active.svg" />
                        ) : (
                            <AppControlBarSearchInputIcon alt="search" src="/images/search.svg" />
                        )}
                    </AppControlBarSearchInputBlock>
                    <AppControlBarFilterButton onClick={() => {toggleFilterMenu()}}>
                        <AppControlBarFilterIcon alt="filter" src="/images/filter.svg" />
                        <AppControlBarFilterTitle className={option !== "Фильтр" ? "active" : ""}>
                            {option}
                        </AppControlBarFilterTitle>
                        <AppControlBarFilterIconBlock className={filterMenuActive ? "active" : ""} />
                    </AppControlBarFilterButton>
                    {window.innerWidth > 500 && filterMenuActive === true && (
                        <SmallComboBox 
                            className="filter_box" 
                            setMenuActive={setFilterMenuActive} 
                            setOption={setOption} 
                            options={filterOptions}
                        />
                    )}
                </AppControlBarSearchAndFilterBlock>
                <AppControlBarUploadButton onClick={openFileFolderModal}>Загрузить файл</AppControlBarUploadButton>
                <AppControlBarSearchAndFilterMobileBlock>
                    <AppControlBarSearchInputBlock>
                        <AppControlBarSearchInput type="text" placeholder="Поиск" onChange={handleSearchChange} />
                        <AppControlBarSearchInputIcon 
                            alt="search" 
                            src={searchInput !== "" ? "/images/search-active.svg" : "/images/search.svg"}
                        />
                    </AppControlBarSearchInputBlock>
                    <AppControlBarFilterButtonMobile onClick={() => {toggleFilterMenu()}}>
                        <AppControlBarFilterIcon alt="filter" src="/images/filter.svg" />
                    </AppControlBarFilterButtonMobile>
                    {window.innerWidth <= 500 && filterMenuActive === true && (
                        <SmallComboBox 
                            className="filter_box" 
                            setMenuActive={setFilterMenuActive} 
                            setOption={setOption} 
                            options={filterOptions} 
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