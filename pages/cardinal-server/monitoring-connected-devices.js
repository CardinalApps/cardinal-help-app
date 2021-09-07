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
            <Icon type="image" icon="/icons/logo-server.svg" size="l" />
          </div>
          <div className="align-content-right align-center">
            <div className="meta">
             
            </div>
          </div>
        </div>
        <Breadcrumbs path={['Cardinal Server', 'Monitoring Connected Devices']} />
      </header>

      <div className="text">
        <h1>Monitoring Connected Devices</h1>
        <p>Cardial Server comes with the ability to monitor the devices that are connected to it.</p>

        <h2>Monitoring with the Desktop App</h2>
        <p>The Cardinal Server desktop app for macOS, Windows, and Linux provides you with an interface for seeing which apps are connected.</p>
        <img src="/screenshots/server-devices.png" className="med center" alt="Screenshot of the Cardinal Server UI showing connected devices" title="Connected devices" />
        
        <h3>Connected Cardinal Music Apps</h3>
        <p>For connected Cardinal Music client apps, you'll be able to see the currently playing song, it's basic metadata, and the playback method. You'll also be able to pause and resume it, as well as move back and forth through the currently playing queue.</p>
      </div>
    </div>
  )
}
