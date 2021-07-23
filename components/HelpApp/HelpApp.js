import Head from 'next/head'
import { useState } from 'react'
import styles from './HelpApp.module.scss'

export default function HelpApp(props) {
  const [theme, setTheme] = useState('dark')

  return (
    <div className={styles.HelpApp} theme={theme}>
      <Head>
        <title>Cardinal Help</title>
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>

      {props.children}
    </div>
  )
}