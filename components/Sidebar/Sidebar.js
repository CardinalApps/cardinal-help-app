import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import MegaMenu from  '../MegaMenu/MegaMenu'
import { i18n } from '../../i18n/'
import styles from './Sidebar.module.scss'

/**
 * The Sidebar component.
 */
export default function Sidebar({ mode = 'reading', pages }) {
  const [viewMode, setViewMode] = useState('expanded')

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
    <animated.div className={styles.Sidebar} data-mode={mode}>
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
          >
            <animated.i 
              className="fas fa-th" 
              onClick={() => {setViewMode(mode === 'expanded' ? 'reading' : 'expanded')}} 
            />
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
