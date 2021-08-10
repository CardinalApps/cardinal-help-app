import styles from './HelpApp.module.scss'

export default function HelpApp({ children }) {
  return (
    <div id="HelpApp" className={styles.HelpApp}>
      {children}
    </div>
  )
}
