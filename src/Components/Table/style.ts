import styled, { keyframes } from 'styled-components';
import { Box, Grid, TableContainer } from '@material-ui/core';

export const StyledTableContainer = styled(TableContainer)`
  &.MuiTableContainer-root {
    border-top-right-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  thead {
    background: ${({ theme }) => theme.colors.primary};

    th {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      color: ${({ theme }) => theme.colors.secondary};

      border: 0;

      min-width: 60px;
    }
  }

  tbody {
    tr {
      background-color: ${({ theme }) => theme.secondaryBackground};

      &:last-child {
        td {
          border: 0;
        }
      }

      td {
        font-size: 18px;
        text-align: center;
        color: ${({ theme }) => theme.primaryText};

        &:nth-child(-2n + 3) {
          font-weight: bold;
        }

        &:nth-child(2) {
          text-align: left;
        }

        &:nth-child(odd) {
          background: ${({ theme }) => theme.primaryBackground};
        }
      }
    }
  }
`;
