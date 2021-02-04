import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import colors from 'tailwindcss/colors'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={colors.primary} />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body>
          <script src="/no-flash.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx)
  return { ...initialProps }
}
