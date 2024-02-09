import { FC, useState, useEffect } from "react";
import { 
    FileEditBlock,
    FileEditTranscriptionBlock,
    FileEditTranscriptionBackgroundLayer,
    FileEditTranscriptionTextBlock,
    FileEditTranscriptionTextBlockTimestamp,
    FileEditTranscriptionTextBlockParagraph,
    FileEditMessageBlock,
    FileEditMessageIcon,
    FileEditMessageText
} from "./FileEditStyles";
import { parseFileLength } from "utils/parseFileLength";

interface ISegment {
    id: number;
    text: string;
    start: number;
    end: number;
    words: {
        word: string;
        start: number;
        end: number;

    }[];
}

interface IFileEdit {
    playerRef?: React.MutableRefObject<any>;
    setIsPlaying: (state: boolean) => void;
    data: {
        text: string;
        segments: ISegment[];
        language: string;
    }
}

const FileEdit: FC<IFileEdit> = ({playerRef, setIsPlaying, data}) => {
    const [groupedSegments, setGroupedSegments] = useState([]);

    useEffect(() => {
        groupSegments(10);
    }, []);

    const groupSegments = (n: number): void => {
        let group: any = [];
        for (let i = 0, j = 0; i < data.segments.length; i++) {
            if (i >= n && i % n === 0) {
                group[j] = group[j].flat();
                j++;
            }
            group[j] = group[j] || [];
            group[j].push({
                text: data.segments[i].text,
                start: data.segments[i].start,
            })
            if (i === data.segments.length - 1)  {
                group[j] = group[j].flat();
                setGroupedSegments(group);
            }
        } 
    }

    const handleSeek = (value: number): void => {
        playerRef.current.currentTime = value;
        playerRef.current.play();
        setIsPlaying(true);
    }

    const groupText = (segments: ISegment[]): string => {
        let text: string = "";
        for (let i = 0; i < segments.length; i ++) {
            let textSegment = segments[i].text;
            if (i === 0) {
                textSegment = textSegment.trimStart();
            }
            text = text.concat("", textSegment);
            if (i === segments.length - 1) {
                return text;
            }
        }
    }

    if (groupedSegments) {
        return (
            <>
                <FileEditMessageBlock>
                    <FileEditMessageIcon alt="edit" src="/images/edit-note.svg" />
                    <FileEditMessageText>
                        После редактирования транскрипции подсветка текста при прослушивании оригинального аудио будет недоступна.
                    </FileEditMessageText>
                </FileEditMessageBlock>
                <FileEditBlock>
                    {groupedSegments.map((segment, idx) => {
                        return (
                            <FileEditTranscriptionBlock key={idx}>
                                <FileEditTranscriptionBackgroundLayer />
                                        <FileEditTranscriptionTextBlock>
                                            <FileEditTranscriptionTextBlockTimestamp onClick={(e) => {handleSeek(segment[0].start)}}>
                                                {parseFileLength(segment[0].start, true)}
                                            </FileEditTranscriptionTextBlockTimestamp>
                                            <FileEditTranscriptionTextBlockParagraph contentEditable={true}>
                                                {groupText(segment)}
                                            </FileEditTranscriptionTextBlockParagraph>
                                        </FileEditTranscriptionTextBlock>
                            </FileEditTranscriptionBlock>
                        );
                    })}
                </FileEditBlock>
            </>
            
        );
    }
}

export default FileEdit;