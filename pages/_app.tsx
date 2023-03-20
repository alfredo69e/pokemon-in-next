import '@/styles/globals.css'

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

import { darkTheme } from './../themes';

import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={ darkTheme }>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
