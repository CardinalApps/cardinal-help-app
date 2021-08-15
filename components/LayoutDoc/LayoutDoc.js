import Head from 'next/head'
import { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import styles from './LayoutDoc.module.scss'

// The app will start with animations disabled, so that the initial render feels
// static and fast.
let animations = false
let defaultPageMode

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
  sidebarModeConfig,
  children
}) {
  // All possible modes that the sidebar cycles through
  const modes = ['expanded', 'reading']

  // mode is the current sidebar mode, controlled by the user, possibly
  // different from the default pageMode
  const [mode, setMode] = useState(modes[0])

  // Color theme, user controlled
  const [theme, setTheme] = useState('dark')
  
  if (sidebarModeConfig !== defaultPageMode) {
    setMode(sidebarModeConfig)
    defaultPageMode = sidebarModeConfig
  }

  /**
   * Enable animations after the initial render.
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

    // cycle back to the front
    if (nextIndex > modes.length - 1) {
      setMode(modes[0])
    }
    // go to next possible mode 
    else {
      setMode(modes[nextIndex])
    }
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
