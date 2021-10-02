// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchPages } from '../../store/slices/pagesSlice'
import styles from './HelpApp.module.scss'

export default function HelpApp({ children }) {
  // const dispatch = useDispatch()
  // const pages = useSelector((store) => store.pages)

  // useEffect(() => {
  //   if (!pages.length) {
  //     console.log('Hydrating Redux')
  //     dispatch(fetchPages())
  //   }
  // })

  return (
    <div id="HelpApp" className={styles.HelpApp}>
      {children}
    </div>
  )
}
