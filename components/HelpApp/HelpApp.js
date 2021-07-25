import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
//import PrincipleHeader from  '../PrincipleHeader/PrincipleHeader'
import { i18n } from '../../i18n/'
import styles from './HelpApp.module.scss'

export default function HelpApp(props) {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={styles.HelpApp} theme={theme}>
      <Head>
        <title>{i18n('seo.title.home')}</title>
        <meta name="description" content={i18n('seo.desc.home')} />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <div className="wrap">
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img src="/bird.svg" id="logo" alt={i18n('header.logo.title')} />
            </a>
          </Link>
        </div>

        {props.children}
      </div>
    </div>
  )
}
