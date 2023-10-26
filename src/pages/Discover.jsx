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
import { useGetTopChartsQuery } from "../redux/Service/shazamCore";

export default function Discover() {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = "Pop";

  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 1,
          p: 1,
          // bgcolor: (theme) =>
          //   theme.palette.mode === "dark" ? "#101010" : "#fff",
          // color: (theme) =>
          //   theme.palette.mode === "dark" ? "grey.300" : "grey.800",
          // border: "1px solid",
          // borderColor: (theme) =>
          //   theme.palette.mode === "dark" ? "grey.800" : "grey.300",
          // borderRadius: 2,
          fontSize: "1.5rem",
          fontWeight: "700",
        }}
      >
        {("Discover", genreTitle)}
      </Box>

      <Box sx={{ minWidth: 120, display: "flex", justifyContent: "center" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
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
          // justifyContent: "start",
          justifyContent: "center",
        }}
      >
        <Stack
          spacing={{ xs: 1, sm: 2 }}
          direction="row"
          useFlexGap
          flexWrap="wrap"
        >
          {data?.map((song, i) => (
            <SongCard key={song.key} song={song} i={i} />
          ))}
        </Stack>
      </Box>
    </Container>
  );
}
