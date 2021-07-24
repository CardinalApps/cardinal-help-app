import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { getI18nString } from '../../i18n/'
import styles from './HelpApp.module.scss'

export default function HelpApp(props) {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={styles.HelpApp} theme={theme}>
      <Head>
        <title>Cardinal Help</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      <header id="principle">
        <Link href="/">
          <a></a>
        </Link>
      </header>

      {props.children}
    </div>
  )
}