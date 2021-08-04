import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import MegaMenu from  '../MegaMenu/MegaMenu'
import Icon from  '../Icon/Icon'
import { i18n } from '../../i18n/'
import styles from './Sidebar.module.scss'

/**
 * The Sidebar component.
 */
export default function Sidebar({ appLayout, pages }) {
  const [mode, setMode] = useState('expanded')

  useEffect(() => {
    if (appLayout === 'full_menu') {
      setMode('expanded')
    } else if (appLayout === 'paper') {
      setMode('reading')
    }
  }, [appLayout])

  const springEasing = function quadInOut(t) {
    return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
  }

  const percentToPx = (percent) => {

  }

  const sidebarSpring = useSpring({
    width: mode === 'expanded' ? '100%' : '10%',
    config: {
      duration: 400,
      easing: springEasing
    }}
  )

  const expansionContentSpring = useSpring({
    opacity: mode === 'expanded' ? 1 : 0,
    transform: mode === 'expanded' ? 'scale(1)' : 'scale(0.93)',
    delay: mode === 'expanded' ? 200 : 0,
    config: {
      duration: 150,
      easing: springEasing
    }}
  )

  return (
    <animated.div className={styles.Sidebar} style={sidebarSpring}>
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

          <div className={styles.icons}>
            <Icon classes="fas fa-th" onClick={() => {setMode(mode === 'expanded' ? 'reading' : 'expanded')}} />
          </div>
        </div>

        <animated.div className={styles.expansion} style={expansionContentSpring}>
          <div className={styles.mainTitle}>
            <h1>{i18n('sidebar.hero.title')}</h1>
          </div>

          <MegaMenu pages={pages} />
        </animated.div>

      </div>
    </animated.div>
  )
}
