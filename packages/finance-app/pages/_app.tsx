import { AppProps } from 'next/app';
import { Provider } from 'react-redux'
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import createEmotionCache from '../utils/createEmotionCache';
import theme from '../theme';
import store from '../store'
import '../styles/global.css'

interface ICustomApp extends AppProps {
  emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache();

function CustomApp({ Component, emotionCache=clientSideEmotionCache, pageProps }: ICustomApp) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default CustomApp;
