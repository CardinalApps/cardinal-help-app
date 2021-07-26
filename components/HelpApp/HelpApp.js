import { useState } from 'react'
import Sidebar from  '../Sidebar/Sidebar'
import styles from './HelpApp.module.scss'

export default function HelpApp(props) {
  const [theme, setTheme] = useState('dark')

  return (
    <div id="HelpApp" data-theme={theme} className={styles.HelpApp}>
      <div className={styles.sidebarLayer}>
        <Sidebar />
      </div>
      
      {props.children}
    </div>
  )
}
