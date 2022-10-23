import styled from '@emotion/styled';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export const Grid2Styled = styled(Grid2)`
  justify-content: center;
  padding: 1.5rem 0;
  column-gap: 3rem;
  @media screen and (max-width: 25em) {
    & {
      column-gap: 0.25em;
      padding: 8vw 0 2vw 0;
    }
  }
`;
