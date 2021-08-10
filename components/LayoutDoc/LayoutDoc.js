import Head from 'next/head'
import { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import styles from './LayoutDoc.module.scss'

/**
 * The LayoutDoc component contains the contents of a single page in `/pages`.
 * Each Next.js page uses this as its top level component, and its purpose is to
 * define the <head> contents and the main content of the page.
 */
export default function LayoutDoc({
  seoTitle = 'Cardinal Apps',
  seoDesc = 'Help page for Cardinal Apps',
  favicon = '/favicon/favicon.ico',
  pages = [],
  children
}) {
  //const desiredPageLayout = Component.layout ? Component.layout : 'full_menu'
  //const [layout, setLayout] = useState('full_menu')
  const [theme, setTheme] = useState('dark')
  
  // // Each page can choose a layout
  // useEffect(() => {
  //   if (desiredPageLayout !== layout) {
  //     setLayout(desiredPageLayout)
  //   }
  // })

  //console.log('Rendering app with layout', layout)

  return (
    <div className={styles.LayoutDoc} data-theme={theme}>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="icon" href={favicon} />
      </Head>

      <div id="LayoutDoc" className={styles.LayoutDoc}>
        <div className={`${styles.pillar} ${styles.left}`}>
          <Sidebar pages={pages} />
        </div>

        <div className={`${styles.pillar} ${styles.center}`}>
          <div className={styles.pageContent}>
            {children}
          </div>
        </div>

        <div className={`${styles.pillar} ${styles.right}`}></div>
      </div>
    </div>
  )
}
