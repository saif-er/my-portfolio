import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import NavButton from '../../Elements/NavButton.tsx/NavButton';
import { Grid2Styled } from './Navigation.styles';
const Navigation = () => {
  return (
    <Grid2Styled container>
      <Grid2>
        <NavButton>Home</NavButton>
      </Grid2>
      <Grid2>
        <NavButton>About</NavButton>
      </Grid2>
      <Grid2>
        <NavButton>Skills</NavButton>
      </Grid2>
      <Grid2>
        <NavButton>Projects</NavButton>
      </Grid2>
      <Grid2>
        <NavButton>Contact</NavButton>
      </Grid2>
    </Grid2Styled>
  );
};

export default Navigation;
