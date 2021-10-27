import styled, { keyframes } from 'styled-components';
import { Box } from '@material-ui/core';

const loading = keyframes`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`;

export const Container = styled(Box)`
  background: ${({ theme }) => theme.secondaryBackground};

  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  .background {
    height: 1170px;

    min-width: 347.22px;

    padding: 0 0.852vw;

    background: ${({ theme }) => theme.primaryBackground};
    backdrop-filter: blur(7px);

    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .loader {
    width: 50px;

    margin-top: 30px;

    -webkit-animation: ${loading} 2s linear infinite;
    animation: ${loading} 2s linear infinite;
  }
`;
