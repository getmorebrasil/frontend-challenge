import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const Container = styled(Box)`
  min-height: 100vh;

  background: ${({ theme }) => theme.primaryBackground};
`;
