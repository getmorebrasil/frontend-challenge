import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const Container = styled(Grid)`
  @media (max-width: 500px) {
    width: 100%;
    margin-top: 0;
    margin-left: 0;

    .MuiGrid-item {
      padding: 20px;
    }
  }
`;
