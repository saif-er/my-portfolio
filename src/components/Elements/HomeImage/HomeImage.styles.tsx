import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

const homeImageAnimation = keyframes`
0%{
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}
50%{
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
}
100%{
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}
`;

export const Img = styled.img`
  width: 30rem;
  animation: ${homeImageAnimation} 8s ease-in-out infinite 1s;
`;

export const BoxStyled = styled(Box)`
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.3);
  animation: ${homeImageAnimation} 8s ease-in-out infinite 1s;
`;
