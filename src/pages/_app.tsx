import type { AppProps } from 'next/app';
import { CustomThemeProvider } from '../Context/ThemeContext';

import GlobalStyle from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <CustomThemeProvider>
    <Component {...pageProps} />
    <GlobalStyle />
  </CustomThemeProvider>
);

export default MyApp;
