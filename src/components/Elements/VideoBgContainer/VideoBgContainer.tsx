import { BoxStyled } from './VideoBgContainer.styles';
import VideoBg from '../VideoBg/VideoBg';
import Overlay from '../Overlay/Overlay';
// type childrenType = { children: React.ReactNode };
// props: childrenType
const VideoBgContainer = () => {
  return (
    <BoxStyled>
      <VideoBg />
      <Overlay />
    </BoxStyled>
  );
};

export default VideoBgContainer;
