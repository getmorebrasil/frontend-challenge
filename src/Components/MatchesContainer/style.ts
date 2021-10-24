import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const Container = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.primaryBackground};

  .match-header {
    display: flex;
    justify-content: center;

    & > span {
      background: ${({ theme }) => theme.matchDate};

      color: ${({ theme }) => theme.colors.secondary};

      padding: 5px 10px;

      font-size: 15px;
      text-align: center;
    }
  }

  .match-content {
    display: flex;
    justify-content: space-between;

    height: 75px;

    .emblem-container {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0.32vw 0.852vw;

      img {
        width: 40px;

        @media (max-width: 865px) {
          max-width: 30px;
        }
      }
    }

    .score {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;

      padding: 0.533vw;

      color: ${({ theme }) => theme.primaryText};

      font-size: 22px;
      text-transform: uppercase;

      span {
        min-width: 55px;

        display: flex;
        justify-content: center;
      }
    }
  }
`;
