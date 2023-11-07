import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (
  isPlaying && activeSong?.title === song.artist_and_title ? (
    <FaPauseCircle size={35} onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} onClick={handlePlay}/>
  )
);

export default PlayPause;
