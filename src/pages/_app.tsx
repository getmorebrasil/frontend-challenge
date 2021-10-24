import type { AppProps } from 'next/app';
import IdCompetitionProvider from '../Context/CompetitionContext';
import { CustomThemeProvider } from '../Context/ThemeContext';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import GlobalStyle from '../styles/global';

const theme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <CustomThemeProvider>
    <ThemeProvider theme={theme}>
      <IdCompetitionProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </IdCompetitionProvider>
    </ThemeProvider>
  </CustomThemeProvider>
);

export default MyApp;
