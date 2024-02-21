import { useState } from 'react';
import './App.css';
import { audios } from './audioData';
import Player from './components/Player';
function App() {
  const songs = audios;
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSong, setCurrentSong] = useState(songs[0]);

  const nextSong = () => {
    if(currentIndex + 1 < audios.length){
      setCurrentIndex(currentIndex + 1)
      setCurrentSong(audios[currentIndex + 1])
    }
  }

  const prevSong = () => {
    if(currentIndex > 0){
      setCurrentIndex(currentIndex - 1)
      setCurrentSong(audios[currentIndex - 1])
    }
  }

  return (
    <div className='player-main'>
      <Player
        currentSong={currentSong}
        currentIndex={currentIndex}
        nextSong={nextSong}
        prevSong={prevSong}
      />
    </div>
  );
}

export default App;