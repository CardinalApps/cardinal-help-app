import axios from 'axios'
import React from 'react'
import H2 from '../H2/H2'
import DocumentLinkBlocks from '../DocumentLinkBlocks/DocumentLinkBlocks'
import { i18n } from '../../i18n/'
import styles from './MegaMenuSection.module.scss'

export default function MegaMenuSection({ section }) {
  let pages = axios('/api/pages').then((aa) => {
    console.log(aa)
  })

  switch (section) {
    case 'cardinal-server':
      return (
        <div className={styles.MegaMenuSection}>
          <H2 image="/icons/logo-server.svg" text={i18n('help.section.server.title')} />
          <DocumentLinkBlocks
            links={[
              '/cardinal-server',
              '/cardinal-server/setup',
              '/cardinal-server/docker',
              '/cardinal-server/file-indexing',
              '/cardinal-server/monitoring-connected-devices',
            ]}
          />
        </div>
      )

    case 'cardinal-music':
      return (
        <div className={styles.MegaMenuSection}>
          <H2 image="/icons/logo-server.svg" text={i18n('help.section.music.title')} />
          <DocumentLinkBlocks
            links={[
              '/cardinal-music',
              '/cardinal-music/setup',
              '/cardinal-music/music-exploration',
              '/cardinal-music/browsing',
              '/cardinal-music/playlists',
              '/cardinal-music/genres',
              '/cardinal-music/accessibility',
              '/cardinal-music/internationalization',
            ]}
          />
        </div>
      )

    case 'general':
      return (
        <div className={styles.MegaMenuSection}>
          <H2 image="/icons/logo-server.svg" text={i18n('help.section.general.title')} />
          <DocumentLinkBlocks
            links={[
              '/general/themes',
              '/general/updating',
              '/general/web-apps',
              '/general/mobile-apps',
            ]}
          />
        </div>
      )

    case 'privacy':
      return (
        <div className={styles.MegaMenuSection}>
          <H2 image="/icons/logo-server.svg" text={i18n('help.section.privacy.title')} />
          <DocumentLinkBlocks
            links={[
              '/privacy/philosophy',
              '/privacy/terms-and-conditions',
              '/privacy/privacy-policy',
            ]}
          />
        </div>
      )

    case 'developer':
      return (
        <div className={styles.MegaMenuSection}>
          <H2 icon="fas fa-code" text={i18n('help.section.developer.title')} />
          <DocumentLinkBlocks
            links={[
              '/developer/plugins',
              '/developer/plugins/callback-plugins',
              '/developer/plugins/component-plugins',
              '/developer/plugins/waveform-plugins',
              '/developer/plugins/visualizer-plugins',
            ]}
          />
        </div>
      )

    default:
      return <></>
  }
}
