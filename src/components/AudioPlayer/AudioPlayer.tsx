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
    AudioPlayerSymbolIcon,
    AudioPlayerMobileRowWrapper
} from "./AudioPlayerStyles";
import track from "../../assets/Python.mp3";

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
    const [seconds, setSeconds] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const [outputFormatDuration, setOutputFormatDuration] = useState<string>("");
    const [currTime, setCurrTime] = useState<ICurrentTime>();

    const { innerWidth: width} = window;
    const audioRef = useRef(null);
    const progressRef = useRef(null);
    
    useEffect(() => {
        audioRef.current.addEventListener('loadedmetadata', () => {
            setDuration(audioRef.current.duration);
        });
        if (audioRef.current.readyState >= 2 && duration === 0) {
            setDuration(audioRef.current.duration);
        }
        setPlayerRef(audioRef);
        setProgressRef(progressRef);
    },[audioRef]);
    
    useEffect(() => {
        if (duration != 0) {
            const sec = duration;
            const min = Math.floor(sec / 60);
            const hour = Math.floor(min / 60);
            const minRemain = Math.floor(min % 60);
            const secRemain = Math.floor(sec % 60);
            const formattedTime = `${hour}:${minRemain.toLocaleString('en-US', {minimumIntegerDigits: 2})}:${secRemain.toLocaleString('en-US', {minimumIntegerDigits: 2})}`;
            setOutputFormatDuration(formattedTime);
        }
    },[duration]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(audioRef.current.currentTime);
            const hour = String(Math.floor(audioRef.current.currentTime / 3600));
            const rawMin = Math.floor(audioRef.current.currentTime / 60) - 60 * Number(hour);
            const rawSec = Math.floor(audioRef.current.currentTime % 60);
            const min = rawMin.toLocaleString('en-US', {minimumIntegerDigits: 2});
            const sec = rawSec.toLocaleString('en-US', {minimumIntegerDigits: 2});
            setCurrTime({
                hour,
                min,
                sec
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
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
        ref.style.background = 'linear-gradient(to right, #1683E2 0%, #1683E2 ' + ratio + '%, #1B1D2C ' + ratio + '%, #1B1D2C 100%)';
    }
    
    return (
        <AudioPlayerBlock>
            <AudioPlayerBackgroundLayer />
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
                {currTime != undefined && outputFormatDuration != "" ? (
                    <AudioPlayerTimecode>{currTime.hour}:{currTime.min}:{currTime.sec} / {outputFormatDuration}</AudioPlayerTimecode>
                ) : (
                    <AudioPlayerTimecode>0:00:00 / 0:00:00</AudioPlayerTimecode>
                )}
                <audio preload="metadata" src={track} controls={false} ref={audioRef} />
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
                <AudioPlayerSymbolIcon alt="audio" src="/images/audio.svg" />
            </AudioPlayerMobileRowWrapper>
            {width < 501 && (
                <AudioPlayerTimeScalePseudo className="mobile-player">
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
        </AudioPlayerBlock>
    );
}

export default AudioPlayer;