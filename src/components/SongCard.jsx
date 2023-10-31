import  { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const SongCard = ({ song, i }) => {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{backgroundColor: 'white'}} >
        <CardMedia
          component="img"
          height="140"
          // image="/static/images/cards/contemplative-reptile.jpg"
          alt="song_image"
          src={song.images?.coverart}
        />
        <Typography>
          <Link>
            {song.title}
          </Link>
        </Typography>
        <Typography>
          <Link>
            {song.subtitle}
          </Link>
        </Typography>
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent> */}
      </CardActionArea>
    </Card>
  );
};

export default SongCard;
