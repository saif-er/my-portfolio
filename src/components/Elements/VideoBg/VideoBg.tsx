import videoBg from '../../../assets/videoBg.mp4';
// import imageBg from '../../assets/markus-spiske-cvBBO4PzWPg-unsplash.jpg';
// import { BoxStyled } from './VideoBg.styles';
import { Video } from './VideoBg.styles';
const VideoBg = () => {
  return <Video src={videoBg} autoPlay loop muted />;
};

export default VideoBg;
