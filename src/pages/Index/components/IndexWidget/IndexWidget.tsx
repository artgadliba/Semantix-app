import { FC, useState, useRef, useEffect } from "react";
import {
    IndexWidgetBody,
    IndexWidgetBlock,
    IndexWidgetBlockAnimation,
    IndexWidgetBlockAnimationLine,
    IndexWidgetBackground,
    IndexWidgetPattern,
    IndexWidgetFormBlock,
    IndexWidgetInputFileField,
    IndexWidgetTitle,
    IndexWidgetMainButton,
    IndexWidgetText,
    IndexWidgetInputBlock,
    IndexWidgetInput,
    IndexWidgetInputButton,
    IndexWidgetInputButtonIcon,
    IndexWidgetFile,
    IndexWidgetDeleteButton,
    IndexWidgetMainDeleteButton,
    IndexWidgetCheckboxBlock,
    IndexWidgetCheckboxInput,
    IndexWidgetCheckboxText,
    IndexWidgetCheckboxLink,
    IndexWidgetProgressBar,
    IndexWidgetProcessingBlock,
    IndexWidgetProcessingFileIcon,
    IndexWidgetProcessingIcon,
    IndexWidgetTrancriptionContent,
    IndexWidgetTranscriptionBlock,
    IndexWidgetTranscriptionTimestamp,
    IndexWidgetTranscriptionParagraph,
    IndexWidgetTranscriptionWord,
    IndexWidgetTranscriptionScrollbarTrack,
    IndexWidgetTranscriptionScrollbarThumb,
    IndexWidgetControlBar,
    IndexWidgetControlBarButton,
    IndexWidgetControlBarButtonIcon,
    IndexWidgetMobileBlurredRectangle,
    IndexWidgetError
} from "./IndexWidgetStyles";
import { parseFileLength } from "utils/parseFileLength";
import { useDispatch } from "react-redux";
import { setWidgetFileState } from "slices/widgetFileSlice";
import sliceLongFoldername from "utils/sliceLongFoldername";
import Python from "../../../../assets/Python.json";

const borderDefaultStyle = "linear-gradient(180deg, #111320 0%, rgba(9, 11, 23, 0.00) 93.1%) border-box";
const borderFocusStyle = "linear-gradient(180deg, #1683E2 0%, #1683E200 93.1%) border-box";

interface ISegment {
    start: number;
    text: string;
}

