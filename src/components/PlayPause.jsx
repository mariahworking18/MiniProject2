import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({isPlaying, activeSong, song, handlePause, handlePlay}) => (
  isPlaying && activeSong?.title === song.artist_and_title ? (
    <FaPauseCircle style={{position:'absolute', color:'#C0521D', translate:'200% 200%'}} size={35} onClick={handlePause} />
  ) : (
    <FaPlayCircle style={{position:'absolute', color:'#C0521D', translate:'250% 200%'}} size={35} onClick={handlePlay}/>
  )
);

export default PlayPause;
