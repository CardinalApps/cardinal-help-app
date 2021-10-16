import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Provider } from 'react-redux'
import HelpApp from '../components/HelpApp/HelpApp'
import LayoutDoc from '../components/LayoutDoc/LayoutDoc'
import cachedPages from '../cache/pages.json'
import storeFactory from '../store/store'

// Global styles
import '../styles/styles.scss'

function _app({ Component, pageProps }) {
  const router = useRouter()
  const [pages, setPages] = useState(cachedPages || [])
  const currentPage = pages.filter(page => page.route === router.pathname)[0]
  const store = storeFactory()

  // console.log('Rendering HelpApp with pages {pages}, {currentPage}', pages, currentPage)
  
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Yantramanav:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <link href="/fonts/fontawesome/css/all.css" rel="stylesheet"></link>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FWS7Y0MTLJ"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FWS7Y0MTLJ');
            `,
          }}
        />
      </Head>

      {/* Persistent layout for the HelpApp itself and the sidebar */}
      <Provider store={store}>
        <HelpApp>
          <LayoutDoc
            pages={pages}
            page={currentPage}
            theme="dark"
          >
            {/* The component of the page being viewed */}
            <Component {...pageProps} />
          </LayoutDoc>
        </HelpApp>
      </Provider>
    </>
  )
}

export default _app
