import styled from 'styled-components';

import { Card } from '@material-ui/core';

export const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100px;
  }
`;
