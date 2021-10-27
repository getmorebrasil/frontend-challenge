import styled from 'styled-components';
import { Grid, TableContainer } from '@material-ui/core';

export const Container = styled(Grid)`
  margin-top: 50px;

  align-items: center;

  @media (max-width: 1270px) {
    flex-direction: column;
  }

  h4 {
    color: ${({ theme }) => theme.primaryText};
    font-weight: bold;

    margin-bottom: 20px;
  }
`;

export const StyledTableContainer = styled(TableContainer)`
  white-space: nowrap;

  .MuiTable-root {
    width: auto;
  }

  table tbody tr:hover {
    filter: brightness(120%);
  }

  @media (max-width: 850px) {
    width: 90vw;

    margin-bottom: 50px;
  }

  @media (max-width: 650px) {
    table thead th,
    table tbody tr td {
      font-size: 18px;
      min-width: 30px;
      padding: 5px;
    }
  }

  @media (max-width: 490px) {
    table thead th,
    table tbody tr td {
      font-size: 15px;
      min-width: 25px;
    }
  }

  @media (max-width: 350px) {
    table thead th,
    table tbody tr td {
      font-size: 12px;
      min-width: 20px;
    }
  }

  &.MuiTableContainer-root {
    border-top-right-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    display: flex;

    overflow: hidden;
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

  div table tbody {
    tr td {
      &:nth-child(2) {
        text-align: center;
      }
    }
  }
`;
