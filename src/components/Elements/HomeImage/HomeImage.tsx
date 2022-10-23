import homeImage from '../../../assets/v4.jpg';
import { Img } from './HomeImage.styles';
import { BoxStyled } from './HomeImage.styles';

// const homeImage: any = new URL('../../../assets/v4.jpg', import.meta.url);

const HomeImage = () => {
  return (
    <BoxStyled>
      <Img src={homeImage} />
    </BoxStyled>
  );
};

export default HomeImage;
