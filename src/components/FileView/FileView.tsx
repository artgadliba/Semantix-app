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

interface IWords {
    word: string;
    start: number;
    end: number;
}

const FileView: FC<IFileView> = ({playerRef, progressRef, setIsPlaying, data}) => {
    const [groupedSegments, setGroupedSegments] = useState([]);
    const wordsRefs = useRef<(HTMLSpanElement | null)[]>([]);

    const groupSegments = (n: number) => {
        var group: any = [];
        for (var i = 0, j = 0; i < data.segments.length; i++) {
            if (i >= n && i % n === 0) {
                group[j] = group[j].flat();
                j++;
            }
            group[j] = group[j] || [];
            group[j].push(data.segments[i].words)
            if (i === data.segments.length - 1)  {
                group[j] = group[j].flat();
                setGroupedSegments(group);
            }
        } 
    }

    const handleSeek = (value: number) => {
        playerRef.current.currentTime = value;
        playerRef.current.play();
        setIsPlaying(true);
        handleProgressColor(value);
    }

    const handleProgressColor = (value: number) => {
        const ref = progressRef.current;
        const ratio = value / ref.max * 100;
        ref.style.background = 'linear-gradient(to right, #1683E2 0%, #1683E2 ' + ratio + '%, #1B1D2C ' + ratio + '%, #1B1D2C 100%)';
    }

    useEffect(() => {
        groupSegments(10);
    }, []);

    useEffect(() => {
        const onTimeUpdate = () => {
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
                    wordElement.classList.add("active-word");
                    wordElement.classList.add("active-text");
                }
                if (activeWordIndex > 0) {
                    const prevWordElement = activeRef.childNodes[activeWordIndex - 1] as HTMLElement;
                    if (!prevWordElement.className.includes("active-text")) {
                        prevWordElement.classList.add("active-text");
                    }
                    const prevActiveWords = document.getElementsByClassName("active-word");
                    for (let i = 0; i < prevActiveWords.length - 1; i ++) {
                        prevActiveWords[i].classList.remove("active-word");
                    }
                }
            }
        };
        if (playerRef) {
            const ref = playerRef.current;
            ref.addEventListener("timeupdate", onTimeUpdate);
            return () => ref.removeEventListener(
                "timeupdate",
                onTimeUpdate
            );
        }
    }, [playerRef]);

    useEffect(() => {
        const onSeeked = () => {
            const activeElements = document.getElementsByClassName("active-text");
            for (let i = activeElements.length - 1; i >= 0; i --) {
                activeElements[i].classList.remove("active-text");
            }
            const currentWord = document.getElementsByClassName("active-word");
            if (currentWord[0]) {
                if (currentWord[0].className.includes("active-word")) {
                    currentWord[0].classList.remove("active-word");
                }
            }
        };
        if (playerRef) {
            const ref = playerRef.current;
            ref.addEventListener("seeked", onSeeked);
            return () => ref.removeEventListener(
                "seeked",
                onSeeked
            );
        }
    },[playerRef]);

    if (groupedSegments) {
        return (
            <FileViewBlock>
                <FileViewTranscriptionBlock>
                    <FileViewTranscriptionBackgroundLayer />
                    {groupedSegments.map((segment, idx) => {
                        return (
                            <FileViewTranscriptionTextBlock key={idx}>
                                <FileViewTranscriptionTextBlockTimestamp onClick={(e) => {handleSeek(segment[0].start)}}>
                                    {parseFileLength(segment[0].start)}
                                </FileViewTranscriptionTextBlockTimestamp>
                                <FileViewTranscriptionTextBlockParagraph ref={(ref) => { wordsRefs[idx] = ref; return true; }}>
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