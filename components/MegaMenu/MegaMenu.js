import MegaMenuSection from '../MegaMenuSection/MegaMenuSection'
import styles from './MegaMenu.module.scss'

/**
 * The PageView component contains the contents of a single page in `/pages`.
 * Each Next.js page uses this as its top level component, and its purpose is to
 * define the <head> contents and the main content of the page.
 */
export default function MegaMenu({ view }) {
  return (
    <div className={styles.MegaMenu}>
      <MegaMenuSection section="developer" />
    </div>
  )
}
