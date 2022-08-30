import { useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import NProgress from 'nprogress'
import { useRouter } from 'next/router'
import { Hydrate, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '../react-query/queryClient'
import ContextProvider from 'common/context/index'
import { Loading } from 'common/components/UI/Loading'
import '../common/styles/globals.css'
import Head from 'next/head'
import Header from 'common/components/layout/Header'

// require('../common/mocks')

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleStart = (url: string) => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <meta name='theme-color' content='#fff' />
      </Head>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <ContextProvider>
              <Loading />
              <Header />
              <Component {...pageProps} />
            </ContextProvider>
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  )
}

export default MyApp
