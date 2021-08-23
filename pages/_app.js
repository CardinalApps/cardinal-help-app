import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import HelpApp from '../components/HelpApp/HelpApp'
import LayoutDoc from '../components/LayoutDoc/LayoutDoc'
import cachedPages from '../cache/pages.json'

// Global styles
import '../styles/styles.scss'

function _app({ Component, pageProps }) {
  const router = useRouter()
  const [pages, setPages] = useState(cachedPages || [])
  const currentPage = pages.filter(page => page.route === router.pathname)[0]

  console.log('Rendering HelpApp with pages {pages}, {currentPage}', pages, currentPage)
  
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Yantramanav:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <link href="/fonts/fontawesome/css/all.css" rel="stylesheet"></link>
      </Head>

      {/* Persistent layout for the HelpApp itself and the sidebar */}
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
    </>
  )
}

export default _app
