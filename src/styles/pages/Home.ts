import styled from 'styled-components';
import { Box, Grid } from '@material-ui/core';

export const Container = styled(Box)`
  min-height: 100vh;

  background: ${({ theme }) => theme.primaryBackground};

  padding-bottom: 30px;

  a {
    text-decoration: none;
  }
`;

export const SaudationContainer = styled(Grid)`
  margin-top: 0;
  margin-left: 0;

  background: ${({ theme }) => theme.mainSectionBackground};

  padding: 60px 0px;

  #saudation-container {
    color: ${({ theme }) => theme.colors.secondary};

    margin-right: 30px;

    h1 {
      font-size: 54px;
      text-transform: uppercase;
      line-height: 4rem;

      margin-bottom: 15px;

      span {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    h4 {
      font-size: 34px;
      font-weight: 500;
    }
  }

  img {
    max-width: 600px;
  }
`;

export const CompetitionsContainer = styled(Box)`
  h1 {
    margin: 80px 0;
    text-align: center;
    color: ${({ theme }) => theme.primaryText};
  }
`;
