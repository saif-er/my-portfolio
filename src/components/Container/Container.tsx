import { ContainerStyled } from './Container.styles';
import VideoBgContainer from '../Elements/VideoBgContainer/VideoBgContainer';
import Home from '../Sections/Home/Home';
import Navigation from '../Sections/Navigation/Navigation';

const Container = () => {
  return (
    <ContainerStyled disableGutters maxWidth={false}>
      <VideoBgContainer />
      <Navigation />
      <Home />
    </ContainerStyled>
  );
};

export default Container;
