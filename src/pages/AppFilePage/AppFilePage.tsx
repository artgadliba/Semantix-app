import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import AppInterface from "layouts/App/AppInterface";
import { 
    AppFilePageBlock,
    AppFilePagePathBlock,
    AppFilePagePathFolderTitle,
    AppFilePagePathArrow,
    AppFilePagePathFileTitle,
    AppFilePageControlBlock,
    AppFilePageControlButton,
    AppFilePageControlButtonMobile,
    AppFilePageControlButtonMobileIcon,
    AppFileEditControlBlock,
    AppFileEditControlButtonSave,
    AppFileEditControlButtonCancel
} from "./AppFilePageStyles";
import AudioPlayer from "components/AudioPlayer/AudioPlayer";
import FileView from "components/FileView/FileView";
import FileEdit from "components/FileEdit/FileEdit";
import useModal from "hooks/useModal";
import ExportModal from "components/Modals/ExportModal/ExportModal";
import FileDeletePopup from "components/Popups/FileDeletePopup/FileDeletePopup";
import * as data from '../../assets/Python.json';

interface IAppFile {
    folderName: string;
    fileName: string;
}

const AppFile: FC<IAppFile> = ({folderName, fileName}) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [editFilePage, setEditFilePage] = useState<boolean>(false);
    const [playerRef, setPlayerRef] = useState<React.MutableRefObject<any>>(null);
    const [progressRef, setProgressRef] = useState<React.MutableRefObject<any>>(null);

    const handleEditFile = () => {
        setEditFilePage(current => !current);
    };

    const {
        closeModal: closeExportModal,
        openModal: openExportModal,
        modal: exportModal
    } = useModal(ExportModal, {fileName});
    const {
        closeModal: closeFileDeletePopup,
        openModal: openFileDeletePopup,
        modal: fileDeletePopup
    } = useModal(FileDeletePopup, {fileName});

    return (
        <AppFilePageBlock>
            <AppFilePagePathBlock>
                <AppFilePagePathFolderTitle>{folderName}</AppFilePagePathFolderTitle>
                <AppFilePagePathArrow alt="right" src="/images/arrow-right.svg" />
                <AppFilePagePathFileTitle>{fileName}</AppFilePagePathFileTitle>
            </AppFilePagePathBlock>
            <AudioPlayer 
                setPlayerRef={setPlayerRef}
                setProgressRef={setProgressRef}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
            {editFilePage ? (
                <>
                <AppFileEditControlBlock>
                    <AppFileEditControlButtonSave>Сохранить изменения</AppFileEditControlButtonSave>
                    <AppFileEditControlButtonCancel onClick={handleEditFile}>Отменить</AppFileEditControlButtonCancel>
                </AppFileEditControlBlock>
                <FileEdit
                    data={data} 
                    playerRef={playerRef}
                    setIsPlaying={setIsPlaying}
                />
                </>
            ) : (
                <>
                <AppFilePageControlBlock>
                    <AppFilePageControlButton onClick={handleEditFile}>Изменить</AppFilePageControlButton>
                    <AppFilePageControlButton onClick={openExportModal}>Выгрузить</AppFilePageControlButton>
                    <AppFilePageControlButton className="left-button" onClick={openFileDeletePopup}>Удалить</AppFilePageControlButton>
                    <AppFilePageControlButtonMobile onClick={handleEditFile}>
                        <AppFilePageControlButtonMobileIcon alt="edit" src="/images/edit-icon.svg" />
                    </AppFilePageControlButtonMobile>
                    <AppFilePageControlButtonMobile onClick={openExportModal}>
                        <AppFilePageControlButtonMobileIcon alt="export" src="/images/export-icon.svg" />
                    </AppFilePageControlButtonMobile>
                    <AppFilePageControlButtonMobile onClick={openFileDeletePopup}>
                        <AppFilePageControlButtonMobileIcon alt="delete" src="/images/delete-icon.svg" />
                    </AppFilePageControlButtonMobile>
                </AppFilePageControlBlock>
                <FileView 
                    data={data} 
                    playerRef={playerRef}
                    progressRef={progressRef}
                    setIsPlaying={setIsPlaying}
                />
                </>
            )}
            {exportModal}
            {fileDeletePopup}
        </AppFilePageBlock>
    );
}

const AppFilePage: FC = () => {
    const { folderName, fileName } = useParams();
    return (
        <AppInterface headerTitle={folderName} controlBar={false}>
            <AppFile 
                folderName={folderName} 
                fileName={fileName}
            />
        </AppInterface>
    );
}

export default AppFilePage;