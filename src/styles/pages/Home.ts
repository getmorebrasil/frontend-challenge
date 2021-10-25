import styled, { keyframes } from 'styled-components';
import { Box, Grid } from '@material-ui/core';

const leftFromRightAnimation = keyframes`
  0% {
    left: -500px;
    opacity: 0.5;
  }

  100% {
    left: 0px;
    opacity: 1;
  }
`;

const rightFromLeftAnimation = keyframes`
  0% {
    right: -500px;
    opacity: 0.5;
  }

  100% {
    right: 0px;
    opacity: 1;
  }
`;

const topFromBottomAnimation = keyframes`
  0% {
    top: -50px;
    opacity: 0;
  }

  100% {
    top: 0px;
    opacity: 1;
  }
`;

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

  @media (max-width: 1200px) {
    padding: 60px 30px;
  }

  #saudation-container {
    color: ${({ theme }) => theme.colors.secondary};

    margin-right: 30px;

    position: relative;

    animation-name: ${leftFromRightAnimation};
    animation-duration: 1.5s;

    h2 {
      font-size: 54px;
      font-weight: bold;
      text-transform: uppercase;
      line-height: 1.2;

      margin-bottom: 25px;

      span {
        color: ${({ theme }) => theme.colors.primary};
      }

      @media (max-width: 1366px) {
        font-size: 40px;
      }

      @media (max-width: 600px) {
        font-size: 36px;
      }
    }

    h4 {
      font-size: 34px;
      font-weight: 500;

      @media (max-width: 1366px) {
        font-size: 28px;
      }

      @media (max-width: 600px) {
        font-size: 22px;
        font-weight: 400;
      }
    }
  }

  div.grid-item-image {
    @media (max-width: 1200px) {
      width: 100%;

      display: flex;

      margin-top: 30px;
    }

    img {
      max-width: 600px;

      position: relative;

      animation-name: ${rightFromLeftAnimation};
      animation-duration: 1.5s;

      @media (max-width: 1520px) {
        max-width: 400px;
      }

      @media (max-width: 600px) {
        max-width: 300px;
      }
    }
  }
`;

export const CompetitionsContainer = styled(Box)`
  h4 {
    margin: 80px 0;

    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryText};

    position: relative;
    animation: ${topFromBottomAnimation};
    animation-duration: 1.5s;
  }
`;
