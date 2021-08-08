import styles from './Button.module.scss'

export default function Button({ onClick, children }) {
  return (
    <button
      className={styles.Button}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