interface IFileView {
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

interface IGroupedSegment extends Array<ISegment>{};

interface IIndexWidgetInterface {
    setControlBar:(state: boolean) => void;
}

const IndexWidgetInterface: FC<IIndexWidgetInterface> = ({setControlBar}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [data, setData] = useState<File>(null);
    const [inputValue, setInputValue] = useState<string>("");
    const [fileError, setFileError] = useState<string>(null);
    const [fileStatus, setFileStatus] = useState<string>(null);
    const [inputBorderStyle, setInputBorderStyle] = useState<string>(borderDefaultStyle);
    const [checkboxActive, setCheckboxActive] = useState<boolean>(false);
    const [groupedSegments, setGroupedSegments] = useState<IGroupedSegment>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!data) {
            setFileStatus(null);
            setCheckboxActive(null);
        } else {
            if (fileStatus === "sending") {
                setTimeout(() => setFileStatus("transcribing"), 3000);
            }
            if (fileStatus === "transcribing") {
                groupSegments(10);
                setTimeout(() => setFileStatus("ready"), 10000);
            }
            if (fileStatus === "ready") {
                dispatch(setWidgetFileState(fileStatus));
                setControlBar(true);
            }
        }
    }, [data, fileStatus]);

    useEffect(() => {
        if (fileStatus === "ready") {
            const clippedHeight = document.getElementById("overflow_block").offsetHeight;
            const trackHeight = document.getElementById("scrollbar_track").offsetHeight;
            const contentBlock = document.querySelector("#content_block");

            const thumbHeight = trackHeight * (clippedHeight / contentBlock.scrollHeight);
            document.getElementById("scrollbar_thumb").style.height = `${thumbHeight}px`;

            contentBlock.addEventListener("scroll", function() {
                handleWidgetScroll(contentBlock, contentBlock.scrollHeight, trackHeight);
            });
            return () => {
                contentBlock.addEventListener("scroll", function() {
                    handleWidgetScroll(contentBlock, contentBlock.scrollHeight, trackHeight);
                });
            }
        }
    }, [fileStatus]);

    //remove in prod
    useEffect(() => {
        if (groupedSegments.length > 100) {
            const truncatedSegments = groupedSegments.slice(0, 12);
            setGroupedSegments(truncatedSegments);
        }
    }, [groupedSegments]);

    useEffect(() => {
        if (fileStatus === "ready" && window.innerWidth <= 500) {
            const content = document.getElementById("greeting_content") as HTMLElement;
            content.scrollIntoView({behavior: "smooth"});
        }
    }, [fileStatus]);

    function handleWidgetScroll(
        element: HTMLElement | Element, 
        scrollHeight: number, 
        trackHeight: number): void 
    {
        const value = element.scrollTop / (scrollHeight / trackHeight);
        document.getElementById("scrollbar_thumb").style.transform = `translate3d(0px, ${value}px, 0px`;
    }

    const handleDrop = function(e: React.DragEvent<HTMLDivElement>): void {
        e.preventDefault();
        e.stopPropagation();
        setInputBorderStyle(borderDefaultStyle);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            if (e.dataTransfer.files[0].size === 0) {
                setFileError("Обнаружен файл с нулевым размером, загрузка отменена");
            } else if (!checkFileExt(e.dataTransfer.files[0])) {
                setFileError("Обнаружен файл с недопустимым форматом, загрузка отменена");
            } else if (e.dataTransfer.files[0].size > 500000000) {
                setFileError("Превышен допустимый лимит размера файла.");
            } else {
                if (fileError) setFileError(null);
                setData(e.dataTransfer.files[0]);
            }
        }
    };

    const handleChange = function(e: React.ChangeEvent<HTMLInputElement>): void {
        e.preventDefault();
        const target = (e.currentTarget as HTMLInputElement);
        if (target.files && target.files[0]) {
            if (target.files[0].size === 0) {
                setFileError("Обнаружен файл с нулевым размером, загрузка отменена");
            }
            if (!checkFileExt(target.files[0])) {
                setFileError("Обнаружен файл с недопустимым форматом, загрузка отменена");
            } else if (target.files[0].size > 500000000) {
                setFileError("Превышен допустимый лимит размера файла.");
            } else {
                if (fileError) setFileError(null);
                setData(target.files[0]);
            }
        }
    };

    const checkFileExt = (file: File): boolean => {
        const ext = file.name.match(/\.([^\.]+)$/)[1];
        switch (ext.toLowerCase()) {
            case 'mp3':
            case 'mpeg':
            case 'mpg':
            case 'mov':
            case 'mkv':
            case 'mxf':
            case 'avi':
            case 'mts':
            case '3gp':
            case 'amr':
            case 'wav':
            case 'flv':
            case 'wmv':
            case 'm4a':
            case 'ogg':
            case 'aac':
            case 'flac':
            case 'wma':
            case 'mp4':
                return true;
            default:
                return false;
        }
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const input = e.currentTarget.value;
        setInputValue(input);
    }

    const onButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        e.preventDefault();
        inputRef.current.click();
    };

    const groupSegments = (n: number): void => {
        let group: IGroupedSegment = [];
        let segment: string[] = [];
        for (let i = 0, j = 0; i < Python.segments.length; i++) {
            if (i >= n && i % n === 0) {
                group[j] = {
                    start: Python.segments[i-10].start,
                    text: segment.join('')
                };
                segment = [];
                j++;
            }
            segment.push(Python.segments[i].text);
            if (i === Python.segments.length - 1)  {
                setGroupedSegments(group);
            }
        } 
    }
    
    if (fileStatus === "transcribing") {
        return (
            <IndexWidgetBackground>
                <IndexWidgetPattern 
                    alt="pattern" 
                    src="/images/widget-pattern.webp"
                />
                <IndexWidgetTitle>
                    Выполнятеся расшифровка файла, пожалуйста подождите.
                </IndexWidgetTitle>
                <IndexWidgetProcessingBlock>
                    <IndexWidgetProcessingFileIcon
                        alt="file"
                        src="/images/transcription-file.svg"
                    />
                    <IndexWidgetProcessingIcon width="76" height="38" viewBox="0 0 76 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="firstArrow" d="m14.25 9.5 9.5 9.5-9.5 9.5" stroke-width="3.167" strokeLinecap="round" strokeLinejoin="round"/>
                        <path className="secondArrow" d="m33.25 9.5 9.5 9.5-9.5 9.5" stroke-width="3.167" strokeLinecap="round" strokeLinejoin="round"/>
                        <path className="thirdArrow" d="m52.25 9.5 9.5 9.5-9.5 9.5" stroke-width="3.167" strokeLinecap="round" strokeLinejoin="round"/>
                    </IndexWidgetProcessingIcon>
                    <IndexWidgetProcessingFileIcon 
                        alt="transcription" 
                        src="/images/widget-transcription.svg"
                    />
                </IndexWidgetProcessingBlock>
            </IndexWidgetBackground>
        );
    } if (fileStatus === "ready" && groupedSegments) {
        return (
            <IndexWidgetBackground id="overflow_block">
                <IndexWidgetPattern alt="pattern" src="/images/widget-pattern.webp" />
                <IndexWidgetTrancriptionContent id="content_block" ref={contentRef}>
                    {groupedSegments.map((segment, idx) => {
                        return (
                            <IndexWidgetTranscriptionBlock id="transcript" key={idx}>
                                <IndexWidgetTranscriptionTimestamp>
                                    {parseFileLength(segment.start, true)}
                                </IndexWidgetTranscriptionTimestamp>
                                <IndexWidgetTranscriptionParagraph>
                                    <IndexWidgetTranscriptionWord>
                                        {segment.text}
                                    </IndexWidgetTranscriptionWord>
                                </IndexWidgetTranscriptionParagraph>
                            </IndexWidgetTranscriptionBlock>
                        );
                    })}
                </IndexWidgetTrancriptionContent>
                <IndexWidgetTranscriptionScrollbarTrack id="scrollbar_track">
                    <IndexWidgetTranscriptionScrollbarThumb id="scrollbar_thumb" />
                </IndexWidgetTranscriptionScrollbarTrack>
            </IndexWidgetBackground>
        );
    } else {
        return (
            <>
                {!data ? (
                    <form>
                        <IndexWidgetBackground
                            id="input_file"
                            onSubmit={(e) => e.preventDefault()}
                            onDragOver={(e) => { e.preventDefault(); setInputBorderStyle(borderFocusStyle); }}
                            onDragLeave={(e) => { e.preventDefault(); setInputBorderStyle(borderDefaultStyle); }}
                            onDrop={handleDrop}
                            $borderStyle={inputBorderStyle}
                        >
                            <IndexWidgetPattern 
                                alt="pattern" 
                                src="/images/widget-pattern.webp"
                            />
                            <IndexWidgetFormBlock>
                                <IndexWidgetInputFileField 
                                    type="file"
                                    accept=".mp3,.mpeg,.mpg,.mov,.mkv,.mxf,.avi,.mts,.3gp,.amr,.wav,.flv,.mov,.wmv,.m4a,.ogg,.aac,.flac,.wma,.mp4"
                                    id="input_file_field" 
                                    multiple={false} 
                                    ref={inputRef}
                                    onChange={handleChange}
                                />
                                <IndexWidgetTitle>
                                    Перетащите изображение в выделенную область, или нажимите “Выбрать файл”
                                </IndexWidgetTitle>
                                <IndexWidgetMainButton onClick={(e) => { onButtonClick(e); }}>
                                    Выбрать файл
                                </IndexWidgetMainButton>
                                <IndexWidgetText>
                                    Или вставьте ссылку на файл
                                </IndexWidgetText>
                                <IndexWidgetInputBlock>
                                    <IndexWidgetInput
                                        type="text"
                                        placeholder="Я.Диск, Google диск"
                                        onChange={(e) => { handleInput(e); }}
                                    />
                                    <IndexWidgetInputButton type="button" disabled={inputValue === ""}>
                                        <IndexWidgetInputButtonIcon className={inputValue ? "active" : ""} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 15.8926V4.10744M10 4.10744L4.69672 9.41074M10 4.10744L15.3033 9.41074" strokeLinecap="round" strokeLinejoin="round"/>
                                        </IndexWidgetInputButtonIcon>
                                    </IndexWidgetInputButton>
                                </IndexWidgetInputBlock>
                                <IndexWidgetError>
                                    {fileError}
                                </IndexWidgetError>
                            </IndexWidgetFormBlock>
                        </IndexWidgetBackground>
                    </form>
                ) : (
                    <IndexWidgetBackground>
                        <IndexWidgetPattern 
                            alt="pattern" 
                            src="/images/widget-pattern.webp" 
                        />
                        <IndexWidgetFile>
                            {sliceLongFoldername(data.name, "foldersMenu")}
                            <IndexWidgetDeleteButton type="button" onClick={() => { setData(null); }} />
                        </IndexWidgetFile>
                        {fileStatus === "sending" ? (
                            <>
                                <IndexWidgetText>
                                    Идёт отправка файла
                                </IndexWidgetText>
                                <IndexWidgetProgressBar max="100" value={33}/>
                                <IndexWidgetMainDeleteButton type="button" onClick={() => { setData(null); }}>
                                    Отменить
                                </IndexWidgetMainDeleteButton>
                            </>
                        ) : (
                            <>
                                <label>
                                    <IndexWidgetCheckboxBlock>
                                        <IndexWidgetCheckboxInput
                                            type="checkbox"
                                            onChange={() => { setCheckboxActive(current => !current); }}
                                        />
                                        <IndexWidgetCheckboxText>
                                            Настоящим подтверждаю, что ознакомлен с текстом согласия на 
                                            <IndexWidgetCheckboxLink to="">
                                                обработку персональных данных
                                            </IndexWidgetCheckboxLink>
                                            и принимаю его условия
                                        </IndexWidgetCheckboxText>
                                    </IndexWidgetCheckboxBlock>
                                </label>
                                <IndexWidgetMainButton 
                                    disabled={!checkboxActive}
                                    className="processing_button"
                                    onClick={() => { setFileStatus("sending"); }}
                                >
                                    Отправить файл
                                </IndexWidgetMainButton>
                            </>
                        )}
                    </IndexWidgetBackground>
                )}
            </>
        );
    }
}

