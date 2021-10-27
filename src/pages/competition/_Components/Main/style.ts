import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const Container = styled(Grid)`
  margin-top: 50px;

  align-items: center;

  @media (max-width: 1270px) {
    flex-direction: column;
  }
`;
