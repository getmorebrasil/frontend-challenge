import { useCallback } from 'react';
import { useTheme } from '../../Context/ThemeContext';

import { isMobile } from 'react-device-detect';

import { Switch, Box } from '@material-ui/core';

import { Container } from './style';

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const handleToggleTheme = useCallback(() => toggleTheme(), [theme]);

  return (
    <Container>
      {!isMobile ? (
        <img
          id="logo-without-words"
          src={
            isMobile
              ? '/assets/logos/getmoreLogo.png'
              : '/assets/logos/getmoreOnlyLogo.svg'
          }
          alt="GetmoreSports"
        />
      ) : (
        <img
          src={
            isMobile
              ? '/assets/logos/getmoreLogo.png'
              : '/assets/logos/getmoreOnlyLogo.svg'
          }
          alt="GetmoreSports"
        />
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
