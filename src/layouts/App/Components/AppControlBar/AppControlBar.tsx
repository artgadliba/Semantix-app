import React, { FC, useState } from "react";
import { 
    AppControlBarBlock,
    AppControlBarBody,
    AppControlBarSearchInputBlock,
    AppControlBarSearchAndFilterBlock,
    AppControlBarSearchAndFilterMobileBlock,
    AppControlBarSearchInput,
    AppControlBarSearchInputIcon,
    AppControlBarFilter,
    AppControlBarFilterIcon,
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
}

const AppControlBar: FC<IAppControlBar> = ({setQuery}) => {
    const [filterMenuActive, setFilterMenuActive] = useState<boolean>(false);
    const [message, setSeacrhInput] = useState<string>("");
    const [option, setOption] = useState<string>(null);
    const options = [
        {
            name: "Действие 1"
        },
        {
            name: "Действие 2"
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
                    <AppControlBarFilter>
                        <AppControlBarFilterIcon alt="filter" src="/images/filter.svg" />
                        {option != undefined ? (
                            <AppControlBarFilterTitle className="active">{option}</AppControlBarFilterTitle>
                        ) : (
                            <AppControlBarFilterTitle>Фильтр</AppControlBarFilterTitle>
                        )}
                        {filterMenuActive == true ? (
                            <AppControlBarFilterButton className="active" onClick={() => {toggleFilterMenu()}} />
                        ) : (
                            <AppControlBarFilterButton onClick={() => {toggleFilterMenu()}} />
                        )}
                    </AppControlBarFilter>
                    {filterMenuActive == true && (
                        <SmallComboBox className="filter-box" setMenuActive={setFilterMenuActive} setOption={setOption} options={options} />
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
                        <SmallComboBox className="filter-box" setMenuActive={setFilterMenuActive} setOption={setOption} options={options} />
                    )}
                </AppControlBarSearchAndFilterMobileBlock>
            </AppControlBarBody>
            {newFileFolderModal}
            {CreateNewFolderModalModal}
        </AppControlBarBlock>
    );
}

export default AppControlBar;