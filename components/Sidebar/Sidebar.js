import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
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

  function quadInOut(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
  }

  /**
   * Spring for the .inner element.
   */
  const innerSpring = useSpring({
    top: mode === 'reading' ? positionInSidebar('top') : '25px',
    left: mode === 'reading' ? positionInSidebar('left') : '25px',
    right: mode === 'reading' ? positionInSidebar('right') : '25px',
    bottom: mode === 'reading' ? positionInSidebar('bottom') : '25px',
    config: {
      duration: 0,
      //easing: quadInOut
    }}
  )

  // const expansionContentSpring = useSpring({
  //   opacity: mode === 'expanded' ? 1 : 0,
  //   transform: mode === 'expanded' ? 'scale(1)' : 'scale(0.93)',
  //   delay: mode === 'expanded' ? 200 : 0,
  //   config: {
  //     duration: 150,
  //     easing: quadInOut
  //   }}
  // )

  return (
    <div className={styles.Sidebar} data-mode={mode} ref={ref}>
      <animated.div 
        className={`${styles.inner}`}
        style={innerSpring}>

        <div className={styles.controlBar}>
          <header className={styles.header}>
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  <img src="/bird.svg" id="logo" alt={i18n('header.logo.title')} />
                </a>
              </Link>
            </div>
          </header>

          <button 
            className={styles.icon} 
            type="button"
            onClick={cycleMode}
          >
            <animated.i className="fas fa-th" />
          </button>
        </div>

        <animated.div className={styles.expansion}>
          <div className={styles.mainTitle}>
            <h1>{i18n('sidebar.hero.title')}</h1>
          </div>

          <MegaMenu pages={pages} />
        </animated.div>

      </animated.div>
    </div>
  )
}
