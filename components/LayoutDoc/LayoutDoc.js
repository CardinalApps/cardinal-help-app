import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useSpring, config, animated } from 'react-spring'
import Sidebar from '../Sidebar/Sidebar'
import styles from './LayoutDoc.module.scss'

// The app will initally render with animations disabled, so that the first load
// feels static and fast.
let animations = false

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
  const modes = ['expanded', 'reading']
  const [mode, setMode] = useState()
  const [theme, setTheme] = useState('dark')
  const [layout, setLayout] = useState('book')
  const router = useRouter()

  /**
   * Helper function that checks if the sidebar mode set in the page config
   * matches the currently set sidebar mode. If it doesn't, the sidebar mode
   * will be changed, triggering an animation.
   * 
   * @param {string} pageSidebarMode - The mode of the upcoming page.
   */
  const maybeSetPageSidebarMode = (pageSidebarMode) => {
    if (pageSidebarMode !== mode) {
      setMode(pageSidebarMode)
    }
  }

  /**
   * Whenever a new page is loaded, maybe switch to the mode that the page
   * wants. We only want to do this once per route.
   */
  useEffect(() => {
    const routeChangeComplete = (url, shallow) => {
      const newPage = pages.filter((page) => page.route === url)[0]
      maybeSetPageSidebarMode(newPage.config.sidebarMode)
    }

    router.events.on('routeChangeComplete', routeChangeComplete)
    return () => router.events.off('routeChangeComplete', routeChangeComplete)
  }, [])

  /**
   * Enable animations after the inital render of the Layout.
   */
  useEffect(() => {
    maybeSetPageSidebarMode(page.config.sidebarMode)
    setTimeout(() => {
      console.log('Initial load has rendered - now enabling animations')
      animations = true
    }, 0)
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

  /**
   * Spring for the main content in the center pillar.
   */
  const mainContentSpring = useSpring({
    width: layout === 'book' ? 800 : window.innerWidth - 100,
    margin: layout === 'book' ? 25 : 0,
    paddingTop: layout === 'book' ? 40 : 20,
    paddingLeft: layout === 'book' ? 50 : 40,
    paddingRight: layout === 'book' ? 50 : 0,
    paddingBottom: layout === 'book' ? 40 : 20,
    boxShadow: layout === 'book' ? '0 0 9px 2px #1b1b1b' : '0 0 0px 0px #1b1b1b',
    borderRadius: layout === 'book' ? 40 : 0,
    background: layout === 'book' ? '#3d3d3d' : '#272727',
    config: animations ? config.default : { duration: 0 }
  })

  /**
   * Spring for the right pillar.
   */
  const layoutRightPillarSpring = useSpring({
    minWidth: layout === 'book' ? 100 : 0,
    config: { duration: 0 }
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
            page={page}
            mode={mode}
            cycleMode={cycleMode}
            layout={layout}
            setLayout={setLayout}
            animate={animations}
          />
        </div>

        <div className={`${styles.pillar} ${styles.center}`}>
          <animated.div
            className={styles.pageContent}
            style={mainContentSpring}
          >
            {children}
          </animated.div>
        </div>

        <animated.div
          className={`${styles.pillar} ${styles.right}`}
          style={layoutRightPillarSpring}
        >
        </animated.div>
      </div>
    </div>
  )
}
