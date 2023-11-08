import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const SongCard = ({ song, isPlaying, activeSong, i, data, coverArtImage }) => {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  console.log("song", song);
  return (
    <Card
      sx={{
        width: "200px",
        justifyContent: "space-evenly",
        alignContent: "space-between",
        backgroundColor: "lightgray",
      }}
    >
      <CardActionArea sx={{ height: "250px" }}>
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
        <CardMedia
          component="img"
          height="140"
          alt="song_image"
          image={coverArtImage}
        />
        <CardContent>
          <Typography variant="p" sx={{ fontSize: "1rem" }}>
            <Link to={`/songs/${song?.key}`}>{song.title}</Link>
          </Typography>
          <Typography sx={{ fontSize: ".8rem" }}>
            <Link>{song.subtitle}</Link>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SongCard;
