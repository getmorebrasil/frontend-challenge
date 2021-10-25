import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const Container = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: ${({ theme }) => theme.secondaryBackground};
  color: ${({ theme }) => theme.primaryText};

  border-top-right-radius: 10px;

  max-width: 900px;

  div#header-modal {
    background: ${({ theme }) => theme.colors.primary};

    border-top-right-radius: 10px;

    padding: 20px 0;

    h4 {
      text-align: center;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  div#requisition-error-inside-container {
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 40px;

    img {
      max-width: 250px;
      max-height: 250px;
    }

    div#requisition-error-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      h4 {
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${({ theme }) => theme.primaryText};
        text-align: center;

        margin-left: 40px;
        margin-bottom: 40px;
      }

      h5 {
        display: flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;

        margin-left: 40px;

        svg {
          margin-right: 10px;
        }
      }
    }
  }

  @media (max-width: 900px) {
    width: 700px;
  }

  @media (max-width: 730px) {
    width: 400px;

    img {
      width: 90px;
      height: 90px;
    }

    div#requisition-error-content {
      h1 {
        margin-bottom: 40px;

        font-size: 1rem;
      }

      a {
        svg {
          margin-right: 10px;
        }

        h2 {
          font-size: 0.8rem;
        }
      }
    }
  }
`;
