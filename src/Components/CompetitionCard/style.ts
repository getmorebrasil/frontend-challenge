import styled from 'styled-components';

import { Card } from '@material-ui/core';

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 200px;
  height: 200px;

  background: ${({ theme }) => theme.secondaryBackground};

  -webkit-box-shadow: 0px 1px 10px 0px rgba(50, 50, 50, 1);
  -moz-box-shadow: 0px 1px 10px 0px rgba(50, 50, 50, 1);
  box-shadow: 0px 1px 10px 0px rgba(50, 50, 50, 1);

  button#external-button {
    height: 100%;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    padding: 0;

    .MuiTouchRipple-root {
      color: ${({ theme }) => theme.colors.primary};
    }

    img {
      max-height: 140px;
      max-width: 180px;

      margin-top: auto;
      margin-bottom: auto;
    }

    .MuiCardActions-root {
      padding: 0;
      width: 100%;

      div#internal-button {
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.secondary};

        padding: 5px 0;

        width: inherit;
      }
    }
  }
`;
