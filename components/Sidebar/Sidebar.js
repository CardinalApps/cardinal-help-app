import Link from 'next/link'
import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import MegaMenu from  '../MegaMenu/MegaMenu'
import Icon from  '../Icon/Icon'
import { i18n } from '../../i18n/'
import styles from './Sidebar.module.scss'

/**
 * The Sidebar component.
 */
export default function Sidebar({ view }) {
  const [mode, setMode] = useState('expanded')
  const mainTitleSpring = useSpring(
    {
      opacity: mode === 'expanded' ? 1 : 0,
      transform: mode === 'expanded' ? 'translateX(0px)' : 'translateX(-20px)',
      config: {
        duration: 400,
        easing: function quadInOut(t) {
          return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2
        }
      }
    }
  )

  /**
   * Switches the mode between "expanded" and "reading".
   */
  function toggleMode() {
    switch (mode) {
      case 'expanded':
        setMode('reading')
        break

      case 'reading':
        setMode('expanded')
        break
    }
  }

  return (
    <div className={styles.Sidebar} data-mode={mode}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img src="/bird.svg" id="logo" alt={i18n('header.logo.title')} />
            </a>
          </Link>
        </div>

        <div className={styles.mainTitle}>
          <animated.div style={mainTitleSpring}>
            <h1>{i18n('sidebar.hero.title')}</h1>
          </animated.div>
        </div>
      </header>

      <section className={styles.icons}>
        <Icon classes="fas fa-th" onClick={toggleMode} />
      </section>

      <MegaMenu />
    </div>
  )
}
