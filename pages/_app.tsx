import 'lib/wdyr'
import React from 'react'
import Head from 'next/head'
import { Provider as AuthProvider } from 'next-auth/client'
import { AppProps } from 'next/dist/next-server/lib/router/router'
import 'lib/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>YOUR SITE TITLE</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <AuthProvider session={pageProps.session}>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp
