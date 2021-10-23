import styled from 'styled-components';

import { Box, Switch } from '@material-ui/core';

export const Container = styled(Box)`
  background: ${({ theme }) => theme.header};

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;

  img {
    width: 400px;
  }

  position: relative;

  .switcher-container {
    position: absolute;

    right: 10px;
  }
`;

export const ThemeSwitch = styled(Switch)`
  .Mui-checked {
    color: #fff;
  }

  .MuiSwitch-track {
    background: #fff;
  }

  .Mui-checked + .MuiSwitch-track {
    background: #fff;
  }
`;
