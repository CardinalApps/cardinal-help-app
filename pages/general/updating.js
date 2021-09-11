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
        <h1>Updating the Apps</h1>
        <p>Many of the apps can be automatically updated, making it easy to stay on the latest version. Whether you update manually or automatically, your data will be preserved.</p>

        <h2>Updating on macOS</h2>
        <p>All Cardinal apps for macOS can be updated using the auto update feature built into the app.</p>

        <h2>Updating on Windows</h2>
        <p>All Cardinal apps for Windows can be updated using the auto update feature built into the app.</p>

        <h2>Updating on Linux</h2>
        <p>Only the <code>.AppImage</code> format supports auto updating. If you use the <code>.deb</code> or <code>.rpm</code> releases, you will need to update manually.</p>
      </div>
    </div>
  )
}
