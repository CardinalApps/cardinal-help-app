import { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from  '../Sidebar/Sidebar'
import styles from './HelpApp.module.scss'

export default function HelpApp(props) {
  const [theme, setTheme] = useState('dark')
  const [pages, setPages] = useState([])
  
  // Get page structure from API and add them to the state
  useEffect(async () => {
    let pagesReq = await axios('/api/pages')
    setPages(pagesReq.data)
  }, [])

  console.log('Rendering HelpApp with pages', pages)

  return (
    <div id="HelpApp" data-theme={theme} className={styles.HelpApp}>
      <div className={styles.sidebarLayer}>
        <Sidebar pages={pages} />
      </div>

      {props.children}
    </div>
  )
}
