import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import HelpApp from '../components/HelpApp/HelpApp'
import LayoutDoc from '../components/LayoutDoc/LayoutDoc'

// Global styles
import '../styles/styles.scss'

function _app({ Component, pageProps }) {
  const [pages, setPages] = useState([])

  // Fetch pages from API on app mount
  useEffect(async () => {
    console.log('Fetching pages from API')
    let pagesReq = await axios('/api/pages')
    setPages(pagesReq.data)
  }, [])

  console.log('Rendering HelpApp with pages', pages)
  
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Yantramanav:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <link href="/fonts/fontawesome/css/all.css" rel="stylesheet"></link>
      </Head>

      {/* Persistent layout for the HelpApp itself and the sidebar */}
      <HelpApp>
        <LayoutDoc pages={pages} theme="dark">
          {/* The component of the page being viewed */}
          <Component {...pageProps} />
        </LayoutDoc>
      </HelpApp>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default _app
