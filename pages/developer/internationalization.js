import Link from 'next/link'
import Icon from '../../components/Icon/Icon'
import Button from '../../components/Button/Button'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

export default function Page() {
  return (
    <div className="document">
      <header>
        <div className="cols">
          <div className="align-content-bottom">
            <Icon type="font" icon="fas fa-box-open" size="l" />
          </div>
          <div className="align-content-right align-center">
            <div className="meta">
             
            </div>
          </div>
        </div>
        <Breadcrumbs />
      </header>

      <div className="text">
        <h1>Using Cardinal in your Language</h1>
        <p>All Cardinal apps default to English. Once installed, you can change the language in the settings. There are currently 1.5 languages available: English, and an unfinished French translation (working on it).</p>

        <h2>Contributing Translations</h2>
        <p>Join us on <a href="https://discord.gg/WWXngggPp4" target="_blank">Discord</a> if you'd like to contribute translations to any Cardinal project, from the core apps to this website.</p>
      </div>
    </div>
  )
}
