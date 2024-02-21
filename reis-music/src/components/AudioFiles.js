import React from 'react'

export default function AudioFiles({
    song
}) {
    return (
        <div className='player-container'>
            <h4 className='song-name'>
                {song.name}
            </h4>
        </div>
    )
}