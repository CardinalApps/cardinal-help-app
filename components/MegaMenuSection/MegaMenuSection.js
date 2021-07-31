import React from 'react'
import H2 from '../H2/H2'
import styles from './MegaMenuSection.module.scss'

export default function MegaMenuSection({ title, icon, iconType, children }) {
  return (
    <div className={styles.MegaMenuSection}>
      <H2 
        text={title}
        icon={icon}
        iconType={iconType}
      />
      <nav className={styles.menuItems}>
        {children}
      </nav>
    </div>
  )
}