const IndexWidgetComponent = () => {
    const [controlBar, setControlBar] = useState<boolean>(false);

    return (
        <>
            <IndexWidgetBody>
                <IndexWidgetBlock>
                    <IndexWidgetBlockAnimation>
                        <IndexWidgetBlockAnimationLine />
                        <IndexWidgetBlockAnimationLine className="second_line" />
                    </IndexWidgetBlockAnimation>
                    <IndexWidgetInterface setControlBar={setControlBar} />
                </IndexWidgetBlock>
                <IndexWidgetMobileBlurredRectangle />
                {controlBar && (
                    <IndexWidgetControlBar>
                        <IndexWidgetControlBarButton >
                            <IndexWidgetControlBarButtonIcon 
                                alt="export" 
                                src="/images/export-icon.svg"
                            />
                        </IndexWidgetControlBarButton>
                        <IndexWidgetControlBarButton >
                            <IndexWidgetControlBarButtonIcon 
                                alt="copy" 
                                src="/images/copy-icon.svg"
                            />
                        </IndexWidgetControlBarButton>
                    </IndexWidgetControlBar>
                )}
            </IndexWidgetBody>
            {controlBar && (
                <IndexWidgetControlBar className="mobile_controls">
                    <IndexWidgetControlBarButton >
                        <IndexWidgetControlBarButtonIcon 
                            alt="export" 
                            src="/images/export-icon.svg"
                        />
                    </IndexWidgetControlBarButton>
                    <IndexWidgetControlBarButton >
                        <IndexWidgetControlBarButtonIcon 
                            alt="copy" 
                            src="/images/copy-icon.svg"
                        />
                    </IndexWidgetControlBarButton>
                </IndexWidgetControlBar>
            )}
        </>
    );
} 

export default IndexWidgetComponent;