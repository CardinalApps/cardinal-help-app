import Link from 'next/link'
import { useState } from 'react'
import { useSpring, useTrail, animated, config } from 'react-spring'
import useMeasure from 'react-use-measure'
import { sample, random } from 'lodash'
import MegaMenu from  '../MegaMenu/MegaMenu'
import { i18n } from '../../i18n/'
import styles from './Sidebar.module.scss'

/**
 * The Sidebar component can exist in two modes:
 *
 * - `reading`: When the sidebar is collapsed and floating beside the main
 *   content.
 * - `expanded`: When the sidebar is open, showing the mega menu.
 *
 * The sidebar uses a few springs to handle the animation of the mode change.
 */
export default function Sidebar({ pages, page, mode, cycleMode, animate }) {
  const isSSR = typeof window === 'undefined'
  const isHome = page.route === '/'
  const [hoveringMenuItem, setHoveringMenuItem] = useState(false);
  const [ref, bounds] = useMeasure()

  /**
   * What the user sees as the "sidebar" is actually the .inner div. The inner
   * div uses position:fixed, so that in `expanded` mode it can easily escape
   * the Sidebar parent element and use up the whole viewport.
   *
   * Since springs cannot handle going from position:fixed to position:absolute,
   * this function calculates the values that we need for .inner to "collapse"
   * back into the Sidebar without changing from position:fixed.
   *
   * Calculating the position is made easy by just using the parent Sidebar
   * position.
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
    config: animate ? config.default : { duration: 0 }
  })

  /**
   * Spring for .controlBar.
   */
  const controlBarSpring = useSpring({
    width: mode === 'reading' ? 80 : 120,
    config: animate ? config.default : { duration: 0 }
  })

  /**
   * Spring for hovering on the menu item.
   */
  const menuHoverSpring = useSpring({
    transform: hoveringMenuItem ? `rotate(${sample(['', '-'])}${random(2, 15)}deg)` : 'rotate(0deg)',
    config: { mass: 1, tension: 320, friction: 4 }
  })

  /**
   * Toggles the visibility of a few items that should not be seen when on the
   * home page.
   */
  const hideOnHomePageSpring = useSpring({
    opacity: isHome ? 0 : 1,
    config: animate ? config.default : { duration: 0 }
  })

  /**
   * Spring for permanent items wrapper.
   */
  const permItemsParentSpring = useSpring({
    transform: isHome ? 'translateY(-70px)' : 'translateY(0px)',
    config: animate ? config.default : { duration: 0 }
  })

  /**
   * Spring for social icons.
   */
  const socialIconsSpring = useSpring({
    fontSize: mode === 'reading' ? 26 : 42,
    config: animate ? config.default : { duration: 0 }
  })

  /**
   * Create a trail of springs for the items in the .controlBar.
   */
  const controlBarItemsTrail = useTrail(3, {
    top: mode === 'reading' ? '0px' : '20px',
    left: mode === 'reading' ? '0px' : '10px',
    right: mode === 'reading' ? '0px' : '10px',
    bottom: mode === 'reading' ? '0px' : '20px',
    config: animate ? { mass: 3, tension: 220, friction: 15 } : { duration: 0 }
  })

  /**
   * Spring for the content of the sidebar that is only visible when the sidebar
   * is expanded.
   */
  const expansionContentSpring = useSpring({
    opacity: mode === 'reading' ? 0 : 1,
    transform: mode === 'reading' ? 'scale(0.93)' : 'scale(1)',
    delay: mode === 'reading' || !animate ? 0 : 300,
    config: animate ? config.default : { duration: 0 }
  })

  return (
    <div className={styles.Sidebar} ref={ref}>
      <animated.div 
        className={`${styles.inner}`}
        style={innerSpring}>

        <animated.div
          className={styles.controlBar}
          style={controlBarSpring}
        >
          <animated.header
            className={styles.header}
            style={controlBarItemsTrail[0]}
          >
            <div className={styles.logo}>
              <Link href="/">
                <a>
                  <img src="/bird.svg" id="logo" alt={i18n('header.logo.title')} />
                </a>
              </Link>
            </div>
          </animated.header>

          {/* Hide these items on the home page */}
          <animated.div
            className={`${isHome ? styles.homeItemsHidden : ''} ${styles.notOnHomeItems}`}
            style={controlBarItemsTrail[1]}
          >
            {/* Menu button */}
            <animated.div
              style={menuHoverSpring}
              onMouseEnter={() => setHoveringMenuItem(true) }
              onMouseLeave={() => setHoveringMenuItem(false) }
            >
              <animated.button
                className={styles.icon}
                style={hideOnHomePageSpring}
                type="button"
                onClick={cycleMode}
              >
                  <animated.i className="fas fa-th" />
              </animated.button>
            </animated.div>
          </animated.div>

          {/* Items that are always shown */}
          <animated.div
            className={styles.permItems}
            style={controlBarItemsTrail[2]}
          >
            <animated.div style={permItemsParentSpring}>
              <a href="https://discord.gg/WWXngggPp4" target="_blank" rel="nofollow">
                <animated.i className="fab fa-discord" style={socialIconsSpring}></animated.i>
              </a>
            </animated.div>
          </animated.div>
        </animated.div>

        <animated.div
          className={styles.expansion}
          style={expansionContentSpring}
        >
          <div className={styles.mainTitle}>
            <h1>{i18n('sidebar.hero.title')}</h1>
          </div>

          <MegaMenu pages={pages} />
        </animated.div>

      </animated.div>
    </div>
  )
}
