import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import {
  shazamCoreApi,
  useGetTopChartsQuery,
} from "../redux/Service/shazamCore";

export default function Discover() {
  const dispatch = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = "";

  // if (isFetching) return <Loader title="Loading songs..." />;
  // if (error) return <Error />;

  const [genre, setGenre] = React.useState("");
  const handleChange = (event) => {
    setGenre(event.target.value);
  };
  return (
    <Container>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 1,
          p: 1,
          fontSize: "1.5rem",
          fontWeight: "700",
        }}
      >
        {'Discover'}
      </Box> */}

      <Box
        sx={{
          minWidth: 120,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
          fontSize: "1.5rem",
          fontWeight: "600",
          color: "#A56B60",
        }}
      >
        {"Discover "}
        {genre}
        <FormControl sx={{ width: "220px" }}>
          <InputLabel id="demo-simple-select-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={genre}
            label="Genre"
            onChange={handleChange}
          >
            {genres.map((genre) => (
              <MenuItem key={genre.value} value={genre.value}>
                {genre.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          display: "flex",
          flex: "wrap",
          justifyContent: "center",
        }}
      >
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          {data?.tracks.map((song) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              coverArtImage={song.images.coverart}
            />
          ))}
        </Stack>
      </Box>
    </Container>
  );
  // console.log(data);
  // return <h1>Discover</h1>;
}
