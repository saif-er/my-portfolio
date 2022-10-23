import { ButtoStyled } from './NavButton.styles';

type childrenType = { children: React.ReactNode };

const NavButton = (props: childrenType) => {
  return <ButtoStyled size='medium'>{props.children}</ButtoStyled>;
};

export default NavButton;
