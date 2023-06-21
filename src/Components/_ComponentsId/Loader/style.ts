import styled, { keyframes } from 'styled-components';
import { Box } from '@material-ui/core';

const loading = keyframes`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`;

export const Container = styled(Box)`
  height: 100vh;
  width: 100vw;

  position: absolute;
  top: 0;
  left: 0;

  .background {
    height: 100vh;
    width: 100vw;

    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(7px);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    width: 80px;

    -webkit-animation: ${loading} 2s linear infinite;
    animation: ${loading} 2s linear infinite;
  }
`;
