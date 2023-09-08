import React, { FC, useState, useEffect, useRef, SyntheticEvent } from "react";
import useSound from "use-sound";
import { 
    AudioPlayerBlock,
    AudioPlayerBackgroundLayer,
    AudioPlayerControlsBlock,
    AudioPlayerControlsButton,
    AudioControlsIcon,
    AudioPlayerTimecode,
    AudioPlayerTimeScale,
    AudioPlayerTimeScalePseudo,
    AudioPlayerTimeScaleThumb,
    AudioPlayerSymbolIcon,
    AudioPlayerMobileRowWrapper
} from "./AudioPlayerStyles";
import track from "../../assets/coding-music.mp3";

interface IAudioPlayer {
    audioSource?: any;
}

interface ICurrentTime {
    hour: string;
    min: string;
    sec: string;
}

const AudioPlayer: FC<IAudioPlayer> = ({audioSource}) => {
    const [play, { pause, duration, sound }] = useSound(track);

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [seconds, setSeconds] = useState<number>(0);
    const [outputFormatDuration, setOutputFormatDuration] = useState<string>("");
    const [currTime, setCurrTime] = useState<ICurrentTime>();

    useEffect(() => {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const hour = Math.floor(min / 60);
        const minRemain = Math.floor(min % 60);
        const secRemain = Math.floor(sec % 60);

        const formattedTime = `${hour}:${minRemain.toLocaleString('en-US', {minimumIntegerDigits: 2})}:${secRemain.toLocaleString('en-US', {minimumIntegerDigits: 2})}`;
        setOutputFormatDuration(formattedTime);
    },[duration]);

    useEffect(() => {
        const interval = setInterval(() => {
          if (sound) {
            setSeconds(sound.seek([]));
            const hour = String(Math.floor(sound.seek([]) / 3600));
            const rawMin = Math.floor(sound.seek([]) / 60) - 60 * Number(hour);
            const rawSec = Math.floor(sound.seek([]) % 60);
            const min = rawMin.toLocaleString('en-US', {minimumIntegerDigits: 2});
            const sec = rawSec.toLocaleString('en-US', {minimumIntegerDigits: 2});
            setCurrTime({
                hour,
                min,
                sec
            });
          }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

    const playingButton = () => {
        if (isPlaying) {
          pause();
          setIsPlaying(false);
        } else {
          play();
          setIsPlaying(true);
        }
    };

    const autoPlayOnSeek = () => {
        play();
        setIsPlaying(true);
    }

    const handleProgressColor = (e: any) => {
        var value = (e.target.value-e.target.min)/(e.target.max-e.target.min)*100;
        e.target.style.background = 'linear-gradient(to right, #1683E2 0%, #1683E2 ' + value + '%, #1B1D2C ' + value + '%, #1B1D2C 100%)';
        const { innerWidth: width} = window;
        if (width > 500) {
            document.getElementById("thumb").style.left = value - 0.2 + '%';
        } else {
            document.getElementById("thumb-mobile").style.left = value - 0.2 + '%';
        }
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
                {currTime != undefined && outputFormatDuration != null ? (
                    <AudioPlayerTimecode>{currTime.hour}:{currTime.min}:{currTime.sec} / {outputFormatDuration}</AudioPlayerTimecode>
                ) : (
                    <AudioPlayerTimecode>0:00:00 / 0:00:00</AudioPlayerTimecode>
                )}
                <AudioPlayerTimeScalePseudo>
                    <AudioPlayerTimeScale 
                        type="range"
                        min="0"
                        max={duration / 1000}
                        value={seconds}
                        onChange={function(e){ sound.seek([e.target.value]); autoPlayOnSeek(); handleProgressColor(e)}}
                        onInput={function(e){ sound.seek([e.target]); autoPlayOnSeek(); handleProgressColor(e)}}
                    />
                    <AudioPlayerTimeScaleThumb id="thumb" />
                </AudioPlayerTimeScalePseudo>
                <AudioPlayerSymbolIcon alt="audio" src="/images/audio.svg" />
            </AudioPlayerMobileRowWrapper>
            <AudioPlayerTimeScalePseudo className="mobile-player">
                <AudioPlayerTimeScale 
                    type="range"
                    min="0"
                    max={duration / 1000}
                    value={seconds}
                    onChange={function(e){ sound.seek([e.target.value]); autoPlayOnSeek(); handleProgressColor(e)}}
                    onInput={function(e){ sound.seek([e.target]); autoPlayOnSeek(); handleProgressColor(e)}}
                />
                <AudioPlayerTimeScaleThumb id="thumb-mobile" />
            </AudioPlayerTimeScalePseudo>
        </AudioPlayerBlock>
    );
}

export default AudioPlayer;