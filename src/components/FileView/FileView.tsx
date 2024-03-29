import { FC, useEffect, useState, useRef } from "react";
import { 
    FileViewBlock,
    FileViewTranscriptionBlock,
    FileViewTranscriptionBackgroundLayer,
    FileViewTranscriptionTextBlock,
    FileViewTranscriptionTextBlockTimestamp,
    FileViewTranscriptionTextBlockParagraph,
    FileViewTranscriptionTextBlockHighlight
 } from "./FileViewStyles";
import { parseFileLength } from "utils/parseFileLength";

interface IWords {
    word: string;
    start: number;
    end: number;
}

interface IFileView {
    playerRef: React.MutableRefObject<any>;
    progressRef: React.MutableRefObject<any>;
    setIsPlaying: (state: boolean) => void;
    data: {
        text: string;
        segments: {
            id: number;
            text: string;
            start: number;
            end: number;
            words: {
                word: string;
                start: number;
                end: number;
            }[];
        }[];
        language: string;
    }
}

interface IWordsArray extends Array<IWords>{};
interface IGroupedSegmentsArray extends Array<IWordsArray>{};

const FileView: FC<IFileView> = ({playerRef, progressRef, setIsPlaying, data}) => {
    const [groupedSegments, setGroupedSegments] = useState<IGroupedSegmentsArray>([]);
    const wordsRefs = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        groupSegments(10);
    }, []);

    useEffect(() => {
        if (playerRef) {
            const ref = playerRef.current;
            ref.addEventListener("timeupdate", onTimeUpdate);
            ref.addEventListener("seeked", onSeeked);
            return () => {
                ref.removeEventListener("timeupdate", onTimeUpdate);
                ref.removeEventListener("seeked", onSeeked);
            }
        }
    }, [playerRef]);

    const onSeeked = (): void => {
        const activeElements = document.getElementsByClassName("active_text");
        for (let i = activeElements.length - 1; i >= 0; i --) {
            activeElements[i].classList.remove("active_text");
        }
        const currentWord = document.getElementsByClassName("active_word");
        if (currentWord[0]) {
            for (let i = currentWord.length - 1; i >= 0; i --) {
                currentWord[i].classList.remove("active_word");
            }
        }
    };

    const onTimeUpdate = (): void => {
        const activeSegment = groupedSegments.findIndex((segment) => {
            return segment[segment.length - 1].end > playerRef.current.currentTime;
        })
        if (groupedSegments[activeSegment]) {
            const activeWordIndex = groupedSegments[activeSegment].findIndex((word) => {
                return word.end > playerRef.current.currentTime;
            });
            const activeRef = wordsRefs[activeSegment];
            const wordElement = activeRef.childNodes[activeWordIndex] as HTMLElement;
            if (wordElement) {
                wordElement.classList.add("active_word");
                wordElement.classList.add("active_text");
            }
            if (activeWordIndex > 0) {
                const prevWordElement = activeRef.childNodes[activeWordIndex - 1] as HTMLElement;
                if (!prevWordElement.className.includes("active_text")) {
                    prevWordElement.classList.add("active_text");
                }
                const prevActiveWords = document.getElementsByClassName("active_word");
                for (let i = 0; i < prevActiveWords.length - 1; i ++) {
                    prevActiveWords[i].classList.remove("active_word");
                }
            }
        }
    };

    const groupSegments = (n: number): void => {
        let group: any = [];
        for (let i = 0, j = 0; i < data.segments.length; i++) {
            if (i >= n && i % n === 0) {
                group[j] = group[j].flat();
                j++;
            }
            group[j] = group[j] || [];
            group[j].push(data.segments[i].words);
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
        handleProgressColor(value);
    }

    const handleProgressColor = (value: number): void => {
        const ref = progressRef.current;
        const ratio = value / ref.max * 100;
        ref.style.background = 'linear-gradient(to right, #1683E2 0%, #1683E2 ' + ratio + '%, #1B1D2C ' + ratio + '%, #1B1D2C 100%)';
    }
    
    if (groupedSegments) {
        return (
            <FileViewBlock>
                <FileViewTranscriptionBlock>
                    <FileViewTranscriptionBackgroundLayer />
                    {groupedSegments.map((segment, idx) => {
                        return (
                            <FileViewTranscriptionTextBlock key={idx}>
                                <FileViewTranscriptionTextBlockTimestamp 
                                    onClick={() => {handleSeek(segment[0].start)}}
                                >
                                    {parseFileLength(segment[0].start, true)}
                                </FileViewTranscriptionTextBlockTimestamp>
                                <FileViewTranscriptionTextBlockParagraph 
                                    ref={(ref) => { wordsRefs[idx] = ref; return true; }}
                                >
                                    {segment.map((word, i) => {
                                        return (
                                            <FileViewTranscriptionTextBlockHighlight key={i}>
                                                {word.word.trim()}
                                            </FileViewTranscriptionTextBlockHighlight>
                                        );
                                    })}
                                </FileViewTranscriptionTextBlockParagraph>
                            </FileViewTranscriptionTextBlock>
                        );
                    })}
                </FileViewTranscriptionBlock>
            </FileViewBlock>
        );
    }
}

export default FileView;