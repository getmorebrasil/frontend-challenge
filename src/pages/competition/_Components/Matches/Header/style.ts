import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const Container = styled(Box)`
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
`;
