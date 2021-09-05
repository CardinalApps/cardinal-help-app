import Link from 'next/link'
import styles from './Breadcrumbs.module.scss'

export default function H2({ path, sep = '>' }) {
  return (
    <nav className={styles.Breadcrumbs}>
      {path.map((part, index) => {
        return (
          <>
            <span className={styles.part}>
              <Link href="#">
                <a>{part}</a>
              </Link>
            </span>
            {index < path.length - 1 &&
              <span className={styles.sep}>{sep}</span>
            }
          </>
        )
      })}
    </nav>
  )
}
