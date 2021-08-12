import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import useMeasure from 'react-use-measure'
import MegaMenu from  '../MegaMenu/MegaMenu'
import { i18n } from '../../i18n/'
import styles from './Sidebar.module.scss'

/**
 * The Sidebar component.
 */
export default function Sidebar({ setModeTo, pages }) {
  const modes = ['expanded', 'reading']
  const [mode, setMode] = useState('expanded')
  const [ref, bounds] = useMeasure()

  console.log(bounds)

  // useEffect(() => {
  //   if (mode === 'expanded') {
  //     setViewMode('expanded')
  //   } else if (mode === 'paper') {
  //     setViewMode('reading')
  //   }
  // }, [mode])

  const springEasing = function quadInOut(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
  }

  const percentToPx = (percent) => {

  }

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

  // const sidebarSpring = useSpring({
  //   width: mode === 'expanded' ? '100%' : '10%',
  //   config: {
  //     duration: 400,
  //     easing: springEasing
  //   }}
  // )

  // const expansionContentSpring = useSpring({
  //   opacity: mode === 'expanded' ? 1 : 0,
  //   transform: mode === 'expanded' ? 'scale(1)' : 'scale(0.93)',
  //   delay: mode === 'expanded' ? 200 : 0,
  //   config: {
  //     duration: 150,
  //     easing: springEasing
  //   }}
  // )

  return (
    <animated.div className={styles.Sidebar} data-mode={mode} ref={ref}>
      <div className={styles.inner}>

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

      </div>
    </animated.div>
  )
}
