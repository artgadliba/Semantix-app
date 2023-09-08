import React, { FC, SyntheticEvent, useState } from "react";
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

const AppControlBar: FC = () => {
    const [filterMenuActive, setFilterMenuActive] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    return (
        <AppControlBarBlock>
            <AppControlBarBody>
                <AppControlBarSearchAndFilterBlock>
                    <AppControlBarSearchInputBlock>
                        <AppControlBarSearchInput type="text" placeholder="Поиск" onChange={handleChange} />
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