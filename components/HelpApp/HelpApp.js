import styles from './HelpApp.module.scss'

export default function HelpApp({ theme, children }) {
  return (
    <div id="HelpApp" className={styles.HelpApp} data-theme={theme}>
      {children}
    </div>
  )
}
