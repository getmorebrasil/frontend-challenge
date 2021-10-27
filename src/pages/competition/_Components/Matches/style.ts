import styled, { keyframes } from 'styled-components';
import { Box, Grid } from '@material-ui/core';

const loading = keyframes`
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
`;

export const Container = styled(Grid)`
  background: ${({ theme }) => theme.secondaryBackground};
  border-top-right-radius: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  height: fit-content;
`;

export const LoadingMatchesContainer = styled(Box)`
  background: ${({ theme }) => theme.secondaryBackground};

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
