import { FC, useState } from "react";
import { useParams } from "react-router";
import AppInterface from "layouts/App/AppInterface";
import AppControlBar from "layouts/App/Components/AppControlBar/AppControlBar";
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

interface IAppFile {
    folderName: string;
    fileName: string;
}

const AppFile: FC<IAppFile> = ({folderName, fileName}) => {
    const [editFilePage, setEditFilePage] = useState<boolean>(false);
    const items = [
        {
            timestamp: "00:00:01",
            text: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam gravida non commodo a sodales sit amet nisi."
        },
        {
            timestamp: "00:34:01",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."
        },
        {
            timestamp: "01:34:01",
            text: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam gravida non commodo a sodales sit amet nisi."
        },
        {
            timestamp: "02:34:01",
            text: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam gravida non commodo a sodales sit amet nisi."
        },
        {
            timestamp: "02:34:01",
            text: "Morbi in sem quis dui placerat ornare. Pellentesque odio nisi euismod in pharetra a ultricies in diam. Sed arcu. Cras consequat.Praesent dapibus neque id cursus faucibus tortor neque egestas auguae eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi tincidunt quis accumsan porttitor facilisis luctus metus.Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam gravida non commodo a sodales sit amet nisi."
        }
    ];
    const handleEditFile = () => {
        setEditFilePage(current => !current);
    };
    const {
        closeModal: closeNewFileFolderModal,
        openModal: openNewFileFolderModal,
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
            <AudioPlayer />
            {editFilePage ? (
                <>
                <AppFileEditControlBlock>
                    <AppFileEditControlButtonSave>Сохранить изменения</AppFileEditControlButtonSave>
                    <AppFileEditControlButtonCancel onClick={handleEditFile}>Отменить</AppFileEditControlButtonCancel>
                </AppFileEditControlBlock>
                <FileEdit items={items} />
                </>
            ) : (
                <>
                <AppFilePageControlBlock>
                    <AppFilePageControlButton onClick={handleEditFile}>Изменить</AppFilePageControlButton>
                    <AppFilePageControlButton onClick={openNewFileFolderModal}>Выгрузить</AppFilePageControlButton>
                    <AppFilePageControlButton className="left-button" onClick={openFileDeletePopup}>Удалить</AppFilePageControlButton>
                    <AppFilePageControlButtonMobile onClick={handleEditFile}>
                        <AppFilePageControlButtonMobileIcon alt="edit" src="/images/edit-icon.svg" />
                    </AppFilePageControlButtonMobile>
                    <AppFilePageControlButtonMobile onClick={openNewFileFolderModal}>
                        <AppFilePageControlButtonMobileIcon alt="export" src="/images/export-icon.svg" />
                    </AppFilePageControlButtonMobile>
                    <AppFilePageControlButtonMobile onClick={openFileDeletePopup}>
                        <AppFilePageControlButtonMobileIcon alt="delete" src="/images/delete-icon.svg" />
                    </AppFilePageControlButtonMobile>
                </AppFilePageControlBlock>
                <FileView items={items} />
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
            <AppFile folderName={folderName} fileName={fileName} />
        </AppInterface>
    );
}

export default AppFilePage;