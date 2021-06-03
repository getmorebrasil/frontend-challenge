import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import AppProvider from '../contexts'
import GlobalStyle from '../styles/global'
import '../styles/nprogress.css'

const TopProgressBar = dynamic(
  () => {
    return import('../components/molecules/TopProgressBar')
  },
  { ssr: false }
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <GlobalStyle />
      <TopProgressBar />
      <Component {...pageProps} />;
    </AppProvider>
  )
}

export default MyApp
