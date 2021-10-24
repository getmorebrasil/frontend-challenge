import { useCallback } from 'react';
import { useTheme } from '../../Context/ThemeContext';

import { Container, ThemeSwitch } from './style';

const Header: React.FC = () => {
  const { toggleTheme, theme } = useTheme();

  const handleToggleTheme = useCallback(() => toggleTheme(), [theme]);

  return (
    <Container>
      <img src={'/assets/logos/getmoreLogo.png'} alt="GetmoreSports" />
      <div className="switcher-container">
        <span>🌞</span>
        <ThemeSwitch
          onChange={handleToggleTheme}
          checked={theme.name === 'dark'}
        />
        <span>🌚</span>
      </div>
    </Container>
  );
};

export default Header;
