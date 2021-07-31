import Link from 'next/link'
import styles from './PageLinkBlock.module.scss'

export default function PageLinkBlock({ url }) {
  return (
    <div className={styles.PageLinkBlock}>
      <Link href={url}>
        <a></a>
      </Link>
    </div>
  )
}
