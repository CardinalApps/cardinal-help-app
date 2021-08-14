import Head from 'next/head'
import { useState, useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import styles from './LayoutDoc.module.scss'

let sidebarShouldAnimate = true

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
  pageWantsSidebarMode,
  children
}) {
  const modes = ['expanded', 'reading']
  const [mode, setMode] = useState('expanded')
  const [theme, setTheme] = useState('dark')
  const [isFirstRender, setIsFirstRender] = useState(true)

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
  
  /**
   * Allow each page to request a sidebar mode that will only be applied on the
   * first render.
   */
  useEffect(() => {
    if (isFirstRender && pageWantsSidebarMode !== mode) {
      setIsFirstRender(false)
      sidebarShouldAnimate = false
      setMode(pageWantsSidebarMode)
    }

    // Animations should always run, except on the first render
    if (!isFirstRender) {
      sidebarShouldAnimate = true
    }
  })

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
            animate={sidebarShouldAnimate}
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
