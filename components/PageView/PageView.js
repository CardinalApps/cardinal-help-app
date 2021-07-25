import styles from './PageView.module.scss'

export default function PageView(props) {
  return (
    <main className={styles.PageView}>
      {props.children}
    </main>
  )
}
