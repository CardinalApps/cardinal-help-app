import PageLinkBlock from '../PageLinkBlock/PageLinkBlock'
import MegaMenuSection from '../MegaMenuSection/MegaMenuSection'
import styles from './MegaMenu.module.scss'
import { i18n } from '../../i18n/'

/**
 * The PageView component contains the contents of a single page in `/pages`.
 * Each Next.js page uses this as its top level component, and its purpose is to
 * define the <head> contents and the main content of the page.
 * 
 * @param {Array} pages - An array of pages as returned by the /pages API.
 */
export default function MegaMenu({ pages }) {
  return (
    <div className={styles.MegaMenu}>

      {/* Each level 1 route gets its own section */}
      {pages.map((topLevelRoute) => {
        if (topLevelRoute.level !== 1) return
        return (
          <MegaMenuSection 
            title={i18n(topLevelRoute.titleI18nKey)}
            icon={topLevelRoute.icon}
            iconType={topLevelRoute.iconType}
            key={topLevelRoute.route} 
          >
            {/* Add the link for the level 1 route */}
            <PageLinkBlock
              url={`${topLevelRoute.route}`}
            />

            {/* Add all the level 2+ routes that are children of the level 1 route */}
            {pages.map((secondLevelRoute) => {
              if (secondLevelRoute.level < 2 || secondLevelRoute.parts[0] !== topLevelRoute.parts[0]) return
              return (
                <PageLinkBlock
                  url={secondLevelRoute.route}
                  key={secondLevelRoute.route}
                />
              )
            })}
          </MegaMenuSection>
        )
      })}

    </div>
  )
}
