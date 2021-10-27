import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const Container = styled(Box)`
  min-height: 100vh;
  max-width: 100vw;

  overflow-x: hidden;

  background: ${({ theme }) => theme.primaryBackground};

  padding-bottom: 180px;

  a {
    text-decoration: none;
  }
`;
