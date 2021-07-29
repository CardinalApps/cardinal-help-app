import MegaMenuSection from '../MegaMenuSection/MegaMenuSection'
import styles from './MegaMenu.module.scss'

/**
 * The PageView component contains the contents of a single page in `/pages`.
 * Each Next.js page uses this as its top level component, and its purpose is to
 * define the <head> contents and the main content of the page.
 * 
 * @param {Array} pages - An array of pages as returned by the /pages API.
 */
export default function MegaMenu({ pages }) {
  let topLevelRoutes = []

  for (const pageObj of pages) {
    if (!topLevelRoutes.includes(pageObj.parts[0])) {
      topLevelRoutes.push(pageObj.parts[0])
    }
  }

  return (
    <div className={styles.MegaMenu}>
      {topLevelRoutes.map((topLevel) => {
        return <MegaMenuSection key={topLevel} section={topLevel} />
      })}
    </div>
  )
}
