import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const ButtoStyled = styled(Button)`
  color: #d1c5ad;
  font-weight: 900;
  font-size: 1.5rem;
  @media screen and (max-width: 25em) {
    & {
      font-size: 1rem;
    }
  }
`;
