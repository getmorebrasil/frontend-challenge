import { useCallback, useEffect, useState } from 'react';
import { useTheme } from '../../Context/ThemeContext';

import { Switch, Box } from '@material-ui/core';

import { Container } from './style';

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [smallLogo, setSmallLogo] = useState(false);

  useEffect(() => {
    setSmallLogo(window.innerWidth < 690);
  }, []);

  const handleToggleTheme = useCallback(() => toggleTheme(), [theme]);

  return (
    <Container>
      {smallLogo ? (
        <img
          id="logo-without-words"
          src={'/assets/logos/getmoreOnlyLogo.svg'}
          alt="GetmoreSports"
        />
      ) : (
        <img src={'/assets/logos/getmoreLogo.png'} alt="GetmoreSports" />
      )}
      <Box className="switcher-container">
        <span>🌞</span>
        <Switch onChange={handleToggleTheme} checked={theme.name === 'dark'} />
        <span>🌚</span>
      </Box>
    </Container>
  );
};

export default Header;
