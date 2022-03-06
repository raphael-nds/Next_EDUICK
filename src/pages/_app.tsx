import { AuthProvider } from 'context/authContext'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { SessionProvider } from 'next-auth/react'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import { QueryClientProvider, QueryClient } from 'react-query'
const queryClient = new QueryClient()

// import { Server } from 'services/mirage'

// Server()

function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Head>
              <title>Intraversa</title>
              <meta
                name="description"
                content="A simple project starter to work with Typescript, React, NextJS and Styled Components"
              />
              <link rel="manifest" href="/manifest.json" />
              <link
                href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;1,400&display=swap"
                rel="stylesheet"
              ></link>
            </Head>
            <Component {...pageProps} />
          </QueryClientProvider>
          <GlobalStyles />
        </ThemeProvider>
      </AuthProvider>
    </SessionProvider>
  )
}

export default App
