import { i18n } from '../../i18n/'
import styles from './Icon.module.scss'

export default function Icon({ classes, onClick }) {
  return (
    <div className={styles.Icon} onClick={onClick}>
      <i className={`${styles.i} ${classes}`}></i>
    </div>
  )
}
