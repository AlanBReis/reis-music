import React, { useState } from "react";
import {
    TbPlayerPlay,
    TbPlayerPause,
    TbPlayerTrackNext,
    TbPlayerTrackPrev,
} from "react-icons/tb";

export default function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };
    return (
        <div>
            <div className="player-card">
                <h4 className="activeSong-name"> Song name</h4>
                <h4 className="activeArtist-name"> Artist name</h4>

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
