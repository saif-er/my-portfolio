import styled from '@emotion/styled';
// import { css } from '@emotion/react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

export const Grid2Styled = styled(Grid2)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70vh;
  column-gap: 15rem;
  & h1 {
    font-weight: 900;
    font-size: 11rem;
    color: #d1c5ad;
  }

  @media screen and (max-width: 75em) {
    & {
      column-gap: 8rem;
    }
    & h1 {
      font-weight: 900;
      font-size: 10rem;
      color: #d1c5ad;
      /* order: -1; */
    }
  }

  @media screen and (max-width: 62em) {
    & {
      row-gap: 8rem;
    }
    & h1 {
      font-weight: 900;
      font-size: 8rem;
      color: #d1c5ad;
    }
  }

  @media screen and (max-width: 25em) {
    padding-top: 3em;
    /* row-gap: 1rem; */

    .title {
      order: 2;
    }
    .image {
      order: 1;
    }

    & h1 {
      text-align: center;
      font-weight: 900;
      font-size: 4rem;
      color: #d1c5ad;
    }
  }
`;
