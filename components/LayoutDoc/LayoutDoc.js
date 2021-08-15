import Head from 'next/head'
import { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import styles from './LayoutDoc.module.scss'

// The app will initally render with animations disabled, so that the first load
// feels static and fast.
let animations = false
let pageModeHasBeenApplied = false

/**
 * The LayoutDoc component sets the layout of the app itself. It accepts the
 * main content of the page we are currently viewing as children of this
 * component.
 */
export default function LayoutDoc({
  seoTitle = 'Cardinal Apps',
  seoDesc = 'Help page for Cardinal Apps',
  favicon = '/favicon/favicon.ico',
  pages = [],
  page = {},
  children
}) {
  // All possible layout modes that we can cycle through
  const modes = ['expanded', 'reading']
  const [mode, setMode] = useState(modes[0])
  const [theme, setTheme] = useState('dark')

  console.log('Layout has animations set to', animations)

  /**
   * Whenever a new page is loaded, switch to the mode that the page wants. We
   * only want to do this once per route.
   */
  if (!pageModeHasBeenApplied && page?.config?.sidebarMode !== mode && 'sidebarMode' in page.config) {
    setMode(page.config.sidebarMode)
    pageModeHasBeenApplied = true
  }

  /**
   * Enable animations after the inital render of the Layout.
   */
  useEffect(() => {
    console.log('Initial load has rendered - now enabling animations')
    animations = true
  }, [])

  /**
   * Cycle through all possible modes that the sidebar supports.
   */
  const cycleMode = () => {
    const currentIndex = modes.indexOf(mode)
    const nextIndex = currentIndex + 1

    // Return the next mode in the array, or cycle back to the front
    return nextIndex <= modes.length - 1 ? setMode(modes[nextIndex]) : setMode(modes[0]) 
  }

  return (
    <div className={styles.LayoutDoc} data-theme={theme}>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="icon" href={favicon} />
      </Head>

      <div id="LayoutDoc" className={styles.LayoutDoc}>
        <div className={`${styles.pillar} ${styles.left}`}>
          <Sidebar
            pages={pages}
            mode={mode}
            cycleMode={cycleMode}
            animate={animations}
          />
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
