import styled from 'styled-components';

import { Box } from '@material-ui/core';

export const Container = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: ${({ theme }) => theme.primaryBackground};
  color: ${({ theme }) => theme.primaryText};

  max-width: 600px;
  border-top-right-radius: 10px;

  @media (max-width: 1100px) {
    width: 80vw;
  }

  div#header-modal {
    background: ${({ theme }) => theme.colors.primary};

    border-top-right-radius: 10px;
    padding: 20px 0;

    display: flex;
    align-items: center;
    justify-content: center;

    h4 {
      text-align: center;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.secondary};

      margin-left: auto;
    }

    button {
      margin-left: auto;

      color: ${({ theme }) => theme.colors.secondary};
    }

    @media (max-width: 800px) {
      padding: 10px 0;

      h4 {
        font-size: 25px;
      }
    }
  }

  #text-content {
    padding: 20px;

    font-size: 1.1rem;

    p + p {
      margin-top: 20px;
    }

    p a {
      color: ${({ theme }) => theme.primaryText};
      text-decoration: underline;
    }

    @media (max-width: 600px) {
      p {
        font-size: 12px;
      }
    }
  }
`;
