import Head from 'next/head'
import React from 'react'

// Global styles
import '../styles/styles.scss'

function _app({ Component, pageProps }) {
  const Layout = Component.Layout ? Component.Layout : React.Fragment
  
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Yantramanav:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <link href="/fonts/fontawesome/css/all.css" rel="stylesheet"></link>
      </Head>

      <Component {...pageProps} />
    </Layout>
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