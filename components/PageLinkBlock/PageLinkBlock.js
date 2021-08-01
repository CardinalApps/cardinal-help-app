import Link from 'next/link'
import styles from './PageLinkBlock.module.scss'

export default function PageLinkBlock({ title, icon, iconType, url }) {
  switch (iconType) {
    case 'image':
      icon = <img src={icon} />
      break

    case 'font':
      icon = <i className={icon} />
      break

    default:
      icon = <></>
  }

  return (
    <div className={styles.PageLinkBlock}>
      <div className={styles.icon}>
        {icon}
      </div>

      <Link href={url}>
        <a>
          <span>{title}</span>
        </a>
      </Link>
    </div>
  )
}
