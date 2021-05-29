import { AppProps } from 'next/app'
import AppProvider from '../contexts'
import GlobalStyle from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GlobalStyle />
      <Component {...pageProps} />;
    </AppProvider>
  )
}

export default MyApp
