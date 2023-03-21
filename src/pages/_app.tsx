import '@/styles/globals.css'
import React from 'react'
import type { AppProps } from 'next/app'

import Header from '../components/header/artist'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
     
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp