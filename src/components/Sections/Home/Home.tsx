import { Grid2Styled } from './Home.styles';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import HomeImage from '../../Elements/HomeImage/HomeImage';

const Home = () => {
  return (
    <Grid2Styled container>
      <Grid2>
        <h1>
          MOHAMMAD<br></br>SAIFUDDIN
        </h1>
      </Grid2>
      <Grid2>
        <HomeImage />
      </Grid2>
    </Grid2Styled>
  );
};

export default Home;
