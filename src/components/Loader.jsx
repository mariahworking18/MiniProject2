import { Box } from '@mui/material';
import { loader } from '../assets';

const Loader = ({title}) => (
  <Box>
    <img src={loader} alt="loader" />
    <h1>{title || "Loading..."}</h1>
  </Box>
);

export default Loader;
