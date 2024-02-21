import { useState } from 'react';
import "./App.css";
import { audios } from './audioData'
import AudioFiles from "./components/AudioFiles";
import Player from './components/Player'

function App() {
  const [songs, setSongs] = useState(audios);
  const getSongData = (song) => {
    console.log(song)

  }
  
  return (
    <>
      <div className='player-main'>
        <Player />
      </div>
    <div className='app-main'>
      {
        songs.map((song) => {
          return (
      
            <AudioFiles
              song={song}
              getSongData={getSongData}
            
            />
        )
      })}
    </div>
    </>
  );
}

export default App;
