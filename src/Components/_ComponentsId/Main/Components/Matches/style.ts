import styled, { keyframes } from 'styled-components';
import { Grid } from '@material-ui/core';

export const Container = styled(Grid)`
  background: ${({ theme }) => theme.secondaryBackground};
  border-top-right-radius: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  height: fit-content;
`;
