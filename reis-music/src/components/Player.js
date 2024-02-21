import React, { useState } from "react";
import {
    TbPlayerPlay,
    TbPlayerPause,
    TbPlayerTrackNext,
    TbPlayerTrackPrev,
} from "react-icons/tb";

export default function Player({
    currentSong
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };
    return (
        <div>
            <div className="player-card">
                {currentSong ? (
                    <div>
                        <h3 className="activeSong-name">{currentSong.name}</h3>
                        <h5 className="activeArtist-name">{currentSong.creator}</h5>
                    </div>
                ) : (
                    ""
                )}
                

                <div className="control-icons">
                    <TbPlayerTrackPrev
                        color="#ff5722"
                        size={60}
                        className="icons"
                    />
                    {isPlaying ? (
                        <TbPlayerPause
                            color="#ff5722"
                            size={70}
                            className="icons"
                            onClick={togglePlay}
                        />
                    ) : (
                        <TbPlayerPlay
                            color="#ff5722"
                            size={70}
                            className="icons"
                            onClick={togglePlay}
                        />
                    )}

                    <TbPlayerTrackNext
                        color="#ff5722"
                        size={60}
                        className="icons"
                    />
                </div>
            </div>
        </div>
    );
}
