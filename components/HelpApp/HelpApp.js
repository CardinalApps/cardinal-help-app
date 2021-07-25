import { useState } from 'react'
import Sidebar from  '../Sidebar/Sidebar'
import { i18n } from '../../i18n/'
import styles from './HelpApp.module.scss'

export default function HelpApp(props) {
  const [theme, setTheme] = useState('dark')

  return (
    <div id="HelpApp" theme={theme} className={styles.HelpApp}>
      <Sidebar />
      {props.children}
    </div>
  )
}
