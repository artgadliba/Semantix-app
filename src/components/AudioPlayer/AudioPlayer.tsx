import { FC, useState, useEffect, useRef } from "react";
import { 
    AudioPlayerBlock,
    AudioPlayerBackgroundLayer,
    AudioPlayerControlsBlock,
    AudioPlayerControlsButton,
    AudioControlsIcon,
    AudioPlayerTimecode,
    AudioPlayerTimeScale,
    AudioPlayerTimeScalePseudo,
    AudioPlayerVolumeButton,
    AudioPlayerSymbolIcon,
    AudioPlayerMobileRowWrapper,
    AudioPlayerVolumeControlArea,
    AudioPlayerVolumeControlBlock,
    AudioPlayerVolumeControlBlockBackgroundLayer
} from "./AudioPlayerStyles";

interface IAudioPlayer {
    setPlayerRef: (ref: React.MutableRefObject<any>) => void;
    setProgressRef: (ref: React.MutableRefObject<any>) => void;
    isPlaying: boolean;
    setIsPlaying: (state: boolean) => void;
}

interface ICurrentTime {
    hour: string;
    min: string;
    sec: string;
}

const AudioPlayer: FC<IAudioPlayer> = ({setPlayerRef, setProgressRef, isPlaying, setIsPlaying}) => {
    const [volumeControlVisible, setVolumeControlVisible] = useState<boolean>(false);
    const [volumeValue, setVolumeValue] = useState<number>(33);
    const [seconds, setSeconds] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [outputFormatDuration, setOutputFormatDuration] = useState<string>("");
    const [currTime, setCurrTime] = useState<ICurrentTime>();
    const [audioFile, setAudioFile] = useState(null);

    const audioRef = useRef(null);
    const progressRef = useRef(null);
    
    useEffect(() => {
        const ref = audioRef.current;
        ref.addEventListener("loadedmetadata", () => {
            setDuration(ref.duration);
        });
        if (ref.readyState >= 2 && duration === 0) {
            setDuration(ref.duration);
        }
        setPlayerRef(audioRef);
        setProgressRef(progressRef);
        return () => ref.removeEventListener("loadedmetadata", () => {
            setDuration(ref.duration);
        });
    },[]);

    useEffect(() => {
        audioRef.current.volume = volumeValue / 100;
    }, [volumeValue]);
    
    useEffect(() => {
        if (duration != 0) {
            const sec = duration;
            const min = Math.floor(sec / 60);
            const hour = Math.floor(min / 60);
            const minRemain = Math.floor(min % 60);
            const secRemain = Math.floor(sec % 60);
            const formattedTime = `${hour}:${minRemain.toLocaleString("en-US", {minimumIntegerDigits: 2})}:${secRemain.toLocaleString('en-US', {minimumIntegerDigits: 2})}`;
            setOutputFormatDuration(formattedTime);
        }
    },[duration]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(audioRef.current.currentTime);
            const hour = String(Math.floor(audioRef.current.currentTime / 3600));
            const rawMin = Math.floor(audioRef.current.currentTime / 60) - 60 * Number(hour);
            const rawSec = Math.floor(audioRef.current.currentTime % 60);
            const min = rawMin.toLocaleString("en-US", {minimumIntegerDigits: 2});
            const sec = rawSec.toLocaleString("en-US", {minimumIntegerDigits: 2});
            setCurrTime({
                hour,
                min,
                sec
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const { innerWidth: width} = window;
    
    const playingButton = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleSeek = (value: number) => {
        audioRef.current.currentTime = value;
        setSeconds(value);
        audioRef.current.play();
        setIsPlaying(true);
        handleProgressColor(value);
    }

    const handleProgressColor = (value: number) => {
        const ref = progressRef.current;
        const ratio = value / ref.max * 100;
        ref.style.background = 'linear-gradient(to right, #1683E2 0%, #1683E2 ' 
            + ratio + '%, #1B1D2C ' + ratio + '%, #1B1D2C 100%)';
    }

    let timeout: ReturnType<typeof setTimeout>;

    const showVolumeControl = () => {
        clearInterval(timeout);
        setVolumeControlVisible(true);
      };
    
    const hideVolumeControl = () => {
        clearInterval(timeout);
        timeout = setTimeout(() => {
            setVolumeControlVisible(false);
        }, 1500);
    };
    
    return (
        <AudioPlayerBlock>
            {volumeControlVisible === true && (
                <AudioPlayerVolumeControlArea onMouseEnter={showVolumeControl} onMouseLeave={hideVolumeControl}>
                    <AudioPlayerVolumeControlBlock>
                        <AudioPlayerVolumeControlBlockBackgroundLayer>
                            <AudioPlayerTimeScalePseudo className="volume_control">
                                <AudioPlayerTimeScale 
                                    className="volume_control" 
                                    type="range" 
                                    min="0" 
                                    max="100" 
                                    value={volumeValue}
                                    ref={progressRef}
                                    onChange={(e) => { setVolumeValue(Number(e.target.value));
                                        handleProgressColor(Number(e.target.value)); 
                                    }}
                                />
                            </AudioPlayerTimeScalePseudo>
                        </AudioPlayerVolumeControlBlockBackgroundLayer>
                    </AudioPlayerVolumeControlBlock>
                </AudioPlayerVolumeControlArea>
            )}
            <AudioPlayerBackgroundLayer>
                <AudioPlayerMobileRowWrapper>
                    <AudioPlayerControlsBlock>
                    {isPlaying ? (
                        <AudioPlayerControlsButton onClick={playingButton}>
                            <AudioControlsIcon alt="pause" src="/images/pause.svg" />
                        </AudioPlayerControlsButton>
                    ) : (
                        <AudioPlayerControlsButton onClick={playingButton}>
                            <AudioControlsIcon alt="play" src="/images/play.svg" />
                        </AudioPlayerControlsButton>
                    )}
                    </AudioPlayerControlsBlock>
                    {currTime && outputFormatDuration != "" ? (
                        <AudioPlayerTimecode>{currTime.hour}:{currTime.min}:{currTime.sec} / {outputFormatDuration}</AudioPlayerTimecode>
                    ) : (
                        <AudioPlayerTimecode>0:00:00 / 0:00:00</AudioPlayerTimecode>
                    )}
                    <audio preload="metadata" src={audioFile} controls={false} ref={audioRef} />
                    <AudioPlayerTimeScalePseudo>
                        <AudioPlayerTimeScale
                            type="range"
                            min="0"
                            max={duration}
                            value={seconds}
                            onChange={function(e){ handleSeek(Number(e.target.value)); }}
                            ref={progressRef}
                        />
                    </AudioPlayerTimeScalePseudo>
                    <AudioPlayerVolumeButton onMouseEnter={showVolumeControl} onMouseLeave={hideVolumeControl}>
                        <AudioPlayerSymbolIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1993_1104)">
                            <path d="M11.5596 5.49783L8.4318 8.62498H4.84375C4.37758 8.62498 4 9.00255 4 9.46873V14.5312C4 14.997 4.37758 15.375 4.84375 15.375H8.4318L11.5596 18.5021C12.088 19.0305 13 18.6593 13 17.9055V6.09443C13 5.33998 12.0873 4.97013 11.5596 5.49783ZM20.875 12C20.875 9.7665 19.7479 7.71302 17.8596 6.50716C17.4663 6.25615 16.9445 6.37287 16.6953 6.76943C16.446 7.16599 16.5624 7.69087 16.9558 7.94224C18.3532 8.83486 19.1875 10.3515 19.1875 12C19.1875 13.6485 18.3532 15.1651 16.9558 16.0577C16.5624 16.3087 16.446 16.8336 16.6953 17.2305C16.9241 17.5947 17.4378 17.7628 17.8596 17.4928C19.7479 16.2869 20.875 14.2335 20.875 12ZM15.8909 9.29751C15.4838 9.07498 14.9702 9.22158 14.7445 9.62974C14.5198 10.0379 14.6685 10.5508 15.0767 10.7762C15.5305 11.0254 15.8125 11.4948 15.8125 12C15.8125 12.5055 15.5305 12.9745 15.077 13.2238C14.6689 13.4491 14.5202 13.962 14.7448 14.3702C14.9709 14.7801 15.4848 14.9257 15.8912 14.7024C16.8837 14.1558 17.5004 13.1204 17.5004 11.9996C17.5004 10.8788 16.8837 9.84384 15.8909 9.29751Z" />
                            </g>
                            <defs>
                            <clipPath id="clip0_1993_1104">
                            <rect width="16.875" height="18" fill="white" transform="translate(4 3)"/>
                            </clipPath>
                            </defs>
                        </AudioPlayerSymbolIcon>
                    </AudioPlayerVolumeButton>
                </AudioPlayerMobileRowWrapper>
                {width < 501 && (
                    <AudioPlayerTimeScalePseudo className="mobile_player">
                        <AudioPlayerTimeScale 
                            type="range"
                            min="0"
                            max={duration}
                            value={seconds}
                            onChange={function(e){ handleSeek(Number(e.target.value)); }}
                            ref={progressRef}
                        />
                    </AudioPlayerTimeScalePseudo>
                )}
            </AudioPlayerBackgroundLayer>
        </AudioPlayerBlock>
    );
}

export default AudioPlayer;