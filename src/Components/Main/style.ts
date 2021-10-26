import styled, { keyframes } from 'styled-components';
import { Box } from '@material-ui/core';

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
  h4 {
    margin: 80px 0;

    text-align: center;
    font-weight: bold;
    color: ${({ theme }) => theme.primaryText};

    position: relative;
    animation: ${topFromBottomAnimation};
    animation-duration: 1.5s;

    @media (max-width: 900px) {
      font-size: 28px;
    }

    @media (max-width: 650px) {
      font-size: 22px;
    }

    @media (max-width: 400px) {
      font-size: 18px;
    }
  }

  @media (max-width: 970px) {
    .MuiGrid-item {
      display: flex;
      justify-content: center;
    }
  }
`;
