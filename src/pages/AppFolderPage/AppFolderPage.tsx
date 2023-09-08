import { FC } from "react";
import { useParams } from "react-router";
import AppInterface from "../../layouts/App/AppInterface";
import { 
    AppFolderPageBlock,
    AppFolderPageDecryptionBlock,
    AppFolderPageDecryptionTitle,
    AppFolderPageLineBlock,
    AppFolderPageLine,
    AppFolderPageTranscriptedBlock,
    AppFolderPageTranscriptedTitle
} from "./AppFolderPageStyles";
import UserFileList from "components/UserFileList/UserFileList";

const AppFolderPage: FC = () => {
    const folder = useParams();
    const processingFiles = [
        {
            fileName: "Имя файла 1",
            fileLength: 3643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
        }
    ];
    const readyFiles = [
        {
            fileName: "Имя файла 1",
            fileLength: 3643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
        },
        {
            fileName: "Имя файла 2",
            fileLength: 7643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
        },
        {
            fileName: "Имя файла 3",
            fileLength: 7113.23,
            fileDate: "2023-07-27T09:55:15.209Z",
        },
        {
            fileName: "Имя файла 1",
            fileLength: 3643.23,
            fileDate: "2023-07-27T09:55:15.209Z",
        }
    ];
    return (
        <AppInterface headerTitle={folder.folderName} controlBar={true}>
            <AppFolderPageBlock>
             <AppFolderPageDecryptionBlock>
                <AppFolderPageDecryptionTitle>Расшифровка</AppFolderPageDecryptionTitle>
                <AppFolderPageLineBlock>
                    <AppFolderPageLine />
                </AppFolderPageLineBlock>
                {processingFiles.length > 0 ? (
                    <UserFileList folder={folder.folderName} className="folderPage" linkState="isInactive" items={processingFiles}></UserFileList>
                ) : (
                    <></>
                )}
             </AppFolderPageDecryptionBlock>
             <AppFolderPageTranscriptedBlock>
                <AppFolderPageTranscriptedTitle>Завершено</AppFolderPageTranscriptedTitle>
                <AppFolderPageLineBlock>
                    <AppFolderPageLine />
                </AppFolderPageLineBlock>
                {readyFiles.length > 0 ? (
                    <UserFileList folder={folder.folderName} className="folderPage" items={readyFiles}></UserFileList>
                ) : (
                    <></>
                )}
             </AppFolderPageTranscriptedBlock>
            </AppFolderPageBlock>
        </AppInterface>
    );
}

export default AppFolderPage;