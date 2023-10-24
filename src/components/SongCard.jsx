import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { PlayPause} from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { Box, Container } from '@mui/material';

const SongCard = ({ song, i }) => (
  <Container sx={{display: 'flex', flexDirection: 'column', width: '250px', padding: '4', backgroundColor: 'white', borderRadius: '10px'}}>
    <Box sx={{position: 'relative', width: 'full', height: '56'}}>
      <Box sx={{position: 'absolute', justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray'}}>

      </Box>
    </Box>
    
  </Container>
);

export default SongCard;
