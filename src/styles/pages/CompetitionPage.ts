import styled from 'styled-components';
import { Box, Grid, TableContainer } from '@material-ui/core';

export const Container = styled(Box)`
  min-height: 100vh;

  background: ${({ theme }) => theme.primaryBackground};

  padding-bottom: 30px;

  a {
    text-decoration: none;
  }
`;

export const SubHeader = styled(Box)`
  background: ${({ theme }) => theme.secondaryBackground};

  margin-bottom: 60px;
  padding: 30px 0;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    color: ${({ theme }) => theme.primaryText};
    font-weight: bold;
  }
`;

export const Content = styled(Grid)``;

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

export const MatchesTable = styled(Box)`
  background: ${({ theme }) => theme.secondaryBackground};
  border-top-right-radius: 10px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .header-matches-table {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};

    font-size: 50px;

    height: 80px;
    border-top-right-radius: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      color: ${({ theme }) => theme.colors.secondary};

      &:last-child {
        transform: rotate(180deg);
      }
    }
  }
`;
