import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "./pages";
import { bgcolor, color, fontFamily, margin, maxHeight, maxWidth } from "@mui/system";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';


const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <Container maxWidth padding-0 margin-0>
      <Box sx={{
        width: maxWidth,
        height: maxHeight,
        margin: 0,
        padding: 0,
      }}>
        <Sidebar />
        <Box>
          <Searchbar />

          <Box>
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="/top-artists" element={<TopArtists />} />
                <Route path="/top-charts" element={<TopCharts />} />
                <Route path="/around-you" element={<AroundYou />} />
                <Route path="/artists/:id" element={<ArtistDetails />} />
                <Route path="/songs/:songid" element={<SongDetails />} />
                <Route path="/search/:searchTerm" element={<Search />} />
              </Routes>
            <div>
              <TopPlay />
            </div>
          </Box>
        </Box>

        {activeSong?.title && (
          <div>
            <MusicPlayer />
          </div>
        )}
    </Box>
    </Container>
  );
};

export default App;
