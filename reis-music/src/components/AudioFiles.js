import React from 'react'

export default function AudioFiles({
    song,
    getSongData
}) {
    return (
        <div className='player-container' onClick={ () => getSongData(song)}>
            <h4 className='song-name'>
                {song.name}
            </h4>
        </div>
    )
}