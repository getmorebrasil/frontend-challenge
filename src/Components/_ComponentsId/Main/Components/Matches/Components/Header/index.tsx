import React, { useCallback, useContext } from 'react';
import { IconButton, Typography } from '@material-ui/core';
import { IoIosArrowBack } from 'react-icons/io';
import CompetitionContext from '../../../../../../../Context/CompetitionContext';

import { Container } from './style';

export const Header: React.FC = () => {
  const { matchday, setMatchday } = useContext(CompetitionContext);

  const handlePreviousMatchday = useCallback(() => {
    if (matchday === 1) return;
    setMatchday((prevState) => prevState! - 1);
  }, []);

  const handleNextMatchday = useCallback(() => {
    if (matchday === 38) return;
    setMatchday((prevState) => prevState! + 1);
  }, []);

  return (
    <Container>
      <IconButton onClick={() => handlePreviousMatchday()}>
        <IoIosArrowBack />
      </IconButton>

      <Typography variant="h5">RODADA {matchday}</Typography>

      <IconButton onClick={() => handleNextMatchday()}>
        <IoIosArrowBack />
      </IconButton>
    </Container>
  );
};

export default Header;
