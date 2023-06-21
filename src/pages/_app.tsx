import type { AppProps } from 'next/app';
import { CustomThemeProvider } from '../Context/ThemeContext';
import { ThemeProvider } from '@material-ui/core/styles';
import { CompetitionProvider } from '../Context/CompetitionContext';

import GlobalStyle from '../styles/global';
import muiTheme from '../styles/muiTheme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <CustomThemeProvider>
    <ThemeProvider theme={muiTheme}>
      <CompetitionProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </CompetitionProvider>
    </ThemeProvider>
  </CustomThemeProvider>
);

export default MyApp;
