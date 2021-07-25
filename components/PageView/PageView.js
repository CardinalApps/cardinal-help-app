import Head from 'next/head'
import { i18n } from '../../i18n/'
import styles from './PageView.module.scss'

/**
 * The PageView component contains the contents of a single page in `/pages`.
 * Each Next.js page uses this as its top level component, and its purpose is to
 * define the <head> contents and the main content of the page.
 */
export default function PageView({
  seoTitle = 'Cardinal Apps',
  seoDesc = 'Help page for Cardinal Apps',
  favicon = '/favicon/favicon.ico',
  children
}) {
  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <link rel="icon" href={favicon} />
      </Head>

      <main id="PageView" className={styles.PageView}>
        {children}
      </main>
    </>
  )
}
