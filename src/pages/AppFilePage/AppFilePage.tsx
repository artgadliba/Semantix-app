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
import sliceLongFoldername from "utils/sliceLongFoldername";
import axios from "axios";
import * as data from "../../assets/Python.json";

interface IAppFile {
    folderName: string;
    fileName: string;
}

const AppFile: FC<IAppFile> = ({folderName, fileName}) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [editFilePage, setEditFilePage] = useState<boolean>(false);
    const [playerRef, setPlayerRef] = useState<React.MutableRefObject<any>>(null);
    const [progressRef, setProgressRef] = useState<React.MutableRefObject<any>>(null);

    const handleEditFile = (): void => {
        setEditFilePage(current => !current);
    };

    const {
        openModal: openExportModal,
        modal: exportModal
    } = useModal(ExportModal, {fileName});
    const {
        openModal: openFileDeletePopup,
        modal: fileDeletePopup
    } = useModal(FileDeletePopup, {fileName});

    return (
        <AppFilePageBlock>
            <AppFilePagePathBlock>
                <AppFilePagePathFolderTitle>{sliceLongFoldername(folderName, "header")}</AppFilePagePathFolderTitle>
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
                        <AppFilePageControlButton className="left_button" onClick={openFileDeletePopup}>Удалить</AppFilePageControlButton>
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
    const [folderName, setFolderName] = useState<string>(null);
    const { id, fileName } = useParams();
    
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
                setFolderName(res.data.name);
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
    }, [id]);

    if (folderName) {
        return (
            <AppInterface headerTitle="python_lesson.mp3" controlBar={false}>
                <AppFile 
                    folderName={folderName} 
                    fileName="python_lesson.mp3"
                />
            </AppInterface>
        );
    }
}

export default AppFilePage;