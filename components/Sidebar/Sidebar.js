import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSpring, useTrail, animated, config } from 'react-spring'
import useMeasure from 'react-use-measure'
import MegaMenu from  '../MegaMenu/MegaMenu'
import { i18n } from '../../i18n/'
import styles from './Sidebar.module.scss'

/**
 * The Sidebar component. Defaults to 'expanded' mode, which is also the home
 * page of the app.
 */
export default function Sidebar({ setModeTo, pages }) {
  // `window` is not defined when building server side, some code should not run
  const isSSR = typeof window === 'undefined'
  const modes = ['expanded', 'reading']
  const [mode, setMode] = useState('expanded')
  const [ref, bounds] = useMeasure()

  // useEffect(() => {
  //   if (mode === 'expanded') {
  //     setViewMode('expanded')
  //   } else if (mode === 'paper') {
  //     setViewMode('reading')
  //   }
  // }, [mode])

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
   * Calcualates the position of the inner div, which uses position:fixed to
   * take up the full screen when in "expanded" mode. When it needs to shrink
   * back into the sidebar, this function can be used to calculate the position
   * it needs to be in.
   *
   * @param {string} side - `top`', `left`, `right`, `bottom`
   * @returns {string} - Returns a string like '100px'.
   */
  const positionInSidebar = (side) => {
    if (isSSR) return '0px'

    let px

    switch (side) {
      case 'top':
        px = bounds.top
        break
      case 'left':
        px = bounds.left
        break
      case 'right':
        px = window.innerWidth - bounds.right 
        break
      case 'bottom':
        px = window.innerHeight - bounds.bottom 
        break
    }

    return `${Math.round(px)}px`
  }

  /**
   * Spring for .inner.
   */
  const innerSpring = useSpring({
    top: mode === 'reading' ? positionInSidebar('top') : '25px',
    left: mode === 'reading' ? positionInSidebar('left') : '25px',
    right: mode === 'reading' ? positionInSidebar('right') : '25px',
    bottom: mode === 'reading' ? positionInSidebar('bottom') : '25px',
    config: config.default
  })

  /**
   * Create a trail of springs for the items in the .controlBar.
   */
  const controlBarItemsTrail = useTrail(2, {
    top: mode === 'reading' ? '0px' : '20px',
    left: mode === 'reading' ? '0px' : '10px',
    right: mode === 'reading' ? '0px' : '10px',
    bottom: mode === 'reading' ? '0px' : '20px',
    config: { mass: 4, tension: 400, friction: 20 }
  })

  /**
   * Spring for the content of the sidebar when it's expanded.
   */
  const expansionContentSpring = useSpring({
    opacity: mode === 'reading' ? 0 : 1,
    transform: mode === 'reading' ? 'scale(0.93)' : 'scale(1)',
    delay: mode === 'reading' ? 0 : 200,
    config: config.wobbly
  })

  return (
    <div className={styles.Sidebar} data-mode={mode} ref={ref}>
      <animated.div 
        className={`${styles.inner}`}
        style={innerSpring}>

        <animated.div className={styles.controlBar}>
          <header className={styles.header}>
            <animated.div className={styles.logo} style={controlBarItemsTrail[0]}>
              <Link href="/">
                <a>
                  <img src="/bird.svg" id="logo" alt={i18n('header.logo.title')} />
                </a>
              </Link>
            </animated.div>
          </header>

          <animated.button 
            className={styles.icon} 
            style={controlBarItemsTrail[1]}
            type="button"
            onClick={cycleMode}
          >
            <animated.i className="fas fa-th" />
          </animated.button>
        </animated.div>

        <animated.div className={styles.expansion} style={expansionContentSpring}>
          <div className={styles.mainTitle}>
            <h1>{i18n('sidebar.hero.title')}</h1>
          </div>

          <MegaMenu pages={pages} />
        </animated.div>

      </animated.div>
    </div>
  )
}
