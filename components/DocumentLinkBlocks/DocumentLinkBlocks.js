import Link from 'next/link'
import styles from './DocumentLinkBlocks.module.scss'

export default function DocumentLinkBlocks({ view }) {
  return (
    <div className={styles.DocumentLinkBlock}>
      <Link href="/developer/plugins/component-plugins">
        <a>Go to dev doc</a>
      </Link>
    </div>
  )
}
